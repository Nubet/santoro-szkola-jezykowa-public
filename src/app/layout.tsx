import type { Metadata } from "next";
import { Outfit, Lora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Santoro - Szkoła Języków Obcych | Łódź",
  description: "Kameralna szkoła językowa w sercu Łodzi. Angielski, hiszpański i włoski dla dzieci, młodzieży i dorosłych.",
  authors: [{ name: "Norbert Fila", url: "https://norbertfila.com" }],
  openGraph: {
    title: "Santoro - Szkoła Języków Obcych | Łódź",
    description: "Kameralna szkoła językowa w sercu Łodzi. Angielski, hiszpański i włoski dla dzieci, młodzieży i dorosłych.",
    url: "https://santoro.pl",
    siteName: "Santoro",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${outfit.variable} ${lora.variable} antialiased`}
    >
      <body className="font-sans text-text-main selection:bg-brand selection:text-white">
        {children}
      </body>
    </html>
  );
}
