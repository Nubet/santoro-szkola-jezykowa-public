import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { PRICING } from "@/constants/data";

export function Pricing() {
  return (
    <section id="cennik" className="py-24 bg-surface-alt">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Typography variant="small" className="text-brand font-bold mb-3">
            Cennik
          </Typography>
          <Typography variant="h3" as="h3" className="mb-4">
            Przejrzysta oferta
          </Typography>
          <Typography variant="p">
            Inwestycja w Twoją swobodę językową.
          </Typography>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="relative overflow-hidden p-8 md:p-10">
            <div className="absolute top-0 left-0 w-full h-2 bg-brand" />
            <Typography variant="h4" as="h4" className="mb-8 flex items-center gap-3">
              Zajęcia indywidualne
              <span className="px-3 py-1 bg-surface-alt rounded-full text-[10px] font-sans tracking-wider text-text-muted uppercase">
                1 na 1
              </span>
            </Typography>
            
            <div className="space-y-6">
              {PRICING.individual.map((item) => (
                <div key={item.name} className="flex justify-between items-end border-b border-surface-alt pb-4">
                  <div>
                    <Typography variant="span" className="text-lg text-text-main">{item.name}</Typography>
                    <Typography variant="p" className="text-sm text-text-muted">{item.description}</Typography>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-serif font-bold text-brand">{item.price}</span>
                    <span className="text-text-muted text-sm"> / h</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-surface-alt rounded-2xl p-4 flex gap-3 text-sm text-text-muted">
              <svg className="w-5 h-5 text-brand shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p>Liczba zajęć, ich długość oraz termin do ustalenia indywidualnie. Możliwe zajęcia stacjonarne lub online (od 15 r.ż.).</p>
            </div>
          </Card>

          <Card variant="brand" className="p-8 md:p-10">
            <Typography variant="h4" as="h4" className="text-white mb-8 flex items-center gap-3">
              Kursy grupowe
              <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-sans tracking-wider uppercase text-accent">
                Pakiety
              </span>
            </Typography>

            <div className="space-y-5">
              {PRICING.group.map((item) => (
                <div key={item.name} className="flex justify-between items-center border-b border-white/10 pb-3">
                  <Typography variant="span" className="text-white font-medium">{item.name}</Typography>
                  <div>
                    <span className="text-xl font-bold">{item.price}</span>
                    <span className="text-white/70 text-sm"> {item.unit}</span>
                  </div>
                </div>
              ))}
              
              <div className="pt-4">
                <Typography variant="small" className="text-accent mb-3 block">
                  Kursy intensywne (Całość)
                </Typography>
                <div className="space-y-2">
                  {PRICING.intensive.map((item) => (
                    <div key={item.name} className="flex justify-between items-center">
                      <span className="text-sm opacity-90">Język {item.name}</span>
                      <span className="font-medium text-white">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-[10px] text-white/50 mt-8">
              *Dla kursu &apos;Parliamo italiano&apos; przy płatności z góry za 3 msc cena 2600 zł.
            </p>
          </Card>
        </div>
      </Container>
    </section>
  );
}
