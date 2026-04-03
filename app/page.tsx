"use client";

import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";

import { useState } from "react";
import {
  Sparkles,
  PartyPopper,
  Cake,
  BrushCleaning,
  Building2,
  Flower2,
  ArrowDown,
  ArrowRight,
  MessageCircle,
  Menu,
  X,
  Palette,
  WandSparkles,
} from "lucide-react";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const beVietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-be-vietnam",
});

const navItems = [
  { label: "Portafolio", href: "#portafolio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Filosofía", href: "#filosofia" },
];

const services = [
  {
    title: "Cumpleaños",
    description:
      "Curaduría personalizada para personas que quieren celebrar con identidad propia.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB1hVtRGlPLG3d8ADY242OCapBJBh3QOedA1uQZW0-cEMLXWEvhCup9aRdEs6QBTSRWf6aX5pePAxazBXUI4netmocvcstCDxdoCVeGQVjdCFWUtBSP8RDQnZNz1UxAa9yrmavCgB_D554X_GgstU-lnwXx--dJ3RZkkGferUdc4_XJQuuDg3GnObQ5rL4LHUEVVNuxKN_UGqdpFX6kolpBpHlaTSvqyZ4u4YJi4m9nDTT6qqzDrp1X2OzcEh_w1AeE_GYURzVvQvk",
    icon: Cake,
    overlay: "from-violet-900/90 via-violet-700/30 to-transparent",
    iconClass: "text-amber-300",
  },
  {
    title: "Talleres",
    description:
      "Experiencias creativas diseñadas para conectar, inspirar y dejar huella.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDFvkZDorm5ut-aX5OSfTDHqtEYuBX1GUTzwMdv30Yv16s9y8V7XyRBcj333dpXseU7DJYTwgnJjdyfky3UXm_lKPjuu9LAZN8pCVkNoWFn2yDuwE8oVOLz6UgDY674O0Tc8KsJEJDAj7b0EBZziM4asZEv6yi1ycNrn8cKLImLgDP6lnkC-OSOqY7yzZ7RerG7SqrprX8Yqqi-zvozj-mHL6hgIU2Jxpmim1XcgKQblKsu_j9pzU5xWZS5XHyUiFbGZTsmQ32gkao",
    icon: BrushCleaning,
    overlay: "from-pink-900/90 via-pink-700/30 to-transparent",
    iconClass: "text-fuchsia-200",
  },
  {
    title: "Eventos",
    description:
      "Producciones con impacto visual, dirección creativa y ejecución impecable.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCQX4WWv2Nlrs5cNrLslHb7FDuZh82KXScGgSfsrMaQgfXG9Y9LEV2HcWeJQr83LCpZLKyzSsjyrKzsDao7ViO5lSfcT_jydjO5EWfMdFRZOZqCdDv3aBC_2LKJfIornxgC5DwHQI04MDICYGbVKwohtCdf9p8Pmm9eqldCV5H1bI0hMu_ZhRodAq9nvcurdp4Fy81wr5tvedHNj0gy2I7aIJID2DxrzGg5mXgwk6-Qjotq5yRVX7pp6r6_K2BMqMEJM6NCPeL7Vb4",
    icon: Building2,
    overlay: "from-slate-900/90 via-slate-700/30 to-transparent",
    iconClass: "text-amber-300",
  },
];

