export const NAV_LINKS = [
  { name: "O nas", href: "#o-nas" },
  { name: "Oferta", href: "#oferta" },
  { name: "Cennik", href: "#cennik" },
];

export const CONTACT_DETAILS = {
  street: "ul. Wrocławska 1",
  postalCode: "91-057 Łódź",
  phone: "888-881-053",
  email: "santoro.szkola@gmail.com",
  mapsAddress: "ul. Wrocławska 1, 91-057 Łódź, Poland",
};

export const LANGUAGES = [
  {
    name: "Angielski",
    flag: "🇬🇧",
    description: "Praktyczne słownictwo, naturalne zwroty i dużo konwersacji. Przełam barierę językową w codziennych sytuacjach.",
    features: ["Dzieci i młodzież", "Kursy dla dorosłych", "Kursy intensywne"],
    variant: "white" as const,
  },
  {
    name: "Hiszpański",
    flag: "🇪🇸",
    description: "Zanurz się w kulturze i języku. Uczymy żywego języka, który przyda Ci się w podróży i życiu codziennym.",
    features: ["Dzieci i młodzież", "Kursy dla dorosłych", "Kursy intensywne"],
    variant: "brand" as const,
  },
  {
    name: "Włoski",
    flag: "🇮🇹",
    description: "Włoski to rozmowa, emocje i komunikacja. 'Parliamo italiano' - kurs konwersacyjny, który pozwoli Ci zacząć mówić.",
    features: ["Włoski od podstaw", "Parliamo italiano", "Komfortowo i bez presji"],
    variant: "white" as const,
  },
];

export const PRICING = {
  individual: [
    { name: "Język Angielski", price: "110 zł", description: "Zajęcia z lektorem" },
    { name: "Język Hiszpański", price: "120 zł", description: "Zajęcia z lektorem" },
    { name: "Język Włoski", price: "130 zł", description: "Zajęcia z lektorem" },
  ],
  group: [
    { name: "Dzieci", price: "360 zł", unit: "/ msc" },
    { name: "Młodzież", price: "650 zł", unit: "/ msc" },
    { name: "Dorośli", price: "950 zł", unit: "/ msc*" },
  ],
  intensive: [
    { name: "Angielski", price: "2200 zł" },
    { name: "Hiszpański", price: "2500 zł" },
  ],
};
