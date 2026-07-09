export default function Page() {
  return (
    <>
<section className="np-hero" data-screen-label="Namnskyltar hero">
  <div className="mx">
    <div className="crumb"><a href="/">Start</a><span className="sep">/</span><span className="here">Namnskyltar</span></div>
    <div className="np-hero-grid" style={{ marginTop: "22px" }}>
      <div>
        <span className="eyebrow red">Produkter — Namnskyltar</span>
        <h1>Namnskyltar som <em>syns</em> och håller.</h1>
        <p>Bläddra bland våra namnbrickor i metall, plast, trä och special. Välj en modell och designa innehåll, format och fäste. Svensk tillverkning sedan 1971.</p>
        <div className="cta">
          <a className="btn btn-primary" href="/namnskylt-produkt">Designa din namnskylt <span className="ar">→</span></a>
          <a className="btn btn-secondary" href="#">Logga in i ordersystemet</a>
        </div>
      </div>
      <div className="badge-cluster">
        <div className="pnb c1" style={{ "--tile": "var(--vanilj)" } as React.CSSProperties}><span className="clip"></span><span className="dot"></span><span className="eyebrow-tag">Namnskylt</span><span className="nm">Anna Lindqvist</span><span className="ro">Projektledare</span></div>
        <div className="pnb c2" style={{ "--tile": "var(--himmel)" } as React.CSSProperties}><span className="clip"></span><span className="dot"></span><span className="eyebrow-tag">Namnskylt</span><span className="nm">Wilma Nyström</span><span className="ro">Sjuksköterska</span></div>
        <div className="pnb c3" style={{ "--tile": "var(--salvia)" } as React.CSSProperties}><span className="clip"></span><span className="dot"></span><span className="eyebrow-tag">Namnskylt</span><span className="nm">Marcus Holm</span><span className="ro">VD</span></div>
      </div>
    </div>
  </div>
</section>


<section className="materials" data-screen-label="Material">
  <div className="mx">
    <div className="sec-head">
      <span className="eyebrow">Material</span>
      <h2 className="disp">Vilken typ av namnbricka vill du ha?</h2>
    </div>
    <div className="mat-grid">
      <div className="mat-card">
        <div className="mat-swatch mat-metall"><span className="chip">Metall</span></div>
        <div className="mat-body"><h3>Metall</h3><p>Klassisk och hållbar. Passar formella miljöer och ger ett professionellt intryck.</p></div>
      </div>
      <div className="mat-card">
        <div className="mat-swatch mat-plast"><span className="chip">Plast</span></div>
        <div className="mat-body"><h3>Plast</h3><p>Lätt och kostnadseffektivt. Bra för event, mässor och tillfällig användning.</p></div>
      </div>
      <div className="mat-card">
        <div className="mat-swatch mat-tra"><span className="chip">Trä</span></div>
        <div className="mat-body"><h3>Trä</h3><p>Unikt och hållbart. Perfekt för varumärken som värdesätter natur och hantverk.</p></div>
      </div>
      <div className="mat-card">
        <div className="mat-swatch mat-special"><span className="chip">Special</span></div>
        <div className="mat-body"><h3>Special</h3><p>Skräddarsydda format och material. För er som vill sticka ut och göra ett avtryck.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="picker" id="valj-namnbricka" data-screen-label="Välj namnbricka">
  <div className="mx">
    <div className="picker-head">
      <div>
        <span className="eyebrow">Välj namnbricka</span>
        <h2 className="disp">Välj namnbricka</h2>
        <p className="lede">Bläddra bland tillgängliga modeller och filtrera på material, format och färg.</p>
      </div>
      <span className="count">10 namnbrickor</span>
    </div>

    
    <div className="filters">
      <div className="filter-row">
        <span className="lab">Format</span>
        <button className="chip active">Alla</button>
        <button className="chip">Rektangulär</button>
        <button className="chip">Elips</button>
      </div>
      <div className="filter-row">
        <span className="lab">Färg</span>
        <button className="chip active">Alla</button>
        <button className="chip"><span className="sw" style={{ background: "#fff" }}></span>Vit</button>
        <button className="chip"><span className="sw" style={{ background: "#222" }}></span>Svart</button>
        <button className="chip"><span className="sw" style={{ background: "var(--qb-red)" }}></span>Röd</button>
        <button className="chip"><span className="sw" style={{ background: "var(--salvia)" }}></span>Grön</button>
        <button className="chip"><span className="sw" style={{ background: "var(--himmel)" }}></span>Blå</button>
        <button className="chip"><span className="sw" style={{ background: "oklch(0.8 0.01 250)" }}></span>Silver</button>
      </div>
    </div>

    
    <div className="group">
      <div className="group-lab"><b>Rektangulär</b> · 6 st</div>
      <div className="tag-grid">
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "linear-gradient(135deg,#edeef0,#b5b7bb)" }}></i>Borstad</span><img src="/assets/photos/tags/tag-silver-rect.jpg" alt="Borstad silver namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Borstad silver</span><span className="sub">Rektangulär · Metall</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "linear-gradient(135deg,#e9cf8f,#c79a3f)" }}></i>Borstad</span><img src="/assets/photos/tags/tag-gold-rect.jpg" alt="Borstad guld namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Borstad guld</span><span className="sub">Rektangulär · Metall</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "#ffffff" }}></i>Matt</span><img src="/assets/photos/tags/tag-white-rect.jpg" alt="Vit plast namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Vit plast</span><span className="sub">Rektangulär · Plast</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "#26231f" }}></i>Matt</span><img src="/assets/photos/tags/tag-black-rect.jpg" alt="Matt svart namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Matt svart</span><span className="sub">Rektangulär · Plast</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "linear-gradient(135deg,#e9d0a4,#c39553)" }}></i>Oljad</span><img src="/assets/photos/tags/tag-wood-rect.jpg" alt="Trä björk namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Trä – björk</span><span className="sub">Rektangulär · Trä</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "linear-gradient(135deg,#edeef0,#b5b7bb)" }}></i>Polerad</span><img src="/assets/photos/tags/tag-01.jpg" alt="Polerad stål namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Polerad stål</span><span className="sub">Rektangulär · Metall</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
      </div>
    </div>

    
    <div className="group">
      <div className="group-lab"><b>Elips</b> · 4 st</div>
      <div className="tag-grid">
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "linear-gradient(135deg,#edeef0,#b5b7bb)" }}></i>Borstad</span><img src="/assets/photos/tags/tag-silver-oval.jpg" alt="Borstad silver elips namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Borstad silver</span><span className="sub">Elips · Metall</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "linear-gradient(135deg,#e9cf8f,#c79a3f)" }}></i>Borstad</span><img src="/assets/photos/tags/tag-02.jpg" alt="Borstad guld elips namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Borstad guld</span><span className="sub">Elips · Metall</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "linear-gradient(135deg,#e9d0a4,#c39553)" }}></i>Oljad</span><img src="/assets/photos/tags/tag-wood-oval.jpg" alt="Trä björk elips namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Trä – björk</span><span className="sub">Elips · Trä</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
        <a className="tag-card" href="/namnskylt-produkt"><div className="ph"><span className="finish"><i className="fdot" style={{ background: "#26231f" }}></i>Matt</span><img src="/assets/photos/tags/tag-black-oval.jpg" alt="Matt svart elips namnskylt" /></div><div className="foot"><span className="meta"><span className="mat">Matt svart</span><span className="sub">Elips · Plast</span></span><span className="go" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></span></div></a>
      </div>
    </div>
  </div>
</section>


<section className="help" data-screen-label="Hjälp">
  <div className="mx">
    <div className="help-card">
      <div>
        <h2>Osäker på vilken namnskylt som passar er?</h2>
        <p>Vårt team i Åseda hjälper er att välja material, format och fäste — och tar fram ett korrektur innan tryck.</p>
      </div>
      <a className="btn btn-onburg" href="/kontakt">Kontakta oss <span className="ar">→</span></a>
    </div>
  </div>
</section>
    </>
  );
}
