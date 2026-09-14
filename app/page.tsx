"use client";

import { useState } from "react";
import Image from "next/image";

const WA_BASE = "https://api.whatsapp.com/send/?phone=61993688759";
const IG_URL = "https://www.instagram.com/gl_ultraclean";

function getWhatsAppUrl(customText?: string) {
  const text = customText || "Olá! Gostaria de solicitar um orçamento com a GL Ultra Clean.";
  return `${WA_BASE}&text=${encodeURIComponent(text)}`;
}

export default function Home() {
  // Simulator State
  const [selectedService, setSelectedService] = useState("Sofá");
  const [selectedAction, setSelectedAction] = useState("Higienização + Impermeabilização");
  const [location, setLocation] = useState("Brasília / DF");
  const [notes, setNotes] = useState("");

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de um orçamento para:\n• Item: ${selectedService}\n• Serviço Desejado: ${selectedAction}\n• Localização: ${location}${notes ? `\n• Detalhes/Modelo: ${notes}` : ""}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  // Serviços 100% fiéis ao Instagram (@gl_ultraclean):
  // Destaques: Sofá, Colchão, Bancos, Cadeira
  // Bio: Higienização e Impermeabilização | Saúde é conforto para a sua família
  const services = [
    {
      id: "sofa",
      title: "Higienização de Sofás",
      badge: "Destaque Principal",
      desc: "Limpeza profunda e desinfecção de sofás retráteis, de canto, 2 e 3 lugares em tecidos como linho, suede, veludo e couro.",
      items: [
        "Remoção de manchas, sujeiras e encardidos",
        "Eliminação profunda de odores e suor",
        "Extração de ácaros, fungos e bactérias",
        "Secagem rápida com produto profissional",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: "colchao",
      title: "Higienização de Colchões",
      badge: "Saúde & Sono",
      desc: "Tratamento antialérgico intensivo em colchões de solteiro, casal, queen e king. Ideal para quem sofre com rinite e alergias.",
      items: [
        "Eliminação de milhares de ácaros acumulados",
        "Remoção de manchas de suor e líquidos",
        "Desodorização completa e higienização profunda",
        "Ambiente saudável para seu descanso",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
    {
      id: "bancos",
      title: "Higienização de Bancos Automotivos",
      badge: "Veicular",
      desc: "Higienização e revitalização dos bancos de tecido ou couro do seu carro. Remove sujeira acumulada do dia a dia e odores.",
      items: [
        "Bancos dianteiros, traseiros e encostos",
        "Remoção de manchas de poeira e derramamentos",
        "Limpeza e hidratação para bancos de couro",
        "Carro com aspecto de novo e cheiro agradável",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
        </svg>
      ),
    },
    {
      id: "cadeiras",
      title: "Higienização de Cadeiras & Poltronas",
      badge: "Sala & Escritório",
      desc: "Revitalização de cadeiras de jantar, poltronas decorativas, pufes e cadeiras de escritório. Tecidos renovados sem agredir a fibra.",
      items: [
        "Cadeiras de mesa de jantar estofadas",
        "Poltronas de amamentação e decorativas",
        "Cadeiras de escritório e recepção",
        "Tratamento suave para tecidos finos",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 4h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "impermeabilizacao",
      title: "Impermeabilização de Estofados",
      badge: "Proteção Total",
      desc: "Blindagem que impede que líquidos (café, suco, vinho, urina de pet) penetrem na espuma. A sujeira fica na superfície e é fácil de limpar.",
      items: [
        "Barreira protetora invisível e não tóxica",
        "Não altera a cor nem a maciez do tecido",
        "Aumenta drasticamente a vida útil do estofado",
        "Garantia e laudo de aplicação",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      id: "tapetes",
      title: "Higienização de Tapetes & Carpetes",
      badge: "Ar Puro",
      desc: "Lavagem especializada com extração profunda para eliminar ácaros e pó acumulado na base das fibras de tapetes felpudos ou sintéticos.",
      items: [
        "Tapetes persas, sintéticos, shaggy e sisal",
        "Eliminação profunda de poeira e alérgenos",
        "Realce das cores originais da peça",
        "Higienização segura que preserva a trama",
      ],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "O que a higienização de estofados remove?",
      a: "Nosso processo de sucção profunda e produtos específicos removem ácaros, bactérias, fungos, manchas recentes e antigas (suor, urina, alimentos, bebidas) e odores desagradáveis, devolvendo o aspecto renovado ao tecido.",
    },
    {
      q: "Quanto tempo demora para o estofado secar?",
      a: "Com nossos equipamentos de alta extração a vácuo, retiramos cerca de 90% da umidade no próprio procedimento. A secagem completa geralmente ocorre entre 4 a 8 horas, dependendo da ventilação do local.",
    },
    {
      q: "Como funciona a Impermeabilização?",
      a: "A impermeabilização cria uma película protetora em volta de cada fibra do tecido. Quando cai algum líquido (água, suco, vinho, café), ele não é absorvido pela espuma e fica em forma de gotícula, bastando passar um papel toalha para limpar.",
    },
    {
      q: "Vocês atendem em Valparaíso de Goiás e Brasília?",
      a: "Sim! Atendemos em domicílio em Valparaíso de Goiás, entorno-GO e em todo o Distrito Federal (Plano Piloto, Águas Claras, Guará, Sudoeste, Noroeste, Taguatinga, Lago Sul/Norte e demais regiões).",
    },
    {
      q: "Como faço para solicitar um orçamento?",
      a: "É só clicar no botão do WhatsApp! Você nos envia uma foto ou nos diz o modelo do sofá/estofado e a sua localidade, e enviamos o orçamento na hora sem nenhum compromisso.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-[#29ABE2] selection:text-white">
      {/* ─── NAVBAR ─── */}
      <nav className="fixed top-0 inset-x-0 z-50 glass-nav transition-all duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo transparente */}
            <a href="#" className="flex items-center gap-3 group">
              <Image
                src="/logo-clean.png"
                alt="GL Ultra Clean"
                width={150}
                height={55}
                priority
                className="h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#servicos" className="text-sm font-semibold text-slate-700 hover:text-[#0077D4] transition-colors">
                Serviços
              </a>
              <a href="#videos" className="text-sm font-semibold text-slate-700 hover:text-[#0077D4] transition-colors">
                Vídeos Reais
              </a>
              <a href="#diferenciais" className="text-sm font-semibold text-slate-700 hover:text-[#0077D4] transition-colors">
                Diferenciais
              </a>
              <a href="#duvidas" className="text-sm font-semibold text-slate-700 hover:text-[#0077D4] transition-colors">
                Dúvidas
              </a>
            </div>

            {/* Header CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full text-slate-500 hover:text-[#0077D4] hover:bg-slate-100 transition-colors"
                title="Siga no Instagram @gl_ultraclean"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de agendar um orçamento para higienização de estofados com a GL Ultra Clean.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-primary px-5 py-2.5 rounded-full text-sm font-bold inline-flex items-center gap-2"
              >
                <WhatsAppSvg className="w-4 h-4" />
                <span>Orçamento no WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-primary px-3 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5"
              >
                <WhatsAppSvg className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-[#0077D4] focus:outline-none"
                aria-label="Abrir menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0077D4]"
            >
              Serviços de Higienização
            </a>
            <a
              href="#videos"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0077D4]"
            >
              Vídeos Reais
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0077D4]"
            >
              Diferenciais
            </a>
            <a
              href="#duvidas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-base font-semibold text-slate-700 hover:text-[#0077D4]"
            >
              Dúvidas Frequentes
            </a>
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-3">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-primary w-full py-3 rounded-xl text-center font-bold text-sm flex items-center justify-center gap-2"
              >
                <WhatsAppSvg className="w-4 h-4" />
                Falar no WhatsApp
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 rounded-xl border border-slate-200 text-center font-semibold text-sm text-slate-700 flex items-center justify-center gap-2 hover:bg-slate-50"
              >
                Ver Instagram @gl_ultraclean
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ─── HERO SECTION ─── */}
      <section className="hero-gradient pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Pill Badge */}
              <div className="inline-flex items-center gap-2 bg-sky-100/90 border border-sky-200 text-[#0077D4] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide">
                <span>📍</span>
                <span>Brasília-DF e Entorno-GO • Valparaíso</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Higienização &amp; Impermeabilização de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077D4] to-[#29ABE2]">
                  Estofados.
                </span>
              </h1>

              {/* Slogan from Instagram bio */}
              <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0077D4]">
                <span>🍃</span>
                <span>Saúde e conforto para a sua família</span>
              </div>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Especialistas em <strong>sofás, colchões, bancos automotivos e cadeiras</strong>. Eliminamos ácaros, fungos, bactérias, manchas e odores desagradáveis com produtos de alto padrão e secagem rápida.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de um orçamento para higienização/impermeabilização de estofados.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-primary px-8 py-4 rounded-2xl text-base font-extrabold flex items-center justify-center gap-3 shadow-lg"
                >
                  <WhatsAppSvg className="w-5 h-5" />
                  <span>Pedir Orçamento Grátis</span>
                </a>
                <a
                  href="#servicos"
                  className="px-6 py-4 rounded-2xl border-2 border-slate-200 hover:border-[#0077D4] bg-white hover:bg-sky-50/50 text-slate-700 hover:text-[#0077D4] font-bold text-base transition-all flex items-center justify-center gap-2"
                >
                  <span>Ver Estofados Atendidos ↓</span>
                </a>
              </div>

              {/* Highlights Pill Badges (from Instagram highlights: Sofá, Colchão, Bancos, Cadeira) */}
              <div className="pt-6 border-t border-slate-200/80">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                  Atendemos em domicílio:
                </span>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["🛋️ Sofás", "🛏️ Colchões", "🚗 Bancos de Carro", "🪑 Cadeiras & Poltronas", "🛡️ Impermeabilização"].map((item) => (
                    <span
                      key={item}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs sm:text-sm font-semibold text-slate-700 flex items-center gap-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Card: Interactive WhatsApp Simulator */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-sky-100 relative">
                {/* Decorative glow */}
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#29ABE2] to-[#0077D4] text-white text-xs font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-md">
                  Simulação Rápida
                </div>

                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-xl">
                    💦
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-slate-900">Simule seu Orçamento</h2>
                    <p className="text-xs text-slate-500">Escolha o item e receba a proposta no WhatsApp:</p>
                  </div>
                </div>

                <form onSubmit={handleSimulate} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      1. Qual estofado você quer higienizar?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Sofá",
                        "Colchão",
                        "Bancos Automotivos",
                        "Cadeiras / Poltronas",
                        "Tapete",
                        "Outro Item",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setSelectedService(item)}
                          className={`text-left text-xs font-semibold px-3 py-2.5 rounded-xl border transition-all ${
                            selectedService === item
                              ? "border-[#0077D4] bg-sky-50 text-[#0077D4] font-bold shadow-sm"
                              : "border-slate-200 text-slate-600 hover:border-slate-300 bg-slate-50/50"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      2. Qual o serviço desejado?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Higienização Profunda",
                        "Higienização + Impermeabilização",
                        "Apenas Impermeabilização",
                        "Remoção de Manchas/Odor",
                      ].map((action) => (
                        <button
                          key={action}
                          type="button"
                          onClick={() => setSelectedAction(action)}
                          className={`text-left text-xs font-semibold p-2.5 rounded-xl border transition-all ${
                            selectedAction === action
                              ? "border-[#0077D4] bg-sky-50 text-[#0077D4] font-bold shadow-sm"
                              : "border-slate-200 text-slate-600 hover:border-slate-300 bg-slate-50/50"
                          }`}
                        >
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      3. Sua Cidade / Região:
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {["Brasília / DF", "Valparaíso / GO", "Entorno / GO"].map((loc) => (
                        <button
                          key={loc}
                          type="button"
                          onClick={() => setLocation(loc)}
                          className={`text-center text-xs font-semibold py-2 rounded-xl border transition-all ${
                            location === loc
                              ? "border-[#0077D4] bg-sky-50 text-[#0077D4] font-bold shadow-sm"
                              : "border-slate-200 text-slate-600 hover:border-slate-300 bg-slate-50/50"
                          }`}
                        >
                          {loc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      4. Quantidade de lugares ou detalhes (Opcional):
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Sofá retrátil 3 lugares linho cinza..."
                      className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-[#0077D4] focus:ring-2 focus:ring-sky-100 transition-all text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-whatsapp-primary py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer mt-2"
                  >
                    <WhatsAppSvg className="w-5 h-5" />
                    <span>Enviar Orçamento no WhatsApp</span>
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Sem compromisso • Atendimento imediato no WhatsApp
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── HIGHLIGHT STRIP (Sofá, Colchão, Bancos, Cadeira) ─── */}
      <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-[#29ABE2] uppercase tracking-widest">
              Destaques do nosso Instagram @gl_ultraclean
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-3xl mb-2">🛋️</div>
              <div className="text-lg font-black text-white">Sofás</div>
              <div className="text-xs text-slate-400 mt-1">Retráteis, Canto &amp; Couro</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-3xl mb-2">🛏️</div>
              <div className="text-lg font-black text-white">Colchões</div>
              <div className="text-xs text-slate-400 mt-1">Solteiro, Casal, Queen &amp; King</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-3xl mb-2">🚗</div>
              <div className="text-lg font-black text-white">Bancos</div>
              <div className="text-xs text-slate-400 mt-1">Automotivos (Tecido e Couro)</div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
              <div className="text-3xl mb-2">🪑</div>
              <div className="text-lg font-black text-white">Cadeiras</div>
              <div className="text-xs text-slate-400 mt-1">Jantar, Poltronas &amp; Escritório</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION (ALIGNED WITH INSTAGRAM) ─── */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black tracking-widest text-[#0077D4] uppercase bg-sky-100 px-3 py-1 rounded-full">
              Higienização e Impermeabilização
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Nossos Serviços Especializados
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Cuidado minucioso para devolver a beleza original e a saúde aos estofados da sua família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.id}
                className="bg-white rounded-3xl p-8 border border-slate-200/80 card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 flex items-center justify-center border border-sky-100">
                      {s.icon}
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-slate-900 mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">{s.desc}</p>

                  <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
                    {s.items.map((it, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-[10px] font-black shrink-0">
                          ✓
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsAppUrl(`Olá! Gostaria de um orçamento para: ${s.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border-2 border-[#0077D4] text-[#0077D4] hover:bg-[#0077D4] hover:text-white font-bold text-sm text-center transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Pedir Orçamento Deste Item</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-sm font-semibold text-slate-700">
                Tem dúvidas sobre o tecido ou quer um pacote para vários estofados?
              </span>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de tirar dúvidas sobre a higienização dos meus estofados.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-primary px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2"
              >
                <WhatsAppSvg className="w-4 h-4" />
                <span>Falar com o Especialista</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── REAL VIDEOS & INSTAGRAM REELS ─── */}
      <section id="videos" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 bg-pink-50 border border-pink-200 text-pink-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
              <InstagramSvg className="w-4 h-4 text-pink-600" />
              <span>Vídeos Reais do Instagram</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Veja a Transformação dos Estofados
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Confira vídeos reais direto do nosso perfil oficial no Instagram (@gl_ultraclean)!
            </p>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Reel 1 */}
            <div className="bg-slate-50 rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-md flex flex-col items-center">
              <div className="w-full relative rounded-2xl overflow-hidden shadow-inner bg-black border border-slate-300" style={{ paddingTop: "140%" }}>
                <iframe
                  src="https://www.instagram.com/reel/DbT8EoISdow/embed/"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="GL Ultra Clean Reel 1"
                />
              </div>
              <div className="w-full mt-4 flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-slate-700">@gl_ultraclean no Instagram</span>
                <a
                  href="https://www.instagram.com/reel/DbT8EoISdow/?stkn=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0077D4] hover:underline flex items-center gap-1"
                >
                  <span>Abrir Reel no App</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* Reel 2 */}
            <div className="bg-slate-50 rounded-3xl p-4 sm:p-6 border border-slate-200 shadow-md flex flex-col items-center">
              <div className="w-full relative rounded-2xl overflow-hidden shadow-inner bg-black border border-slate-300" style={{ paddingTop: "140%" }}>
                <iframe
                  src="https://www.instagram.com/reel/Dac7pyIy3DM/embed/"
                  className="absolute inset-0 w-full h-full border-0"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="GL Ultra Clean Reel 2"
                />
              </div>
              <div className="w-full mt-4 flex items-center justify-between pt-2">
                <span className="text-xs font-bold text-slate-700">@gl_ultraclean no Instagram</span>
                <a
                  href="https://www.instagram.com/reel/Dac7pyIy3DM/?stkn=MzRlODBiNWFlZA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#0077D4] hover:underline flex items-center gap-1"
                >
                  <span>Abrir Reel no App</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* Instagram Follow Banner */}
          <div className="mt-12 text-center">
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 text-white font-bold text-sm sm:text-base shadow-lg hover:opacity-95 transition-opacity"
            >
              <InstagramSvg className="w-5 h-5 fill-white" />
              <span>Siga @gl_ultraclean para conferir mais resultados</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US (DIFERENCIAIS) ─── */}
      <section id="diferenciais" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 bg-[#0077D4]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-96 h-96 bg-[#29ABE2]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black tracking-widest text-[#29ABE2] uppercase bg-sky-950/80 border border-sky-800 px-3 py-1 rounded-full">
              Padrão GL Ultra Clean
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
              Por Que Escolher a Nossa Higienização?
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Saúde, conforto e cuidado profissional para os estofados da sua casa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-[#29ABE2] flex items-center justify-center text-2xl mb-4 font-bold">
                🍃
              </div>
              <h3 className="text-lg font-bold mb-2">Saúde &amp; Antialérgico</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Elimina até 99,9% dos ácaros, bactérias e fungos causadores de crises respiratórias e alergias.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-[#29ABE2] flex items-center justify-center text-2xl mb-4 font-bold">
                🧪
              </div>
              <h3 className="text-lg font-bold mb-2">Produtos Certificados</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Químicos biodegradáveis e homologados pela Anvisa. Seguros para crianças, bebês e pets.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-[#29ABE2] flex items-center justify-center text-2xl mb-4 font-bold">
                🛡️
              </div>
              <h3 className="text-lg font-bold mb-2">Preservação do Tecido</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Técnicas que restauram a maciez e as cores originais do tecido sem ressecar ou desfiar as fibras.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-[#29ABE2] flex items-center justify-center text-2xl mb-4 font-bold">
                ⏱️
              </div>
              <h3 className="text-lg font-bold mb-2">Atendimento no Local</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Vamos até sua residência ou empresa em Brasília-DF e entorno-GO com pontualidade e discrição.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
      <section id="duvidas" className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-black tracking-widest text-[#0077D4] uppercase bg-sky-100 px-3 py-1 rounded-full">
              Tire Suas Dúvidas
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between bg-slate-50/50 hover:bg-slate-50 font-bold text-slate-900 text-base"
                  >
                    <span>{faq.q}</span>
                    <span className="text-xl text-[#0077D4] transition-transform duration-200">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 py-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA BANNER ─── */}
      <section className="py-20 bg-gradient-to-br from-[#061E3C] via-[#0D3B75] to-[#0077D4] text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          {/* White transparent logo */}
          <div className="flex justify-center">
            <Image
              src="/logo-white.png"
              alt="GL Ultra Clean"
              width={160}
              height={60}
              className="h-14 w-auto object-contain opacity-95"
            />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Pronto para ter seu estofado renovado e higienizado?
          </h2>

          <p className="text-base sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Fale conosco agora pelo WhatsApp, mande uma foto do seu estofado e receba seu orçamento em poucos minutos!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de um orçamento para higienizar meus estofados.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp-primary px-9 py-4 rounded-2xl text-base font-extrabold flex items-center justify-center gap-3 shadow-2xl w-full sm:w-auto"
            >
              <WhatsAppSvg className="w-6 h-6" />
              <span>Chamar no WhatsApp (61) 99368-8759</span>
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-2xl border-2 border-white/40 hover:border-white text-white font-bold text-base hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <InstagramSvg className="w-5 h-5 fill-white" />
              <span>Acessar Instagram @gl_ultraclean</span>
            </a>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="bg-slate-950 text-slate-400 pt-14 pb-28 sm:pb-20 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-slate-800">
            {/* Logo */}
            <div className="flex flex-col items-center md:items-start gap-2">
              <Image
                src="/logo-white.png"
                alt="GL Ultra Clean"
                width={130}
                height={50}
                className="h-10 w-auto object-contain opacity-90"
              />
              <span className="text-xs text-slate-400">Higienização e Impermeabilização de Estofados • Brasília-DF e entorno-GO</span>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#servicos" className="hover:text-white transition-colors">
                Serviços
              </a>
              <a href="#videos" className="hover:text-white transition-colors">
                Vídeos
              </a>
              <a href="#diferenciais" className="hover:text-white transition-colors">
                Diferenciais
              </a>
              <a href="#duvidas" className="hover:text-white transition-colors">
                Dúvidas
              </a>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] hover:underline font-bold"
              >
                WhatsApp: (61) 99368-8759
              </a>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 sm:pr-24">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} GL Ultra Clean. Todos os direitos reservados. • Desenvolvido por{" "}
              <a
                href="https://www.instagram.com/markos.jpeg/?hl=pt-br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-[#29ABE2] transition-colors font-medium underline underline-offset-2"
              >
                @markos.jpeg
              </a>
            </p>
            <p className="text-center sm:text-right text-slate-400">
              Brasília-DF e entorno-GO (Valparaíso)
            </p>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP BUTTON ─── */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group">
        {/* Tooltip shown on hover only */}
        <span className="hidden sm:inline-flex opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 pointer-events-none items-center gap-2 bg-white text-slate-800 text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl border border-slate-200 whitespace-nowrap">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Orçamento Rápido no WhatsApp</span>
        </span>

        {/* Pulse button */}
        <a
          href={getWhatsAppUrl("Olá! Gostaria de um orçamento para estofados.")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full btn-whatsapp-primary flex items-center justify-center whatsapp-pulse shadow-2xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Abrir WhatsApp"
          title="Fale conosco no WhatsApp"
        >
          <WhatsAppSvg className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
        </a>
      </div>
    </div>
  );
}

/* ─── Svg Icons ─── */
function WhatsAppSvg({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.116 1.52 5.845L.057 23.854a.5.5 0 0 0 .612.612l5.857-1.488A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.093-1.396l-.36-.217-3.778.96.975-3.697-.234-.377A9.947 9.947 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function InstagramSvg({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}
