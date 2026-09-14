"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

/* ─── Constants ─────────────────────────────────────── */
const WA_LINK = "https://api.whatsapp.com/send/?phone=61993688759";
const IG_LINK = "https://www.instagram.com/gl_ultraclean";
const REELS = [
  "https://www.instagram.com/reel/DbT8EoISdow/embed",
  "https://www.instagram.com/reel/Dac7pyIy3DM/embed",
];

const SERVICES = [
  {
    icon: "🏠",
    title: "Limpeza Residencial",
    desc: "Ambientes domésticos limpos, organizados e com cheiro de novo. Do apartamento à mansão.",
  },
  {
    icon: "🏢",
    title: "Limpeza Comercial",
    desc: "Escritórios, lojas e estabelecimentos com padrão profissional. Ambiente de trabalho impecável.",
  },
  {
    icon: "🪟",
    title: "Limpeza de Vidros",
    desc: "Janelas e fachadas transparentes como cristal, por dentro e por fora. Resultado visível.",
  },
  {
    icon: "🛋️",
    title: "Higienização de Estofados",
    desc: "Sofás, cadeiras e colchões limpos em profundidade. Remove ácaros, manchas e odores.",
  },
  {
    icon: "🏗️",
    title: "Limpeza Pós-Obra",
    desc: "Eliminamos toda poeira e resíduos de construção. Seu espaço pronto para habitar.",
  },
  {
    icon: "✨",
    title: "Limpeza de Forro e Teto",
    desc: "Remoção de manchas e sujeiras em forros, tetos e áreas de difícil acesso.",
  },
];

const STATS = [
  { num: "500+", label: "Clientes atendidos" },
  { num: "5★", label: "Avaliação média" },
  { num: "3+", label: "Anos de experiência" },
];

const WHYS = [
  {
    icon: "⚡",
    title: "Rapidez & Pontualidade",
    desc: "Respeitamos seu tempo. Chegamos no horário combinado e entregamos o resultado no prazo.",
  },
  {
    icon: "🛡️",
    title: "Produtos Profissionais",
    desc: "Utilizamos produtos de alta eficácia certificados, seguros para sua família e pets.",
  },
  {
    icon: "💬",
    title: "Orçamento Grátis",
    desc: "Sem surpresas. Avaliamos seu espaço e enviamos proposta direta pelo WhatsApp.",
  },
];

