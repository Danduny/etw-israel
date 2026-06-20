import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "השכרת אתרים לעסקים | ETW Israel",
  description:
    "השכרת אתרים לעסקים בישראל. אתר מקצועי מ-690 ₪ לחודש, ללא עלות הקמה. עיצוב, פיתוח, אחסון, דומיין ותחזוקה כלולים. אתר מוכן תוך 7 ימים.",
};

const steps = [
  {
    num: "01",
    title: "שיחת היכרות",
    desc: "מבינים את העסק, הקהל והמטרות. מגדירים יחד איזה אתר מתאים לכם.",
  },
  {
    num: "02",
    title: "עיצוב ובנייה",
    desc: "אנחנו מעצבים ובונים אתר מותאם אישית. אתם מאשרים כל שלב לפני שממשיכים.",
  },
  {
    num: "03",
    title: "השקה ותשלום חודשי",
    desc: "האתר עולה לאוויר. משלמים כל חודש סכום קבוע, בלי הפתעות.",
  },
];

const included = [
  {
    title: "עיצוב מותאם אישית",
    desc: "לא תבנית. אתר שמעוצב מאפס בדיוק למותג ולקהל שלכם.",
  },
  {
    title: "פיתוח מקצועי",
    desc: "טכנולוגיות מתקדמות, מהירות גבוהה, מותאם לנייד ולכל מסך.",
  },
  {
    title: "דומיין בהתאמה",
    desc: "אנחנו רוכשים ומנהלים את הדומיין בשבילכם. כלול במחיר.",
  },
  {
    title: "אחסון ו-SSL",
    desc: "אחסון מהיר ומאובטח עם תעודת SSL. הכל מנוהל על ידינו.",
  },
  {
    title: "SEO בסיסי",
    desc: "אופטימיזציה טכנית מהיום הראשון — meta tags, מבנה URL ו-sitemap.",
  },
  {
    title: "2 עדכוני תוכן בחודש",
    desc: "צריכים לשנות טקסט, להחליף תמונה או להוסיף עמוד? כלול.",
  },
];

const faqs = [
  {
    q: "מה קורה אחרי 12 חודשים?",
    a: "אחרי תקופת המינימום, ממשיכים חודש בחודש. אפשר לבטל בכל עת עם הודעה של 30 יום מראש.",
  },
  {
    q: "מה אם אני רוצה לעזוב לפני 12 חודשים?",
    a: "ביטול מוקדם כרוך בתשלום של 80% מהחודשים שנותרו. זה מגן על ההשקעה שלנו בעיצוב ובבנייה.",
  },
  {
    q: "של מי האתר והדומיין?",
    a: "כל עוד אתם משלמים, האתר והדומיין פעילים ובשימושכם הבלעדי. הבעלות נשארת אצלנו. אם תרצו לעזוב — אפשר לרכוש את הדומיין בנפרד.",
  },
  {
    q: "האם אני יכול לקנות את הדומיין?",
    a: "כן. אם תחליטו לעזוב ורוצים לשמור את הדומיין, נציע מחיר הוגן לרכישה.",
  },
  {
    q: "מה לא כלול?",
    a: "פרסום ממומן, קידום אורגני מתמשך (ריטיינר SEO), ושינויים מבניים גדולים באתר. כל אלה זמינים כשירותים נפרדים.",
  },
  {
    q: "למה לא פשוט לבנות אתר בוויקס?",
    a: "כי וויקס זה תבנית שכולם משתמשים בה. אצלנו תקבלו אתר מעוצב במיוחד לעסק שלכם, עם ביצועים גבוהים ו-SEO מובנה — בלי הגבלות של פלטפורמה.",
  },
];

const tiers = [
  {
    name: "דף נחיתה",
    price: "690",
    desc: "עמוד ממוקד המרות לעסק שלכם",
    features: [
      "עיצוב מותאם אישית",
      "עמוד אחד ממוקד",
      "מותאם לנייד",
      "אחסון + SSL + דומיין",
      "עדכון תוכן 1 בחודש",
    ],
  },
  {
    name: "אתר עסקי",
    price: "1,290",
    desc: "אתר מקצועי שמביא לקוחות",
    popular: true,
    features: [
      "הכל מהחבילה הבסיסית",
      "עד 10 עמודים",
      "טופס צור קשר + אינטגרציות",
      "SEO בסיסי מובנה",
      "2 עדכוני תוכן בחודש",
      "Google Analytics",
    ],
  },
  {
    name: "חנות אונליין",
    price: "1,990",
    desc: "פתרון מלא למסחר אלקטרוני",
    features: [
      "הכל מהחבילה העסקית",
      "עמודים ללא הגבלה",
      "קטלוג מוצרים + סליקה",
      "ניהול מלאי ומשלוחים",
      "3 עדכוני תוכן בחודש",
      "דוח ביצועים חודשי",
    ],
  },
];

