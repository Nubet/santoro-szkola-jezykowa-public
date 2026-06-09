import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { CONTACT_DETAILS } from "@/constants/data";

export function Contact() {
  return (
    <section id="kontakt" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand hero-pattern opacity-5" />
      <Container className="max-w-4xl text-center relative z-10">
        <Typography variant="h2" as="h2" className="mb-6">
          Zacznij mówić z Santoro
        </Typography>
        <Typography variant="p" className="mb-10 max-w-2xl mx-auto">
          Zapisy przyjmujemy w wiadomości prywatnej, przez formularz lub mailowo. Wybierz dogodną dla siebie formę kontaktu.
        </Typography>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" className="flex gap-2" asChild>
            <a href={`mailto:${CONTACT_DETAILS.email}`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Napisz maila
            </a>
          </Button>
          <Button size="lg" variant="secondary" className="flex gap-2" asChild>
            <a href="#">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Wiadomość na FB
            </a>
          </Button>
        </div>
      </Container>
    </section>
  );
}
