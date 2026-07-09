// Inspiration / branch (bransch) data used by the Inspiration landing page.
export type Branch = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  featured?: boolean;
  hasPage?: boolean;
};

export const BRANCHES: Branch[] = [
  { slug: "vard-omsorg", title: "Vård & omsorg", featured: true, hasPage: true,
    image: "https://images.pexels.com/photos/6129657/pexels-photo-6129657.jpeg?auto=compress&cs=tinysrgb&w=1200",
    blurb: "Namnskyltar som skapar trygghet och igenkänning i mötet mellan personal och patient — i material som tål en krävande vårdmiljö, dag efter dag." },
  { slug: "hotell-restaurang", title: "Hotell & restaurang", hasPage: true,
    image: "/assets/photos/industries/hotel-restaurang.jpg",
    blurb: "Personal som syns och känns igen — från reception till servering." },
  { slug: "event-massa", title: "Event & mässa",
    image: "/assets/photos/industries/ind-event.jpg",
    blurb: "Snabba namnskyltar, knappar och badges för mässor och event." },
  { slug: "detaljhandel-bank", title: "Detaljhandel & bank",
    image: "/assets/photos/industries/ind-detalj.jpg",
    blurb: "Professionellt bemötande i butik, bank och på kontoret." },
  { slug: "transport", title: "Transport",
    image: "/assets/photos/industries/ind-transport.jpg",
    blurb: "Tåliga skyltar och ID för förare och personal i rörelse." },
  { slug: "kampanj-profil", title: "Kampanj & profil",
    image: "/assets/photos/industries/ind-kampanj.jpg",
    blurb: "Knappar, pins och profilprodukter som bär ert budskap." },
];

export type Trending = { name: string; category: string; note: string; image: string };

export const TRENDING: Trending[] = [
  { name: "Namnskylt metall", category: "Namnskyltar", note: "Bästsäljare", image: "/assets/photos/tags/tag-silver-rect.jpg" },
  { name: "Namnskylt trä — oval", category: "Namnskyltar", note: "Nyhet", image: "/assets/photos/tags/tag-wood-oval.jpg" },
  { name: "Namnskylt guld", category: "Namnskyltar", note: "Premium", image: "/assets/photos/tags/tag-gold-rect.jpg" },
  { name: "Namnskylt svart — oval", category: "Namnskyltar", note: "Express", image: "/assets/photos/tags/tag-black-oval.jpg" },
];
