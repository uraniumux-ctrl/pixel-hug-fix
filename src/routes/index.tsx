import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import {
  Mail,
  Phone,
  Github,
  Globe,
  Sparkles,
  Code2,
  Zap,
  Twitter,
  Instagram,
  Dribbble,
  ChevronRight,
  RefreshCw,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Parasayte — Creative Engineer Portfolio" },
      {
        name: "description",
        content:
          "Neo-brutalist portfolio for Parasayte — interactive graphics, physics-driven UI, and full-stack engineering.",
      },
      { property: "og:title", content: "Parasayte — Creative Engineer" },
      {
        property: "og:description",
        content: "Interactive physics-driven bilingual portfolio.",
      },
    ],
  }),
  component: Index,
});

const PILLS = [
  { label: "React",       color: "#61DAFB", text: "#000" },
  { label: "TypeScript",  color: "#3178C6", text: "#fff" },
  { label: "Node.js",     color: "#3eff8b", text: "#000" },
  { label: "WebGL",       color: "#ff65c3", text: "#fff" },
  { label: "Three.js",    color: "#ffca3a", text: "#000" },
  { label: "GSAP",        color: "#88CE02", text: "#000" },
  { label: "Rust",        color: "#CE422B", text: "#fff" },
  { label: "Figma",       color: "#F24E1E", text: "#fff" },
  { label: "Google",      color: "#4285F4", text: "#fff" },
  { label: "Meta",        color: "#0081FB", text: "#fff" },
  { label: "Apple",       color: "#888888", text: "#fff" },
  { label: "Microsoft",   color: "#00A4EF", text: "#fff" },
  { label: "AWS",         color: "#FF9900", text: "#000" },
  { label: "OpenAI",      color: "#10A37F", text: "#fff" },
  { label: "Replit",      color: "#F26207", text: "#fff" },
  { label: "Discord",     color: "#5865F2", text: "#fff" },
  { label: "Next.js",     color: "#e2e2e2", text: "#000" },
  { label: "Tailwind",    color: "#06B6D4", text: "#fff" },
  { label: "PostgreSQL",  color: "#336791", text: "#fff" },
  { label: "Docker",      color: "#2496ED", text: "#fff" },
  { label: "Vercel",      color: "#f0f0f0", text: "#000" },
  { label: "Supabase",    color: "#3ECF8E", text: "#000" },
  { label: "GitHub",      color: "#1F2937", text: "#fff" },
  { label: "Stripe",      color: "#635BFF", text: "#fff" },
  { label: "Netlify",     color: "#00C7B7", text: "#000" },
  { label: "Redis",       color: "#DC382D", text: "#fff" },
  { label: "GraphQL",     color: "#E10098", text: "#fff" },
  { label: "Cloudflare",  color: "#F38020", text: "#fff" },
];

