import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { LANGUAGES } from "@/constants/data";
import { cn } from "@/lib/utils";

export function Offer() {
  return (
    <section id="oferta" className="py-24">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Typography variant="small" className="text-brand font-bold mb-3">
            Nasza Oferta
          </Typography>
          <Typography variant="h3" as="h3" className="mb-4">
            Wybierz swój język
          </Typography>
          <Typography variant="p">
            Zajęcia dla dzieci, młodzieży i dorosłych. Program dopasowany do Twoich celów.
          </Typography>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {LANGUAGES.map((lang) => (
            <Card
              key={lang.name}
              variant={lang.variant}
              className="hover:-translate-y-2 group"
            >
              {lang.variant === "brand" && (
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />
              )}
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 relative z-10",
                lang.variant === "brand" ? "bg-white/10" : "bg-surface-alt"
              )}>
                {lang.flag}
              </div>
              <Typography
                variant="h4"
                as="h4"
                className={cn("mb-3 relative z-10", lang.variant === "brand" ? "text-white" : "text-brand")}
              >
                {lang.name}
              </Typography>
              <Typography
                variant="p"
                className={cn(
                  "text-sm mb-6 line-clamp-3 relative z-10",
                  lang.variant === "brand" ? "text-white/80" : "text-text-muted"
                )}
              >
                {lang.description}
              </Typography>
              <ul className="space-y-2 mb-4 relative z-10">
                {lang.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm font-medium">
                    <svg
                      className={cn("w-4 h-4 shrink-0", lang.variant === "brand" ? "text-accent" : "text-accent")}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                    <span className={lang.variant === "brand" ? "text-white/90" : "text-text-main"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
