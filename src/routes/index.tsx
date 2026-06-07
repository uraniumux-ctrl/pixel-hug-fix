import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Globe,
  Sparkles,
  Code2,
  Cpu,
  Layers,
  Zap,
  Rocket,
  Star,
  Hand,
  ArrowDown,
  Twitter,
  Instagram,
  Dribbble,
  Send,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Mercer — Creative Engineer Portfolio" },
      {
        name: "description",
        content:
          "Bilingual neo-brutalist portfolio for Alex Mercer — interactive graphics, physics-driven UI, and full-stack engineering.",
      },
      { property: "og:title", content: "Alex Mercer — Creative Engineer" },
      {
        property: "og:description",
        content: "Interactive physics-driven bilingual portfolio.",
      },
    ],
  }),
  component: Index,
});

type Banner = {
  label: string;
  color: string;
  text: string;
  Icon: typeof Code2;
};

const BANNERS: Banner[] = [
  { label: "React", color: "#a374ff", text: "#fff", Icon: Code2 },
  { label: "TypeScript", color: "#1982c4", text: "#fff", Icon: Cpu },
  { label: "Node.js", color: "#3eff8b", text: "#000", Icon: Layers },
  { label: "WebGL", color: "#ff65c3", text: "#fff", Icon: Sparkles },
  { label: "Three.js", color: "#ffca3a", text: "#000", Icon: Star },
  { label: "GSAP", color: "#a374ff", text: "#fff", Icon: Zap },
  { label: "Rust", color: "#ff7a59", text: "#000", Icon: Rocket },
  { label: "Figma", color: "#fff", text: "#000", Icon: Hand },
];

