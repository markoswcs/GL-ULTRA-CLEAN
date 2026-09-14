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
  const [selectedService, setSelectedService] = useState("Limpeza Residencial");
  const [selectedType, setSelectedType] = useState("Apartamento");
  const [notes, setNotes] = useState("");

  // Mobile Menu State
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de um orçamento para:\n• Serviço: ${selectedService}\n• Tipo de Imóvel/Local: ${selectedType}${notes ? `\n• Detalhes: ${notes}` : ""}`;
    window.open(getWhatsAppUrl(msg), "_blank");
  };

  const services = [
    {
      id: "residencial",
      title: "Limpeza Residencial Completa",
      badge: "Mais Pedido",
      desc: "Higienização profunda e detalhada para apartamentos e casas. Pisos, móveis, banheiros, cozinha e áreas comuns impecáveis.",
      items: ["Limpeza pesada ou de manutenção", "Desinfecção de banheiros e cozinha", "Eliminação de pó em todos os cantos", "Produtos com cheirinho suave e duradouro"],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      id: "estofados",
      title: "Higienização de Estofados & Colchões",
      badge: "Saúde & Higiene",
      desc: "Extração por sucção profunda que remove manchas, sujeiras impregnadas, ácaros, fungos e odores desagradáveis de sofás e colchões.",
      items: ["Sofás, poltronas e cadeiras de jantar", "Colchões e cabeceiras estofadas", "Eliminação de ácaros e bactérias", "Secagem rápida com produto profissional"],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: "pos-obra",
      title: "Limpeza Pós-Obra Técnica",
      badge: "Especialidade",
      desc: "Remoção criteriosa de resíduos de tinta, rejunte, cimento e poeira fina sem danificar seus porcelanatos, vidros ou acabamentos.",
      items: ["Eliminação completa da névoa de poeira", "Desincrustação técnica de pisos e rodapés", "Remoção de respingos de tintas e colas", "Ambiente 100% pronto para morar ou inaugurar"],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      id: "comercial",
      title: "Limpeza Comercial & Escritórios",
      badge: "Empresarial",
      desc: "Padronização e ambiente impecável para impressionar seus clientes e colaboradores. Lojas, escritórios, consultórios e clínicas.",
      items: ["Salas de reunião, recepção e estações", "Higienização constante de sanitários", "Horários flexíveis pré e pós expediente", "Emissão de nota e contrato de prestação"],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: "vidros",
      title: "Limpeza de Vidros, Blindex & Fachadas",
      badge: "Brilho Cristalino",
      desc: "Vidros translúcidos sem manchas, estrias ou marcas de dedos. Tratamento hidro-repelente para manter a transparência por muito mais tempo.",
      items: ["Janelas residenciais e portas blindex", "Guarda-corpos de varandas e sacadas", "Fachadas envidraçadas comerciais", "Técnica profissional que não risca"],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16M12 4v16" />
        </svg>
      ),
    },
    {
      id: "forros",
      title: "Limpeza de Forros, Tetos & Detalhes",
      badge: "Cuidado Total",
      desc: "Limpeza especializada para forros de gesso, PVC, madeira e áreas de difícil acesso com equipamentos de segurança adequados.",
      items: ["Remoção de teias de aranha e fuligem", "Tratamento de manchas superficiais", "Limpeza de luminárias e ventiladores", "Ambiente completamente renovado"],
      icon: (
        <svg className="w-6 h-6 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
    },
  ];

  const faqs = [
    {
      q: "Como faço para solicitar um orçamento?",
      a: "É super simples e rápido! Basta clicar no botão do WhatsApp em qualquer parte do site, nos dizer qual serviço precisa e a localização em Brasília/DF. Enviamos uma proposta personalizada em minutos.",
    },
    {
      q: "Vocês levam todos os produtos e equipamentos?",
      a: "Sim! Nossa equipe vai totalmente equipada com maquinário profissional (aspiradores industriais, extratoras, escovas especiais) e produtos de alto rendimento notificados pela Anvisa.",
    },
    {
      q: "Quais regiões de Brasília e do DF vocês atendem?",
      a: "Atendemos todo o Distrito Federal: Plano Piloto (Asa Sul e Norte), Sudoeste, Noroeste, Águas Claras, Guará, Lago Sul, Lago Norte, Vicente Pires, Taguatinga e demais regiões administrativas.",
    },
    {
      q: "Como funciona o pagamento?",
      a: "Trabalhamos com total comodidade para você: Pix, cartões de crédito e débito, ou transferência bancária. O pagamento é realizado com segurança após alinhamento do serviço.",
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
                title="Siga no Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={getWhatsAppUrl("Olá! Vim pelo site e gostaria de agendar um orçamento com a GL Ultra Clean.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-primary px-5 py-2.5 rounded-full text-sm font-bold inline-flex items-center gap-2"
              >
                <WhatsAppSvg className="w-4 h-4" />
                <span>Orçamento WhatsApp</span>
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
              Serviços
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
                Falar com Especialista
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
              <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-[#0077D4] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#0077D4] animate-ping" />
                <span>Limpeza Profissional em Brasília & DF</span>
              </div>

              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
                Ambientes impecáveis, higienizados e{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077D4] to-[#29ABE2]">
                  com cheiro de novo.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Especialistas em limpeza residencial, comercial, pós-obra, vidros e higienização profunda de estofados.
                Equipe qualificada, produtos profissionais e total pontualidade para você.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <a
                  href={getWhatsAppUrl("Olá! Gostaria de solicitar um orçamento para limpeza com a GL Ultra Clean.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp-primary px-8 py-4 rounded-2xl text-base font-extrabold flex items-center justify-center gap-3 shadow-lg"
                >
                  <WhatsAppSvg className="w-5 h-5" />
                  <span>Pedir Orçamento Grátis</span>
                </a>
                <a
                  href="#videos"
                  className="px-6 py-4 rounded-2xl border-2 border-slate-200 hover:border-[#0077D4] bg-white hover:bg-sky-50/50 text-slate-700 hover:text-[#0077D4] font-bold text-base transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 text-[#0077D4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Ver Vídeos de Resultados</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-500 font-bold text-sm">
                    ★
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">5.0 Estrelas</div>
                    <div className="text-xs text-slate-500">Avaliação máxima</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-sm">
                    ✓
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">Garantia</div>
                    <div className="text-xs text-slate-500">100% Satisfação</div>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-sky-100 flex items-center justify-center text-[#0077D4] font-bold text-sm">
                    ⚡
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-900 leading-tight">Rápido</div>
                    <div className="text-xs text-slate-500">Resposta imediata</div>
                  </div>
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
                    🧹
                  </div>
                  <div>
                    <h2 className="text-lg font-black text-slate-900">Peça seu Orçamento Online</h2>
                    <p className="text-xs text-slate-500">Selecione e envie direto no WhatsApp em 1 clique:</p>
                  </div>
                </div>

                <form onSubmit={handleSimulate} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      1. Qual o tipo de serviço?
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        "Limpeza Residencial",
                        "Higienização de Sofá",
                        "Limpeza Pós-Obra",
                        "Limpeza Comercial",
                        "Limpeza de Vidros",
                        "Outro Serviço",
                      ].map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => setSelectedService(srv)}
                          className={`text-left text-xs font-semibold px-3 py-2.5 rounded-xl border transition-all ${
                            selectedService === srv
                              ? "border-[#0077D4] bg-sky-50 text-[#0077D4] font-bold shadow-sm"
                              : "border-slate-200 text-slate-600 hover:border-slate-300 bg-slate-50/50"
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      2. Tipo de imóvel ou local?
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {["Apartamento", "Casa", "Escritório", "Outro"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`text-center text-xs font-semibold py-2 rounded-xl border transition-all ${
                            selectedType === type
                              ? "border-[#0077D4] bg-sky-50 text-[#0077D4] font-bold shadow-sm"
                              : "border-slate-200 text-slate-600 hover:border-slate-300 bg-slate-50/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      3. Alguma observação ou tamanho? (Opcional)
                    </label>
                    <input
                      type="text"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Sofá retrátil 3 lugares, apto 2 quartos em Águas Claras..."
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
                    🔒 Sem compromisso • Atendimento imediato em horário comercial
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS STRIP ─── */}
      <section className="bg-slate-900 text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#29ABE2] tracking-tight">+500</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Ambientes Limpos</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">100%</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Garantia de Qualidade</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-[#29ABE2] tracking-tight">5★</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Avaliação dos Clientes</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">Todo DF</div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1">Brasília e Regiões</div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES SECTION ─── */}
      <section id="servicos" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs font-black tracking-widest text-[#0077D4] uppercase bg-sky-100 px-3 py-1 rounded-full">
              Excelência em Cada Detalhe
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Nossos Serviços Especializados
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Conheça as soluções completas que oferecemos para sua residência ou empresa em Brasília.
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
                  href={getWhatsAppUrl(`Olá! Gostaria de um orçamento para o serviço de: ${s.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl border-2 border-[#0077D4] text-[#0077D4] hover:bg-[#0077D4] hover:text-white font-bold text-sm text-center transition-all flex items-center justify-center gap-2 group"
                >
                  <span>Pedir Orçamento Deste Serviço</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </a>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
              <span className="text-sm font-semibold text-slate-700">
                Precisa de um serviço sob medida ou pacote recorrente?
              </span>
              <a
                href={getWhatsAppUrl("Olá! Gostaria de falar sobre um plano personalizado de limpeza.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-primary px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2"
              >
                <WhatsAppSvg className="w-4 h-4" />
                <span>Conversar com nossa Equipe</span>
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
              <span>Vídeos Reais no Instagram</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              Veja a Transformação com Seus Próprios Olhos
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Nada fala mais alto do que o resultado final. Assista abaixo aos vídeos dos serviços realizados pela GL Ultra Clean!
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
              <span>Siga @gl_ultraclean para mais antes e depois</span>
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
              Por Que Confiar a Limpeza à Nossa Empresa?
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Cuidado rigoroso, discrição e excelência técnica para superar suas expectativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-[#29ABE2] flex items-center justify-center text-2xl mb-4 font-bold">
                ⏱️
              </div>
              <h3 className="text-lg font-bold mb-2">Pontualidade Britânica</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Respeitamos rigorosamente os horários agendados e os prazos acordados. Sem atrasos nem imprevistos.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-[#29ABE2] flex items-center justify-center text-2xl mb-4 font-bold">
                🧪
              </div>
              <h3 className="text-lg font-bold mb-2">Produtos Certificados</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Utilizamos químicos profissionais autorizados pela Anvisa, que não danificam tecidos, pisos e são seguros para pets.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-[#29ABE2] flex items-center justify-center text-2xl mb-4 font-bold">
                🛡️
              </div>
              <h3 className="text-lg font-bold mb-2">Equipe Confiável</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Profissionais uniformizados, treinados com metodologia própria e postura discreta dentro da sua casa ou empresa.
              </p>
            </div>

            <div className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-[#29ABE2] flex items-center justify-center text-2xl mb-4 font-bold">
                💬
              </div>
              <h3 className="text-lg font-bold mb-2">Orçamento Transparente</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Sem surpresas ou cobranças extras de última hora. O valor alinhado no WhatsApp é o valor final.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-black tracking-widest text-[#0077D4] uppercase bg-sky-100 px-3 py-1 rounded-full">
              Depoimentos de Quem Já Contratou
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              O Que Nossos Clientes Dizem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 text-base mb-4">★★★★★</div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;A equipe da GL Ultra Clean salvou meu sofá! As crianças tinham derramado suco e chocolate, parecia que não ia sair. Ficou como novo e com um cheiro maravilhoso.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-[#0077D4] flex items-center justify-center font-bold text-sm">
                  MR
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Mariana Ribeiro</div>
                  <div className="text-xs text-slate-500">Asa Norte - Brasília</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 text-base mb-4">★★★★★</div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;Contratei a limpeza pós-obra antes de me mudar para o novo apartamento. O piso porcelanato estava cheio de poeira e cola de rodapé. Entregaram tudo brilhando no mesmo dia!&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-[#0077D4] flex items-center justify-center font-bold text-sm">
                  CS
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Carlos Silva</div>
                  <div className="text-xs text-slate-500">Águas Claras - DF</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex text-amber-400 text-base mb-4">★★★★★</div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  &ldquo;Atendimento impecável no WhatsApp desde o primeiro contato. Foram super pontuais e os vidros da minha clínica ficaram 100% transparentes. Já fechei limpeza mensal.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="w-10 h-10 rounded-full bg-sky-100 text-[#0077D4] flex items-center justify-center font-bold text-sm">
                  DF
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Dra. Fernanda L.</div>
                  <div className="text-xs text-slate-500">Lago Sul - Brasília</div>
                </div>
              </div>
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
            Pronto para ter seu espaço limpo de verdade?
          </h2>

          <p className="text-base sm:text-xl text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Fale conosco agora pelo WhatsApp, tire suas dúvidas e agende o melhor dia para você. Sem burocracia e com atendimento rápido!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href={getWhatsAppUrl("Olá! Gostaria de um orçamento imediato com a GL Ultra Clean.")}
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
      <footer className="bg-slate-950 text-slate-400 py-14 border-t border-slate-800">
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
              <span className="text-xs text-slate-400">Serviços de Limpeza de Alta Performance em Brasília & DF</span>
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

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© {new Date().getFullYear()} GL Ultra Clean. Todos os direitos reservados.</p>
            <p>Brasília - Distrito Federal</p>
          </div>
        </div>
      </footer>

      {/* ─── FLOATING WHATSAPP BUTTON ─── */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Helper tooltip */}
        <a
          href={getWhatsAppUrl("Olá! Gostaria de tirar uma dúvida sobre os serviços de limpeza.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-white text-slate-800 text-xs font-bold px-4 py-2.5 rounded-full shadow-xl border border-slate-200 hover:text-[#0077D4] transition-all hover:scale-105"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Orçamento Online no WhatsApp</span>
        </a>

        {/* Pulse button */}
        <a
          href={getWhatsAppUrl("Olá! Gostaria de um orçamento.")}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full btn-whatsapp-primary flex items-center justify-center whatsapp-pulse shadow-2xl transition-transform hover:scale-110 active:scale-95"
          aria-label="Abrir WhatsApp"
          title="Fale conosco no WhatsApp"
        >
          <WhatsAppSvg className="w-8 h-8 fill-white" />
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
