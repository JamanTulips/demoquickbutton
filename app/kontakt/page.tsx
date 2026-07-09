"use client";

import { useState } from "react";

const Phone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z" /></svg>
);
const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>
);

const PEOPLE = [
  { dept: "Sälj", img: "/assets/photos/team/person1.png", nm: "Sara Nyström", ti: "Försäljningsansvarig", tel: "+46 474 100 01", telHref: "+4647410001", mail: "salj@quickbutton.se" },
  { dept: "IT", img: "/assets/photos/team/person5.png", nm: "David Lund", ti: "IT-ansvarig", tel: "+46 474 100 02", telHref: "+4647410002", mail: "it@quickbutton.se" },
  { dept: "Ekonomi", img: "/assets/photos/team/person2.png", nm: "Maria Ström", ti: "Ekonomiansvarig", tel: "+46 474 100 03", telHref: "+4647410003", mail: "ekonomi@quickbutton.se" },
  { dept: "Kundtjänst", img: "/assets/photos/team/person4.png", nm: "Petra Sjögren", ti: "Kundtjänst", tel: "+46 474 100 04", telHref: "+4647410004", mail: "support@quickbutton.se" },
];

const OFFICES = [
  { hq: true, country: "Sverige", company: "Quickbutton AB", addr: ["Industrigatan 1", "364 31 Åseda"], tel: "+46 474 100 00", telHref: "+4647410000", mail: "info@quickbutton.se",
    flag: <svg viewBox="0 0 16 10"><rect width="16" height="10" fill="#006aa7" /><rect x="5" width="2" height="10" fill="#fecc00" /><rect y="4" width="16" height="2" fill="#fecc00" /></svg> },
  { country: "Finland", company: "Quickbutton Oy", addr: ["Teollisuuskatu 5", "00510 Helsinki"], tel: "+358 9 100 00", telHref: "+358910000", mail: "info@quickbutton.fi",
    flag: <svg viewBox="0 0 16 10"><rect width="16" height="10" fill="#fff" /><rect x="4" width="2" height="10" fill="#003580" /><rect y="4" width="16" height="2" fill="#003580" /></svg> },
  { country: "Danmark", company: "Quickbutton ApS", addr: ["Industrivej 12", "2600 Glostrup"], tel: "+45 70 10 00 00", telHref: "+4570100000", mail: "info@quickbutton.dk",
    flag: <svg viewBox="0 0 16 10"><rect width="16" height="10" fill="#c8102e" /><rect x="4" width="2" height="10" fill="#fff" /><rect y="4" width="16" height="2" fill="#fff" /></svg> },
  { country: "Norge", company: "Quickbutton AS", addr: ["Industriveien 8", "0667 Oslo"], tel: "+47 22 10 00 00", telHref: "+4722100000", mail: "info@quickbutton.no",
    flag: <svg viewBox="0 0 16 10"><rect width="16" height="10" fill="#ba0c2f" /><rect x="4" width="3" height="10" fill="#fff" /><rect y="3.5" width="16" height="3" fill="#fff" /><rect x="4.75" width="1.5" height="10" fill="#00205b" /><rect y="4.25" width="16" height="1.5" fill="#00205b" /></svg> },
];

export default function KontaktPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="kt-hero" data-screen-label="Kontakt hero">
        <div className="mx">
          <span className="eyebrow red">Kontakt</span>
          <h1>Hör av dig <em>till oss</em>.</h1>
          <p>Hitta rätt person, skicka ett meddelande eller ring något av våra kontor i Sverige, Finland, Danmark och Norge.</p>
          <nav className="anchor-nav">
            <a href="#personer">Kontaktpersoner</a>
            <a href="#formular">Skicka meddelande</a>
            <a href="#kontor">Kontor &amp; länder</a>
          </nav>
        </div>
      </section>

      <section className="sec alt" id="personer" data-screen-label="Kontaktpersoner">
        <div className="mx">
          <div className="sec-intro">
            <div className="sec-num">01 — Kontaktpersoner</div>
            <h2 className="disp">Prata med rätt person direkt</h2>
            <p>Vet du redan vad ditt ärende gäller? Ring eller mejla avdelningen direkt så går det snabbare.</p>
          </div>
          <div className="people-grid">
            {PEOPLE.map((p) => (
              <div className="person-card" key={p.nm}>
                <div className="ph"><span className="dept">{p.dept}</span><img src={p.img} alt={p.nm} /></div>
                <div className="body">
                  <div className="nm">{p.nm}</div>
                  <div className="ti">{p.ti}</div>
                  <div className="links">
                    <a href={`tel:${p.telHref}`}><Phone />{p.tel}</a>
                    <a href={`mailto:${p.mail}`}><Mail />{p.mail}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="formular" data-screen-label="Formulär">
        <div className="mx">
          <div className="form-split">
            <div className="form-aside">
              <div className="sec-num">02 — Skicka meddelande</div>
              <h2 className="disp">Hör av dig så återkommer vi</h2>
              <p>Fyll i formuläret så svarar vi så snart vi kan, oftast inom en arbetsdag. Vill du nå en specifik avdelning hittar du direktkontakter ovan.</p>
              <div className="contact-quick">
                <a href="tel:+4647410000"><Phone />+46 474 100 00</a>
                <a href="mailto:info@quickbutton.se"><Mail />info@quickbutton.se</a>
                <a href="/om-oss#fabriken"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>Industrigatan 1, 364 31 Åseda</a>
              </div>
            </div>

            <div className="form-card">
              {!sent ? (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!e.currentTarget.checkValidity()) {
                      e.currentTarget.reportValidity();
                      return;
                    }
                    setSent(true);
                  }}
                >
                  <div className="field">
                    <label htmlFor="k-name">Namn</label>
                    <input id="k-name" name="name" type="text" required maxLength={100} placeholder="Ditt namn" />
                  </div>
                  <div className="field">
                    <label htmlFor="k-email">E-post</label>
                    <input id="k-email" name="email" type="email" required maxLength={255} placeholder="din@epost.se" />
                  </div>
                  <div className="field">
                    <label htmlFor="k-message">Meddelande</label>
                    <textarea id="k-message" name="message" required maxLength={1000} rows={5} placeholder="Hur kan vi hjälpa dig?"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Skicka meddelande <span className="ar">→</span></button>
                  <p className="form-hint">Vi behandlar dina uppgifter enligt vår integritetspolicy.</p>
                </form>
              ) : (
                <div className="form-sent">
                  <div className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
                  <h3>Tack för ditt meddelande!</h3>
                  <p>Vi återkommer så snart vi kan, oftast inom en arbetsdag.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="sec alt" id="kontor" data-screen-label="Kontor">
        <div className="mx">
          <div className="sec-intro">
            <div className="sec-num">03 — Kontor &amp; länder</div>
            <h2 className="disp">Kompletta kontaktuppgifter</h2>
            <p>Huvudkontor och tillverkning i Åseda, med dotterbolag i Finland, Danmark och Norge.</p>
          </div>
          <div className="office-grid">
            {OFFICES.map((o) => (
              <div className={`office-card${o.hq ? " hq" : ""}`} key={o.country}>
                {o.hq && <span className="hqtag">Huvudkontor</span>}
                <div className="head">
                  <span className="flag">{o.flag}</span>
                  <span className="country">{o.country}</span>
                </div>
                <div className="company">{o.company}</div>
                <div className="addr">{o.addr[0]}<br />{o.addr[1]}</div>
                <div className="links">
                  <a href={`tel:${o.telHref}`}><Phone />{o.tel}</a>
                  <a href={`mailto:${o.mail}`}><Mail />{o.mail}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
