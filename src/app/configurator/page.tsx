"use client";

import { useState, useRef, useEffect } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

/* ── types ── */
type SiteType = "business" | "store" | "portfolio" | "landing" | "unsure";
type StyleType = "minimal" | "bold" | "classic" | "warm";
type ContactMethod = "whatsapp" | "phone" | "email";

/* ── data ── */
const siteTypes: { id: SiteType; icon: string; title: string; desc: string }[] = [
  { id: "business", icon: "🏢", title: "אתר עסקי", desc: "אתר תדמית מקצועי שמביא לקוחות" },
  { id: "store", icon: "🛒", title: "חנות אונליין", desc: "מוכרים מוצרים באינטרנט" },
  { id: "portfolio", icon: "🎨", title: "אתר תיק עבודות", desc: "מציגים את העבודות שלכם" },
  { id: "landing", icon: "🚀", title: "דף נחיתה", desc: "עמוד ממוקד המרות" },
  { id: "unsure", icon: "💬", title: "עוד לא בטוח/ה", desc: "נבין ביחד מה מתאים" },
];

const styleTypes: { id: StyleType; title: string; gradient: string }[] = [
  { id: "minimal", title: "נקי ומינימליסטי", gradient: "linear-gradient(135deg, #fafafa 0%, #e5e5e5 50%, #d4d4d4 100%)" },
  { id: "bold", title: "נועז ומודרני", gradient: "linear-gradient(135deg, #0f0f23 0%, #895af6 50%, #6366f1 100%)" },
  { id: "classic", title: "קלאסי ומקצועי", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" },
  { id: "warm", title: "חם ומזמין", gradient: "linear-gradient(135deg, #fef3c7 0%, #f59e0b 50%, #d97706 100%)" },
];

const extras = [
  { id: "seo", label: "קידום אורגני (SEO)", desc: "כלול בכל חבילה", locked: true },
  { id: "logo", label: "עיצוב לוגו", desc: "לוגו מקצועי למותג שלכם" },
  { id: "copy", label: "כתיבת תוכן", desc: "תוכן שיווקי מותאם לעסק" },
  { id: "email", label: "הקמת שיווק במייל", desc: "רצפי מיילים אוטומטיים" },
  { id: "social", label: "הקמת רשתות חברתיות", desc: "פרופילים מקצועיים ברשתות" },
];

const tiers = [
  { name: "דף נחיתה", price: "690", desc: "עמוד ממוקד המרות לעסק שלכם", popular: false },
  { name: "אתר עסקי", price: "1,290", desc: "אתר מקצועי שמביא לקוחות", popular: true },
  { name: "חנות אונליין", price: "1,990", desc: "פתרון מלא למסחר אלקטרוני", popular: false },
];

const stepTitles = ["?מה אתם צריכים", "?איזה סגנון מדבר אליכם", "?משהו נוסף", "!בואו נדבר"];

export default function ConfiguratorPage() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [animating, setAnimating] = useState(false);

  /* step 1 */
  const [siteType, setSiteType] = useState<SiteType | null>(null);

  /* step 2 */
  const [style, setStyle] = useState<StyleType | null>(null);
  const [refUrls, setRefUrls] = useState(["", "", ""]);
  const [needDomain, setNeedDomain] = useState(false);
  const [businessName, setBusinessName] = useState("");

  /* step 3 */
  const [selectedExtras, setSelectedExtras] = useState<string[]>(["seo"]);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  /* step 4 */
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [bizDesc, setBizDesc] = useState("");
  const [contactMethod, setContactMethod] = useState<ContactMethod>("whatsapp");
  const [selectedTier, setSelectedTier] = useState("אתר עסקי");

  const [submitted, setSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /* UTM */
  const [utmSource, setUtmSource] = useState("");
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get("utm_source") || "");
  }, []);

  const goTo = (target: number) => {
    if (animating) return;
    setDirection(target > step ? "forward" : "back");
    setAnimating(true);
    setTimeout(() => {
      setStep(target);
      setAnimating(false);
      containerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 300);
  };

  const next = () => goTo(step + 1);
  const back = () => goTo(step - 1);

  const handleSiteTypeSelect = (id: SiteType) => {
    setSiteType(id);
    if (id === "unsure") {
      setTimeout(() => goTo(3), 200);
    } else {
      setTimeout(next, 200);
    }
  };

  const toggleExtra = (id: string) => {
    if (id === "seo") return;
    setSelectedExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    if (logoFile) {
      formData.set("logo-filename", logoFile.name);
    }
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  const canProceed = () => {
    if (step === 0) return siteType !== null;
    if (step === 1) return style !== null;
    if (step === 2) return true;
    if (step === 3) return name.trim() !== "" && phone.trim() !== "";
    return true;
  };

  if (submitted) {
    return (
      <main>
        <Nav locale="he" />
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
          <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
          <div className="glow-orb w-[500px] h-[500px] top-[20%] left-1/2 -translate-x-1/2" aria-hidden="true" />
          <div className="max-w-lg mx-auto px-6 text-center relative z-10">
            <div className="text-6xl mb-6">&#10003;</div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="text-gradient">!הבריף נשלח</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              נחזור אליכם תוך 24 שעות עם הצעה מסודרת. רוצים לדבר עכשיו?
            </p>
            <a
              href="https://wa.me/972559510042?text=%D7%94%D7%99%D7%99%2C%20%D7%A9%D7%9C%D7%97%D7%AA%D7%99%20%D7%91%D7%A8%D7%99%D7%A3%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-base inline-block font-semibold"
            >
              WhatsApp שלחו הודעה ב
            </a>
          </div>
        </section>
        <Footer locale="he" />
      </main>
    );
  }

  return (
    <main>
      <Nav locale="he" />

      <section className="relative min-h-[100dvh] pt-24 pb-20 overflow-hidden" ref={containerRef}>
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[400px] h-[400px] top-[5%] -right-[10%] opacity-40" aria-hidden="true" />

        <div className="max-w-3xl mx-auto px-6 relative z-10">

          {/* ── progress bar ── */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-3">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${
                      i <= step
                        ? "bg-brand text-white shadow-[0_0_20px_rgba(137,90,246,0.5)]"
                        : "bg-white/5 text-gray-600"
                    }`}
                    dir="ltr"
                    style={{ fontFamily: "Inter" }}
                  >
                    {i + 1}
                  </div>
                  {i < 3 && (
                    <div className="hidden sm:block w-16 md:w-24 lg:w-32 h-[2px] bg-white/5 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 right-0 bg-brand transition-all duration-700 ease-out"
                        style={{ width: i < step ? "100%" : "0%" }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              {stepTitles[step]}
            </h2>
          </div>

          {/* ── step container with slide animation ── */}
          <div className="relative overflow-hidden">
            <div
              className={`transition-all duration-300 ease-out ${
                animating
                  ? direction === "forward"
                    ? "opacity-0 -translate-x-8"
                    : "opacity-0 translate-x-8"
                  : "opacity-100 translate-x-0"
              }`}
            >

              {/* ═══ STEP 1: Site type ═══ */}
              {step === 0 && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {siteTypes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => handleSiteTypeSelect(t.id)}
                      className={`glass-card rounded-xl p-6 text-right transition-all duration-300 group cursor-pointer ${
                        siteType === t.id
                          ? "border-brand/50 bg-brand/10 shadow-[0_0_30px_rgba(137,90,246,0.2)]"
                          : "hover:border-white/15 hover:bg-white/[0.02]"
                      } ${t.id === "unsure" ? "sm:col-span-2" : ""}`}
                    >
                      <div className="text-3xl mb-3">{t.icon}</div>
                      <h3 className="text-lg font-bold mb-1 group-hover:text-brand-light transition-colors">
                        {t.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-light">{t.desc}</p>
                    </button>
                  ))}
                </div>
              )}

              {/* ═══ STEP 2: Style ═══ */}
              {step === 1 && (
                <div className="space-y-8">
                  <div className="grid grid-cols-2 gap-4">
                    {styleTypes.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => setStyle(s.id)}
                        className={`glass-card rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group ${
                          style === s.id
                            ? "border-brand/50 shadow-[0_0_30px_rgba(137,90,246,0.2)]"
                            : "hover:border-white/15"
                        }`}
                      >
                        <div
                          className="h-24 sm:h-32 w-full transition-transform duration-500 group-hover:scale-105"
                          style={{ background: s.gradient }}
                        />
                        <div className="p-4 text-right">
                          <h3 className="text-sm font-bold group-hover:text-brand-light transition-colors">
                            {s.title}
                          </h3>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="glass-card rounded-xl p-6 space-y-4">
                    <h3 className="text-base font-bold">אתרים שמדברים אליכם (אופציונלי)</h3>
                    <p className="text-sm text-gray-500 font-light">הדביקו עד 3 כתובות של אתרים שאתם אוהבים</p>
                    <div className="space-y-3">
                      {refUrls.map((url, i) => (
                        <input
                          key={i}
                          type="url"
                          dir="ltr"
                          placeholder={`https://example.com`}
                          value={url}
                          onChange={(e) => {
                            const updated = [...refUrls];
                            updated[i] = e.target.value;
                            setRefUrls(updated);
                          }}
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                          style={{ fontFamily: "Inter" }}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base font-bold">?צריכים דומיין</h3>
                      <button
                        onClick={() => setNeedDomain(!needDomain)}
                        className={`w-12 h-7 rounded-full relative transition-all duration-300 ${
                          needDomain ? "bg-brand" : "bg-white/10"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all duration-300 ${
                            needDomain ? "right-1" : "right-6"
                          }`}
                        />
                      </button>
                    </div>
                    {needDomain && (
                      <input
                        type="text"
                        placeholder="שם העסק (נמצא דומיין מתאים)"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                      />
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button onClick={back} className="btn-outline px-6 py-3 text-sm font-semibold text-gray-400 hover:text-white">
                      חזרה
                    </button>
                    <button
                      onClick={next}
                      disabled={!canProceed()}
                      className={`btn-primary px-8 py-3 text-sm font-semibold flex-1 ${!canProceed() ? "opacity-40 cursor-not-allowed" : ""}`}
                      style={!canProceed() ? { animation: "none" } : {}}
                    >
                      המשיכו
                    </button>
                  </div>
                </div>
              )}

              {/* ═══ STEP 3: Extras ═══ */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="space-y-3">
                    {extras.map((extra) => (
                      <button
                        key={extra.id}
                        onClick={() => toggleExtra(extra.id)}
                        disabled={extra.locked}
                        className={`w-full glass-card rounded-xl p-5 text-right flex items-center gap-4 transition-all duration-300 ${
                          extra.locked
                            ? "opacity-70 cursor-default"
                            : selectedExtras.includes(extra.id)
                            ? "border-brand/50 bg-brand/10 shadow-[0_0_20px_rgba(137,90,246,0.15)]"
                            : "hover:border-white/15 cursor-pointer"
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-300 ${
                            selectedExtras.includes(extra.id)
                              ? "bg-brand border-brand"
                              : "border-white/20"
                          }`}
                        >
                          {selectedExtras.includes(extra.id) && (
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm font-bold">{extra.label}</h3>
                          <p className="text-xs text-gray-500 font-light">{extra.desc}</p>
                        </div>
                        {extra.locked && (
                          <span className="text-[10px] text-brand font-medium tracking-wider shrink-0">כלול</span>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <h3 className="text-base font-bold mb-2">?יש לכם לוגו קיים</h3>
                    <p className="text-sm text-gray-500 font-light mb-4">העלו אותו כאן ונשתמש בו בעיצוב</p>
                    <label className="block w-full border-2 border-dashed border-white/10 rounded-lg py-8 text-center cursor-pointer hover:border-brand/30 transition-all group">
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                      />
                      {logoFile ? (
                        <p className="text-sm text-brand font-medium">{logoFile.name}</p>
                      ) : (
                        <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                          לחצו להעלאה או גררו קובץ לכאן
                        </p>
                      )}
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={back} className="btn-outline px-6 py-3 text-sm font-semibold text-gray-400 hover:text-white">
                      חזרה
                    </button>
                    <button
                      onClick={next}
                      className="btn-primary px-8 py-3 text-sm font-semibold flex-1"
                    >
                      המשיכו
                    </button>
                  </div>
                </div>
              )}

              {/* ═══ STEP 4: Contact + pricing ═══ */}
              {step === 3 && (
                <form
                  name="configurator-he"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="configurator-he" />
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="site-type" value={siteType || ""} />
                  <input type="hidden" name="style" value={style || ""} />
                  <input type="hidden" name="ref-urls" value={refUrls.filter(Boolean).join(", ")} />
                  <input type="hidden" name="need-domain" value={needDomain ? "yes" : "no"} />
                  <input type="hidden" name="business-name-domain" value={businessName} />
                  <input type="hidden" name="extras" value={selectedExtras.join(", ")} />
                  <input type="hidden" name="selected-tier" value={selectedTier} />
                  <input type="hidden" name="utm-source" value={utmSource} />
                  <input type="hidden" name="timestamp" value={new Date().toISOString()} />
                  <input type="hidden" name="locale" value="he" />

                  {siteType === "unsure" && (
                    <div className="glass-card-purple rounded-xl p-6 mb-2">
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                        אין בעיה. ספרו לנו על העסק שלכם ונמצא את הפתרון הכי מתאים ביחד.
                      </p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">* שם</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                        placeholder="איך קוראים לכם"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">* טלפון</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        dir="ltr"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                        placeholder="05X-XXX-XXXX"
                        style={{ fontFamily: "Inter" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">אימייל</label>
                      <input
                        type="email"
                        name="email"
                        dir="ltr"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                        placeholder="you@example.com"
                        style={{ fontFamily: "Inter" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">תארו את העסק שלכם במשפט אחד</label>
                      <input
                        type="text"
                        name="business-description"
                        value={bizDesc}
                        onChange={(e) => setBizDesc(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                        placeholder="למשל: סטודיו ליוגה בתל אביב"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-3">?איך נוח לכם שניצור קשר</label>
                      <div className="flex gap-3">
                        {([
                          { id: "whatsapp" as ContactMethod, label: "WhatsApp" },
                          { id: "phone" as ContactMethod, label: "שיחה" },
                          { id: "email" as ContactMethod, label: "אימייל" },
                        ]).map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => setContactMethod(m.id)}
                            className={`flex-1 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${
                              contactMethod === m.id
                                ? "bg-brand text-white shadow-[0_0_15px_rgba(137,90,246,0.3)]"
                                : "bg-white/5 text-gray-400 hover:bg-white/10"
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="contact-method" value={contactMethod} />
                    </div>
                  </div>

                  {/* ── pricing tiers ── */}
                  <div>
                    <h3 className="text-lg font-bold mb-4">בחרו חבילת השכרה</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {tiers.map((tier) => (
                        <button
                          key={tier.name}
                          type="button"
                          onClick={() => setSelectedTier(tier.name)}
                          className={`rounded-xl p-4 text-center transition-all duration-300 relative ${
                            selectedTier === tier.name
                              ? "glass-card-purple border-brand/40 shadow-[0_0_25px_rgba(137,90,246,0.2)]"
                              : "glass-card hover:border-white/15"
                          }`}
                        >
                          {tier.popular && (
                            <span className="absolute -top-2 right-1/2 translate-x-1/2 bg-brand text-white text-[8px] font-bold tracking-widest px-2 py-0.5 rounded-full whitespace-nowrap">
                              הכי פופולרי
                            </span>
                          )}
                          <p className="text-xs text-gray-500 mb-1">{tier.name}</p>
                          <p className="text-xl font-extrabold text-gradient" dir="ltr" style={{ fontFamily: "Inter" }}>
                            ₪{tier.price}
                          </p>
                          <p className="text-[10px] text-gray-600 mt-1">לחודש</p>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={back}
                      className="btn-outline px-6 py-3 text-sm font-semibold text-gray-400 hover:text-white"
                    >
                      חזרה
                    </button>
                    <button
                      type="submit"
                      disabled={!canProceed()}
                      className={`btn-primary px-8 py-4 text-sm font-semibold flex-1 ${!canProceed() ? "opacity-40 cursor-not-allowed" : ""}`}
                      style={!canProceed() ? { animation: "none" } : {}}
                    >
                      שלחו את הבריף
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer locale="he" />
    </main>
  );
}
