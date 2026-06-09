import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background">
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-125 h-125 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-150 h-150 rounded-full bg-brand/5 blur-[120px]" />
        <div className="absolute inset-0 hero-pattern opacity-50" />
      </div>

      <Container className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        <div className="max-w-xl relative">
          <h1 className="hero-fade-up hero-delay-1 text-5xl lg:text-7xl font-serif text-brand leading-[1.05] tracking-tight mb-6">
            Mów swobodnie.<br />
            <span className="text-text-main italic font-light relative inline-block mt-2">
              Poczuj język.
              <svg className="absolute w-full h-4 -bottom-1 left-0 text-accent/60 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>
          
          <p className="hero-fade-up hero-delay-2 text-lg md:text-xl text-text-muted mb-10 leading-relaxed font-light">
            Kameralna szkoła językowa w sercu Łodzi. Oferujemy zajęcia z <strong className="font-medium text-text-main">angielskiego, hiszpańskiego i włoskiego</strong>. Ucz się w bezstresowej atmosferze – stacjonarnie lub online.
          </p>
          
          <div className="hero-fade-up hero-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
            <Button size="lg" className="w-full sm:w-auto group relative overflow-hidden" asChild>
              <Link href="#kontakt" className="flex items-center justify-center gap-2">
                <span className="relative z-10 flex items-center gap-2">
                  Rozpocznij naukę
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-surface-alt hover:border-brand/30 hover:bg-surface-alt/50" asChild>
              <Link href="#oferta" className="flex items-center justify-center">
                Sprawdź ofertę i cennik
              </Link>
            </Button>
          </div>


        </div>

        <div className="relative h-150 w-full hidden lg:block perspective-1000">

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-100 bg-white rounded-full shadow-[0_0_80px_rgba(123,44,57,0.05)] border border-surface-alt/40" />

          <div
            className="hero-float-in hero-delay-4 absolute top-[10%] right-[10%] w-60 h-64 bg-brand rounded-4xl shadow-soft p-7 flex flex-col justify-between text-white z-20"
          >
            <div className="flex justify-between items-start">
              <div className="text-4xl bg-white/10 p-3 rounded-2xl shadow-inner backdrop-blur-sm">🇬🇧</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-accent bg-accent/10 px-3 py-1.5 rounded-full">Konwersacje</span>
            </div>
            <div>
              <h3 className="font-serif text-3xl font-medium mb-1 tracking-tight">Angielski</h3>
              <p className="text-sm text-white/80 font-sans font-light">Przełam barierę językową</p>
            </div>
          </div>

          <div
            className="hero-float-in hero-delay-5 absolute top-[30%] left-[5%] w-64 h-72 bg-white rounded-4xl shadow-card p-7 flex flex-col justify-between z-30 border border-surface-alt"
          >
            <div className="flex justify-between items-start">
              <div className="text-4xl bg-surface-alt p-3 rounded-2xl">🇪🇸</div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-text-muted bg-surface-alt/50 px-3 py-1.5 rounded-full">Od podstaw</span>
            </div>
            <div>
              <h3 className="font-serif text-3xl text-brand font-medium mb-1 tracking-tight">Hiszpański</h3>
              <p className="text-sm text-text-muted font-sans font-light">Poczuj południowy temperament</p>
            </div>
          </div>

          <div
            className="hero-float-in hero-delay-6 absolute bottom-[10%] right-[20%] w-72 h-36 bg-surface-alt rounded-4xl shadow-sm p-6 flex flex-col justify-center z-10 border border-white"
          >
            <div className="flex items-center gap-5">
              <div className="text-4xl bg-white p-3.5 rounded-2xl shadow-sm">🇮🇹</div>
              <div>
                <h3 className="font-serif text-2xl text-brand font-medium tracking-tight mb-0.5">Włoski</h3>
                <p className="text-sm text-text-muted font-sans font-light">La dolce vita</p>
              </div>
            </div>
          </div>

          <div
            className="hero-scale-in hero-delay-7 absolute top-[45%] right-[-5%] bg-accent text-brand font-bold py-4 px-6 rounded-3xl shadow-xl flex flex-col items-center border-4 border-white z-40 cursor-default"
          >
            <span className="text-[10px] uppercase tracking-widest opacity-80 mb-1 font-bold">Start zajęć</span>
            <span className="text-4xl font-serif tracking-tighter">08.06</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