function Index() {
  return (
    <div className="brutal-root">
      <style>{CSS}</style>

      <header className="brutal-header">
        <div className="brutal-logo">
          <Sparkles size={18} strokeWidth={3} />
          <span>ALEX // ملف التعريف</span>
        </div>
        <div className="lang-badge">
          <Globe size={16} strokeWidth={3} />
          EN / AR
        </div>
      </header>

      <main className="cv-grid">
        {/* Profile */}
        <section className="brutal-card">
          <div className="card-tag">
            <Code2 size={14} strokeWidth={3} /> CREATIVE ENGINEER · مهندس برمجيات
          </div>

          <div className="profile-container">
            <div className="avatar-frame">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Alex Mercer portrait"
              />
            </div>
            <div>
              <h1 className="profile-name">Alex Mercer</h1>
              <h2 className="profile-name-ar">أليكس ميرسر</h2>
            </div>
          </div>

          <h2 className="section-title">
            <span>About Me</span>
            <span className="title-ar">نبذة عني</span>
          </h2>

          <div className="bilingual-row">
            <p className="bi-desc">
              Full-stack engineer specialised in interactive graphics, dynamic
              physics architectures, and production-ready high-performance systems.
            </p>
            <p className="bi-desc" lang="ar">
              مهندس برمجيات متكامل متخصص في بيئات الجرافيكس التفاعلية وهندسة
              الواجهات وبناء أنظمة برمجية متكاملة بأداء عالٍ.
            </p>
          </div>

          <div className="contact-row">
            <a href="mailto:contact@example.com" className="contact-button">
              <Mail size={18} strokeWidth={2.5} />
              <span>contact@example.com</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="contact-button">
              <Linkedin size={18} strokeWidth={2.5} />
              <span>LinkedIn Profile</span>
            </a>
            <a href="tel:+123456789" className="contact-button">
              <Phone size={18} strokeWidth={2.5} />
              <span>+123 456 789</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="contact-button">
              <Github size={18} strokeWidth={2.5} />
              <span>GitHub Hub</span>
            </a>
          </div>
        </section>

        {/* Stack card — static pill grid (no physics here, kept tidy) */}
        <section className="brutal-card stack-card">
          <div className="card-tag tag-accent">
            <Zap size={14} strokeWidth={3} /> STACK · المنظومة التقنية
          </div>
          <h2 className="section-title">
            <span>Toolbelt</span>
            <span className="title-ar">الأدوات</span>
          </h2>
          <div className="stack-grid">
            {BANNERS.map(({ label, color, text, Icon }) => (
              <div
                key={label}
                className="stack-pill"
                style={{ background: color, color: text }}
              >
                <Icon size={16} strokeWidth={3} />
                {label}
              </div>
            ))}
          </div>
          <p className="hint">
            <ArrowDown size={14} strokeWidth={3} /> scroll down — the banners
            below collapse under gravity
          </p>
        </section>

        {/* Projects */}
        <section className="project-showcase">
          <div className="brutal-card section-head">
            <h2 className="section-title" style={{ margin: 0 }}>
              <span>Featured Systems</span>
              <span className="title-ar">أبرز المشاريع</span>
            </h2>
          </div>

          {PROJECTS.map((p) => (
            <article key={p.title} className="project-subcard">
              <div className="project-banner-mock">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-details">
                <h3>{p.title}</h3>
                <div className="bilingual-row">
                  <div className="bi-desc">{p.en}</div>
                  <div className="bi-desc" lang="ar">
                    {p.ar}
                  </div>
                </div>
                <a className="project-link" href="#">
                  View case study <ChevronRight size={14} strokeWidth={3} />
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* PHYSICS BANNERS — static in flow, fall on scroll */}
      <PhysicsBanners />

      <footer className="brutal-footer">
        <div className="footer-container">
          <div className="footer-branding">
            <h3>Let's build something loud.</h3>
            <p>
              Available for selected freelance & contract engagements across
              interactive engineering, motion design, and product systems.
            </p>
            <div className="footer-socials">
              <a className="social-icon-btn" href="#" aria-label="Twitter">
                <Twitter size={18} strokeWidth={2.5} />
              </a>
              <a className="social-icon-btn" href="#" aria-label="Instagram">
                <Instagram size={18} strokeWidth={2.5} />
              </a>
              <a className="social-icon-btn" href="#" aria-label="Dribbble">
                <Dribbble size={18} strokeWidth={2.5} />
              </a>
              <a className="social-icon-btn" href="#" aria-label="GitHub">
                <Github size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Navigate</h4>
            <ul>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> Work</a></li>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> About</a></li>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> Journal</a></li>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> Contact</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:contact@example.com"><Mail size={12} strokeWidth={3} /> contact@example.com</a></li>
              <li><a href="tel:+123456789"><Phone size={12} strokeWidth={3} /> +123 456 789</a></li>
              <li><a href="#"><Send size={12} strokeWidth={3} /> Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Alex Mercer · All rights reserved</p>
          <p>Built with React · Matter.js · loud typography</p>
        </div>
      </footer>
    </div>
  );
}

const PROJECTS = [
  {
    title: "01 // Neural Core Engine",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    en: "Real-time visualisation layer mapping ML pipelines onto a GPU canvas — sub-frame latency.",
    ar: "طبقة تصوّر فورية ترسم مسارات تعلم الآلة على لوحة GPU بزمن استجابة دون الإطار.",
  },
  {
    title: "02 // Cryptographic Grid",
    img: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=600&q=80",
    en: "Edge-deployed zero-trust mesh with custom signature scheme and audited bindings.",
    ar: "شبكة انعدام الثقة منشورة على الحافة مع نظام توقيع مخصص وروابط مدققة.",
  },
  {
    title: "03 // Motion OS",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
    en: "Component library powering 40+ marketing sites with physics-grade choreography.",
    ar: "مكتبة مكونات تُشغّل أكثر من 40 موقعًا تسويقيًا بتنسيق حركي على مستوى الفيزياء.",
  },
  {
    title: "04 // Studio Tools",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    en: "Internal tooling for a design studio — collaborative canvases, build pipelines, devops.",
    ar: "أدوات داخلية لاستوديو تصميم — لوحات تعاون ومسارات بناء وعمليات تشغيل.",
  },
];

/* -------------------------------------------------------------- */
/* PHYSICS BANNERS                                                 */
/* Banners render in normal flow (static & in correct place).      */
/* On first scroll a fixed Matter.js canvas activates: each banner */
/* becomes a rigid body at its current screen position and falls   */
/* under gravity, colliding & stacking on top of one another.      */
/* -------------------------------------------------------------- */
function PhysicsBanners() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bannerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activated, setActivated] = useState(false);

  // Banner content for the physics ribbons
  const ribbons = [
    {
      bg: "#ff65c3",
      color: "#000",
      angle: -1.2,
      items: ["DESIGN", "BUILD", "SHIP", "تصميم", "بناء", "إطلاق"],
    },
    {
      bg: "#a374ff",
      color: "#fff",
      angle: 1,
      items: ["INTERACTIVE", "GRAPHICS", "MOTION", "حركة", "تفاعل", "جرافيكس"],
    },
    {
      bg: "#3eff8b",
      color: "#000",
      angle: -0.6,
      items: ["FULL · STACK", "REACT", "WEBGL", "أنظمة", "تجارب", "أداء"],
    },
    {
      bg: "#ffca3a",
      color: "#000",
      angle: 0.8,
      items: ["PRODUCTION", "GRADE", "ENGINEERING", "إنتاج", "هندسة", "جودة"],
    },
  ];

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 80) {
        setActivated(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!activated || !canvasRef.current || !wrapRef.current) return;

    const banners = bannerRefs.current.filter(Boolean) as HTMLDivElement[];
    if (banners.length === 0) return;

    const W = window.innerWidth;
    const H = window.innerHeight;
    const canvas = canvasRef.current;

    const engine = Matter.Engine.create();
    engine.gravity.y = 1.2;

    const render = Matter.Render.create({
      canvas,
      engine,
      options: {
        width: W,
        height: H,
        wireframes: false,
        background: "transparent",
        pixelRatio: window.devicePixelRatio,
      },
    });

    // Walls
    const wallOpts = { isStatic: true, render: { visible: false } };
    const floor = Matter.Bodies.rectangle(W / 2, H + 30, W * 2, 60, wallOpts);
    const left = Matter.Bodies.rectangle(-30, H / 2, 60, H * 2, wallOpts);
    const right = Matter.Bodies.rectangle(W + 30, H / 2, 60, H * 2, wallOpts);
    Matter.Composite.add(engine.world, [floor, left, right]);

    // Build a body per banner at its current screen position
    type Pair = { body: Matter.Body; el: HTMLDivElement; w: number; h: number };
    const pairs: Pair[] = [];

    banners.forEach((el, i) => {
      const r = el.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const body = Matter.Bodies.rectangle(cx, cy, r.width, r.height, {
        restitution: 0.35,
        friction: 0.4,
        density: 0.0025,
        angle: ((ribbons[i]?.angle ?? 0) * Math.PI) / 180,
        render: { visible: false },
      });
      Matter.Composite.add(engine.world, body);
      pairs.push({ body, el, w: r.width, h: r.height });

      // Take the element out of flow so physics drives position
      el.style.position = "fixed";
      el.style.left = "0";
      el.style.top = "0";
      el.style.margin = "0";
      el.style.width = r.width + "px";
      el.style.transform = `translate(${cx - r.width / 2}px, ${cy - r.height / 2}px) rotate(${ribbons[i]?.angle ?? 0}deg)`;
      el.style.willChange = "transform";
      el.style.transition = "none";
      el.style.zIndex = "30";
    });

    // Mouse drag
    const mouse = Matter.Mouse.create(canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    Matter.Composite.add(engine.world, mouseConstraint);
    // Re-enable scroll passthrough on wheel
    (mouse as unknown as { element: HTMLElement }).element.removeEventListener(
      "wheel",
      (mouse as unknown as { mousewheel: EventListener }).mousewheel,
    );

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    // Sync DOM to bodies
    let raf = 0;
    const sync = () => {
      pairs.forEach(({ body, el, w, h }) => {
        const x = body.position.x - w / 2;
        const y = body.position.y - h / 2;
        const deg = (body.angle * 180) / Math.PI;
        el.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${deg}deg)`;
      });
      raf = requestAnimationFrame(sync);
    };
    raf = requestAnimationFrame(sync);

    // Resize → reset walls
    const onResize = () => {
      const w2 = window.innerWidth;
      const h2 = window.innerHeight;
      canvas.width = w2;
      canvas.height = h2;
      render.options.width = w2;
      render.options.height = h2;
      Matter.Body.setPosition(floor, { x: w2 / 2, y: h2 + 30 });
      Matter.Body.setPosition(right, { x: w2 + 30, y: h2 / 2 });
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);
    };
  }, [activated]);

  return (
    <section ref={wrapRef} className="physics-stage" aria-label="Skill banners">
      <canvas
        ref={canvasRef}
        className="physics-canvas"
        style={{ pointerEvents: activated ? "auto" : "none" }}
      />
      <div className="ribbon-stack">
        {ribbons.map((r, i) => (
          <div
            key={i}
            ref={(el) => {
              bannerRefs.current[i] = el;
            }}
            className="phys-ribbon"
            style={{
              background: r.bg,
              color: r.color,
              transform: `rotate(${r.angle}deg)`,
            }}
          >
            <div className="ribbon-inner">
              {[...r.items, ...r.items].map((it, k) => (
                <span key={k}>
                  <Star size={14} strokeWidth={3} /> {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------- styles ---------- */
const CSS = `
:root {
  --bg: #0d0e12;
  --primary: #a374ff;
  --secondary: #ff65c3;
  --accent: #3eff8b;
  --card-bg: #161820;
  --text: #ffffff;
  --muted: #a0a5b5;
  --border-thick: 4px solid #000000;
  --shadow-brutal: 5px 5px 0 #000;
  --shadow-brutal-lg: 12px 12px 0 #000;
  --radius: 28px;
}
.brutal-root {
  background: var(--bg);
  background-image:
    radial-gradient(circle at 20% 25%, rgba(163,116,255,.18) 0%, transparent 50%),
    radial-gradient(circle at 80% 75%, rgba(255,101,195,.15) 0%, transparent 50%),
    radial-gradient(circle at 50% 50%, rgba(62,255,139,.08) 0%, transparent 60%);
  font-family: 'Inter', sans-serif;
  color: var(--text);
  overflow-x: hidden;
  min-height: 100vh;
}
.brutal-root h1, .brutal-root h2, .brutal-root h3, .brutal-root h4, .brutal-logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  text-transform: uppercase;
}
.brutal-root [lang="ar"], .title-ar, .profile-name-ar {
  font-family: 'Cairo', sans-serif;
  direction: rtl;
}

.brutal-header {
  padding: 25px;
  display: flex; justify-content: space-between; align-items: center;
  max-width: 1300px; margin: 0 auto;
}
.brutal-logo {
  background: var(--primary); color: #000;
  padding: 10px 22px; border: var(--border-thick); border-radius: 18px;
  box-shadow: var(--shadow-brutal);
  font-size: 1.15rem; letter-spacing: -.5px;
  display: inline-flex; align-items: center; gap: 10px;
}
.lang-badge {
  background: #fff; color: #000;
  padding: 8px 16px; border: var(--border-thick); border-radius: 15px;
  font-weight: 800; box-shadow: var(--shadow-brutal);
  display: inline-flex; align-items: center; gap: 8px;
}

.cv-grid {
  max-width: 1300px; margin: 20px auto 80px;
  padding: 0 25px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 35px;
  position: relative; z-index: 1;
}
@media (max-width: 950px) { .cv-grid { grid-template-columns: 1fr; } }

.brutal-card {
  background: var(--card-bg);
  border: var(--border-thick);
  border-radius: var(--radius);
  box-shadow: var(--shadow-brutal-lg);
  padding: 35px;
  position: relative; overflow: hidden;
}
.card-tag {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent); color: #000;
  padding: 6px 14px; border: 2px solid #000; border-radius: 12px;
  font-weight: 800; font-size: .8rem; margin-bottom: 20px;
  text-transform: uppercase; letter-spacing: .5px;
}
.tag-accent { background: var(--secondary); color: #fff; }

.section-title {
  font-size: 2rem; margin-bottom: 22px;
  letter-spacing: -1px; line-height: 1.1;
  display: flex; justify-content: space-between; align-items: center; gap: 12px;
}
.title-ar { font-size: 1.6rem; color: var(--primary); }

.profile-container {
  display: flex; gap: 22px; align-items: center; margin-bottom: 26px;
}
.avatar-frame {
  width: 120px; height: 120px; min-width: 120px;
  background: #fff; border: var(--border-thick);
  border-radius: var(--radius); box-shadow: var(--shadow-brutal);
  overflow: hidden;
}
.avatar-frame img { width: 100%; height: 100%; object-fit: cover; }
.profile-name { font-size: 2rem; letter-spacing: -1px; line-height: 1.05; }
.profile-name-ar { font-size: 1.2rem; color: var(--secondary); margin-top: 4px; }

.bilingual-row { display: flex; justify-content: space-between; gap: 16px; margin-bottom: 12px; }
.bi-desc { font-size: .92rem; color: var(--muted); line-height: 1.55; width: 48%; }

.contact-row {
  display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 22px;
}
@media (max-width: 550px) { .contact-row { grid-template-columns: 1fr; } }
.contact-button {
  background: #212431; border: 2px solid #000; border-radius: 18px;
  padding: 12px 16px; display: flex; align-items: center; gap: 10px;
  color: var(--text); text-decoration: none; font-weight: 600;
  box-shadow: var(--shadow-brutal); font-size: .9rem;
  transition: transform .12s, box-shadow .12s;
}
.contact-button:hover { transform: translate(-2px, -2px); box-shadow: 7px 7px 0 #000; }
.contact-button svg { color: var(--secondary); }

.stack-card .stack-grid {
  display: flex; flex-wrap: wrap; gap: 10px; margin: 8px 0 18px;
}
.stack-pill {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 10px 16px; border: var(--border-thick); border-radius: 40px;
  box-shadow: var(--shadow-brutal); font-weight: 800; font-size: .9rem;
  letter-spacing: .3px;
}
.hint {
  display: inline-flex; align-items: center; gap: 8px;
  color: var(--accent); font-weight: 700; font-size: .85rem;
  margin-top: 8px;
}

.project-showcase {
  grid-column: span 2;
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
}
.project-showcase .section-head { grid-column: span 2; padding: 20px 28px; }
@media (max-width: 950px) {
  .project-showcase { grid-column: span 1; grid-template-columns: 1fr; }
  .project-showcase .section-head { grid-column: span 1; }
}

.project-subcard {
  background: #1c1e29; border: var(--border-thick); border-radius: var(--radius);
  padding: 22px; display: flex; flex-direction: column; gap: 16px;
  box-shadow: var(--shadow-brutal);
}
.project-banner-mock {
  width: 100%; height: 200px; border: 2px solid #000;
  border-radius: 20px; overflow: hidden; background: #2b2e3d;
}
.project-banner-mock img { width: 100%; height: 100%; object-fit: cover; }
.project-details h3 { font-size: 1.3rem; margin-bottom: 6px; color: #fff; }
.project-link {
  margin-top: 6px; display: inline-flex; align-items: center; gap: 6px;
  font-weight: 800; color: var(--accent); text-decoration: none; font-size: .9rem;
  text-transform: uppercase; letter-spacing: .5px;
}

/* PHYSICS STAGE */
.physics-stage {
  position: relative;
  max-width: 1300px; margin: 40px auto 120px;
  padding: 0 25px;
}
.physics-canvas {
  position: fixed; inset: 0; width: 100vw; height: 100vh;
  z-index: 25; pointer-events: none;
}
.ribbon-stack {
  display: flex; flex-direction: column; gap: 28px;
}
.phys-ribbon {
  border: var(--border-thick); box-shadow: var(--shadow-brutal-lg);
  padding: 18px 0; overflow: hidden;
  border-radius: 14px;
  will-change: transform;
}
.ribbon-inner {
  display: flex; gap: 36px; white-space: nowrap;
  animation: ribbonScroll 28s linear infinite;
}
.ribbon-inner span {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'Syne', 'Cairo', sans-serif;
  font-weight: 900; font-size: 1.4rem;
  text-transform: uppercase;
}
@keyframes ribbonScroll {
  0% { transform: translate3d(0,0,0); }
  100% { transform: translate3d(-50%,0,0); }
}

/* FOOTER */
.brutal-footer {
  background: #161820; border-top: var(--border-thick);
  padding: 60px 25px 30px;
  position: relative; z-index: 1;
}
.footer-container {
  max-width: 1300px; margin: 0 auto;
  display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 50px;
}
@media (max-width: 850px) {
  .footer-container { grid-template-columns: 1fr; gap: 36px; }
}
.footer-branding h3 { font-size: 1.8rem; margin-bottom: 12px; color: var(--accent); }
.footer-branding p { color: var(--muted); line-height: 1.6; max-width: 450px; margin-bottom: 22px; }
.footer-links-col h4 {
  font-size: 1.05rem; color: #fff; margin-bottom: 18px;
  border-bottom: 2px dashed #333; padding-bottom: 8px;
}
.footer-links-col ul { list-style: none; padding: 0; margin: 0; }
.footer-links-col ul li { margin-bottom: 10px; }
.footer-links-col ul li a {
  color: var(--muted); text-decoration: none; font-weight: 600;
  display: inline-flex; align-items: center; gap: 8px;
  transition: color .2s;
}
.footer-links-col ul li a:hover { color: var(--secondary); }
.footer-socials { display: flex; gap: 12px; }
.social-icon-btn {
  width: 44px; height: 44px; background: #fff; color: #000;
  border: 2px solid #000; border-radius: 12px;
  display: flex; align-items: center; justify-content: center;
  text-decoration: none; box-shadow: 3px 3px 0 #000;
  transition: transform .12s, box-shadow .12s;
}
.social-icon-btn:hover { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 #000; }
.footer-bottom {
  max-width: 1300px; margin: 50px auto 0;
  padding-top: 22px; border-top: var(--border-thick);
  display: flex; justify-content: space-between; align-items: center;
  flex-wrap: wrap; gap: 18px;
}
.footer-bottom p { font-size: .88rem; color: var(--muted); }
`;
