"use client";

import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from "next/font/google";
import Image from "next/image";

import { useState } from "react";
import {
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
              <Image
                src="/mangle-creative-logo.jpg"
                alt="Logo de mangle"
                className="h-9 w-auto md:h-10 rounded-full"
                height={45}
                width={45}
              />
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
                href="https://wa.me/584247233675"
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
        <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/background.png"
              alt="Fondo floral"
              fill
              priority
              quality={100}
              sizes="100vw"
              className="object-cover object-center"
            />

            <div className="absolute inset-0 bg-linear-to-b from-black/25 via-black/10 to-[#fdf8fd]" />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-28 text-center md:px-8 md:pb-20 md:pt-40 md:text-left">
            <div className="max-w-4xl">
              <span className="mb-6 inline-block rounded-full border border-primary/35 bg-background/85 px-5 py-2 text-xs font-bold uppercase tracking-[0.28em] text-primary-soft shadow-md backdrop-blur-sm md:mb-8 md:text-sm">
                Donde el arte se convierte en evento
              </span>

              <h1 className="mb-6 font-heading text-5xl font-black leading-[0.9] tracking-tight text-foreground sm:text-6xl md:mb-8 md:text-8xl lg:text-[9rem]">
                Creamos <br />
                <span className="italic text-primary">momentos</span>
                <br />
                inolvidables
              </h1>

              <p className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-foreground sm:text-xl md:mb-12 md:text-3xl">
                Tu visión, nuestra narrativa visual. Diseñamos celebraciones con
                identidad, emoción y una estética que se recuerda.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#portafolio"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-lg font-black text-white shadow-2xl transition-all hover:scale-105 sm:w-auto md:px-10 md:py-5 md:text-xl"
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
          className="relative overflow-hidden bg-background py-20 md:py-32"
        >
          <div className="absolute right-0 top-0 -z-10 h-[520px] w-[520px] translate-x-1/3 -translate-y-1/3 rounded-full bg-muted opacity-60 blur-2xl" />

          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-16 grid items-end gap-8 lg:grid-cols-12 md:mb-24">
              <div className="lg:col-span-7">
                <h2 className="text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl md:text-7xl lg:text-8xl">
                  Nuestras <span className="text-tertiary">especialidades</span>
                </h2>
              </div>
              <div className="lg:col-span-5">
                <p className="border-l-4 border-primary pl-5 text-lg leading-relaxed text-muted md:pl-8 md:text-xl">
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
          className="overflow-hidden bg-foreground py-20 text-background md:py-32"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="mb-16 flex flex-col gap-10 md:mb-24 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="mb-6 text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl md:text-7xl lg:text-8xl">
                  Nuestra <br />
                  <span className="italic text-primary-soft">narrativa</span>
                </h2>
                <p className="max-w-xl text-lg font-light leading-relaxed text-surface-soft md:text-2xl">
                  Una selección de atmósferas, conceptos y producciones creadas
                  para clientes que quieren algo realmente memorable.
                </p>
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
                  <span className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-primary-soft md:mb-4 md:text-sm">
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

                <article className="group relative overflow-hidden rounded-[2rem] bg-secondary h-[260px] md:h-full">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8m48r7jF6g0n_SUIHy8YCiXmd_mc__LSQ6ZXlHyQLWtGAgZj74cT5W3iF_PCHrE4n1_t9rt4Peim9MzutPRRF1twBqOrc6hGLAx_cYGjda_Sn0ER324Ls_KWY4Rrmp09ePBS7gd4GBi1zzTOM9sVAVc1wItJBGxnQ4mpebcSWH08QwoV8hfHpD9goxV_e3D0hlFkIQJeqj-pDZ2_rc0Wi1x_vrYiWSnyaB3AQPqjwVlVYbnAK9y07soHCiEVHWvdHL4pN_7uVqn8"
                    alt="Garden party de lujo"
                    className="h-full w-full object-cover opacity-60 mix-blend-multiply transition-transform duration-[2000ms] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center p-6 md:p-8">
                    <h3 className="text-center text-3xl font-black text-secondary-dark md:text-4xl">
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
          <div className="absolute inset-0 bg-primary/5" />
          <div className="absolute right-[3%] top-[8%] hidden h-80 w-80 rounded-full border-[32px] border-secondary/30 md:block" />

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

                <div className="absolute -left-3 -top-3 rounded-full bg-tertiary p-4 shadow-2xl md:-left-6 md:-top-6 md:p-6 lg:-left-8 lg:-top-8">
                  <Flower2 className="h-7 w-7 text-white md:h-9 md:w-9 lg:h-11 lg:w-11" />
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <span className="mb-6 block text-xs font-black uppercase tracking-[0.4em] text-primary md:mb-8 md:text-sm">
                  Nuestra esencia
                </span>
                <h2 className="mb-8 text-4xl font-black leading-[0.95] tracking-tight text-foreground sm:text-5xl md:mb-10 md:text-7xl lg:text-8xl">
                  El manifiesto de la <br />
                  <span className="text-primary">pausa creativa</span>
                </h2>
                <p className="mb-10 text-lg font-light italic leading-relaxed text-muted md:mb-12 md:text-2xl">
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
