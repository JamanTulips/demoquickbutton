// Reseller (återförsäljare) data — extends the original wireframe data file.
export type Land = "SE" | "FI" | "DK" | "NO";

export type Reseller = {
  slug: string;
  name: string;
  ort: string;
  land: Land;
  region: string;
  blurb: string;
  categories: string[];
  logo: string;
};

export const FEATURED_RESELLERS: Reseller[] = [
  { slug: "skylt-profil-stockholm", name: "Skylt & Profil Stockholm AB", ort: "Stockholm", land: "SE", region: "Svealand", logo: "SP",
    blurb: "Fullsortimentsåterförsäljare med eget tryckeri. Snabba leveranser i Mälardalen.", categories: ["namnskyltar","skyltar","pins","profil"] },
  { slug: "namnskyltcentralen-goteborg", name: "Namnskyltcentralen Göteborg", ort: "Göteborg", land: "SE", region: "Götaland", logo: "NG",
    blurb: "Specialist på namnskyltar för vård och hotell. Stora volymer och korta ledtider.", categories: ["namnskyltar"] },
  { slug: "profilbutiken-malmo", name: "Profilbutiken Malmö", ort: "Malmö", land: "SE", region: "Götaland", logo: "PM",
    blurb: "Lokal partner i Öresundsregionen med butik och egen designstudio.", categories: ["namnskyltar","profil"] },
  { slug: "tunniste-helsinki", name: "Tunniste Oy", ort: "Helsingfors", land: "FI", region: "Finland", logo: "TO",
    blurb: "Finsk huvuddistributör för namnskyltar och pins till offentlig sektor.", categories: ["namnskyltar","pins"] },
  { slug: "skilte-kobenhavn", name: "Skilte & Navne København", ort: "Köpenhamn", land: "DK", region: "Danmark", logo: "SN",
    blurb: "Dansk återförsäljare med fokus på restaurang och detaljhandel.", categories: ["skyltar","profil"] },
  { slug: "navnskilt-oslo", name: "Navnskilt Norge AS", ort: "Oslo", land: "NO", region: "Norge", logo: "NN",
    blurb: "Norsk partner med rikstäckande leverans och egen e-handel.", categories: ["namnskyltar","skyltar"] },
];

export const ALL_RESELLERS: Pick<Reseller, "name" | "ort" | "land" | "region" | "categories">[] = [
  { name: "Allskyltar i Borås", ort: "Borås", land: "SE", region: "Götaland", categories: ["skyltar"] },
  { name: "Bricka & Pin Uppsala", ort: "Uppsala", land: "SE", region: "Svealand", categories: ["namnskyltar","pins"] },
  { name: "Dekor & Skylt Linköping", ort: "Linköping", land: "SE", region: "Götaland", categories: ["skyltar","profil"] },
  { name: "Emblem Esbo", ort: "Esbo", land: "FI", region: "Finland", categories: ["pins"] },
  { name: "Förtaget Profil Örebro", ort: "Örebro", land: "SE", region: "Svealand", categories: ["profil"] },
  { name: "Grafik & Skylt Aalborg", ort: "Aalborg", land: "DK", region: "Danmark", categories: ["skyltar"] },
  { name: "Helskylt Helsingborg", ort: "Helsingborg", land: "SE", region: "Götaland", categories: ["namnskyltar"] },
  { name: "Identitet Bergen", ort: "Bergen", land: "NO", region: "Norge", categories: ["namnskyltar","profil"] },
  { name: "Jönköping Profil & Tryck", ort: "Jönköping", land: "SE", region: "Götaland", categories: ["namnskyltar","skyltar"] },
  { name: "Kilforsen Skyltar", ort: "Sundsvall", land: "SE", region: "Norrland", categories: ["skyltar"] },
  { name: "Logomakarna Lund", ort: "Lund", land: "SE", region: "Götaland", categories: ["profil","pins"] },
  { name: "Märke & Profil Tammerfors", ort: "Tammerfors", land: "FI", region: "Finland", categories: ["namnskyltar","profil"] },
  { name: "Namnbrickan Norrköping", ort: "Norrköping", land: "SE", region: "Götaland", categories: ["namnskyltar"] },
  { name: "Oslo Skilt & Profil", ort: "Oslo", land: "NO", region: "Norge", categories: ["skyltar"] },
  { name: "Profilhuset Karlstad", ort: "Karlstad", land: "SE", region: "Svealand", categories: ["namnskyltar","skyltar"] },
  { name: "Quadrat Reklam Åbo", ort: "Åbo", land: "FI", region: "Finland", categories: ["profil"] },
  { name: "Reklamskyltar Gävle", ort: "Gävle", land: "SE", region: "Norrland", categories: ["skyltar","pins"] },
  { name: "Skylt & Pin Stavanger", ort: "Stavanger", land: "NO", region: "Norge", categories: ["namnskyltar","pins"] },
  { name: "Skiltexperten Århus", ort: "Århus", land: "DK", region: "Danmark", categories: ["skyltar","namnskyltar"] },
  { name: "Trykk & Skilt Odense", ort: "Odense", land: "DK", region: "Danmark", categories: ["profil"] },
  { name: "Tunnistepaja Uleåborg", ort: "Uleåborg", land: "FI", region: "Finland", categories: ["pins"] },
  { name: "Umeå Profilcenter", ort: "Umeå", land: "SE", region: "Norrland", categories: ["namnskyltar","profil"] },
  { name: "Visitkort & Skylt Vasa", ort: "Vasa", land: "FI", region: "Finland", categories: ["namnskyltar"] },
  { name: "Wermland Skyltteknik", ort: "Karlstad", land: "SE", region: "Svealand", categories: ["skyltar"] },
  { name: "Ystad Skylt & Tryck", ort: "Ystad", land: "SE", region: "Götaland", categories: ["namnskyltar","skyltar"] },
  { name: "Zenit Profil Trondheim", ort: "Trondheim", land: "NO", region: "Norge", categories: ["profil"] },
  { name: "Åhus Skyltdesign", ort: "Åhus", land: "SE", region: "Götaland", categories: ["namnskyltar"] },
  { name: "Ängelholm Profil", ort: "Ängelholm", land: "SE", region: "Götaland", categories: ["profil","pins"] },
  { name: "Örnsköldsvik Reklam", ort: "Örnsköldsvik", land: "SE", region: "Norrland", categories: ["skyltar"] },
  { name: "Profil & Pin Drammen", ort: "Drammen", land: "NO", region: "Norge", categories: ["namnskyltar","pins"] },
];
