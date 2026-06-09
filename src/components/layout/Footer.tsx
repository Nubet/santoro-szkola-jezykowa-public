import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";
import { Typography } from "@/components/ui/Typography";
import { CONTACT_DETAILS } from "@/constants/data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand text-white/80 py-12 border-t border-white/10">
      <Container className="grid md:grid-cols-3 gap-12">
        <div>
          <Logo variant="accent" className="mb-6" />
          <Typography variant="p" className="text-white/70 text-sm leading-relaxed max-w-xs">
            Szkoła Języków Obcych w Łodzi. Przełam barierę, poczuj język.
          </Typography>
        </div>

        <div className="md:pl-12">
          <Typography variant="h4" as="h4" className="text-white text-lg mb-6">
            Kontakt
          </Typography>
          <ul className="space-y-3 text-sm">
            <li>{CONTACT_DETAILS.street}</li>
            <li>{CONTACT_DETAILS.postalCode}</li>
            <li className="pt-2">tel. {CONTACT_DETAILS.phone}</li>
            <li>{CONTACT_DETAILS.email}</li>
          </ul>
        </div>

        <div>
          <Typography variant="h4" as="h4" className="text-white text-lg mb-6">
            Godziny otwarcia
          </Typography>
          <ul className="space-y-3 text-sm">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Pon - Pt:</span>
              <span className="text-white">8:00 - 18:00</span>
            </li>
            <li className="flex justify-between pt-1">
              <span>Sobota:</span>
              <span className="text-white">10:00 - 14:00</span>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="mt-16 pt-8 border-t border-white/10 text-xs text-center flex flex-col md:flex-row items-center gap-6">
        <p>&copy; {currentYear} Santoro. Wszelkie prawa zastrzeżone.</p>
        <div className="flex items-center gap-8 md:ml-auto">
          <Link href="#" className="hover:text-white transition-colors">
            Polityka prywatności
          </Link>
          <Link
            href="https://norbertfila.com"
            className="hover:text-white transition-colors"
            target="_blank"
            rel="noreferrer"
          >
            Projekt i wykonanie: <span className="text-white font-semibold">Norbert Fila</span>
          </Link>
        </div>
      </Container>
    </footer>
  );
}