export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className={`${plusJakarta.variable} ${beVietnam.variable} min-h-screen bg-[#fdf8fd] text-[#1c1b1f] antialiased`}
    >
      <header className="fixed left-1/2 top-4 z-50 w-[92%] max-w-7xl -translate-x-1/2 md:top-6">
        <div className="rounded-full border border-white/20 bg-white/70 px-4 py-3 shadow-2xl backdrop-blur-xl md:px-8 md:py-4">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCmaMqfPmyCpS5iG9XgukBRyHYlX8GAQN2lM8KDbZhnf7AbJ6R5oZ_w1srpnJDCS6CmO5rdRRVbGZXsLtsRCIb1pCYOsfX_wjaGEIUi6Q3DzczDWDPKt3lusp-yzlY1hcAtApIl7mDx7kOfMxfviy-VeuYo6Zpny_5M7N1t0_5H2kL-nN6VBvBeimN3D31inN_yJ297jy0MKr4OCkumThVE30DyBnmthvu8etEvt6H2lJ6NnyGdr0zzWNQHDWKJGKj5OTMulj7BcXI"
                alt="Logo de Mangle"
                className="h-9 w-auto md:h-10"
              />
              <span className="font-[var(--font-plus-jakarta)] text-lg font-extrabold tracking-tight text-[#644e8e] md:text-xl">
                Mangle
              </span>
            </div>

            <nav className="hidden items-center gap-8 font-[var(--font-plus-jakarta)] text-sm font-bold uppercase tracking-[0.2em] text-[#49454f] lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-[#644e8e]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:block">
              <a
                href="https://wa.me/yourlink"
                className="inline-flex items-center gap-2 rounded-full bg-[#644e8e] px-6 py-2.5 text-sm font-bold text-white shadow-lg transition-transform hover:scale-105"
              >
                <MessageCircle className="h-4 w-4" />
                Agenda ahora
              </a>
            </div>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#644e8e] text-white lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mt-4 rounded-3xl border border-[#e6e1e7] bg-white p-4 lg:hidden">
              <nav className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.15em] text-[#49454f] transition-colors hover:bg-[#f8f2f8] hover:text-[#644e8e]"
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://wa.me/yourlink"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#644e8e] px-5 py-3 text-sm font-bold text-white"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agenda por WhatsApp
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKytpRKKbWK2_jbTFNBhqxBFvJ4USXCwSN4h49EQve8zW48GJ5MKH8KvRd7LoLjGjGbvJFDF4JJ4E6rTqH2XDwA6zCkIi5sc5OLt8sxS2WsFO2vXKO0gbmcuD-fFLgTMKMw_g5iBAN1NG6Hdb7f5eCJTw4j8ZfqEo4YkjUjInBIiSHzz5Eo5RRsEUpirQVS67Nw40Rg-7dl8tkKO-s2xdo7GwHrdUUQ9pNJy6Y4jxtkj1_ZgYbOSJdx-X2bRvbIy4aoeeseahQdkI"
              alt="Montaje elegante para un evento"
              className="h-full w-full scale-105 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/10 to-[#fdf8fd]/95" />
          </div>

          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute right-[10%] top-[20%] h-52 w-52 rounded-full bg-[#fdbb2a]/35 blur-[100px] md:h-64 md:w-64" />
            <div className="absolute bottom-[20%] left-[5%] h-72 w-72 rounded-full bg-[#b94c78]/25 blur-[120px] md:h-80 md:w-80" />

            <div className="absolute bottom-[28%] left-[8%] hidden rounded-full bg-[#fdbb2a] p-5 shadow-2xl md:block animate-[float_6s_ease-in-out_infinite_1s]">
              <PartyPopper className="h-9 w-9 text-[#6d4d00]" />
            </div>
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-16 text-center md:px-8 md:pt-40 md:pb-20 md:text-left">
            <div className="max-w-4xl">
              <span className="mb-6 inline-block rounded-full border border-[#644e8e]/20 bg-[#644e8e]/20 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[#7d67a8] md:mb-8 md:text-sm">
                Donde el arte se convierte en evento
              </span>

              <h1 className="mb-6 font-[var(--font-plus-jakarta)] text-5xl font-black leading-[0.9] tracking-tight text-[#1c1b1f] sm:text-6xl md:mb-8 md:text-8xl lg:text-[9rem]">
                Creamos <br />
                <span className="italic text-[#644e8e]">momentos</span>
                <br />
                inolvidables
              </h1>

              <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-[#49454f] sm:text-xl md:mb-12 md:text-3xl">
                Tu visión, nuestra narrativa visual. Diseñamos celebraciones con
                identidad, emoción y una estética que se recuerda.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#portafolio"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#644e8e] px-8 py-4 text-lg font-black text-white shadow-2xl transition-all hover:scale-105 sm:w-auto md:px-10 md:py-5 md:text-xl"
                >
                  Explora la magia
                  <ArrowDown className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="servicios"
          className="relative overflow-hidden bg-[#fdf8fd] py-20 md:py-32"
        >
          <div className="absolute right-0 top-0 -z-10 h-[520px] w-[520px] translate-x-1/3 -translate-y-1/3 rounded-full bg-[#ece6ec] opacity-60 blur-2xl" />

          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-16 grid items-end gap-8 lg:grid-cols-12 md:mb-24">
              <div className="lg:col-span-7">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-[#1c1b1f] sm:text-5xl md:text-7xl lg:text-8xl">
                  Nuestras{" "}
                  <span className="text-[#9a3360]">especialidades</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="border-l-4 border-[#644e8e] pl-5 text-lg leading-relaxed text-[#49454f] md:pl-8 md:text-xl">
                  Desde celebraciones íntimas hasta experiencias de marca. Cada
                  servicio se diseña como una historia hecha a tu medida.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 md:gap-10">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className={`group relative overflow-hidden rounded-[2rem] shadow-2xl transition-all duration-500 hover:-translate-y-3 ${
                      index === 2
                        ? "xl:translate-y-10"
                        : index === 1
                          ? "xl:translate-y-4"
                          : ""
                    }`}
                  >
                    <div className="aspect-[3/4]">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.overlay} p-6 text-white md:p-8 lg:p-10`}
                    >
                      <div className="flex h-full flex-col justify-end">
                        <Icon
                          className={`mb-4 h-11 w-11 ${service.iconClass}`}
                        />
                        <h3 className="mb-3 text-3xl font-black md:text-4xl">
                          {service.title}
                        </h3>
                        <p className="max-w-sm text-base leading-relaxed text-white/90 md:text-lg">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="portafolio"
          className="overflow-hidden bg-[#1c1b1f] py-20 text-[#fdf8fd] md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-16 flex flex-col gap-10 md:mb-24 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="mb-6 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                  Nuestra <br />
                  <span className="italic text-[#d3bbff]">narrativa</span>
                </h2>
                <p className="max-w-xl text-lg font-light leading-relaxed text-[#cbc4d0] md:text-2xl">
                  Una selección de atmósferas, conceptos y producciones creadas
                  para clientes que quieren algo realmente memorable.
                </p>
              </div>

              <div className="self-start md:self-auto animate-[float_6s_ease-in-out_infinite]">
                <div className="flex flex-col items-center gap-2 rounded-full bg-[#9a3360] px-8 py-8 text-center shadow-2xl md:-rotate-12 md:px-10 md:py-10">
                  <span className="text-3xl font-black md:text-4xl">150+</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] md:text-xs">
                    Historias
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-10">
              <article className="group relative overflow-hidden rounded-[2rem] md:col-span-7 h-[420px] md:h-[760px]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL_ATK2JsyKs6gbKL6HZG0zM1OiAvUZ_nntiSHJMeEcO6X1Yu1_PYq7AGix55_KA8dF_15QakZ5Cd9PUJ11XsUHjNIPz9o2h2GIIcFTNNrKj_GPMJX2_Hrqk8xWctPyqNVQGHH63sgWCrUcME2keHf-eurt2-pCvxXAvQ7R5dztVy5GPXgqablgX8vOnNJY7_IzV3Xs64Mie9mAUCN-ci9O5ROR47WVvSY4WqncfM85jtGaGmzHDDRJ2pwaRfHU70bt_hzwkB7e0k"
                  alt="Evento editorial de verano"
                  className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/85 to-transparent p-6 md:p-10 lg:p-12">
                  <span className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#d3bbff] md:mb-4 md:text-sm">
                    Verano editorial
                  </span>
                  <h3 className="max-w-lg text-3xl font-black leading-none md:text-5xl lg:text-6xl">
                    Luz de verano en la Toscana
                  </h3>
                </div>
              </article>

              <div className="grid gap-6 md:col-span-5 md:grid-rows-2 md:gap-10">
                <article className="group relative overflow-hidden rounded-[2rem] h-[260px] md:h-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9RSBx49S_dWT1UbGx4szhw3Grz84o7CDDwVN1puvb9W1kTXHMEH8_edUl3iL1sImgxpgcazKe5UgoFt5AKsVZpAeVuxrki1HSevjdY4UMBQ0jhcp1HvdTxwC1L3Q6uVCT8O2UzBtJiIKXXtMbNjyWbKJJbUnH3vv2sbB-byL4thZScdKZAnMYu-7YSYka35bUSkRaap6jCB8Dfmh_RxTBb6MGMUDeyentlgyGMneI0FOjyLdtMC13_cXEcxBobogmdsrq5P9Jdxs"
                    alt="Dirección floral"
                    className="h-full w-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#9a3360]/20 transition-all group-hover:bg-transparent" />
                  <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8">
                    <p className="text-2xl font-bold md:text-3xl">
                      Arte floral
                    </p>
                  </div>
                </article>

                <article className="group relative overflow-hidden rounded-[2rem] bg-[#fdbb2a] h-[260px] md:h-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8m48r7jF6g0n_SUIHy8YCiXmd_mc__LSQ6ZXlHyQLWtGAgZj74cT5W3iF_PCHrE4n1_t9rt4Peim9MzutPRRF1twBqOrc6hGLAx_cYGjda_Sn0ER324Ls_KWY4Rrmp09ePBS7gd4GBi1zzTOM9sVAVc1wItJBGxnQ4mpebcSWH08QwoV8hfHpD9goxV_e3D0hlFkIQJeqj-pDZ2_rc0Wi1x_vrYiWSnyaB3AQPqjwVlVYbnAK9y07soHCiEVHWvdHL4pN_7uVqn8"
                    alt="Garden party de lujo"
                    className="h-full w-full object-cover opacity-60 mix-blend-multiply transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                    <h3 className="text-center text-3xl font-black text-[#6d4d00] md:text-4xl">
                      Garden party royale
                    </h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section
          id="filosofia"
          className="relative overflow-hidden py-20 md:py-36"
        >
          <div className="absolute inset-0 bg-[#644e8e]/5" />
          <div className="absolute right-[3%] top-[8%] hidden h-80 w-80 rounded-full border-[32px] border-[#fdbb2a]/30 md:block" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
            <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-24 xl:gap-32">
              <div className="relative w-full lg:w-1/2">
                <div className="overflow-hidden rounded-[2rem] border-[14px] border-white shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] md:border-[20px]">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVSEOiVuEZcySIuQbUXcFTbJHdlnC2QDmw6tmKsbyJc1rYMWHVp4ARqdMZsEhy06jOwO086wE11WKsthJkIEU7xGU2jxyFg2Avxwr6ZufV9Tno5leL9PX2WsIY0Sc8ibCF-jZ9r2wxSDlpAwujzPJSiMLEi9OiFR9tV557_M63Mj72M54mLt0yciwgsgcmdRLlxmFSlP3q1RZ9PSwqljXjuc6ZyVu7fVMt9G4EU-ebKYrJ3SqVEhZadqEyHcTNVtfCGEUf3Vbd-wU"
                    alt="Dirección creativa de eventos"
                    className="aspect-[4/5] h-full w-full object-cover"
                  />
                </div>

                <div className="absolute -left-3 -top-3 rounded-full bg-[#9a3360] p-4 shadow-2xl md:-left-6 md:-top-6 md:p-6 lg:-left-8 lg:-top-8">
                  <Flower2 className="h-7 w-7 text-white md:h-9 md:w-9 lg:h-11 lg:w-11" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <span className="mb-6 block text-xs font-black uppercase tracking-[0.4em] text-[#644e8e] md:mb-8 md:text-sm">
                  Nuestra esencia
                </span>
                <h2 className="mb-8 text-4xl font-black leading-[0.95] tracking-tight text-[#1c1b1f] sm:text-5xl md:mb-10 md:text-7xl lg:text-8xl">
                  El manifiesto de la <br />
                  <span className="text-[#644e8e]">pausa creativa</span>
                </h2>
                <p className="mb-10 text-lg font-light italic leading-relaxed text-[#49454f] md:mb-12 md:text-2xl">
                  “No organizamos eventos, diseñamos atmósferas temporales donde
                  el tiempo se pone al servicio de la belleza.”
                </p>

                <div className="space-y-8">
                  <div className="flex gap-5 md:gap-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ebddff] md:h-16 md:w-16">
                      <Palette className="h-7 w-7 text-[#644e8e] md:h-8 md:w-8" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-black">
                        Estética a medida
                      </h3>
                      <p className="leading-relaxed text-[#49454f]">
                        Cada elemento se plantea como una decisión visual única,
                        coherente con tu historia y tu intención.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5 md:gap-8">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#ffd9e3] md:h-16 md:w-16">
                      <WandSparkles className="h-7 w-7 text-[#9a3360] md:h-8 md:w-8" />
                    </div>
                    <div>
                      <h3 className="mb-2 text-xl font-black">
                        Curaduría emocional
                      </h3>
                      <p className="leading-relaxed text-[#49454f]">
                        No buscamos solo que se vea bonito, sino que se sienta
                        inolvidable para cada persona que lo viva.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center overflow-hidden bg-[#644e8e] py-20 md:py-32 lg:py-44">
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/4 top-1/4 h-[340px] w-[340px] rounded-full bg-[#9a3360] opacity-30 blur-[120px] md:h-[500px] md:w-[500px] md:blur-[150px]" />
            <div className="absolute bottom-1/4 right-1/4 h-[360px] w-[360px] rounded-full bg-[#7c5800] opacity-20 blur-[120px] md:h-[600px] md:w-[600px] md:blur-[150px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-6 text-center md:px-8">
            <h2 className="mb-8 text-4xl font-black leading-none tracking-tight text-white sm:text-5xl md:mb-12 md:text-7xl lg:text-8xl xl:text-9xl">
              ¿Creamos tu próxima <br />
              <span className="text-[#fdbb2a]">obra de arte?</span>
            </h2>

            <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
              <a
                href="https://wa.me/yourlink"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-black text-[#644e8e] shadow-2xl transition-all hover:scale-105 md:px-12 md:py-6 md:text-2xl"
              >
                Hablemos por WhatsApp
                <ArrowRight className="h-6 w-6 transition-transform group-hover:translate-x-1" />
              </a>
              <p className="max-w-2xl text-base leading-relaxed text-[#ebddff] opacity-90 md:text-xl">
                Consultoría estratégica y dirección creativa para eventos que
                buscan emocionar, diferenciarse y quedarse en la memoria.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#1c1b1f] py-16 text-[#fdf8fd] md:py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col gap-12 border-b border-white/10 pb-12 md:flex-row md:items-start md:justify-between md:gap-16 md:pb-16">
            <div className="max-w-sm">
              <div className="mb-6 flex items-center gap-3 md:mb-8">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDDXXV9vkkJRr4j-v3GFNtMFxksLgEIKXcCFcRnylRH2Ey4PjX0bLen6vhM7d-wUwMOU4iIZAnYrRN3S8AAVtAAV9SuDiVomfm30SfZSDLZeD001LMK1ybRatvNfUi9wSzTjrPaMWR9rJGfNc2lb5ONIZJNpXr8Ee9NbrGHSLE77KtxsEDlZxPjwYdtmsPeilLl-80-36eQgHzhaHegj4ogtyV-TbzQNKpdO1sTQPi-5IEJ2y1_1kSGlD0yI_xjGJl0p86HJVGnvI"
                  alt="Logo de Mangle"
                  className="h-9 w-auto brightness-0 invert md:h-10"
                />
                <span className="text-xl font-black text-white md:text-2xl">
                  Mangle
                </span>
              </div>
              <p className="text-base font-light leading-relaxed text-[#cbc4d0] md:text-lg">
                Transformamos eventos en experiencias sensoriales y editoriales,
                con una propuesta visual cuidada y memorable.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 md:gap-16 lg:gap-24">
              <div className="flex flex-col gap-3 md:gap-4">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#d3bbff]">
                  Explora
                </span>
                <a
                  href="#portafolio"
                  className="transition-colors hover:text-[#d3bbff]"
                >
                  Proyectos
                </a>
                <a
                  href="#servicios"
                  className="transition-colors hover:text-[#d3bbff]"
                >
                  Servicios
                </a>
                <a
                  href="#filosofia"
                  className="transition-colors hover:text-[#d3bbff]"
                >
                  Manifiesto
                </a>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#d3bbff]">
                  Redes
                </span>
                <a href="#" className="transition-colors hover:text-[#d3bbff]">
                  Instagram
                </a>
                <a href="#" className="transition-colors hover:text-[#d3bbff]">
                  Pinterest
                </a>
                <a href="#" className="transition-colors hover:text-[#d3bbff]">
                  Vimeo
                </a>
              </div>

              <div className="flex flex-col gap-3 md:gap-4">
                <span className="text-xs font-black uppercase tracking-[0.25em] text-[#d3bbff]">
                  Contacto
                </span>
                <a href="#" className="transition-colors hover:text-[#d3bbff]">
                  Correo
                </a>
                <a
                  href="https://wa.me/yourlink"
                  className="transition-colors hover:text-[#d3bbff]"
                >
                  WhatsApp
                </a>
                <a href="#" className="transition-colors hover:text-[#d3bbff]">
                  Press kit
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-8 text-sm text-[#cbc4d0] md:flex-row md:items-center md:justify-between md:pt-10">
            <p>© 2026 Mangle Creative. Todos los derechos reservados.</p>
            <div className="flex flex-wrap gap-6 md:gap-8">
              <a
                href="#"
                className="underline decoration-[#644e8e]/30 transition-colors hover:text-white"
              >
                Política de privacidad
              </a>
              <a
                href="#"
                className="underline decoration-[#644e8e]/30 transition-colors hover:text-white"
              >
                Términos y condiciones
              </a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        html,
        body {
          text-rendering: optimizeLegibility;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        body {
          font-family: var(--font-be-vietnam), system-ui, sans-serif;
        }
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(4deg);
          }
        }
      `}</style>
    </div>
  );
}