export default function RentalPage() {
  return (
    <main>
      <Nav locale="he" />

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90dvh] flex items-center pt-20 overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[500px] h-[500px] top-[10%] -left-[10%]" aria-hidden="true" />
        <div className="glow-orb w-[300px] h-[300px] bottom-[20%] -right-[5%] opacity-50" aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-6 w-full relative z-10 text-center">
          <div className="stagger-1">
            <p className="section-label mb-6">שירות חדש</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 font-extrabold">
              אתר פרימיום לעסק שלך
              <br />
              <span className="text-gradient">בתשלום חודשי בלבד</span>
            </h1>
          </div>

          <div className="stagger-2">
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
              בלי 15,000 ₪ מראש. בלי הלוואות. אתר מותאם אישית — עיצוב, פיתוח,
              אחסון, דומיין ותחזוקה — הכל כלול בתשלום חודשי קבוע.
            </p>
          </div>

          <div className="stagger-3">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/972559510042?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%94%D7%A9%D7%9B%D7%A8%D7%AA%20%D7%90%D7%AA%D7%A8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-8 py-4 text-sm font-semibold"
              >
                דברו איתנו בוואטסאפ
              </a>
              <a
                href="#pricing"
                className="px-8 py-4 text-sm font-medium text-gray-300 hover:text-white border border-white/10 rounded-lg hover:border-white/20 transition-all duration-200"
              >
                לחבילות ומחירים
              </a>
            </div>
          </div>

          <div className="stagger-4 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-gray-500">
            <span>&#10003; אפס השקעה ראשונית</span>
            <span>&#10003; עיצוב מותאם אישית</span>
            <span>&#10003; דומיין + אחסון כלול</span>
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-deep-purple">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">איך זה עובד</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            שלושה צעדים
            <br />
            <span className="text-gradient">ויש לכם אתר</span>
          </h2>

          <div className="space-y-6">
            {steps.map((step) => (
              <div
                key={step.num}
                className="glass-card-gradient rounded-xl p-8 flex gap-6 items-start"
              >
                <span
                  className="text-brand font-extrabold text-2xl shrink-0"
                  dir="ltr"
                  style={{ fontFamily: "Inter" }}
                >
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-400 font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">מה כלול</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            הכל ב<span className="text-gradient">מחיר אחד</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {included.map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section
        className="py-28 md:py-36 relative overflow-hidden bg-aurora"
        id="pricing"
      >
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4 text-center">חבילות ומחירים</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-6 font-extrabold text-center">
            בחרו את <span className="text-gradient">החבילה שלכם</span>
          </h2>
          <p className="text-gray-400 text-center mb-16 max-w-xl mx-auto font-light">
            כל החבילות כוללות 12 חודשי מינימום. אחרי זה — חודש בחודש, ביטול עם
            הודעה של 30 יום.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier, i) => (
              <div
                key={i}
                className={`rounded-xl p-8 flex flex-col h-full relative ${
                  tier.popular
                    ? "glass-card-purple border-brand/30"
                    : "glass-card"
                }`}
              >
                {tier.popular && (
                  <span className="absolute -top-3 right-6 bg-brand text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded-full">
                    הכי פופולרי
                  </span>
                )}
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-500 mb-6">{tier.desc}</p>
                <p className="mb-6">
                  <span
                    className="text-4xl font-extrabold text-gradient"
                    dir="ltr"
                    style={{ fontFamily: "Inter" }}
                  >
                    ₪{tier.price}
                  </span>
                  <span className="text-gray-500 text-sm me-1"> / לחודש</span>
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {tier.features.map((f, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-300 font-light flex items-start gap-2"
                    >
                      <span className="text-brand mt-0.5 shrink-0">&#10003;</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/972559510042?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%94%D7%A9%D7%9B%D7%A8%D7%AA%20%D7%90%D7%AA%D7%A8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-center py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    tier.popular
                      ? "btn-primary"
                      : "btn-outline text-brand hover:text-white"
                  }`}
                >
                  להתחיל עכשיו
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-deep-purple">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">שאלות נפוצות</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            שאלות <span className="text-gradient">ותשובות</span>
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-xl p-6">
                <h3 className="text-base font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-32 md:py-44 relative overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[400px] h-[400px] top-[20%] left-1/2 -translate-x-1/2" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 font-extrabold">
            מוכנים לאתר
            <br />
            <span className="text-gradient">בלי להשקיע הון?</span>
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
            שיחה קצרה בוואטסאפ ונבין מה אתם צריכים. בלי מכירות, בלי לחץ.
          </p>
          <a
            href="https://wa.me/972559510042?text=%D7%94%D7%99%D7%99%2C%20%D7%90%D7%A0%D7%99%20%D7%9E%D7%AA%D7%A2%D7%A0%D7%99%D7%99%D7%9F%20%D7%91%D7%94%D7%A9%D7%9B%D7%A8%D7%AA%20%D7%90%D7%AA%D7%A8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary px-10 sm:px-14 py-4 sm:py-5 text-base sm:text-lg inline-block font-semibold"
          >
            דברו איתנו בוואטסאפ
          </a>
        </div>
      </section>

      <Footer locale="he" />
    </main>
  );
}
