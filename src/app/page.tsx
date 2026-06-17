import Image from "next/image";

const services = [
  {
    icon: "/images/icons/icon-website.png",
    title: "אתר עסקי",
    desc: "אתר מותאם אישית שמשדר מקצועיות ומביא לקוחות. עיצוב פרימיום, מותאם לנייד, מוכן לקידום מהיום הראשון.",
    price: "₪4,900",
    label: "החל מ־",
  },
  {
    icon: "/images/icons/icon-ecommerce.png",
    title: "חנות אונליין",
    desc: "חנות דיגיטלית מלאה — קטלוג מוצרים, סליקה, ניהול מלאי וקופה ממירה. הכל עובד, הכל מדיד.",
    price: "₪8,900",
    label: "החל מ־",
  },
  {
    icon: "/images/icons/icon-email.png",
    title: "שיווק במייל",
    desc: "קמפיינים אוטומטיים, סגמנטציה, רצפי מכירה וניתוח ביצועים. הופכים רשימת תפוצה להכנסה קבועה.",
    price: "₪2,900",
    label: "לחודש, החל מ־",
  },
  {
    icon: "/images/icons/icon-seo-new.png",
    title: "קידום אורגני",
    desc: "אופטימיזציה טכנית, אסטרטגיית מילות מפתח, בניית קישורים ותוכן. תוצאות מדידות, חודש אחרי חודש.",
    price: "₪2,900",
    label: "לחודש, החל מ־",
  },
];

const portfolio = [
  {
    name: "VitaluxDENT",
    type: "קליניקה דנטלית",
    url: "vitaluxdent.cz",
    seo: { grade: "A-", onPage: "A-", links: "A", performance: "A+", social: "A+" },
  },
  {
    name: "NajitZubare",
    type: "פלטפורמת SaaS",
    url: "najitzubare.cz",
    seo: { grade: "B", onPage: "A-", links: "A-", performance: "A", social: "A+" },
  },
  {
    name: "Apartments Verona",
    type: "השכרת דירות",
    url: "apartmentsverona.cz",
    seo: { grade: "B", onPage: "A-", links: "A-", performance: "A", social: "A+" },
  },
  {
    name: "WillBeClean",
    type: "שירותי ניקיון",
    url: "willbeclean.eu",
    seo: { grade: "B", onPage: "A-", links: "A-", performance: "A", social: "A+" },
  },
];

