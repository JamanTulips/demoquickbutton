export default function Page() {
  return (
    <>
<section className="hero" data-screen-label="Hero">
  <div className="mx">
    <div className="hero-grid">
      <div className="hero-text">
        <span className="hero-eyebrow">Svensk tillverkning sedan 1971</span>
        <h1>Namnskyltar som håller — designade och tillverkade i <em>Åseda</em>.</h1>
        <p className="hero-lede">Ett brett sortiment av namnskyltar, skyltar, pins och profilprodukter — för alla branscher, från egen fabrik i Småland.</p>
        <div className="hero-cta">
          <a className="btn btn-primary" href="/namnskyltar">Designa din namnskylt <span className="ar">→</span></a>
          <a className="btn btn-secondary" href="/aterforsaljare">Hitta återförsäljare</a>
        </div>
        <div className="hero-trust">
          <span>Egen fabrik</span>
          <span>Snabb leverans</span>
          <span>50+ års hantverk</span>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-frame">
          <div className="hero-photo">
            <span className="hero-railtag">Åseda · Småland</span>
            <img src="/assets/photos/hero-nurse.png" alt="Sjuksköterska med namnskylt på sjukhusavdelning" />
          </div>
          <div className="hero-badge">
            <span className="pin-hole"></span>
            <span className="role">Namnskylt</span>
            <span className="nm">Anna Lindqvist</span>
            <span className="ti">Sjuksköterska</span>
          </div>
        </div>
        <p className="hero-cap">Namnskylten gör personalen igenkännbar och bygger förtroende i mötet.</p>
      </div>
    </div>
  </div>
</section>


<section className="cats" id="produkter" data-screen-label="Produktkategorier">
  <div className="mx">
    <div className="sec-head">
      <div className="lead">
        <span className="eyebrow">Ingång 1 — vet du vad du letar efter?</span>
        <h2 className="disp">Våra produktkategorier</h2>
      </div>
      <a className="seeall" href="#">Se alla produkter <span className="ar">→</span></a>
    </div>
    <div className="cat-grid">
      <a className="cat-card" href="/namnskyltar">
        <div className="cat-tile" style={{ background: "var(--vanilj)" }}>
          <span className="cat-num">01</span>
          <div className="pm-badge"><span className="ph"></span><span className="r">Namnskylt</span><span className="n">Anna L.</span><span className="t">Butikschef</span></div>
        </div>
        <div className="cat-body"><h3>Namnskyltar</h3><p>Personliga namnskyltar för alla yrkesgrupper.</p><span className="cat-link">Utforska Namnskyltar <span className="ar">→</span></span></div>
      </a>
      <a className="cat-card" href="#">
        <div className="cat-tile" style={{ background: "var(--himmel)" }}>
          <span className="cat-num">02</span>
          <div className="pm-sign-wrap"><div className="pm-sign-2"></div><div className="pm-sign"><span className="lab">Reception</span><span className="arr">→</span></div></div>
        </div>
        <div className="cat-body"><h3>Skyltar</h3><p>Informationsskyltar, vägvisare och profilskyltar.</p><span className="cat-link">Utforska Skyltar <span className="ar">→</span></span></div>
      </a>
      <a className="cat-card" href="#">
        <div className="cat-tile" style={{ background: "var(--salvia)" }}>
          <span className="cat-num">03</span>
          <div className="pm-pins"><span className="pm-pin a">Bär din<br />identitet</span><span className="pm-pin b">Q</span><span className="pm-pin c">2.0</span></div>
        </div>
        <div className="cat-body"><h3>Knappar &amp; pins</h3><p>Kundnålar, rosetter och emblem i egen design.</p><span className="cat-link">Utforska Pins <span className="ar">→</span></span></div>
      </a>
      <a className="cat-card" href="#">
        <div className="cat-tile" style={{ background: "var(--persika)" }}>
          <span className="cat-num">04</span>
          <div className="pm-tag"><span className="str"></span><div className="card"><span className="hole"></span><span className="qm">Q<sup>&reg;</sup></span></div></div>
        </div>
        <div className="cat-body"><h3>Profilprodukter</h3><p>Trycksaker, band och accessoarer med ert varumärke.</p><span className="cat-link">Utforska Profil <span className="ar">→</span></span></div>
      </a>
    </div>
  </div>
</section>


<section className="branch" id="branscher" data-screen-label="Branscher">
  <div className="mx">
    <div className="sec-head">
      <div className="lead">
        <span className="eyebrow">Ingång 2 — eller välj din bransch</span>
        <h2 className="disp">Inspiration för din verksamhet</h2>
      </div>
      <a className="seeall" href="#">Se alla branscher <span className="ar">→</span></a>
    </div>
    <div className="branch-grid">
      <a className="branch-feature" href="/inspiration/hotell-restaurang">
        <div className="ph">
          <span className="chip">Utvald bransch</span>
          <img src="/assets/photos/industries/hotel-restaurang.jpg" alt="Hotell och restaurang" />
        </div>
        <div className="cap">
          <h3>Hotell &amp; restaurang</h3>
          <p>Första intrycket börjar i receptionen. Tydliga, eleganta namnskyltar gör personalen lätt att känna igen — och höjer känslan av service och kvalitet för varje gäst.</p>
          <span className="go">Se inspiration för hotell &amp; restaurang <span className="ar">→</span></span>
        </div>
      </a>
      <div className="branch-list">
        <a className="branch-item" href="/inspiration/hotell-restaurang"><span className="sw"><img src="/assets/photos/industries/ind-vard.jpg" alt="" /></span><span className="nm">Vård &amp; omsorg</span><span className="ar">→</span></a>
        <a className="branch-item" href="#"><span className="sw"><img src="/assets/photos/industries/ind-event.jpg" alt="" /></span><span className="nm">Event &amp; mässa</span><span className="ar">→</span></a>
        <a className="branch-item" href="#"><span className="sw"><img src="/assets/photos/industries/ind-detalj.jpg" alt="" /></span><span className="nm">Detaljhandel &amp; bank</span><span className="ar">→</span></a>
        <a className="branch-item" href="#"><span className="sw"><img src="/assets/photos/industries/ind-transport.jpg" alt="" /></span><span className="nm">Transport</span><span className="ar">→</span></a>
        <a className="branch-item" href="#"><span className="sw"><img src="/assets/photos/industries/ind-kampanj.jpg" alt="" /></span><span className="nm">Kampanj &amp; profil</span><span className="ar">→</span></a>
      </div>
    </div>
  </div>
</section>


<section className="reseller" id="aterforsaljare" data-screen-label="Återförsäljare">
  <div className="mx">
    <div className="reseller-grid">
      <div className="reseller-text">
        <span className="eyebrow red">Återförsäljare</span>
        <h2 className="disp">Hitta din närmaste återförsäljare</h2>
        <p className="lede">Vi har återförsäljare i hela Norden. Hitta den som är närmast dig — eller bli en av dem.</p>
        <div className="search-row">
          <input type="text" placeholder="skriv in din ort" />
          <button className="btn btn-primary">Sök</button>
        </div>
        <div className="reseller-cta">
          <a className="btn btn-secondary" href="/aterforsaljare">Se alla återförsäljare</a>
          <a className="btn btn-ghost" href="/aterforsaljare#bli">vill du bli återförsäljare</a>
        </div>
      </div>
      <div className="map">
        <div className="grid-bg"></div>
        <span className="pin big" style={{ left: "46%", top: "62%" }}></span>
        <span className="lbl" style={{ left: "50%", top: "60%" }}>Åseda</span>
        <span className="pin" style={{ left: "38%", top: "74%" }}></span>
        <span className="pin" style={{ left: "54%", top: "50%" }}></span>
        <span className="pin" style={{ left: "60%", top: "34%" }}></span>
        <span className="pin" style={{ left: "42%", top: "42%" }}></span>
        <span className="pin" style={{ left: "64%", top: "66%" }}></span>
        <span className="pin" style={{ left: "30%", top: "58%" }}></span>
      </div>
    </div>
  </div>
</section>


<section className="factory" data-screen-label="Fabriken">
  <div className="mx">
    <div className="factory-grid">
      <div className="factory-photo">
        <img src="/assets/photos/factory-packing.png" alt="Packning av färdiga namnbrickor i fabriken i Åseda" />
        <span className="tag">Fabriken · Åseda</span>
      </div>
      <div className="factory-text">
        <span className="eyebrow">Tillverkat i Sverige sedan 1971</span>
        <h2>Du jobbar direkt med vårt team i fabriken i Åseda.</h2>
        <p className="body">Hos oss finns hela kedjan under ett tak — design, tillverkning och leverans. Det ger kortare leveranstider, lägre miljöpåverkan och full kontroll på kvaliteten. Och framför allt: riktiga människor som kan sitt hantverk.</p>
        <div className="stats">
          <div className="stat"><div className="n">50+</div><div className="l">år av hantverk</div></div>
          <div className="stat"><div className="n">100%</div><div className="l">tillverkat i Sverige</div></div>
          <div className="stat"><div className="n">4</div><div className="l">länder med dotterbolag</div></div>
        </div>
        <a className="btn btn-onburg" href="#">Möt fabriken &amp; teamet <span className="ar">→</span></a>
      </div>
    </div>
  </div>
</section>


<section className="steps" data-screen-label="Så fungerar det">
  <div className="mx">
    <div className="sec-head">
      <div className="lead">
        <span className="eyebrow">Så fungerar det</span>
        <h2 className="disp">Från idé till färdig produkt</h2>
      </div>
    </div>
    <div className="steps-grid">
      <div className="step active"><div className="n">01</div><div className="t">Välj produkt</div><div className="d">Bläddra i sortimentet eller använd designverktyget.</div></div>
      <div className="step"><div className="n">02</div><div className="t">Kontakta återförsäljare</div><div className="d">Ta kontakt med din återförsäljare för offert.</div></div>
      <div className="step"><div className="n">03</div><div className="t">Design &amp; namnlista</div><div className="d">Vi hjälper er med design och namnlista.</div></div>
      <div className="step"><div className="n">04</div><div className="t">Vi tillverkar</div><div className="d">Leverans inom 5–7 dagar från vår fabrik i Åseda.</div></div>
    </div>
  </div>
</section>


<section className="proof" data-screen-label="Förtroende">
  <div className="mx">
    <div className="sec-head">
      <div className="lead">
        <span className="eyebrow">Förtroende</span>
        <h2 className="disp">Tusentals svenska företag väljer Quickbutton</h2>
      </div>
    </div>
    <div className="proof-grid">
      <div className="quote">
        <img className="tagphoto" src="/assets/photos/brands/tag-ikea.jpg" alt="Quickbutton namnskylt — IKEA, Anna Lindberg, Säljledare" />
        <div className="mark">&rdquo;</div>
        <p className="q">Namnskyltarna håller år efter år — vi har bytt ut allt annat, men inte de här. Personalen känner sig sedd och kunderna vet direkt vem de möter.</p>
        <div className="attrib"><span className="nm">Anna Lindberg</span><span className="co">Säljledare · IKEA</span></div>
      </div>
      <div className="quote">
        <img className="tagphoto" src="/assets/photos/brands/tag-systembolaget.jpg" alt="Quickbutton namnskylt — Systembolaget, Erik Svensson, Butikschef" />
        <div className="mark">&rdquo;</div>
        <p className="q">Snabb leverans och en kvalitet som märks direkt. Enkelt att jobba med från första kontakt till färdig produkt.</p>
        <div className="attrib"><span className="nm">Erik Svensson</span><span className="co">Butikschef · Systembolaget</span></div>
      </div>
      <div className="quote">
        <img className="tagphoto" src="/assets/photos/brands/tag-clasohlson.jpg" alt="Quickbutton namnskylt — Clas Ohlson, Lisa Nordström, Varuhuschef" />
        <div className="mark">&rdquo;</div>
        <p className="q">Tydliga, snygga namnskyltar gör personalen lätt att känna igen — det höjer hela intrycket i butiken.</p>
        <div className="attrib"><span className="nm">Lisa Nordström</span><span className="co">Varuhuschef · Clas Ohlson</span></div>
      </div>
    </div>
  </div>
</section>


<section className="news" data-screen-label="Nyhetsbrev">
  <div className="mx">
    <div className="inner">
      <span className="eyebrow red">Nyhetsbrev</span>
      <h2 className="disp">Inspiration &amp; nyheter — en gång i månaden</h2>
      <p>Inga säljutskick. Bara case, nya produkter och historier från fabriken i Åseda.</p>
      <div className="form">
        <input type="email" placeholder="din@epost.se" />
        <button className="btn btn-primary">Anmäl</button>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
