
import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const A = "/assets/";

function Icon({ name, size = 28 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const paths = {
    award: <><circle cx="12" cy="8" r="5"/><path d="M8.7 12 7 22l5-3 5 3-1.7-10"/></>,
    whisk: <><path d="M16.7 3.3c-3-3-8 1-6.4 4.8 1.3 3.1 4.5 5.8 6.8 7.6"/><path d="M14.9 4.9c-1.4-.8-3.4.5-2.9 2.3.7 2.2 3.6 4.8 6.2 6.8"/><path d="m17.2 14 3.8 3.8-3.2 3.2-3.8-3.8z"/></>,
    trainer: <><circle cx="12" cy="7" r="4"/><path d="M5 21c.5-5 2.8-8 7-8s6.5 3 7 8"/><path d="M9 17h6"/></>,
    group: <><circle cx="12" cy="7" r="3"/><circle cx="5.5" cy="9" r="2.2"/><circle cx="18.5" cy="9" r="2.2"/><path d="M7 21c.4-4.4 2-7 5-7s4.6 2.6 5 7"/><path d="M1.5 20c.2-3.4 1.5-5.4 4-5.4 1 0 1.8.3 2.5.9"/><path d="M22.5 20c-.2-3.4-1.5-5.4-4-5.4-1 0-1.8.3-2.5.9"/></>,
    star: <path d="m12 3 2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9z"/>,
    bag: <><path d="M6 8h12l-1 12H7z"/><path d="M9 8a3 3 0 0 1 6 0"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    arrow: <><path d="M5 12h14"/><path d="m9 8-4 4 4 4"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17.5 6.5h.01"/></>,
    play: <><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4z"/></>,
    menu: <><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="M18 6 6 18"/></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const courses = [
  {
    title: "دورات الهوايات والحضور",
    text: "تجربة ممتعة ومفيدة لكل محبي الحلويات",
    image: "course-1.webp",
    icon: "group",
  },
  {
    title: "دورات متقدمة",
    text: "طوري مهاراتك وارتقي باحترافك في عالم الكيك",
    image: "course-2.webp",
    icon: "award",
  },
  {
    title: "دورات تشكيل وتزيين الكيك",
    text: "تعلمي أسرار التزيين واللمسات الفنية الحديثة",
    image: "course-3.webp",
    icon: "trainer",
  },
  {
    title: "دورات الحلويات الشرقية والغربية",
    text: "وصفات احترافية بنكهات عصرية ومميزة",
    image: "course-4.webp",
    icon: "award",
  },
];

const products = [
  ["كيك شوكولاتة فاخر", "product-1.webp"],
  ["موس الشوكولاتة", "product-2.webp"],
  ["تشيز كيك فاخر", "product-3.webp"],
  ["كيكة الورد", "product-4.webp"],
  ["أصابع البراوني", "product-5.webp"],
];

const features = [
  ["شهادات معتمدة", "award"],
  ["تطبيق عملي مكثف", "whisk"],
  ["مدربات محترفات", "trainer"],
  ["بيئة تعليمية ملهمة", "group"],
];

const testimonials = [
  {
    name: "مها محمد",
    text: "كانت التجربة رائعة حقًا. تعلمت الكثير واكتسبت ثقة أكبر بمهاراتي.",
  },
  {
    name: "نورة عبدالله",
    text: "المدربات قمة في الاحتراف والوضوح، وتجربة التدريب منظمة وممتعة.",
  },
  {
    name: "ريم خالد",
    text: "من أفضل التجارب التي خضتها. أنصح كل محبة للحلويات بالانضمام.",
  },
];

const faqs = [
  ["ما هي مواعيد الدورات التدريبية؟", "تختلف المواعيد حسب البرنامج. تظهر المواعيد المتاحة داخل صفحة كل دورة قبل إتمام التسجيل."],
  ["هل أحصل على شهادة معتمدة؟", "نعم، الدورات المؤهلة للشهادة يظهر اعتمادها بوضوح في صفحة الدورة وتفاصيل التسجيل."],
  ["هل يمكنني حضور الدورة أونلاين؟", "بعض البرامج يمكن تقديمها عن بعد، بينما تعتمد البرامج العملية على الحضور المباشر."],
  ["ما هي متطلبات التسجيل؟", "يمكن التسجيل مباشرة من الموقع، ثم إكمال بيانات المتدربة واختيار الموعد وطريقة الدفع."],
  ["هل الدورات مناسبة للمبتدئات؟", "نعم. لدينا مسارات تأسيسية للمبتدئات ومسارات متقدمة للمحترفات."],
  ["كيف يمكنني التسجيل في الدورة؟", "اختاري الدورة المناسبة ثم اضغطي زر التسجيل واتّبعي خطوات الحجز والدفع."],
];


function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title reveal">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}

function App() {
  const [openFaq, setOpenFaq] = useState(null);
  const [menu, setMenu] = useState(false);
  const productRef = useRef(null);

  useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      }),
      { threshold: 0.12 }
    );
    items.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const move = (e) => {
      root.style.setProperty("--mx", `${e.clientX}px`);
      root.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const scrollProducts = (dir) => {
    productRef.current?.scrollBy({ left: dir * 310, behavior: "smooth" });
  };

  return (
    <div className="site-shell">
      <div className="pointer-glow" aria-hidden="true" />

      <header className="topbar">
        <div className="nav-wrap">
          <a className="brand" href="#home" aria-label="معهد أريج الورد للتدريب">
            <img src={`${A}logo.webp`} alt="معهد أريج الورد للتدريب" />
          </a>

          <nav className={`nav ${menu ? "nav-open" : ""}`}>
            <a href="#home">الرئيسية</a>
            <a href="#story">عن المركز</a>
            <a href="#courses">الدورات التدريبية</a>
            <a href="#products">المنتجات</a>
            <a href="#footer">تواصل معنا</a>
          </nav>

          <a className="btn btn-dark nav-cta" href="#courses">
            احجزي مقعدك الآن <Icon name="arrow" size={17} />
          </a>

          <button className="menu-btn" onClick={() => setMenu(!menu)} aria-label="القائمة">
            <Icon name={menu ? "close" : "menu"} />
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-media reveal">
            <img src={`${A}hero-cakes.webp`} alt="ثلاث كيكات فاخرة" />
            <div className="soft-spotlight" aria-hidden="true" />
          </div>

          <div className="hero-copy reveal">
            <p className="eyebrow">تعلمي .. أبدعي .. واصنعي شغفك</p>
            <h1>مركز أريج الورد<br />للتدريب</h1>
            <p className="hero-desc">
              دورات متخصصة في فنون الكيك والحلويات
              <br />
              وتقديم المهارات لصناعة مستقبل أكثر حلاوة
            </p>
            <a className="btn btn-dark hero-btn" href="#courses">
              <Icon name="play" size={22} />
              احجزي مقعدك الآن
            </a>
          </div>
        </section>

        <section className="courses-section" id="courses">
          <div className="container">
            <div className="section-head reveal">
              <a className="outline-pill" href="#courses">اكتشفي جميع الدورات ←</a>
              <SectionTitle
                title="مساراتنا التدريبية"
                subtitle="اختاري المسار الذي يناسب شغفك وطموحك"
              />
            </div>

            <div className="course-grid">
              {courses.map((c, i) => (
                <article className="course-card reveal" key={c.title} style={{ "--delay": `${i * 60}ms` }}>
                  <div className="course-image">
                    <img src={`${A}${c.image}`} alt="" />
                    <span className="floating-icon"><Icon name={c.icon} size={22}/></span>
                  </div>
                  <div className="course-body">
                    <h3>{c.title}</h3>
                    <p>{c.text}</p>
                    <a href="#footer">عرض الدورات ←</a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="products-section" id="products">
          <div className="container">
            <div className="section-head reveal">
              <a className="outline-pill" href="#products">تسوقي جميع المنتجات ←</a>
              <SectionTitle title="منتجات مختارة" subtitle="مجموعة من إبداعاتنا المميزة" />
            </div>

            <div className="product-shell">
              <button className="round-arrow left" onClick={() => scrollProducts(-1)} aria-label="السابق">
                <Icon name="chevron" size={20} />
              </button>
              <div className="products-track" ref={productRef}>
                {products.map(([name, image]) => (
                  <article className="product-card reveal" key={name}>
                    <img src={`${A}${image}`} alt={name} />
                    <strong>{name}</strong>
                  </article>
                ))}
              </div>
              <button className="round-arrow right" onClick={() => scrollProducts(1)} aria-label="التالي">
                <Icon name="chevron" size={20} />
              </button>
            </div>
          </div>
        </section>

        <section className="feature-strip">
          <div className="container feature-grid">
            {features.map(([title, icon], i) => (
              <div className="feature-item reveal" key={title} style={{ "--delay": `${i * 50}ms` }}>
                <Icon name={icon} size={38} />
                <strong>{title}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="testimonials-section">
          <div className="container">
            <SectionTitle title="آراء متدرباتنا" subtitle="قصص حقيقية من رحلتنا معهم" />
            <div className="testimonial-grid">
              {testimonials.map((t, i) => (
                <article className="testimonial reveal" key={t.name} style={{ "--delay": `${i * 60}ms` }}>
                  <p>{t.text}</p>
                  <div className="testimonial-footer">
                    <div className="stars">★★★★★</div>
                    <strong>{t.name}</strong>
                  </div>
                  <span className="quote">”</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="gallery-section">
          <div className="container">
            <SectionTitle title="نتائج متدرباتنا" subtitle="إبداعات حقيقية .. وقصص نجاح ملهمة" />
            <div className="gallery-grid">
             {Array.from({ length: 6 }, (_, i) => (
  <figure className="gallery-item reveal" key={i}>
    <img
      src={`/assets/result-${i + 1}.webp`}
      alt={`نتيجة متدربة ${i + 1}`}
    />
  </figure>
))}
            </div>
          </div>
        </section>

        <section className="story-section" id="story">
          <div className="container story-grid">
            <div className="story-copy reveal">
              <h2>قصتنا</h2>
              <p>
                مركز أريج الورد للتدريب هو وجهتك المتخصصة في تعليم فنون الكيك والحلويات،
                ونؤمن بأن الإبداع هو وصفة النجاح الأجمل. لذلك نقدم برامج تدريبية مهنية
                وعملية تساعدك على تطوير مهاراتك وتحويل شغفك إلى مهارة.
              </p>
              <a className="outline-pill" href="#footer">تعرفي على قصتنا ←</a>
            </div>
            <div className="story-image reveal">
              <img src={`${A}story.webp`} alt="مدربة تزين كيكة" />
            </div>
          </div>
        </section>

        <section className="stats-strip">
          <div className="container stats-grid">
            <div className="stat reveal"><Icon name="award"/><b>+5000</b><span>متدربة سعيدة</span></div>
            <div className="stat reveal"><Icon name="bag"/><b>+4500</b><span>منتج تم تقديمه</span></div>
            <div className="stat reveal"><Icon name="star"/><b>4.8</b><span>تقييم المتدربات</span></div>
            <div className="stat reveal"><Icon name="award"/><b>+5</b><span>سنوات من العطاء والخبرة</span></div>
          </div>
        </section>

        <section className="faq-section">
          <div className="container">
            <div className="section-head reveal">
              <a className="outline-pill" href="#faq">جميع الأسئلة +</a>
              <SectionTitle title="الأسئلة الشائعة" />
            </div>
            <div className="faq-grid" id="faq">
              {faqs.map(([q, a], i) => (
                <div className={`faq-item reveal ${openFaq === i ? "open" : ""}`} key={q}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                    <span>{q}</span>
                    <span className="faq-plus">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  <div className="faq-answer"><p>{a}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer id="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src={`${A}logo.webp`} alt="معهد أريج الورد للتدريب" />
          </div>

          <div className="newsletter">
            <h3>اشتركي في نشرتنا البريدية</h3>
            <p>ليصلك كل جديد من الدورات والمنتجات والعروض الحصرية</p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="بريدك الإلكتروني" aria-label="البريد الإلكتروني" />
              <button className="btn btn-rose">اشتراك</button>
            </form>
          </div>

          <div className="footer-links">
            <h4>روابط سريعة</h4>
            <a href="#home">الرئيسية</a>
            <a href="#courses">الدورات التدريبية</a>
            <a href="#products">المنتجات</a>
          </div>

          <div className="social">
            <h4>تابعونا على</h4>
            <div className="social-row">
              <a href="#" aria-label="Instagram"><Icon name="instagram" size={20}/></a>
              <a href="#" aria-label="TikTok">♪</a>
              <a href="#" aria-label="YouTube">▶</a>
              <a href="#" aria-label="Snapchat">◉</a>
            </div>
            <small>جميع الحقوق محفوظة © 2026 مركز أريج الورد للتدريب</small>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
