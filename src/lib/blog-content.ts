export interface BlogArticle {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  category: string;
  metaDescription: string;
  content: string;
}

export const blogArticles: Record<string, Record<string, BlogArticle>> = {
  he: {
    "website-cost-israel-2026": {
      slug: "website-cost-israel-2026",
      title: "כמה עולה לבנות אתר בישראל ב-2026?",
      date: "2026-06-18",
      readTime: "5 דק׳",
      category: "מדריכים",
      metaDescription: "מדריך מחירים מלא לבניית אתרים בישראל — מאתר תדמית פשוט ועד חנות אונליין מורכבת. מה משפיע על המחיר ואיך לא לשלם יותר מדי.",
      content: `
## השורה התחתונה, מהר

אתר תדמית בסיסי: ₪3,000–₪7,000
אתר עסקי מותאם אישית: ₪5,000–₪15,000
חנות אונליין: ₪8,000–₪25,000
פלטפורמה / מערכת מורכבת: ₪20,000+

הטווחים האלה גדולים כי המחיר תלוי בדברים שונים. בואו נפרק את זה.

## מה משפיע על המחיר?

### 1. סוג האתר
אתר תדמית עם 5 עמודים זה לא אותו דבר כמו חנות אונליין עם 500 מוצרים, סליקה, ניהול מלאי ומערכת משלוחים. ככל שהפונקציונליות מורכבת יותר, המחיר עולה.

### 2. עיצוב מותאם vs. תבנית
תבנית מוכנה (Wix, Squarespace) תעלה פחות אבל תיראה כמו עוד אלף אתרים. עיצוב מותאם אישית עולה יותר אבל משדר מקצועיות ומותאם בדיוק לקהל היעד שלך.

### 3. תוכן ותרגום
אם יש לך את כל התוכן מוכן — מעולה. אם צריך כתיבת תוכן, צילום מוצרים, או תרגום לשפות נוספות, זה מוסיף לעלות.

### 4. SEO ואופטימיזציה
אתר שנבנה עם SEO מובנה מהיום הראשון שווה יותר מאתר שצריך "לתקן" אחר כך. תשתית טכנית נכונה (מהירות, מבנה URL, Schema markup) לא קורית בטעות.

### 5. תחזוקה שוטפת
אתר זה לא עסקה חד-פעמית. עדכוני אבטחה, גיבויים, שינויי תוכן, ותמיכה טכנית — כל אלה עולים כסף. תקציב ₪200–₪500 לחודש לתחזוקה בסיסית.

## Wix / Squarespace / בונים בעצמך — זול אבל...

כן, אפשר לבנות אתר ב-Wix תמורת ₪50 לחודש. אבל מה שחוסכים בכסף, משלמים בזמן ובתוצאות:

**מהירות:** אתרי Wix איטיים יותר באופן מובנה. גוגל מעניש אתרים איטיים.

**SEO:** אופטימיזציה טכנית מוגבלת. קשה מאוד להתחרות על מילות מפתח תחרותיות.

**עיצוב:** נראה כמו תבנית. הלקוחות שלך יודעים לזהות את זה.

**בעלות:** אם Wix מעלה מחירים או משנה תנאים, אתה תקוע. האתר שלך לא באמת שלך.

בניה עצמית עובדת אם אתה סטארטאפ עם אפס תקציב שצריך משהו היום. לכל השאר, אתר מקצועי משתלם יותר בטווח הארוך.

## מתי כדאי להשקיע יותר?

**כשהאתר הוא הערוץ הראשי שלך.** אם רוב הלקוחות מגיעים דרך האינטרנט, האתר שלך הוא איש המכירות הכי חשוב שיש לך. להשקיע ₪5,000 באתר שמביא לקוח אחד בשבוע? זו עסקה מצוינת.

**כשאתה מתחרה על מילות מפתח.** אם המתחרים שלך כבר בעמוד הראשון של גוגל, אתר זול לא ידביק אותם. צריך תשתית טכנית חזקה מהיום הראשון.

**כשאתה מוכר אונליין.** חנות אונליין זולה = עגלות נטושות, תהליך רכישה מסורבל, ואובדן הכנסה. ההשקעה הנוספת מחזירה את עצמה מהר.

## מה אנחנו גובים

ב-ETW אנחנו מתחילים מ-₪4,900 לאתר עסקי מותאם אישית. זה כולל עיצוב ייחודי, מהירות גבוהה, SEO מובנה, התאמה לנייד ופאנל ניהול.

חנויות אונליין מתחילות מ-₪8,900 — כולל סליקה, ניהול מלאי, קופה ממירה והכל מוכן למכירות.

בלי הפתעות, בלי עלויות נסתרות. [קבעו שיחה חינם](https://calendly.com/dan-etw/30min) ונספר לכם בדיוק מה זה יעלה.
`,
    },
    "seo-basics-small-business": {
      slug: "seo-basics-small-business",
      title: "SEO לעסקים קטנים — מדריך למתחילים",
      date: "2026-06-20",
      readTime: "7 דק׳",
      category: "SEO",
      metaDescription: "5 דברים שכל בעל עסק יכול לעשות היום כדי להופיע גבוה יותר בגוגל. בלי ידע טכני, בלי תקציב.",
      content: `
## מה זה SEO ולמה אכפת לך?

SEO (Search Engine Optimization) זה מה שגורם לאתר שלך להופיע כשמישהו מחפש בגוגל את מה שאתה מוכר. בלי SEO, האתר שלך בלתי נראה — לא משנה כמה הוא יפה.

72% מהצרכנים בישראל מחפשים בגוגל לפני שהם קונים. אם אתה לא שם, המתחרה שלך כן.

## 5 דברים שאפשר לעשות היום

### 1. תבעו את הפרופיל העסקי בגוגל

זה בחינם ולוקח 10 דקות. [Google Business Profile](https://business.google.com) מאפשר לעסק שלך להופיע בתוצאות המפה, עם שעות פתיחה, ביקורות ותמונות. 46% מכל החיפושים בגוגל הם חיפושים מקומיים.

**מה לעשות:** הירשמו, מלאו את כל השדות (באמת את כל השדות), העלו לפחות 10 תמונות איכותיות, ובקשו מ-5 לקוחות מרוצים לכתוב ביקורת.

### 2. ודאו שהאתר מהיר ומותאם לנייד

גוגל מדרג אתרים איטיים נמוך יותר. נקודה. תבדקו את המהירות שלכם ב-[PageSpeed Insights](https://pagespeed.web.dev) — אם הציון מתחת ל-70, יש בעיה.

**הכי נפוץ:** תמונות כבדות מדי. כל תמונה באתר צריכה להיות ב-WebP ומתחת ל-200KB.

### 3. כתבו כותרות דפים (Title Tags) טובות

כל עמוד באתר צריך כותרת ייחודית שמתארת מה יש בו. לא "עמוד הבית" אלא "שרברב חירום בתל אביב | זמינות 24/7 | שם העסק".

**הפורמט:** [שירות] ב[מיקום] | [יתרון] | [שם עסק]

כותרת טובה היא ההבדל בין קליק לגלילה.

### 4. צרו תוכן שעונה על שאלות

חשבו מה הלקוחות שלכם שואלים בגוגל. "כמה עולה X", "איך בוחרים Y", "ההבדל בין X ל-Y". כתבו עמוד או מאמר שעונה על כל שאלה.

גוגל אוהב תוכן שעוזר לאנשים. זו המהות של SEO ב-2026.

### 5. בנו קישורים מקומיים

קישור מאתר אחר לאתר שלכם = המלצה בעיני גוגל. הירשמו לספריות עסקיות ישראליות (b144, zap, עמודי זהב), בקשו מספקים ושותפים לקשר אליכם, כתבו מאמרים אורח בבלוגים בתחום שלכם.

## מה לא לעשות

**לא לקנות קישורים.** גוגל מזהה את זה ומעניש.

**לא לדחוס מילות מפתח.** כתבו טבעי. אם זה נשמע מוזר כשקוראים בקול, זה מוזר גם לגוגל.

**לא לצפות לתוצאות תוך שבוע.** SEO לוקח 3-6 חודשים. אבל התוצאות נשארות — בניגוד לפרסום ממומן שנעלם ברגע שמפסיקים לשלם.

## צריכים עזרה?

אם אתם מעדיפים שמישהו מקצועי יטפל ב-SEO, אנחנו מתחילים מ-₪2,900 לחודש. אודיט מלא, אסטרטגיה, ביצוע שוטף ודוחות חודשיים. [קבעו שיחה חינם](https://calendly.com/dan-etw/30min).
`,
    },
    "why-your-website-doesnt-convert": {
      slug: "why-your-website-doesnt-convert",
      title: "למה האתר שלך לא מביא לקוחות (ומה לעשות עם זה)",
      date: "2026-06-23",
      readTime: "4 דק׳",
      category: "המרות",
      metaDescription: "5 סיבות נפוצות שאתרים לא ממירים מבקרים ללקוחות. בדוק את שלך עכשיו.",
      content: `
## יש לך אתר. אין לקוחות. למה?

יש תנועה באתר. אנשים נכנסים. אבל אף אחד לא מתקשר, לא שולח טופס, לא קונה. הבעיה היא כמעט תמיד אחת מ-5 הדברים האלה.

## 1. אין קריאה ברורה לפעולה

המבקר נחת באתר. הוא מתרשם. ואז... מה? אם אין כפתור ברור שאומר "קבע פגישה", "קנה עכשיו", או "קבל הצעת מחיר" — הוא פשוט יוצא.

**תיקון:** כפתור CTA ראשי בכל עמוד. צבע בולט, טקסט ברור, ממוקם מעל ה-fold (החלק שרואים בלי לגלול).

## 2. האתר איטי מדי

53% מהגולשים בנייד עוזבים אתר שלוקח יותר מ-3 שניות לטעון. שלוש שניות. זהו.

**תיקון:** דחסו תמונות, הפעילו CDN, מינימום סקריפטים. בדקו ב-PageSpeed Insights.

## 3. האתר לא מותאם לנייד

60%+ מהגולשים בישראל גולשים מהטלפון. אם האתר שלך לא עובד מעולה בנייד — כפתורים קטנים, טקסט שצריך לזום, תפריט שלא נפתח — הפסדת את רוב הקהל שלך.

**תיקון:** בדקו את האתר שלכם מהטלפון עכשיו. נסו להשלים את הפעולה הכי חשובה (התקשרות, רכישה, מילוי טופס). אם זה לא חלק — תתקנו.

## 4. אין אמון

למה שמישהו יסמוך על העסק שלך רק מתוך האתר? צריך הוכחות:

- ביקורות ועדויות מלקוחות
- לוגואים של לקוחות או שותפים
- תמונות אמיתיות (לא מ-stock)
- תעודות, הסמכות, או שנות ניסיון

אנשים קונים מאנשים שהם סומכים עליהם. האתר צריך לבנות את האמון הזה תוך שניות.

## 5. המסר לא ברור

"פתרונות חדשניים לעולם הדיגיטלי" — מה זה אומר? שום דבר.

המבקר צריך להבין תוך 5 שניות: מה אתה עושה, למי, ולמה כדאי לו. אם הכותרת הראשית באתר לא עונה על שלושת השאלות האלה — שנה אותה.

**דוגמה גרועה:** "ברוכים הבאים לאתר שלנו"
**דוגמה טובה:** "שרברב חירום בתל אביב — מגיעים תוך שעה, 24/7"

## הצעד הבא

עברו על האתר שלכם ובדקו את 5 הנקודות. אם יש בעיה באחת מהן — זה כנראה מה שעולה לכם לקוחות.

רוצים אודיט מקצועי בחינם? [קבעו שיחה](https://calendly.com/dan-etw/30min) ונגיד לכם בדיוק מה לתקן.
`,
    },
  },
  en: {
    "website-cost-israel-2026": {
      slug: "website-cost-israel-2026",
      title: "How Much Does a Website Cost in Israel in 2026?",
      date: "2026-06-18",
      readTime: "5 min",
      category: "Guides",
      metaDescription: "Complete pricing guide for building a website in Israel — from a simple landing page to a complex online store. What affects the price and how not to overpay.",
      content: `
## The Bottom Line, Fast

Basic landing page: ₪3,000–₪7,000
Custom business website: ₪5,000–₪15,000
Online store: ₪8,000–₪25,000
Platform / complex system: ₪20,000+

These ranges are wide because the price depends on several factors. Let's break it down.

## What Affects the Price?

### 1. Type of Website
A 5-page portfolio site is not the same as an e-commerce store with 500 products, payment processing, inventory management and a shipping system. More functionality = higher price.

### 2. Custom Design vs. Template
A ready-made template (Wix, Squarespace) costs less but looks like a thousand other sites. Custom design costs more but radiates professionalism and is tailored exactly to your audience.

### 3. Content & Translation
If you have all content ready — great. If you need copywriting, product photography, or translation to additional languages, that adds to the cost.

### 4. SEO & Optimization
A site built with SEO from day one is worth more than one that needs "fixing" later. Proper technical foundation (speed, URL structure, Schema markup) doesn't happen by accident.

### 5. Ongoing Maintenance
A website isn't a one-time deal. Security updates, backups, content changes, and technical support — all cost money. Budget ₪200–₪500/month for basic maintenance.

## Wix / Squarespace / DIY — Cheap But...

Yes, you can build a Wix site for ₪50/month. But what you save in money, you pay in time and results:

**Speed:** Wix sites are inherently slower. Google penalizes slow sites.

**SEO:** Limited technical optimization. Very hard to compete for competitive keywords.

**Design:** Looks like a template. Your customers can tell.

**Ownership:** If Wix raises prices or changes terms, you're stuck. Your site isn't really yours.

DIY works if you're a startup with zero budget that needs something today. For everyone else, a professional site pays for itself in the long run.

## When to Invest More

**When the website is your main channel.** If most customers come through the internet, your site is your most important salesperson. Investing ₪5,000 in a site that brings one client per week? That's a great deal.

**When you're competing for keywords.** If competitors are already on Google's first page, a cheap site won't catch them. You need a strong technical foundation from day one.

**When you sell online.** A cheap online store = abandoned carts, clunky checkout, and lost revenue. The extra investment pays for itself quickly.

## What We Charge

At ETW we start at ₪4,900 for a custom business website. That includes unique design, high performance, built-in SEO, mobile optimization and a CMS panel.

Online stores start at ₪8,900 — including payment processing, inventory management, high-converting checkout and everything ready to sell.

No surprises, no hidden costs. [Book a free call](https://calendly.com/dan-etw/30min) and we'll tell you exactly what it'll cost.
`,
    },
    "seo-basics-small-business": {
      slug: "seo-basics-small-business",
      title: "SEO for Small Businesses — Beginner's Guide",
      date: "2026-06-20",
      readTime: "7 min",
      category: "SEO",
      metaDescription: "5 things any business owner can do today to rank higher on Google. No technical knowledge, no budget required.",
      content: `
## What Is SEO and Why Should You Care?

SEO (Search Engine Optimization) is what makes your website show up when someone searches Google for what you sell. Without SEO, your site is invisible — no matter how beautiful it is.

72% of consumers in Israel search Google before buying. If you're not there, your competitor is.

## 5 Things You Can Do Today

### 1. Claim Your Google Business Profile

It's free and takes 10 minutes. [Google Business Profile](https://business.google.com) lets your business appear in map results, with hours, reviews and photos. 46% of all Google searches are local searches.

**What to do:** Sign up, fill in ALL fields (really, all of them), upload at least 10 quality photos, and ask 5 happy customers to leave a review.

### 2. Make Sure Your Site Is Fast and Mobile-Friendly

Google ranks slow sites lower. Period. Check your speed at [PageSpeed Insights](https://pagespeed.web.dev) — if your score is below 70, there's a problem.

**Most common issue:** Images that are too heavy. Every image on your site should be WebP and under 200KB.

### 3. Write Good Page Titles (Title Tags)

Every page on your site needs a unique title that describes what's on it. Not "Home Page" but "Emergency Plumber in Tel Aviv | Available 24/7 | Business Name".

**The format:** [Service] in [Location] | [Benefit] | [Business Name]

A good title is the difference between a click and a scroll-past.

### 4. Create Content That Answers Questions

Think about what your customers are Googling. "How much does X cost", "how to choose Y", "difference between X and Y". Write a page or article that answers each question.

Google loves content that helps people. That's the essence of SEO in 2026.

### 5. Build Local Links

A link from another website to yours = a recommendation in Google's eyes. Register in Israeli business directories (b144, zap, Yellow Pages), ask suppliers and partners to link to you, write guest articles on blogs in your field.

## What NOT to Do

**Don't buy links.** Google detects this and penalizes you.

**Don't stuff keywords.** Write naturally. If it sounds weird when read aloud, it sounds weird to Google too.

**Don't expect results in a week.** SEO takes 3-6 months. But the results stick — unlike paid ads that disappear the moment you stop paying.

## Need Help?

If you'd rather have a professional handle SEO, we start at ₪2,900/month. Full audit, strategy, ongoing execution and monthly reports. [Book a free call](https://calendly.com/dan-etw/30min).
`,
    },
    "why-your-website-doesnt-convert": {
      slug: "why-your-website-doesnt-convert",
      title: "Why Your Website Isn't Bringing Customers (And How to Fix It)",
      date: "2026-06-23",
      readTime: "4 min",
      category: "Conversions",
      metaDescription: "5 common reasons websites fail to convert visitors into customers. Check yours now.",
      content: `
## You Have a Website. No Customers. Why?

There's traffic. People are visiting. But nobody calls, nobody fills a form, nobody buys. The problem is almost always one of these 5 things.

## 1. No Clear Call to Action

The visitor landed on your site. They're impressed. And then... what? If there's no obvious button saying "Book a meeting", "Buy now", or "Get a quote" — they just leave.

**Fix:** One primary CTA button on every page. Contrasting color, clear text, positioned above the fold (the part visible without scrolling).

## 2. The Site Is Too Slow

53% of mobile users leave a site that takes more than 3 seconds to load. Three seconds. That's it.

**Fix:** Compress images, enable CDN, minimal scripts. Test at PageSpeed Insights.

## 3. The Site Isn't Mobile-Friendly

60%+ of users in Israel browse on their phone. If your site doesn't work great on mobile — tiny buttons, text that needs zooming, menu that won't open — you've lost most of your audience.

**Fix:** Check your site from your phone right now. Try to complete the most important action (call, purchase, form). If it's not smooth — fix it.

## 4. No Trust

Why would someone trust your business just from the website? You need proof:

- Customer reviews and testimonials
- Client or partner logos
- Real photos (not stock)
- Certificates, credentials, or years of experience

People buy from people they trust. Your site needs to build that trust within seconds.

## 5. The Message Isn't Clear

"Innovative solutions for the digital world" — what does that even mean? Nothing.

The visitor needs to understand within 5 seconds: what you do, who it's for, and why they should care. If the main headline on your site doesn't answer those three questions — change it.

**Bad example:** "Welcome to our website"
**Good example:** "Emergency plumber in Tel Aviv — on-site within an hour, 24/7"

## Next Step

Go through your website and check all 5 points. If there's a problem with any of them — that's probably what's costing you customers.

Want a free professional audit? [Book a call](https://calendly.com/dan-etw/30min) and we'll tell you exactly what to fix.
`,
    },
  },
};
