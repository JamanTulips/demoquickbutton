"use client";

import { useMemo, useState } from "react";
import { FEATURED_RESELLERS, ALL_RESELLERS } from "@/data/resellers";

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 20a8 8 0 0 1 16 0" /></svg>
);

// pin coordinates for the 6 featured resellers (decorative map)
const PINS = [
  { left: "60%", top: "48%" },
  { left: "40%", top: "60%" },
  { left: "44%", top: "75%" },
  { left: "84%", top: "38%" },
  { left: "38%", top: "80%" },
  { left: "34%", top: "44%" },
];

const LAND_LABEL: Record<string, string> = { SE: "Sverige", NO: "Norge", FI: "Finland", DK: "Danmark" };

export default function AterforsaljarePage() {
  const [land, setLand] = useState("");
  const [region, setRegion] = useState("");
  const [kat, setKat] = useState("");
  const [hovered, setHovered] = useState<number | null>(null);

  const matches = (r: { land: string; region: string; categories: string[] }) =>
    (!land || r.land === land) &&
    (!region || r.region === region) &&
    (!kat || r.categories.includes(kat));

  const featured = useMemo(() => FEATURED_RESELLERS.filter(matches), [land, region, kat]);
  const alla = useMemo(() => ALL_RESELLERS.filter(matches), [land, region, kat]);
  const count = featured.length + alla.length;

  const reset = () => { setLand(""); setRegion(""); setKat(""); };

  return (
    <>
      {/* HERO */}
      <section className="af-hero" data-screen-label="Återförsäljare hero">
        <div className="mx">
          <div className="crumb"><a href="/">Start</a><span className="sep">/</span><span className="here">Återförsäljare</span></div>
          <span className="eyebrow red">Återförsäljare i Norden</span>
          <div className="af-hero-row">
            <h1>Hitta din närmaste <em>återförsäljare</em></h1>
            <div className="af-hero-aside">
              <p>Våra namnskyltar, skyltar och pins säljs genom återförsäljare i hela Norden. Hitta en partner nära dig — eller bli en av dem.</p>
              <a className="btn btn-secondary" href="#bli">Bli återförsäljare <span className="ar">→</span></a>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER BAR */}
      <div className="af-filterbar" data-screen-label="Filter">
        <div className="mx">
          <div className="fsels">
            <label className="fsel"><span>Land</span>
              <select value={land} onChange={(e) => setLand(e.target.value)}>
                <option value="">Alla länder</option>
                <option value="SE">Sverige</option>
                <option value="NO">Norge</option>
                <option value="FI">Finland</option>
                <option value="DK">Danmark</option>
              </select>
            </label>
            <label className="fsel"><span>Region / Län</span>
              <select value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="">Alla regioner</option>
                <option value="Svealand">Svealand</option>
                <option value="Götaland">Götaland</option>
                <option value="Norrland">Norrland</option>
                <option value="Norge">Norge</option>
                <option value="Finland">Finland</option>
                <option value="Danmark">Danmark</option>
              </select>
            </label>
            <label className="fsel"><span>Produktkategori</span>
              <select value={kat} onChange={(e) => setKat(e.target.value)}>
                <option value="">Alla kategorier</option>
                <option value="namnskyltar">Namnskyltar</option>
                <option value="skyltar">Skyltar</option>
                <option value="pins">Knappar/pins</option>
                <option value="profil">Profilprodukter</option>
              </select>
            </label>
          </div>
          <span className="fcount"><b>{count}</b> återförsäljare</span>
        </div>
      </div>

      {/* LIST + MAP */}
      <section className="af-main" data-screen-label="Lista och karta">
        <div className="mx af-layout">
          <div className="af-lists">
            {featured.length > 0 && (
              <div className="af-block" id="utvalda">
                <div className="block-head"><span className="eyebrow">Utvalda</span><h2 className="disp">Utvalda återförsäljare</h2></div>
                <div className="feat-grid">
                  {featured.map((r) => {
                    const idx = FEATURED_RESELLERS.indexOf(r);
                    return (
                      <a className="feat-card" href="#" key={r.slug}
                        onMouseEnter={() => setHovered(idx)} onMouseLeave={() => setHovered(null)}>
                        <span className="feat-logo">{r.logo}</span>
                        <div className="feat-body">
                          <h3>{r.name}</h3>
                          <span className="feat-loc">{r.ort} · {r.land}</span>
                          <p>{r.blurb}</p>
                        </div>
                        <span className="feat-go">Läs mer <span className="ar">→</span></span>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}

            {alla.length > 0 && (
              <div className="af-block" id="alla">
                <div className="block-head"><span className="eyebrow">Alla</span><h2 className="disp">Alla återförsäljare (A–Ö)</h2></div>
                <div className="alla-list">
                  {alla.map((r) => (
                    <a className="alla-row" href="#" key={r.name}>
                      <span className="ar-nm">{r.name}</span>
                      <span className="ar-city">{r.ort}</span>
                      <span className="ar-link">Kontakt <span className="ar">→</span></span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {count === 0 && (
              <p className="alla-empty">Inga återförsäljare matchar filtret. <button className="linklike" onClick={reset}>Rensa filter</button></p>
            )}
          </div>

          {/* sticky map */}
          <aside className="map-rail" aria-label="Karta">
            <div className="map-card">
              <div className="map-cap-top"><span className="eyebrow">Karta</span><span className="map-sub">Norden</span></div>
              <div className="map">
                <div className="grid-bg"></div>
                <span className="pin big" style={{ left: "50%", top: "66%" }}></span>
                <span className="lbl" style={{ left: "54%", top: "64%" }}>Åseda</span>
                <span className="pin faint" style={{ left: "30%", top: "56%" }}></span>
                <span className="pin faint" style={{ left: "46%", top: "54%" }}></span>
                <span className="pin faint" style={{ left: "66%", top: "30%" }}></span>
                <span className="pin faint" style={{ left: "40%", top: "70%" }}></span>
                <span className="pin faint" style={{ left: "74%", top: "44%" }}></span>
                <span className="pin faint" style={{ left: "56%", top: "38%" }}></span>
                {PINS.map((p, i) => (
                  <span key={i} className={`pin feat-pin${hovered === i ? " hot" : ""}`} style={{ left: p.left, top: p.top }}></span>
                ))}
              </div>
              <p className="map-note">Hovra över en utvald återförsäljare för att markera dess plats på kartan. <span className="muted">(Interaktiv karta kommer.)</span></p>
            </div>
          </aside>
        </div>
      </section>

      {/* BLI ÅTERFÖRSÄLJARE */}
      <section className="bli" id="bli" data-screen-label="Bli återförsäljare">
        <div className="mx">
          <div className="bli-inner">
            <div className="bli-text">
              <span className="eyebrow" style={{ color: "var(--parlemor)", opacity: 0.85 }}>Partnerskap</span>
              <h2>Vill du bli återförsäljare?</h2>
              <p>Sälj svensktillverkade namnskyltar, skyltar och pins med korta ledtider och stöd direkt från fabriken i Åseda. Vi erbjuder återförsäljarpriser, marknadsmaterial och en dedikerad kontakt.</p>
              <div className="bli-perks"><span>Återförsäljarpriser</span><span className="dot">·</span><span>Marknadsmaterial</span><span className="dot">·</span><span>Egen kontakt</span></div>
            </div>
            <div className="bli-cta">
              <a className="btn btn-primary" href="/kontakt">Ansök om att bli återförsäljare <span className="ar">→</span></a>
              <a className="btn btn-onburg" href="/kontakt">Prata med oss först</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