export default function Home() {
  return (
    <main>
      {/* ═══ NAV ═══ */}
      <nav className="fixed top-0 right-0 left-0 z-50 border-b border-white/5 bg-[#0a0a0f]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight" dir="ltr">
            ETW<span className="text-brand">.</span>
          </span>
          <div className="flex items-center gap-6">
            <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">שירותים</a>
            <a href="#portfolio" className="text-sm text-gray-400 hover:text-white transition-colors hidden sm:block">עבודות</a>
            <a
              href="https://calendly.com/dan-etw/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-5 py-2.5 text-xs font-semibold tracking-wide"
              style={{ animation: 'none' }}
            >
              שיחת ייעוץ חינם
            </a>
          </div>
        </div>
      </nav>

      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[500px] h-[500px] top-[10%] -left-[10%]" aria-hidden="true" />
        <div className="glow-orb w-[300px] h-[300px] bottom-[20%] -right-[5%] opacity-50" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="stagger-2 flex justify-center relative order-first lg:order-last">
              <div className="relative w-[220px] h-[280px] md:w-[280px] md:h-[360px] lg:w-[400px] lg:h-[500px]">
                <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full" aria-hidden="true" />
                <Image
                  src="/images/mascot-lion.png"
                  alt="ETW Israel mascot"
                  width={400}
                  height={500}
                  className="relative z-10 drop-shadow-[0_0_60px_rgba(137,90,246,0.4)] float object-contain"
                  priority
                />
              </div>
            </div>

            <div className="order-last lg:order-first text-center lg:text-right">
              <div className="stagger-1">
                <p className="section-label mb-6" dir="ltr">ETW Agency · Israel</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-8 font-extrabold">
                  אנחנו בונים דיגיטל
                  <br />
                  <span className="text-gradient">שמביא תוצאות.</span>
                </h1>
              </div>

              <div className="stagger-2">
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 font-light leading-relaxed mx-auto lg:mx-0 lg:mr-0">
                  עיצוב אתרים, חנויות אונליין, קידום אורגני ושיווק במייל לעסקים בישראל. איכות פרימיום, בלי שטויות.
                </p>
              </div>

              <div className="stagger-3">
                <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">
                  <a
                    href="https://calendly.com/dan-etw/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-8 py-4 text-sm font-semibold"
                  >
                    קבעו שיחה חינם
                  </a>
                  <a
                    href="#services"
                    className="px-8 py-4 text-sm font-medium text-gray-300 hover:text-white border border-white/10 rounded-lg hover:border-white/20 transition-all duration-200"
                  >
                    לשירותים שלנו
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      <section className="py-8 border-y border-white/5 relative overflow-hidden bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "+7", label: "שנות ניסיון" },
              { value: "+50", label: "פרויקטים שהושלמו" },
              { value: "A+", label: "דירוג SEO ממוצע" },
              { value: "24/7", label: "תמיכה טכנית" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <span className="text-2xl md:text-3xl font-extrabold text-gradient" dir="ltr">
                  {stat.value}
                </span>
                <p className="text-gray-600 text-[10px] font-medium tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE DO — 3 pillars ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-deep-purple">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">מה אנחנו עושים</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            פתרונות דיגיטליים
            <br />
            <span className="text-gradient">מקצה לקצה</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "בנייה",
                subtitle: "אתרים וחנויות",
                desc: "אתרים עסקיים וחנויות אונליין מאפס. עיצוב מותאם אישית, מהירות גבוהה, חוויית משתמש שממירה מבקרים ללקוחות.",
              },
              {
                title: "קידום",
                subtitle: "SEO ושיווק",
                desc: "קידום אורגני, שיווק במייל וקמפיינים ממוקדים. אנחנו מביאים תנועה איכותית ומפכים אותה להכנסה.",
              },
              {
                title: "צמיחה",
                subtitle: "אסטרטגיה דיגיטלית",
                desc: "אסטרטגיה שלמה לנוכחות דיגיטלית. מיתוג, תוכן, רשתות חברתיות ואנליטיקה — הכל תחת קורת גג אחת.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="glass-card-gradient rounded-xl p-8 h-full group hover:scale-[1.02] transition-transform duration-300"
              >
                <p className="text-brand text-xs font-bold tracking-[0.15em] mb-2" dir="ltr" style={{ fontFamily: 'Inter' }}>
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-bold tracking-tight mb-1">{card.title}</h3>
                <p className="text-brand-light/60 text-sm font-medium mb-4">{card.subtitle}</p>
                <p className="text-gray-400 font-light leading-relaxed text-sm">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES + PRICING ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden" id="services">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">שירותים ומחירים</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            מה אנחנו
            <br />
            <span className="text-gradient">מציעים</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <div
                key={i}
                className="service-card glass-card card-accent rounded-xl p-6 flex flex-col h-full"
              >
                <div className="w-12 h-12 mb-5 relative">
                  <Image
                    src={s.icon}
                    alt={s.title}
                    width={48}
                    height={48}
                    className="object-contain drop-shadow-[0_0_15px_rgba(137,90,246,0.25)]"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-1">
                  {s.desc}
                </p>
                <p className="text-sm text-gray-500">
                  {s.label}{" "}
                  <span className="text-brand font-semibold text-base" dir="ltr">
                    {s.price}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHY ETW ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-aurora">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4 text-center">למה דווקא אנחנו</p>
          <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-tight mb-16 font-extrabold text-center">
            מה מבדיל
            <br />
            <span className="text-gradient">אותנו מכולם</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "פיתוח מואץ עם AI",
                desc: "תהליך הפיתוח שלנו מבוסס AI ומקצר לוחות זמנים ב-40%. האתר שלכם עולה לאוויר מהר יותר מהמתחרים.",
                stat: "40%",
                statLabel: "מהיר יותר",
              },
              {
                title: "איכות פרימיום, מחיר הוגן",
                desc: "תשתית ברמת ענק — עיצוב, ביצועים ואבטחה — במחיר שעסק קטן ובינוני יכול להרשות לעצמו.",
                stat: "⚡",
                statLabel: "תמחור תחרותי",
              },
              {
                title: "צוות אחד, הכל כלול",
                desc: "פיתוח, עיצוב, שיווק, SEO, תוכן — צוות אחד שמטפל בהכל. בלי לרדוף אחרי 5 ספקים שונים.",
                stat: "1",
                statLabel: "צוות לכל דבר",
              },
              {
                title: "ניסיון אמיתי בשטח",
                desc: "לא סתם בונים אתרים — אנחנו מפעילים עסקים דיגיטליים בעצמנו. יודעים מה עובד ומה בזבוז כסף.",
                stat: "7+",
                statLabel: "שנות ניסיון",
              },
            ].map((prop, i) => (
              <div
                key={i}
                className="glass-card-purple rounded-xl p-8 h-full group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-bold tracking-tight">{prop.title}</h3>
                  <span className="text-2xl font-extrabold text-gradient shrink-0 ms-4" dir="ltr">
                    {prop.stat}
                  </span>
                </div>
                <p className="text-gray-400 text-sm font-light leading-relaxed mb-3">
                  {prop.desc}
                </p>
                <p className="text-brand/50 text-[10px] font-medium tracking-widest">
                  {prop.statLabel}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="py-28 md:py-36 relative overflow-hidden bg-deep-purple" id="portfolio">
        <div className="purple-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <p className="section-label mb-4">עבודות נבחרות</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-16 font-extrabold">
            פרויקטים
            <br />
            <span className="text-gradient">שבנינו</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            {portfolio.map((project, i) => (
              <a
                key={i}
                href={`https://${project.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-8 group hover:border-brand/20 transition-all duration-300 block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-brand-light transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{project.type}</p>
                  </div>
                  <span className="text-brand text-xs font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200 shrink-0 ms-4" dir="ltr" style={{ fontFamily: 'Inter' }}>
                    {project.url}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-5 pt-5 border-t border-white/5" dir="ltr">
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand/10 border border-brand/20">
                    <span className="text-brand font-extrabold text-lg" style={{ fontFamily: 'Inter' }}>{project.seo.grade}</span>
                  </div>
                  <div className="flex gap-3 text-[10px] font-medium tracking-wider" style={{ fontFamily: 'Inter' }}>
                    <div className="text-center">
                      <p className="text-green-400 font-bold text-xs">{project.seo.onPage}</p>
                      <p className="text-gray-600 mt-0.5">SEO</p>
                    </div>
                    <div className="text-center">
                      <p className="text-green-400 font-bold text-xs">{project.seo.links}</p>
                      <p className="text-gray-600 mt-0.5">LINKS</p>
                    </div>
                    <div className="text-center">
                      <p className="text-green-400 font-bold text-xs">{project.seo.performance}</p>
                      <p className="text-gray-600 mt-0.5">SPEED</p>
                    </div>
                    <div className="text-center">
                      <p className="text-green-400 font-bold text-xs">{project.seo.social}</p>
                      <p className="text-gray-600 mt-0.5">SOCIAL</p>
                    </div>
                  </div>
                  <p className="text-[9px] text-gray-600 ms-auto tracking-wider">SEOptimer</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 md:py-44 relative overflow-hidden">
        <div className="purple-glow-strong absolute inset-0 pointer-events-none" />
        <div className="glow-orb w-[400px] h-[400px] top-[20%] left-1/2 -translate-x-1/2" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="hidden lg:flex justify-center relative order-last">
              <div className="relative w-[360px] h-[460px]">
                <div className="absolute inset-0 bg-brand/15 blur-[80px] rounded-full" aria-hidden="true" />
                <Image
                  src="/images/mascot-lion-bust.png"
                  alt="ETW Israel"
                  width={360}
                  height={460}
                  className="relative z-10 drop-shadow-[0_0_50px_rgba(137,90,246,0.35)] object-contain float"
                />
              </div>
            </div>

            <div className="text-center lg:text-right">
              <h2 className="text-3xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-8 font-extrabold">
                מוכנים להתחיל
                <br />
                <span className="text-gradient">לבנות?</span>
              </h2>
              <p className="text-gray-400 text-lg mb-12 max-w-xl font-light leading-relaxed mx-auto lg:mx-0 lg:mr-0">
                בלי מכירות. בלי לחץ. שיחה כנה על מה שהעסק שלכם צריך ואיך אנחנו יכולים לעזור. תוך 24 שעות נחזור עם הצעה מסודרת.
              </p>
              <a
                href="https://calendly.com/dan-etw/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-10 sm:px-14 py-4 sm:py-5 text-base sm:text-lg inline-block font-semibold"
              >
                קבעו שיחה חינם
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-white/5 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <span dir="ltr">&copy; {new Date().getFullYear()} ETW Agency</span>
          <div className="flex items-center gap-6">
            <a
              href="mailto:dan@etwagency.online"
              className="hover:text-brand transition-colors"
              dir="ltr"
            >
              dan@etwagency.online
            </a>
            <a
              href="https://etw.agency"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand transition-colors"
              dir="ltr"
            >
              etw.agency
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