/* ─── Hooks ─────────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Components ─────────────────────────────────────── */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#servicos", label: "Serviços" },
    { href: "#videos", label: "Vídeos" },
    { href: "#diferenciais", label: "Diferenciais" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" aria-label="GL Ultra Clean — Início">
          <Image
            src="/logo.png"
            alt="GL Ultra Clean"
            width={110}
            height={55}
            className="object-contain drop-shadow-sm"
            priority
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-600 text-[#1A56B0] hover:text-[#29ABE2] transition-colors duration-200"
              style={{ fontWeight: 600 }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm !py-2.5 !px-6"
          >
            <WhatsAppIcon size={16} /> Orçamento
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 text-[#1A56B0]"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            {menuOpen ? (
              <>
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-blue-100 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#1A56B0] font-semibold py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-center justify-center"
            onClick={() => setMenuOpen(false)}
          >
            <WhatsAppIcon size={18} /> Orçamento Grátis
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="hero-clip relative min-h-[92vh] flex items-center"
      style={{ background: "linear-gradient(135deg, #0D2E6B 0%, #1A56B0 55%, #29ABE2 100%)" }}
    >
      {/* Geometric overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, #29ABE2 0%, transparent 50%), radial-gradient(circle at 20% 80%, #1A56B0 0%, transparent 40%)",
        }}
      />
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(255,255,255,1) 60px), repeating-linear-gradient(90deg, transparent, transparent 59px, rgba(255,255,255,1) 60px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-24 pb-20 w-full">
        <div className="max-w-2xl">
          <span className="inline-block bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-4 py-2 mb-6 border border-white/20">
            ✦ Limpeza Profissional — Brasília & DF
          </span>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-none mb-6">
            Limpeza que
            <br />
            <span style={{ color: "#29ABE2" }}>transforma</span>
            <br />
            seu espaço.
          </h1>

          <p className="text-lg text-white/75 mb-10 max-w-lg leading-relaxed">
            Residencial, comercial, pós-obra — entregamos ambientes impecáveis com produtos profissionais e
            equipe treinada. Orçamento grátis via WhatsApp.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
              <WhatsAppIcon size={20} /> Solicitar Orçamento
            </a>
            <a href="#servicos" className="btn-outline text-base">
              Ver Serviços ↓
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-14">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-black text-white">{s.num}</div>
                <div className="text-sm text-white/60 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-xs tracking-widest">
        <span className="uppercase" style={{ fontSize: "0.65rem" }}>Scroll</span>
        <div className="w-px h-10 bg-white/20 animate-pulse" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14 reveal">
          <span className="section-eyebrow">Nossos Serviços</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D1B2A] mt-2 leading-tight">
            O que fazemos por você
          </h2>
          <p className="text-[#4A6080] mt-4 max-w-xl text-lg">
            Soluções completas de limpeza para cada necessidade, com excelência em cada detalhe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className={`service-card bg-white border border-gray-100 p-7 reveal delay-${i + 1}`}
              style={{ boxShadow: "0 2px 16px rgba(26,86,176,0.07)" }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center text-2xl mb-5"
                style={{ background: "#F4F7FB", borderRadius: "2px" }}
              >
                {s.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1A56B0] mb-2">{s.title}</h3>
              <p className="text-[#4A6080] text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            <WhatsAppIcon size={18} /> Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}

function Videos() {
  return (
    <section
      id="videos"
      className="section-diagonal py-28"
      style={{ background: "linear-gradient(135deg, #0D2E6B, #1A56B0)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-[#29ABE2] text-xs font-bold tracking-widest uppercase mb-3">
            ✦ Nosso Trabalho
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
            Veja o resultado
            <br />
            em tempo real
          </h2>
          <p className="text-white/60 mt-4 text-lg max-w-md mx-auto">
            Acompanhe nossos serviços no Instagram e confira a transformação dos espaços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {REELS.map((src, i) => (
            <div key={i} className={`reveal delay-${i + 1}`}>
              <div
                className="reel-wrapper"
                style={{ borderRadius: "0px", border: "2px solid rgba(41,171,226,0.3)" }}
              >
                <iframe
                  src={src}
                  title={`GL Ultra Clean — Vídeo ${i + 1}`}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 reveal">
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <InstagramIcon size={18} /> Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="diferenciais" className="py-24" style={{ background: "#F4F7FB" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-14 reveal">
          <span className="section-eyebrow">Por que nos escolher</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#0D1B2A] mt-2 leading-tight">
            Compromisso com
            <br />a sua satisfação
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {WHYS.map((w, i) => (
            <div key={w.title} className={`reveal delay-${i + 1}`}>
              <div
                className="text-4xl mb-4 w-16 h-16 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #29ABE2, #1A56B0)",
                  clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)",
                }}
              >
                {w.icon}
              </div>
              <h3 className="text-xl font-bold text-[#1A56B0] mb-3">{w.title}</h3>
              <p className="text-[#4A6080] leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0D2E6B 0%, #1A56B0 100%)" }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 0px, transparent 50%)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="reveal">
          <span className="inline-block text-[#29ABE2] text-xs font-bold tracking-widest uppercase mb-4">
            ✦ Solicite agora
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-white leading-none mb-6">
            Pronto para um
            <br />
            espaço impecável?
          </h2>
          <p className="text-white/65 text-lg mb-10 max-w-lg mx-auto leading-relaxed">
            Entre em contato agora pelo WhatsApp e receba seu orçamento em minutos. Sem burocracia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-lg !py-4 !px-10">
              <WhatsAppIcon size={22} /> Chamar no WhatsApp
            </a>
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="btn-outline text-lg !py-4 !px-10">
              <InstagramIcon size={22} /> @gl_ultraclean
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Image src="/logo.png" alt="GL Ultra Clean" width={90} height={45} className="object-contain opacity-90" />

          <div className="flex gap-6 text-sm">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#29ABE2] transition-colors flex items-center gap-2">
              <WhatsAppIcon size={16} /> WhatsApp
            </a>
            <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#29ABE2] transition-colors flex items-center gap-2">
              <InstagramIcon size={16} /> Instagram
            </a>
          </div>

          <p className="text-xs text-white/30">
            © {year} GL Ultra Clean. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── SVG Icons ─────────────────────────────────────── */
function WhatsAppIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.52 5.845L.057 23.854a.5.5 0 0 0 .612.612l5.857-1.488A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.093-1.396l-.36-.217-3.778.96.975-3.697-.234-.377A9.947 9.947 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

/* ─── WhatsApp Float Button ──────────────────────────── */
function WhatsAppFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Contato via WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function Home() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <Videos />
        <WhyUs />
        <CtaSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
