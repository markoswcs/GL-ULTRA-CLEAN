"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* ─── Constants ──────────────────────────────────────── */
const WA_LINK = "https://api.whatsapp.com/send/?phone=61993688759";
const IG_LINK = "https://www.instagram.com/gl_ultraclean";

const SERVICES = [
  { icon: "🏠", title: "Limpeza Residencial", desc: "Apartamentos e casas limpos do jeito que você merece. Cuidado com cada detalhe, do piso ao teto." },
  { icon: "🏢", title: "Limpeza Comercial",   desc: "Escritórios, lojas e estabelecimentos com padrão de excelência. Ambiente profissional impecável." },
  { icon: "🪟", title: "Limpeza de Vidros",   desc: "Janelas e fachadas com transparência total. Resultado cristalino por dentro e por fora." },
  { icon: "🛋️", title: "Higienização de Estofados", desc: "Sofás, cadeiras e colchões higienizados em profundidade. Remove manchas, ácaros e odores." },
  { icon: "🏗️", title: "Limpeza Pós-Obra",   desc: "Eliminamos toda poeira e resíduo de construção. Seu espaço pronto para ser habitado." },
  { icon: "🫧",  title: "Limpeza de Forro",   desc: "Forros, tetos e áreas de difícil acesso tratados com cuidado e equipamentos adequados." },
];

const STATS = [
  { value: "500+", label: "Clientes Atendidos" },
  { value: "5★",   label: "Avaliação Média" },
  { value: "3+",   label: "Anos de Experiência" },
  { value: "100%", label: "Satisfação Garantida" },
];

const WHYS = [
  { icon: "⚡", title: "Pontualidade", desc: "Respeitamos seu tempo. Chegamos no horário e entregamos dentro do prazo combinado, sempre." },
  { icon: "🛡️", title: "Produtos Profissionais", desc: "Utilizamos produtos certificados, de alta eficácia e seguros para toda a família, incluindo pets." },
  { icon: "💬", title: "Orçamento Grátis", desc: "Sem surpresas ou taxas escondidas. Avalie e receba sua proposta personalizada direto no WhatsApp." },
];

/* ─── Scroll Reveal Hook ────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const selectors = ".reveal, .reveal-left";
    const els = document.querySelectorAll<HTMLElement>(selectors);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ─── Icons ─────────────────────────────────────────── */
function IconWA({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.52 5.845L.057 23.854a.5.5 0 0 0 .612.612l5.857-1.488A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.093-1.396l-.36-.217-3.778.96.975-3.697-.234-.377A9.947 9.947 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
    </svg>
  );
}

