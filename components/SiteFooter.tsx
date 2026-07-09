import Link from "next/link";

const COLS: { title: string; items: { label: string; href: string }[] }[] = [
  {
    title: "Produkter",
    items: [
      { label: "Namnskyltar", href: "/namnskyltar" },
      { label: "Skyltar", href: "#" },
      { label: "Knappar/pins", href: "#" },
      { label: "Profil", href: "#" },
    ],
  },
  {
    title: "Företag",
    items: [
      { label: "Om oss", href: "/om-oss" },
      { label: "Inspiration", href: "/inspiration" },
      { label: "Hållbarhet", href: "/om-oss#hallbarhet" },
      { label: "Jobb", href: "#" },
    ],
  },
  {
    title: "Kontakt",
    items: [
      { label: "Återförsäljare", href: "/aterforsaljare" },
      { label: "Support", href: "/kontakt" },
      { label: "Offert", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="mx top">
        <div>
          <Link href="/" className="wordmark">
            Quickbutton<sup>&reg;</sup>
          </Link>
          <p className="blurb">
            Tillverkar namnskyltar, skyltar och pins i Åseda sedan 1971.
          </p>
        </div>
        {COLS.map((c) => (
          <div key={c.title}>
            <h4>{c.title}</h4>
            <ul>
              {c.items.map((i) => (
                <li key={i.label}>
                  <Link href={i.href}>{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="bottom">
        <div className="mx">
          <span>© Quickbutton AB · Åseda, Sverige</span>
          <span className="langs">
            <span>SV</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>FI</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>DA</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>NO</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
