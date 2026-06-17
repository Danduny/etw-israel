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
    "email-marketing-roi": {
      slug: "email-marketing-roi",
      title: "שיווק במייל: למה זה עדיין הערוץ הכי רווחי ב-2026",
      date: "2026-06-25",
      readTime: "6 דק׳",
      category: "שיווק",
      metaDescription: "ROI של 4,200%. למה עסקים שמזניחים מייל משאירים כסף על השולחן ואיך להתחיל בלי תקציב גדול.",
      content: `
## 4,200% החזר על השקעה. זה לא טעות דפוס.

על כל שקל שאתה משקיע בשיווק במייל, אתה מקבל בממוצע 42 שקלים בחזרה. שום ערוץ שיווקי אחר לא מתקרב למספרים האלה. לא פייסבוק, לא גוגל, לא אינסטגרם.

ובכל זאת, רוב העסקים הקטנים בישראל מתעלמים מאימייל לגמרי. הם ממוקדים ברשתות החברתיות, משלמים אלפי שקלים על קמפיינים ממומנים, ושוכחים שיש להם רשימה של לקוחות שכבר קנו מהם.

## למה מייל עובד כל כך טוב?

### הקהל כבר שלך

ברשתות חברתיות אתה שוכר קהל. האלגוריתם מחליט מי רואה את הפוסט שלך, וברגע שאתה מפסיק לשלם, אתה נעלם. רשימת המייל שלך היא נכס שאתה הבעלים שלו. אף אחד לא יכול לקחת אותה ממך.

### שיעורי המרה גבוהים

הודעת מייל ממוצעת מגיעה לשיעור פתיחה של 20-25% ושיעור הקלקה של 3-5%. פוסט אורגני בפייסבוק? שיעור חשיפה של 2-5% מהעוקבים שלך. ההבדל ברור.

### עלות נמוכה

פלטפורמות כמו Mailchimp ו-Brevo מציעות תוכניות חינמיות עד 500 או 1,000 אנשי קשר. אפילו תוכניות בתשלום עולות ₪100-₪300 לחודש. בהשוואה ל-₪3,000-₪10,000 לחודש על פרסום ממומן, זה כלום.

## איך להתחיל (גם בלי ניסיון)

### שלב 1: בנו רשימה

התחילו עם מה שיש. לקוחות קיימים, אנשים שפנו אליכם, עוקבים שהשאירו פרטים. הוסיפו טופס הרשמה באתר עם הצעת ערך ברורה: "קבלו 10% הנחה על ההזמנה הראשונה" או "מדריך חינמי ל...".

### שלב 2: בחרו פלטפורמה

למתחילים, Brevo (לשעבר Sendinblue) היא הבחירה הטובה ביותר לעסקים ישראליים. תמיכה ב-RTL לעברית, ממשק נקי, ותוכנית חינמית נדיבה.

### שלב 3: תכתבו מיילים שאנשים רוצים לקרוא

לא מבצעים כל הזמן. לא ניוזלטרים משעממים. תנו ערך. שתפו ידע מקצועי, טיפים, מאחורי הקלעים של העסק. היחס שעובד: 80% ערך, 20% מכירה.

### שלב 4: שלחו בעקביות

פעם בשבוע זה מושלם. פעם בשבועיים זה בסדר. פעם בחודש זה המינימום. העיקר לא להיעלם ואז לחזור עם "הנחה מטורפת!!!".

## טעויות שעולות ביוקר

**קניית רשימות מייל.** זה לא עובד. אנשים שלא ביקשו לקבל ממך מייל לא יפתחו אותו, ידווחו כספאם, ויפגעו בדירוג שלך.

**שורות נושא גנריות.** "ניוזלטר חודש יוני" לא מעניין אף אחד. "3 טעויות שעולות לך ₪5,000 בחודש" כן.

**בלי סגמנטציה.** לקוח שקנה מוצר אחר צריך לקבל מייל אחר מלקוח חדש. תחלקו את הרשימה לקבוצות ותתאימו את המסרים.

## מה זה עולה עם מקצוענים?

ב-ETW אנחנו בונים מערכות שיווק במייל מלאות: אסטרטגיה, עיצוב תבניות, כתיבת תוכן, אוטומציות ודוחות. מתחילים מ-₪1,900 לחודש.

רוצים להבין כמה כסף הרשימה שלכם שווה? [קבעו שיחה חינם](https://calendly.com/dan-etw/30min) ונראה לכם בדיוק מה אפשר לעשות.
`,
    },
    "wix-vs-custom-website": {
      slug: "wix-vs-custom-website",
      title: "וויקס מול אתר מותאם אישית — מה עדיף לעסק שלך?",
      date: "2026-06-28",
      readTime: "8 דק׳",
      category: "מדריכים",
      metaDescription: "השוואה כנה בין בנייה עצמית בפלטפורמה לבין אתר שנבנה במיוחד בשבילך. יתרונות, חסרונות ומתי כל אחד שווה.",
      content: `
## התשובה הקצרה

אם אתה צריך אתר היום עם אפס תקציב ואפס ציפיות — Wix בסדר. לכל מקרה אחר, אתר מותאם אישית ישרת אותך טוב יותר.

עכשיו התשובה הארוכה.

## מה זה Wix בעצם?

Wix היא פלטפורמת בניית אתרים עם עורך גרירה ושחרור. אתה בוחר תבנית, משנה טקסטים ותמונות, ויש לך אתר. פשוט, מהיר, זול.

המחיר: ₪50-₪150 לחודש, תלוי בתוכנית.

## מה זה אתר מותאם אישית?

אתר שנבנה מאפס, בקוד, עם עיצוב ייחודי שלא קיים אצל אף עסק אחר. הכל מותאם בדיוק לצרכים שלך, לקהל היעד שלך, ולמטרות העסקיות שלך.

המחיר: ₪4,900-₪15,000+ חד-פעמי, תלוי בהיקף.

## השוואה ישירה

### מהירות טעינה

**Wix:** 3-6 שניות ממוצע. הקוד כבד, הפלטפורמה טוענת סקריפטים שאתה לא צריך.

**אתר מותאם:** 1-2 שניות. כל שורת קוד קיימת כי היא צריכה להיות שם.

למה זה חשוב? גוגל מעדיף אתרים מהירים. כל שנייה נוספת בטעינה מורידה את שיעור ההמרה ב-7%.

### SEO

**Wix:** השתפר הרבה בשנים האחרונות, אבל עדיין מוגבל. קשה לשלוט בכתובות URL, Schema markup מוגבל, מהירות פוגעת בדירוג.

**אתר מותאם:** שליטה מלאה. כל תגית, כל כתובת, כל פרמטר טכני מותאם בדיוק לאסטרטגיית ה-SEO שלך.

בשוק הישראלי, שבו התחרות על מילות מפתח בעברית הולכת וגדלה, היתרון הטכני הזה קריטי.

### עיצוב

**Wix:** יפה, אבל מוגבל לתבניות. בסוף כל האתרים נראים דומה. הלקוחות שלך מזהים את זה, גם אם הם לא יודעים לנסח למה.

**אתר מותאם:** ייחודי לחלוטין. המותג שלך בא לידי ביטוי בכל פיקסל. זה מה שיוצר רושם ראשוני חזק ובידול מהמתחרים.

### בעלות ושליטה

**Wix:** האתר לא באמת שלך. הוא חי על השרתים של Wix. אם הם מעלים מחירים, משנים תנאים, או סוגרים פיצ'ר שאתה תלוי בו, אין לך מה לעשות. אי אפשר לייצא את האתר ולעבור לפלטפורמה אחרת.

**אתר מותאם:** הקוד שלך. העיצוב שלך. האתר על השרת שאתה בוחר. רוצה לעבור ספק אחסון? בבקשה. רוצה להוסיף פיצ'ר מורכב? אפשר.

### עלות לאורך זמן

בואו נעשה חשבון לתקופה של 3 שנים:

**Wix:** ₪150/חודש × 36 = ₪5,400 + תוספים בתשלום (טפסים, אנליטיקה, אפליקציות) = ₪7,000-₪9,000

**אתר מותאם:** ₪7,000 חד-פעמי + ₪300/חודש אחסון ותחזוקה × 36 = ₪17,800

כן, אתר מותאם עולה יותר. אבל כשהאתר המותאם מביא יותר לקוחות בגלל מהירות, SEO ומיתוג חזק יותר, ההשקעה מחזירה את עצמה מהר.

## אז מתי Wix כן הבחירה הנכונה?

עסק שרק מתחיל, עם תקציב של ₪0 לאתר, שצריך משהו באוויר השבוע. פרילנסר שצריך עמוד נחיתה פשוט עם פורטפוליו. פרויקט זמני או ניסיוני.

## ומתי ללכת על מותאם אישית?

כשהאתר הוא כלי מכירות מרכזי. כשאתה מתחרה על מילות מפתח בגוגל. כשאתה רוצה למכור אונליין. כשאתה רוצה להיראות מקצועי ולא "עוד אחד עם Wix". כשאתה בונה מותג לטווח ארוך.

## איך אנחנו עובדים

ב-ETW אנחנו בונים אתרים מותאמים אישית מ-₪4,900. זמן אספקה: 2-4 שבועות. כולל עיצוב, פיתוח, SEO בסיסי, התאמה לנייד ופאנל ניהול תוכן.

רוצים לדעת מה הפתרון הנכון בשבילכם? [קבעו שיחה חינם](https://calendly.com/dan-etw/30min). אנחנו לא נדחוף אתכם לשום כיוון, רק נגיד את מה שאנחנו חושבים.
`,
    },
    "google-business-profile-guide": {
      slug: "google-business-profile-guide",
      title: "Google Business Profile — המדריך המלא לעסקים בישראל",
      date: "2026-07-01",
      readTime: "6 דק׳",
      category: "SEO",
      metaDescription: "איך להקים, לאופטם ולהפוך את הפרופיל העסקי שלך בגוגל למגנט לקוחות. כולל טיפים לדירוג במפות.",
      content: `
## הכלי החינמי שרוב העסקים מבזבזים

Google Business Profile (בעבר Google My Business) הוא אחד הכלים השיווקיים החזקים ביותר שקיימים. הוא חינמי לגמרי. ובכל זאת, 56% מהעסקים הקטנים בישראל לא תבעו את הפרופיל שלהם, ומאלה שכן, רובם מילאו את המינימום ושכחו מזה.

הפרופיל העסקי בגוגל הוא מה שמופיע כשמישהו מחפש את העסק שלך, או שירות כמו שלך, בגוגל. זה הכרטיס ביקור הראשון שלקוח פוטנציאלי רואה. תמונות, ביקורות, שעות פתיחה, כתובת, מספר טלפון, קישור לאתר. הכל שם.

## איך מקימים (10 דקות, לא יותר)

### שלב 1: תבעו את הפרופיל

היכנסו ל-[business.google.com](https://business.google.com) והירשמו. חפשו את שם העסק שלכם. אם הוא כבר קיים (גוגל יוצרת פרופילים אוטומטיים), תבעו בעלות. אם לא, צרו חדש.

### שלב 2: אימות

גוגל ישלחו גלויה עם קוד לכתובת העסק (לוקח 5-14 ימי עסקים), או שתוכלו לאמת בטלפון או באימייל אם העסק עומד בקריטריונים. בלי אימות, הפרופיל לא יופיע.

### שלב 3: מלאו את הכל

ממש את הכל. שם עסק מדויק (בדיוק כמו שמופיע בחשבונית), קטגוריה ראשית (תבחרו את הספציפית ביותר), תיאור (750 תווים, תנצלו את כולם), שעות פתיחה, כתובת, מספר טלפון, אתר אינטרנט.

## אופטימיזציה שעושה את ההבדל

### תמונות, תמונות, תמונות

עסקים עם 10+ תמונות מקבלים 35% יותר הקלקות לאתר. העלו תמונות של העסק מבחוץ ומבפנים, של הצוות, של המוצרים או התוצאות שלכם. לא תמונות סטוק. תמונות אמיתיות, באיכות טובה.

### ביקורות הן הזהב

ביקורות גוגל משפיעות ישירות על הדירוג שלכם במפות. כל שבוע, בקשו מלקוח מרוצה לכתוב ביקורת. לא בהודעה כללית, אלא אישית. "היי, נהניתי לעבוד איתך. אם יש לך דקה, ביקורת בגוגל תעזור לנו מאוד" ולשלוח לינק ישיר.

הטריק: אפשר ליצור לינק ישיר לביקורת מתוך לוח הבקרה של הפרופיל. שלחו אותו בוואטסאפ ללקוח מיד אחרי שירות מוצלח.

**חשוב:** תגיבו לכל ביקורת. גם חיובית, גם שלילית. גוגל מתגמל עסקים פעילים.

### פוסטים (כן, יש דבר כזה)

רוב העסקים לא יודעים שאפשר לפרסם פוסטים בפרופיל העסקי. מבצעים, אירועים, חדשות, מוצרים חדשים. הפוסטים מופיעים ישירות בתוצאות החיפוש ונותנים לכם יותר נוכחות.

פרסמו פוסט חדש כל שבוע. זה לוקח 5 דקות ושומר על הפרופיל חי ורלוונטי.

### קטגוריות משניות

מלבד הקטגוריה הראשית, אפשר להוסיף קטגוריות משניות. אם אתם מסעדה שעושה גם קייטרינג, הוסיפו "שירותי קייטרינג" כקטגוריה משנית. זה מרחיב את החיפושים שבהם אתם מופיעים.

## איך מדרגים גבוה יותר במפות

שלושת הגורמים שגוגל משתמש בהם לדירוג מפות:

**רלוונטיות:** כמה הפרופיל שלכם מתאים לחיפוש. מילוי מלא של כל השדות עוזר.

**מרחק:** כמה העסק קרוב למי שמחפש. על זה אין שליטה.

**בולטות:** כמה העסק שלכם ידוע ואמין. ביקורות, קישורים לאתר, נוכחות בספריות עסקיות, כל אלה עוזרים.

## טעויות נפוצות

**שם עסק עמוס מילות מפתח.** "שרברב חירום תל אביב 24/7 הכי טוב" זה לא שם עסק. גוגל מעניש על זה. תשתמשו בשם העסק האמיתי.

**שעות לא מעודכנות.** אם הלקוח מגיע ואתם סגורים, זו ביקורת שלילית. עדכנו שעות חגים מראש.

**התעלמות מביקורות שליליות.** שתיקה נראית כמו הודאה. תגיבו מקצועית, בלי ויכוחים, עם הצעה לפתרון.

## צריכים שמישהו יטפל בזה?

אנחנו מנהלים פרופילים עסקיים בגוגל כחלק מחבילות ה-SEO שלנו, מ-₪2,900 לחודש. הקמה, אופטימיזציה, תוכן שוטף וניטור ביקורות. [קבעו שיחה חינם](https://calendly.com/dan-etw/30min) ונבדוק יחד מה המצב של הפרופיל שלכם.
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
    "email-marketing-roi": {
      slug: "email-marketing-roi",
      title: "Email Marketing: Why It's Still the Most Profitable Channel in 2026",
      date: "2026-06-25",
      readTime: "6 min",
      category: "Marketing",
      metaDescription: "4,200% ROI. Why businesses neglecting email are leaving money on the table and how to start without a big budget.",
      content: `
## 4,200% Return on Investment. Not a Typo.

For every shekel you invest in email marketing, you get 42 back on average. No other marketing channel comes close. Not Facebook, not Google Ads, not Instagram.

Yet most small businesses in Israel ignore email entirely. They pour thousands of shekels into paid campaigns, chase followers on social media, and forget they already have a list of people who bought from them.

## Why Email Works So Well

### You Own the Audience

On social media, you rent an audience. The algorithm decides who sees your post, and the moment you stop paying, you vanish. Your email list is an asset you own. Nobody can take it away.

### High Conversion Rates

An average email gets a 20-25% open rate and 3-5% click-through rate. An organic Facebook post? 2-5% reach of your followers. The difference is clear.

### Low Cost

Platforms like Mailchimp and Brevo offer free plans up to 500 or 1,000 contacts. Even paid plans run ₪100-₪300/month. Compared to ₪3,000-₪10,000/month on paid ads, that is nothing.

## How to Start (Even With Zero Experience)

### Step 1: Build a List

Start with what you have. Existing customers, people who contacted you, followers who left their details. Add a signup form on your site with a clear value offer: "Get 10% off your first order" or "Free guide to...".

### Step 2: Pick a Platform

For beginners, Brevo (formerly Sendinblue) is the best choice for Israeli businesses. RTL support for Hebrew, clean interface, and a generous free plan.

### Step 3: Write Emails People Want to Read

Not promotions every time. Not boring newsletters. Deliver value. Share expertise, tips, behind-the-scenes of your business. The ratio that works: 80% value, 20% selling.

### Step 4: Send Consistently

Once a week is perfect. Biweekly is fine. Monthly is the minimum. The key is not to disappear and then come back with "CRAZY SALE!!!".

## Mistakes That Cost You

**Buying email lists.** It does not work. People who never asked to hear from you will not open your email, will report it as spam, and will tank your sender reputation.

**Generic subject lines.** "June Newsletter" interests nobody. "3 mistakes costing you ₪5,000/month" does.

**No segmentation.** A repeat customer needs a different email than a new lead. Segment your list into groups and tailor the message.

## What It Costs With Professionals

At ETW we build complete email marketing systems: strategy, template design, copywriting, automations and reporting. Starting at ₪1,900/month.

Want to know how much your list is actually worth? [Book a free call](https://calendly.com/dan-etw/30min) and we will show you exactly what is possible.
`,
    },
    "wix-vs-custom-website": {
      slug: "wix-vs-custom-website",
      title: "Wix vs Custom Website - What's Better for Your Business?",
      date: "2026-06-28",
      readTime: "8 min",
      category: "Guides",
      metaDescription: "An honest comparison between DIY platforms and a custom-built site. Pros, cons and when each one is worth it.",
      content: `
## The Short Answer

If you need a site today with zero budget and zero expectations, Wix is fine. For every other case, a custom website will serve you better.

Now the long answer.

## What Is Wix, Really?

Wix is a website builder with a drag-and-drop editor. You pick a template, change the text and images, and you have a website. Simple, fast, cheap.

The price: ₪50-₪150/month, depending on the plan.

## What Is a Custom Website?

A site built from scratch, in code, with a unique design that no other business has. Everything is tailored to your needs, your audience, and your business goals.

The price: ₪4,900-₪15,000+ one-time, depending on scope.

## Head-to-Head Comparison

### Loading Speed

**Wix:** 3-6 seconds average. The code is heavy, the platform loads scripts you do not need.

**Custom:** 1-2 seconds. Every line of code exists because it has to.

Why it matters: Google favors fast sites. Every extra second of loading time drops your conversion rate by 7%.

### SEO

**Wix:** Has improved a lot in recent years, but still limited. Hard to control URLs, limited Schema markup, speed hurts ranking.

**Custom:** Full control. Every tag, every URL, every technical parameter is tuned to your SEO strategy.

In the Israeli market, where competition for Hebrew keywords keeps growing, this technical edge is critical.

### Design

**Wix:** Nice, but limited to templates. Eventually every site looks the same. Your customers can tell, even if they cannot articulate why.

**Custom:** Completely unique. Your brand shows in every pixel. That is what creates a strong first impression and differentiates you from competitors.

### Ownership and Control

**Wix:** The site is not really yours. It lives on Wix's servers. If they raise prices, change terms, or kill a feature you depend on, there is nothing you can do. You cannot export the site and move to another platform.

**Custom:** Your code. Your design. The site on whatever server you choose. Want to switch hosting? Go ahead. Want to add a complex feature? Possible.

### Cost Over Time

Let us do the math for a 3-year period:

**Wix:** ₪150/month x 36 = ₪5,400 + paid add-ons (forms, analytics, apps) = ₪7,000-₪9,000

**Custom:** ₪7,000 one-time + ₪300/month hosting and maintenance x 36 = ₪17,800

Yes, custom costs more. But when the custom site brings more customers through better speed, SEO and stronger branding, the investment pays for itself fast.

## When Wix IS the Right Choice

A brand-new business with ₪0 budget for a site that needs something live this week. A freelancer who needs a simple landing page with a portfolio. A temporary or experimental project.

## When to Go Custom

When the website is a core sales tool. When you compete for Google keywords. When you sell online. When you want to look professional, not like "another Wix site." When you are building a long-term brand.

## How We Work

At ETW we build custom websites starting at ₪4,900. Delivery time: 2-4 weeks. Includes design, development, basic SEO, mobile optimization and a content management panel.

Want to know the right solution for you? [Book a free call](https://calendly.com/dan-etw/30min). We will not push you in any direction, just tell you what we think.
`,
    },
    "google-business-profile-guide": {
      slug: "google-business-profile-guide",
      title: "Google Business Profile - Complete Guide for Businesses in Israel",
      date: "2026-07-01",
      readTime: "6 min",
      category: "SEO",
      metaDescription: "How to set up, optimize and turn your Google Business Profile into a customer magnet. Including tips for Maps ranking.",
      content: `
## The Free Tool Most Businesses Waste

Google Business Profile (formerly Google My Business) is one of the most powerful marketing tools that exists. It is completely free. And yet, 56% of small businesses in Israel have not claimed their profile, and of those that have, most filled in the bare minimum and forgot about it.

Your Google Business Profile is what shows up when someone searches for your business, or a service like yours, on Google. It is the first business card a potential customer sees. Photos, reviews, hours, address, phone number, website link. Everything is right there.

## How to Set It Up (10 Minutes, No More)

### Step 1: Claim Your Profile

Go to [business.google.com](https://business.google.com) and sign up. Search for your business name. If it already exists (Google creates profiles automatically), claim ownership. If not, create a new one.

### Step 2: Verification

Google will send a postcard with a code to your business address (takes 5-14 business days), or you may be able to verify by phone or email if your business meets certain criteria. Without verification, the profile will not appear.

### Step 3: Fill In Everything

Literally everything. Exact business name (exactly as it appears on invoices), primary category (pick the most specific one), description (750 characters, use them all), hours, address, phone number, website.

## Optimization That Makes the Difference

### Photos, Photos, Photos

Businesses with 10+ photos get 35% more clicks to their website. Upload photos of the business exterior and interior, the team, your products or results. Not stock photos. Real photos, good quality.

### Reviews Are Gold

Google reviews directly affect your Maps ranking. Every week, ask a happy customer to write a review. Not a mass message, but personally. "Hey, great working with you. If you have a minute, a Google review would help us a lot" and send a direct link.

The trick: you can generate a direct review link from the profile dashboard. Send it via WhatsApp to the customer right after a successful service.

**Important:** Respond to every review. Positive and negative. Google rewards active businesses.

### Posts (Yes, That Is a Thing)

Most businesses do not know you can publish posts on your business profile. Promotions, events, news, new products. The posts appear directly in search results and give you more visibility.

Publish a new post every week. It takes 5 minutes and keeps the profile alive and relevant.

### Secondary Categories

Besides the primary category, you can add secondary categories. If you are a restaurant that also does catering, add "Catering Service" as a secondary category. This expands the searches where you appear.

## How to Rank Higher in Maps

The three factors Google uses for Maps ranking:

**Relevance:** How well your profile matches the search. Filling in all fields completely helps.

**Distance:** How close the business is to the searcher. You cannot control this.

**Prominence:** How well-known and trusted your business is. Reviews, website links, presence in business directories all help.

## Common Mistakes

**Keyword-stuffed business name.** "Emergency Plumber Tel Aviv 24/7 Best Ever" is not a business name. Google penalizes this. Use your actual business name.

**Outdated hours.** If a customer shows up and you are closed, that is a negative review waiting to happen. Update holiday hours in advance.

**Ignoring negative reviews.** Silence looks like admission. Respond professionally, without arguing, with a solution.

## Need Someone to Handle This?

We manage Google Business Profiles as part of our SEO packages, starting at ₪2,900/month. Setup, optimization, ongoing content and review monitoring. [Book a free call](https://calendly.com/dan-etw/30min) and we will check the state of your profile together.
`,
    },
  },
};