function Index() {
  const [lang, setLang] = useState<"en" | "ar">("en");
  const en = lang === "en";

  return (
    <div className="brutal-root" dir={en ? "ltr" : "rtl"}>
      <style>{CSS}</style>

      <header className="brutal-header">
        <div className="brutal-logo">
          <Sparkles size={18} strokeWidth={3} />
          <span>PARASAYTE</span>
        </div>
        <button
          className="lang-badge"
          onClick={() => setLang(en ? "ar" : "en")}
        >
          <Globe size={16} strokeWidth={3} />
          {en ? "العربية" : "English"}
        </button>
      </header>

      <main className="cv-grid">
        {/* Profile */}
        <section className="brutal-card">
          <div className="card-tag">
            <Code2 size={14} strokeWidth={3} />
            {en ? "CREATIVE ENGINEER" : "مهندس برمجيات"}
          </div>

          <div className="profile-container">
            <div className="avatar-frame">
              <img
                src="https://images2.imgbox.com/14/5e/YYO6KGYd_o.jpg"
                alt="Parasayte portrait"
              />
            </div>
            <div>
              <h1 className="profile-name">
                {en ? "Parasayte" : "باراسايت"}
              </h1>
            </div>
          </div>

          <h2 className="section-title">
            {en ? "About Me" : "نبذة عني"}
          </h2>

          <p className="about-desc">
            {en
              ? "Full-stack engineer specialised in interactive graphics, dynamic physics architectures, and production-ready high-performance systems."
              : "مهندس برمجيات متكامل متخصص في بيئات الجرافيكس التفاعلية وهندسة الواجهات وبناء أنظمة برمجية متكاملة بأداء عالٍ."}
          </p>

          <div className="contact-row">
            <a href="mailto:hougjgrxkj@gmail.com" className="contact-button">
              <Mail size={18} strokeWidth={2.5} />
              <span>hougjgrxkj@gmail.com</span>
            </a>
            <a href="https://instagram.com/selam9x" target="_blank" rel="noreferrer" className="contact-button">
              <Instagram size={18} strokeWidth={2.5} />
              <span>@selam9x</span>
            </a>
            <a href="tel:+905411442870" className="contact-button">
              <Phone size={18} strokeWidth={2.5} />
              <span>+90 541 144 2870</span>
            </a>
            <a href="https://github.com/Parasayte" target="_blank" rel="noreferrer" className="contact-button">
              <Github size={18} strokeWidth={2.5} />
              <span>Parasayte</span>
            </a>
          </div>
        </section>

        {/* Toolbelt — physics pills */}
        <section className="brutal-card stack-card">
          <div className="card-tag tag-accent">
            <Zap size={14} strokeWidth={3} />
            {en ? "STACK" : "المنظومة التقنية"}
          </div>
          <h2 className="section-title">
            {en ? "Toolbelt" : "الأدوات"}
          </h2>
          <ToolbeltPhysics />
        </section>

        {/* Projects */}
        <section className="project-showcase">
          <div className="brutal-card section-head">
            <h2 className="section-title" style={{ margin: 0 }}>
              {en ? "Featured Systems" : "أبرز المشاريع"}
            </h2>
          </div>

          {PROJECTS.map((p) => (
            <article key={p.title} className="project-subcard">
              <div className="project-banner-mock">
                <img src={p.img} alt={p.title} />
              </div>
              <div className="project-details">
                <h3>{p.title}</h3>
                <p className="about-desc">{en ? p.en : p.ar}</p>
                <a className="project-link" href="#">
                  {en ? "View case study" : "عرض الدراسة"} <ChevronRight size={14} strokeWidth={3} />
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <ScrollingBanners />

      <footer className="brutal-footer">
        <div className="footer-container">
          <div className="footer-branding">
            <h3>{en ? "Let's build something loud." : "لنبنِ شيئاً يُسمع."}</h3>
            <p>
              {en
                ? "Available for selected freelance & contract engagements across interactive engineering, motion design, and product systems."
                : "متاح للمشاريع المستقلة والعقود المختارة في هندسة التفاعل وتصميم الحركة وأنظمة المنتجات."}
            </p>
            <div className="footer-socials">
              <a className="social-icon-btn" href="https://twitter.com" aria-label="Twitter">
                <Twitter size={18} strokeWidth={2.5} />
              </a>
              <a className="social-icon-btn" href="https://instagram.com/selam9x" aria-label="Instagram">
                <Instagram size={18} strokeWidth={2.5} />
              </a>
              <a className="social-icon-btn" href="https://github.com/Parasayte" aria-label="GitHub">
                <Github size={18} strokeWidth={2.5} />
              </a>
              <a className="social-icon-btn" href="https://dribbble.com" aria-label="Dribbble">
                <Dribbble size={18} strokeWidth={2.5} />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>{en ? "Navigate" : "التنقل"}</h4>
            <ul>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> {en ? "Work" : "الأعمال"}</a></li>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> {en ? "About" : "عني"}</a></li>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> {en ? "Journal" : "المدونة"}</a></li>
              <li><a href="#"><ChevronRight size={12} strokeWidth={3} /> {en ? "Contact" : "التواصل"}</a></li>
            </ul>
          </div>

          <div className="footer-links-col">
            <h4>{en ? "Contact" : "تواصل"}</h4>
            <ul>
              <li><a href="mailto:hougjgrxkj@gmail.com"><Mail size={12} strokeWidth={3} /> hougjgrxkj@gmail.com</a></li>
              <li><a href="tel:+905411442870"><Phone size={12} strokeWidth={3} /> +90 541 144 2870</a></li>
              <li><a href="https://instagram.com/selam9x"><Instagram size={12} strokeWidth={3} /> @selam9x</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Parasayte · {en ? "All rights reserved" : "جميع الحقوق محفوظة"}</p>
          <p>{en ? "Built with React · Matter.js · loud typography" : "مبني بـ React · Matter.js"}</p>
        </div>
      </footer>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TOOLBELT PHYSICS                                                     */
/* Pills fall into the card, stack, and are draggable with the mouse.  */
/* ------------------------------------------------------------------ */
function drawRoundedRect(
  ctx: CanvasRenderingContext2D,
  cx: number, cy: number,
  w: number, h: number,
  r: number, angle: number,
  fill: string, stroke: string,
) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);
  const x = -w / 2, y = -h / 2;
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
  ctx.fillStyle = fill;
  ctx.fill();
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.restore();
}

function ToolbeltPhysics() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let lastW = container.clientWidth;
    const ro = new ResizeObserver(() => {
      const newW = container.clientWidth;
      if (Math.abs(newW - lastW) > 20) {
        lastW = newW;
        setKey((k) => k + 1);
      }
    });
    ro.observe(container);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const W = container.clientWidth;
    const H = container.clientHeight;
    const dpr = Math.min(window.devicePixelRatio, 2);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";

    const engine = Matter.Engine.create({ gravity: { y: 1.4 } });

    const render = Matter.Render.create({
      canvas,
      engine,
      options: {
        width: W * dpr,
        height: H * dpr,
        wireframes: false,
        background: "transparent",
        pixelRatio: 1,
      },
    });

    const invisible = { isStatic: true, render: { visible: false } };
    Matter.Composite.add(engine.world, [
      Matter.Bodies.rectangle(W / 2, H + 25, W * 2, 50, invisible),
      Matter.Bodies.rectangle(-25, H / 2, 50, H * 2, invisible),
      Matter.Bodies.rectangle(W + 25, H / 2, 50, H * 2, invisible),
    ]);

    const PH = 36;
    const RADIUS = 18;
    const tmpCtx = canvas.getContext("2d")!;
    tmpCtx.font = `bold 13px Syne, sans-serif`;

    const bodies = PILLS.map((pill, i) => {
      const tw = tmpCtx.measureText(pill.label).width;
      const PW = Math.ceil(tw + 36);
      const col = i % 4;
      const startX = (col + 0.5) * (W / 4) + (Math.random() - 0.5) * 20;
      const startY = -PH * 1.5 - i * 32;
      const body = Matter.Bodies.rectangle(startX, startY, PW, PH, {
        restitution: 0.25,
        friction: 0.55,
        frictionAir: 0.015,
        chamfer: { radius: RADIUS },
        render: { visible: false },
      });
      return { body, pill, PW };
    });

    Matter.Composite.add(engine.world, bodies.map((b) => b.body));

    Matter.Events.on(render, "afterRender", () => {
      const ctx2 = render.context;
      ctx2.save();
      ctx2.scale(dpr, dpr);
      bodies.forEach(({ body, pill, PW }) => {
        const { x, y } = body.position;
        drawRoundedRect(ctx2, x, y, PW, PH, RADIUS, body.angle, pill.color, "rgba(0,0,0,0.35)");
        ctx2.save();
        ctx2.translate(x, y);
        ctx2.rotate(body.angle);
        ctx2.fillStyle = pill.text;
        ctx2.font = "bold 13px Syne, sans-serif";
        ctx2.textAlign = "center";
        ctx2.textBaseline = "middle";
        ctx2.fillText(pill.label, 0, 1);
        ctx2.restore();
      });
      ctx2.restore();
    });

    const mouse = Matter.Mouse.create(canvas);
    mouse.pixelRatio = dpr;
    const mc = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.25, render: { visible: false } },
    });
    Matter.Composite.add(engine.world, mc);
    (mouse as unknown as { element: HTMLElement }).element.removeEventListener(
      "wheel",
      (mouse as unknown as { mousewheel: EventListener }).mousewheel,
    );

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.Composite.clear(engine.world, false);
      Matter.Engine.clear(engine);
    };
  }, [key]);

  return (
    <div className="toolbelt-physics-wrap">
      <div ref={containerRef} className="toolbelt-canvas-container">
        <canvas ref={canvasRef} />
      </div>
      <button className="reset-btn" onClick={() => setKey((k) => k + 1)}>
        <RefreshCw size={14} strokeWidth={3} /> Reset
      </button>
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

const SCROLL_ROWS = [
  { bg: "#ff65c3", color: "#000", dir: "left",  items: ["GRADE", "ENGINEERING", "PRODUCTION", "REACT", "BACKEND", "DATABASE"] },
  { bg: "#a374ff", color: "#fff", dir: "right", items: ["FULLSTACK", "DESIGN", "BUILD", "DEPLOY", "SCALE", "SHIP"] },
  { bg: "#3eff8b", color: "#000", dir: "left",  items: ["INTERACTIVE", "GRAPHICS", "MOTION", "WEBGL", "TYPESCRIPT", "NODE"] },
  { bg: "#ffca3a", color: "#000", dir: "right", items: ["GITHUB", "VERCEL", "STRIPE", "SUPABASE", "TAILWIND", "NEXTJS"] },
];

function ScrollingBanners() {
  return (
    <section className="scroll-stage" aria-label="Skill banners">
      {SCROLL_ROWS.map((row, i) => (
        <div key={i} className="scroll-ribbon" style={{ background: row.bg, color: row.color }}>
          <div className={`scroll-track ${row.dir === "right" ? "scroll-rtl" : "scroll-ltr"}`}>
            {[...row.items, ...row.items, ...row.items, ...row.items].map((item, k) => (
              <span key={k}>{item}&nbsp;&nbsp;·&nbsp;&nbsp;</span>
            ))}
          </div>
        </div>
      ))}
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

.brutal-header {
  padding: 18px 20px;
  display: flex; justify-content: space-between; align-items: center;
  max-width: 1300px; margin: 0 auto;
}
@media (max-width: 480px) {
  .brutal-header { padding: 14px 16px; }
  .brutal-logo { font-size: .9rem; padding: 8px 14px; }
  .lang-badge { padding: 6px 12px; font-size: .82rem; }
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
  padding: 8px 20px; border: var(--border-thick); border-radius: 15px;
  font-weight: 800; box-shadow: var(--shadow-brutal);
  display: inline-flex; align-items: center; gap: 8px;
  cursor: pointer; font-family: 'Syne', sans-serif; font-size: .95rem;
  transition: transform .12s, box-shadow .12s;
}
.lang-badge:hover { transform: translate(-2px,-2px); box-shadow: 7px 7px 0 #000; }

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
  align-self: flex-start;
  background: var(--accent); color: #000;
  padding: 6px 14px; border: 2px solid #000; border-radius: 12px;
  font-weight: 800; font-size: .8rem; margin-bottom: 20px;
  text-transform: uppercase; letter-spacing: .5px;
}
.tag-accent { background: var(--secondary); color: #fff; }

.section-title {
  font-size: 2rem; margin-bottom: 22px;
  letter-spacing: -1px; line-height: 1.1;
}

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

.about-desc {
  font-size: .92rem; color: var(--muted); line-height: 1.6; margin-bottom: 12px;
}

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

/* TOOLBELT PHYSICS */
.stack-card {
  padding-bottom: 20px;
  display: flex; flex-direction: column;
}
.toolbelt-physics-wrap { display: flex; flex-direction: column; gap: 12px; flex: 1; }
.toolbelt-canvas-container {
  flex: 1;
  width: calc(100% + 70px);
  margin-left: -35px;
  height: 360px;
  overflow: hidden;
  cursor: grab;
}
.toolbelt-canvas-container:active { cursor: grabbing; }
.reset-btn {
  align-self: flex-start;
  display: inline-flex; align-items: center; gap: 7px;
  background: #212431; border: 2px solid #000; border-radius: 12px;
  padding: 8px 16px; color: var(--muted); font-weight: 700; font-size: .82rem;
  cursor: pointer; box-shadow: 3px 3px 0 #000;
  transition: transform .12s, box-shadow .12s;
  text-transform: uppercase; letter-spacing: .5px;
}
.reset-btn:hover { transform: translate(-2px,-2px); box-shadow: 5px 5px 0 #000; color: var(--accent); }

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

/* SCROLLING BANNERS */
.scroll-stage { margin: 40px 0 80px; overflow: hidden; }
.scroll-ribbon {
  border-top: var(--border-thick); border-bottom: var(--border-thick);
  padding: 16px 0; overflow: hidden; margin-bottom: -4px;
}
.scroll-track {
  display: flex; white-space: nowrap;
  font-family: 'Syne', sans-serif;
  font-weight: 900; font-size: 1.5rem;
  text-transform: uppercase; letter-spacing: 1px;
}
.scroll-track span { display: inline-block; }
.scroll-ltr { animation: scrollLTR 22s linear infinite; }
.scroll-rtl { animation: scrollRTL 22s linear infinite; }
@keyframes scrollLTR {
  0%   { transform: translate3d(0, 0, 0); }
  100% { transform: translate3d(-50%, 0, 0); }
}
@keyframes scrollRTL {
  0%   { transform: translate3d(-50%, 0, 0); }
  100% { transform: translate3d(0, 0, 0); }
}

/* FOOTER */
.brutal-footer {
  background: #161820; border-top: var(--border-thick);
  padding: 60px 25px 30px; position: relative; z-index: 1;
}
.footer-container {
  max-width: 1300px; margin: 0 auto;
  display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 50px;
}
@media (max-width: 850px) { .footer-container { grid-template-columns: 1fr; gap: 36px; } }
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
  display: inline-flex; align-items: center; gap: 8px; transition: color .2s;
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