function IconIG({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="8" fill="rgba(41,171,226,0.15)" />
      <path d="M4.5 8l2.5 2.5 4.5-5" stroke="#29ABE2" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

/* ─── Navbar ─────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#servicos", label: "Serviços" },
    { href: "#videos",   label: "Vídeos" },
    { href: "#sobre",    label: "Sobre" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-solid" : "nav-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between h-[68px]">
        {/* Logo */}
        <a href="#" aria-label="GL Ultra Clean — início">
          <Image
            src="/logo.png"
            alt="GL Ultra Clean"
            width={120}
            height={56}
            priority
            className={`object-contain h-12 w-auto transition-all duration-300 ${
              scrolled ? "logo-on-white" : "logo-dark"
            }`}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Menu principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                scrolled
                  ? "text-[#1A56B0] hover:text-[#29ABE2]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa text-sm !py-2.5 !px-5">
            <IconWA size={17} /> Orçamento Grátis
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden p-2 transition-colors ${scrolled ? "text-[#1A56B0]" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            {open ? (
              <><line x1="4" y1="4" x2="20" y2="20"/><line x1="20" y1="4" x2="4" y2="20"/></>
            ) : (
              <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-white border-t border-blue-50 shadow-xl px-5 pt-4 pb-6 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[#1A56B0] font-semibold py-2 border-b border-gray-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa justify-center mt-2"
            onClick={() => setOpen(false)}
          >
            <IconWA /> Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero-bg relative min-h-screen flex flex-col justify-center">
      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="badge-white mb-6 inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2] inline-block"></span>
            Brasília &amp; Região do DF
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-[5rem] font-black text-white leading-[1.04] tracking-tight mb-6">
            Seu espaço
            <br />
            <span style={{ color: "#29ABE2" }}>brilhando</span>
            <br />
            sempre.
          </h1>

          <p className="text-lg sm:text-xl text-white/65 leading-relaxed mb-10 max-w-lg">
            Limpeza profissional residencial e comercial com resultado impecável. 
            Orçamento rápido e grátis pelo WhatsApp.
          </p>

          <div className="flex flex-wrap gap-3 mb-16">
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa text-base">
              <IconWA size={20} /> Solicitar Orçamento
            </a>
            <a href="#servicos" className="btn-ghost text-base">
              Ver Serviços
            </a>
          </div>

          {/* Checkmarks */}
          <div className="flex flex-wrap gap-x-8 gap-y-2">
            {["Pontualidade garantida", "Produtos profissionais", "Sem taxas escondidas"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-white/60">
                <IconCheck />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative z-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`text-center md:text-left ${
                  i > 0 ? "md:border-l md:border-white/10 md:pl-8" : ""
                }`}
              >
                <div className="text-3xl font-black text-white">{s.value}</div>
                <div className="text-xs text-white/45 mt-1 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <a
        href="#servicos"
        aria-label="Rolar para serviços"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </section>
  );
}

/* ─── Services ───────────────────────────────────────── */
function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="badge mb-4 reveal">Nossos Serviços</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] leading-tight mb-4 reveal d1">
            O que fazemos
            <br />
            por você
          </h2>
          <p className="text-[#556070] text-lg leading-relaxed reveal d2">
            Soluções completas de limpeza para cada necessidade, com atenção ao detalhe e resultado visível.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`service-card reveal d${i + 1}`}>
              <div className="service-icon">{s.icon}</div>
              <h3 className="text-base font-bold text-[#0A1628] mb-2">{s.title}</h3>
              <p className="text-sm text-[#556070] leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center reveal">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa">
            <IconWA /> Solicitar Orçamento Grátis
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Videos ─────────────────────────────────────────── */
function Videos() {
  return (
    <section id="videos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <div className="badge mb-4 inline-flex reveal">Nosso Trabalho</div>
          <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] leading-tight mb-4 reveal d1">
            Veja a transformação
          </h2>
          <p className="text-[#556070] text-lg reveal d2">
            Acompanhe nossos serviços no Instagram e confira o resultado em tempo real.
          </p>
        </div>

        {/* Reels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {[
            "https://www.instagram.com/reel/DbT8EoISdow/embed",
            "https://www.instagram.com/reel/Dac7pyIy3DM/embed",
          ].map((src, i) => (
            <div key={i} className={`reveal d${i + 1}`}>
              <div className="reel-container">
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

        {/* Instagram link */}
        <div className="text-center mt-10 reveal">
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-blue inline-flex items-center gap-2"
          >
            <IconIG size={18} /> Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Us ─────────────────────────────────────────── */
function WhyUs() {
  return (
    <section id="sobre" className="py-24" style={{ background: "#F7F9FC" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="badge mb-4 reveal">Por que nos escolher</div>
            <h2 className="text-4xl md:text-5xl font-black text-[#0A1628] leading-tight mb-6 reveal d1">
              Compromisso
              <br />
              com a sua
              <br />
              satisfação
            </h2>
            <p className="text-[#556070] text-lg leading-relaxed mb-8 reveal d2">
              Somos apaixonados por deixar cada espaço impecável. Nossa equipe é treinada para oferecer o melhor resultado com cuidado e responsabilidade.
            </p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa reveal d3">
              <IconWA /> Falar com a Equipe
            </a>
          </div>

          {/* Right — cards */}
          <div className="flex flex-col gap-5">
            {WHYS.map((w, i) => (
              <div key={w.title} className={`why-card flex gap-5 reveal d${i + 1}`}>
                <div
                  className="w-12 h-12 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl"
                  style={{ background: "linear-gradient(135deg, rgba(41,171,226,0.15), rgba(26,117,187,0.08))" }}
                >
                  {w.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] mb-1">{w.title}</h3>
                  <p className="text-sm text-[#556070] leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────── */
function CtaSection() {
  return (
    <section className="cta-bg py-24 px-5 sm:px-8">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="badge-white mb-6 inline-flex reveal">Solicite agora</div>
        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6 reveal d1">
          Pronto para um
          <br />
          espaço impecável?
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-lg mx-auto leading-relaxed reveal d2">
          Entre em contato agora e receba seu orçamento personalizado em minutos. Sem burocracia.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal d3">
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-wa !text-base !py-4 !px-8">
            <IconWA size={20} /> Chamar no WhatsApp
          </a>
          <a href={IG_LINK} target="_blank" rel="noopener noreferrer" className="btn-ghost !text-base !py-4 !px-8">
            <IconIG size={18} /> @gl_ultraclean
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="footer-bg py-10 px-5 sm:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo — invertida para fundo escuro */}
        <Image
          src="/logo.png"
          alt="GL Ultra Clean"
          width={100}
          height={48}
          className="object-contain logo-dark opacity-80 h-11 w-auto"
        />

        <div className="flex gap-6">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <IconWA size={16} /> WhatsApp
          </a>
          <a
            href={IG_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
          >
            <IconIG size={15} /> Instagram
          </a>
        </div>

        <p className="text-xs text-white/25">
          © {new Date().getFullYear()} GL Ultra Clean. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

/* ─── WA Float ───────────────────────────────────────── */
function WaFloat() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-float"
      aria-label="Contato via WhatsApp"
    >
      <IconWA size={28} />
    </a>
  );
}

/* ─── Page ───────────────────────────────────────────── */
export default function Home() {
  useScrollReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Videos />
        <WhyUs />
        <CtaSection />
      </main>
      <Footer />
      <WaFloat />
    </>
  );
}
