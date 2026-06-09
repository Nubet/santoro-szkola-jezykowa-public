import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { CONTACT_DETAILS } from "@/constants/data";

export function LocationMapSection() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const address = CONTACT_DETAILS.mapsAddress;
  const q = encodeURIComponent(address);
  const src = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${q}&zoom=16&maptype=roadmap`
    : null;

  return (
    <section id="lokalizacja" className="py-24 bg-white border-t border-brand/10">
      <Container>
        <div className="mb-10 max-w-2xl">
          <Typography variant="small" className="text-brand font-bold mb-3">
            Lokalizacja
          </Typography>
          <Typography variant="h3" as="h3" className="mb-4 leading-tight">
            Jesteśmy w centrum Łodzi.
          </Typography>
          <Typography variant="p" className="mb-6">
            Jeśli chcesz sprawdzić dojazd przed pierwszym spotkaniem, poniżej znajdziesz dokładną lokalizację
            szkoły.
          </Typography>
          <div className="flex flex-col gap-1 text-sm text-text-muted sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
            <span>{CONTACT_DETAILS.street}, {CONTACT_DETAILS.postalCode}</span>
            <a href={`tel:${CONTACT_DETAILS.phone}`} className="transition-colors hover:text-brand">
              tel. {CONTACT_DETAILS.phone}
            </a>
            <a href={`mailto:${CONTACT_DETAILS.email}`} className="transition-colors hover:text-brand">
              {CONTACT_DETAILS.email}
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-brand/10 bg-white shadow-card min-h-130">
          {src ? (
            <iframe
              title="Mapa dojazdu do Santoro"
              src={src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-130 w-full border-0"
            />
          ) : (
            <div className="flex h-full min-h-130 flex-col items-start justify-center p-8 md:p-10">
              <Typography variant="h4" as="h4" className="mb-3">
                Mapa chwilowo niedostępna
              </Typography>
              <Typography variant="p" className="mb-6 max-w-md">
                Ustaw zmienną `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`, aby wyświetlić osadzoną mapę dojazdu.
              </Typography>
              <Typography variant="p" className="text-base">
                {CONTACT_DETAILS.street}, {CONTACT_DETAILS.postalCode}
              </Typography>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
