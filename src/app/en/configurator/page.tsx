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
  { id: "business", icon: "🏢", title: "Business Website", desc: "Professional site that brings customers" },
  { id: "store", icon: "🛒", title: "Online Store", desc: "Sell products online" },
  { id: "portfolio", icon: "🎨", title: "Portfolio Site", desc: "Showcase your work" },
  { id: "landing", icon: "🚀", title: "Landing Page", desc: "Conversion-focused single page" },
  { id: "unsure", icon: "💬", title: "I'm not sure yet", desc: "We'll figure it out together" },
];

const styleTypes: { id: StyleType; title: string; gradient: string }[] = [
  { id: "minimal", title: "Clean & Minimal", gradient: "linear-gradient(135deg, #fafafa 0%, #e5e5e5 50%, #d4d4d4 100%)" },
  { id: "bold", title: "Bold & Modern", gradient: "linear-gradient(135deg, #0f0f23 0%, #895af6 50%, #6366f1 100%)" },
  { id: "classic", title: "Classic & Professional", gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" },
  { id: "warm", title: "Warm & Inviting", gradient: "linear-gradient(135deg, #fef3c7 0%, #f59e0b 50%, #d97706 100%)" },
];

const extras = [
  { id: "seo", label: "SEO", desc: "Included in every plan", locked: true },
  { id: "logo", label: "Logo Design", desc: "Professional logo for your brand" },
  { id: "copy", label: "Copywriting", desc: "Marketing copy tailored to your business" },
  { id: "email", label: "Email Marketing Setup", desc: "Automated email sequences" },
  { id: "social", label: "Social Media Setup", desc: "Professional social media profiles" },
];

const tiers = [
  { name: "Basic", price: "790", desc: "Up to 5-page business site", popular: false },
  { name: "Business", price: "990", desc: "Advanced site with extra features", popular: true },
  { name: "Premium", price: "1,290", desc: "Full solution for growing businesses", popular: false },
];

const stepTitles = ["What do you need?", "What style speaks to you?", "Anything extra?", "Let's talk!"];

export default function ConfiguratorPageEN() {
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
  const [selectedTier, setSelectedTier] = useState("Business");

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
        <Nav locale="en" />
        <section className="relative min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden">
          <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
          <div className="glow-orb w-[500px] h-[500px] top-[20%] left-1/2 -translate-x-1/2" aria-hidden="true" />
          <div className="max-w-lg mx-auto px-6 text-center relative z-10">
            <div className="text-6xl mb-6">&#10003;</div>
            <h1 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
              <span className="text-gradient">Brief Sent!</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              We&apos;ll get back to you within 24 hours with a tailored proposal. Want to talk now?
            </p>
            <a
              href="https://wa.me/972559510042?text=Hi%2C%20I%20just%20sent%20a%20brief%20through%20the%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-10 py-4 text-base inline-block font-semibold"
            >
              Message us on WhatsApp
            </a>
          </div>
        </section>
        <Footer locale="en" />
      </main>
    );
  }

  return (
    <main>
      <Nav locale="en" />

      <section className="relative min-h-[100dvh] pt-24 pb-20 overflow-hidden" ref={containerRef}>
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[400px] h-[400px] top-[5%] -left-[10%] opacity-40" aria-hidden="true" />

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
                    style={{ fontFamily: "Inter" }}
                  >
                    {i + 1}
                  </div>
                  {i < 3 && (
                    <div className="hidden sm:block w-16 md:w-24 lg:w-32 h-[2px] bg-white/5 relative overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-brand transition-all duration-700 ease-out"
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
                    ? "opacity-0 translate-x-8"
                    : "opacity-0 -translate-x-8"
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
                      className={`glass-card rounded-xl p-6 text-left transition-all duration-300 group cursor-pointer ${
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
                        <div className="p-4 text-left">
                          <h3 className="text-sm font-bold group-hover:text-brand-light transition-colors">
                            {s.title}
                          </h3>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="glass-card rounded-xl p-6 space-y-4">
                    <h3 className="text-base font-bold">Websites you like (optional)</h3>
                    <p className="text-sm text-gray-500 font-light">Paste up to 3 website URLs for inspiration</p>
                    <div className="space-y-3">
                      {refUrls.map((url, i) => (
                        <input
                          key={i}
                          type="url"
                          placeholder="https://example.com"
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
                      <h3 className="text-base font-bold">Need a domain?</h3>
                      <button
                        onClick={() => setNeedDomain(!needDomain)}
                        className={`w-12 h-7 rounded-full relative transition-all duration-300 ${
                          needDomain ? "bg-brand" : "bg-white/10"
                        }`}
                      >
                        <div
                          className={`w-5 h-5 bg-white rounded-full absolute top-1 transition-all duration-300 ${
                            needDomain ? "left-6" : "left-1"
                          }`}
                        />
                      </button>
                    </div>
                    {needDomain && (
                      <input
                        type="text"
                        placeholder="Your business name (we'll find a matching domain)"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                      />
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button onClick={back} className="btn-outline px-6 py-3 text-sm font-semibold text-gray-400 hover:text-white">
                      Back
                    </button>
                    <button
                      onClick={next}
                      disabled={!canProceed()}
                      className={`btn-primary px-8 py-3 text-sm font-semibold flex-1 ${!canProceed() ? "opacity-40 cursor-not-allowed" : ""}`}
                      style={!canProceed() ? { animation: "none" } : {}}
                    >
                      Continue
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
                        className={`w-full glass-card rounded-xl p-5 text-left flex items-center gap-4 transition-all duration-300 ${
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
                          <span className="text-[10px] text-brand font-medium tracking-wider shrink-0">INCLUDED</span>
                        )}
                      </button>
                    ))}
                  </div>

                  <div className="glass-card rounded-xl p-6">
                    <h3 className="text-base font-bold mb-2">Have an existing logo?</h3>
                    <p className="text-sm text-gray-500 font-light mb-4">Upload it here and we&apos;ll use it in the design</p>
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
                          Click to upload or drag a file here
                        </p>
                      )}
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <button onClick={back} className="btn-outline px-6 py-3 text-sm font-semibold text-gray-400 hover:text-white">
                      Back
                    </button>
                    <button
                      onClick={next}
                      className="btn-primary px-8 py-3 text-sm font-semibold flex-1"
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {/* ═══ STEP 4: Contact + pricing ═══ */}
              {step === 3 && (
                <form
                  name="configurator-en"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <input type="hidden" name="form-name" value="configurator-en" />
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
                  <input type="hidden" name="locale" value="en" />

                  {siteType === "unsure" && (
                    <div className="glass-card-purple rounded-xl p-6 mb-2">
                      <p className="text-sm text-gray-300 font-light leading-relaxed">
                        No problem. Tell us about your business and we&apos;ll figure out the best solution together.
                      </p>
                    </div>
                  )}

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Phone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                        placeholder="+972-5X-XXX-XXXX"
                        style={{ fontFamily: "Inter" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                        placeholder="you@example.com"
                        style={{ fontFamily: "Inter" }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Describe your business in one sentence</label>
                      <input
                        type="text"
                        name="business-description"
                        value={bizDesc}
                        onChange={(e) => setBizDesc(e.target.value)}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:border-brand/50 focus:outline-none focus:ring-1 focus:ring-brand/30 transition-all"
                        placeholder="e.g. Yoga studio in Tel Aviv"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold mb-3">Preferred contact method</label>
                      <div className="flex gap-3">
                        {([
                          { id: "whatsapp" as ContactMethod, label: "WhatsApp" },
                          { id: "phone" as ContactMethod, label: "Phone Call" },
                          { id: "email" as ContactMethod, label: "Email" },
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
                    <h3 className="text-lg font-bold mb-4">Choose a rental plan</h3>
                    <div className="grid grid-cols-3 gap-3">
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
                            <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-brand text-white text-[8px] font-bold tracking-widest px-2 py-0.5 rounded-full whitespace-nowrap">
                              MOST POPULAR
                            </span>
                          )}
                          <p className="text-xs text-gray-500 mb-1">{tier.name}</p>
                          <p className="text-xl font-extrabold text-gradient" style={{ fontFamily: "Inter" }}>
                            ₪{tier.price}
                          </p>
                          <p className="text-[10px] text-gray-600 mt-1">/month</p>
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
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={!canProceed()}
                      className={`btn-primary px-8 py-4 text-sm font-semibold flex-1 ${!canProceed() ? "opacity-40 cursor-not-allowed" : ""}`}
                      style={!canProceed() ? { animation: "none" } : {}}
                    >
                      Send my brief
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer locale="en" />
    </main>
  );
}
