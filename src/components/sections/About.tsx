import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

export function About() {
  return (
    <section id="o-nas" className="py-24 bg-surface-alt">
      <Container className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-square rounded-[40px] overflow-hidden bg-brand/10 relative">
            <div className="absolute inset-0 flex items-center justify-center text-brand/20">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-card w-64 hidden md:block">
            <p className="text-xs tracking-widest uppercase opacity-80 text-brand font-bold mb-3">
              Dlaczego Santoro?
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                <span className="text-text-main">Zajęcia stacjonarnie w centrum Łodzi</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                <span className="text-text-main">Małe grupy &mdash; od 2 do 4 osób</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0 mt-1.5" />
                <span className="text-text-main">Nauka online i bez presji</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <Typography variant="small" className="text-brand font-bold mb-3">
            O autorce
          </Typography>
          <Typography variant="h3" as="h3" className="mb-6 leading-tight">
            Mam na imię Rosaria.
          </Typography>
          <Typography variant="p" className="mb-6 text-lg">
            Tworzę w Łodzi kameralną szkołę językową <strong>Santoro</strong>. Od wielu lat wspieram uczniów w rozwoju, przełamywaniu barier i osiąganiu ważnych dla nich celów językowych.
          </Typography>
          <Typography variant="p" className="mb-8 text-lg">
            Przygoda z nauczaniem, która początkowo była nową pasją, z czasem przerodziła się w pomysł na stworzenie przestrzeni, która dziś nazywa się Santoro. Stawiamy na praktykę, swobodę mówienia i przyjazną atmosferę.
          </Typography>
          
          <div className="grid grid-cols-2 gap-6 pt-6 border-t border-brand/10">
            <div>
              <Typography variant="h4" as="h4" className="mb-1">Więcej mówienia</Typography>
              <Typography variant="span" className="text-text-muted">i realna praktyka na każdych zajęciach</Typography>
            </div>
            <div>
              <Typography variant="h4" as="h4" className="mb-1">Większa swoboda</Typography>
              <Typography variant="span" className="text-text-muted">bez stresu i presji oceniania</Typography>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
