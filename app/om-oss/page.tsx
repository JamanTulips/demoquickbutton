export default function Page() {
  return (
    <>
<section className="ao-hero" data-screen-label="Om oss hero">
  <div className="mx">
    <span className="eyebrow red">Om oss</span>
    <h1>Svensktillverkat sedan <em>1971</em>.</h1>
    <p>Vi tillverkar namnskyltar, skyltar och pins i vår fabrik i Åseda. Här är historien om platsen, människorna och värderingarna bakom Quickbutton.</p>
    <nav className="anchor-nav">
      <a href="#fabriken">Fabriken</a>
      <a href="#teamet">Vi som jobbar här</a>
      <a href="#hallbarhet">Hållbarhet</a>
      <a href="#kultur">Kultur</a>
    </nav>
  </div>
</section>


<section className="sec alt" id="fabriken" data-screen-label="Fabriken">
  <div className="mx">
    <div className="sec-intro">
      <div className="sec-num">01 — Fabriken</div>
      <h2 className="disp">Allt görs på plats i Åseda</h2>
      <p>Från första tryck till färdig produkt — vi har hela tillverkningen under ett tak. Det ger korta ledtider, full kvalitetskontroll och möjlighet att ta fram det lilla extra som varje kund behöver.</p>
    </div>
    <div className="photo-row">
      <figure className="photo-fig">
        <div className="ph"><span className="tag">Tryck</span><img src="/assets/photos/people-workshop.png" alt="Tryckeriet i Åseda" /></div>
        <figcaption>Tryckeriet där varje skylt får sin färg och logotyp.</figcaption>
      </figure>
      <figure className="photo-fig">
        <div className="ph"><span className="tag">Montering</span><img src="/assets/photos/form-buttons.png" alt="Montering och ytbehandling" /></div>
        <figcaption>Montering och ytbehandling för slitstarka produkter.</figcaption>
      </figure>
      <figure className="photo-fig">
        <div className="ph"><span className="tag">Kontroll</span><img src="/assets/photos/product-blazer.png" alt="Slutkontroll innan leverans" /></div>
        <figcaption>Slutkontroll innan leverans till återförsäljare.</figcaption>
      </figure>
    </div>
    <div className="fab-stats">
      <div className="stat"><div className="n">50+</div><div className="l">år av hantverk</div></div>
      <div className="stat"><div className="n">100%</div><div className="l">tillverkat i Sverige</div></div>
      <div className="stat"><div className="n">4</div><div className="l">länder med dotterbolag</div></div>
      <div className="stat"><div className="n">5–7</div><div className="l">dagars leveranstid</div></div>
    </div>
  </div>
</section>


<section className="sec" id="teamet" data-screen-label="Teamet">
  <div className="mx">
    <div className="sec-intro">
      <div className="sec-num">02 — Vi som jobbar här</div>
      <h2 className="disp">Människorna bakom produkterna</h2>
      <p>Ett litet, sammansvetsat team i Åseda — från produktion till försäljning och kundtjänst.</p>
    </div>
    <div className="team-grid">
      <div className="person"><div className="ph"><img src="/assets/photos/team/person6.png" alt="Karin Lund" /></div><div className="nm">Karin Lund</div><div className="ti">VD</div></div>
      <div className="person"><div className="ph"><img src="/assets/photos/team/person3.png" alt="Johan Berg" /></div><div className="nm">Johan Berg</div><div className="ti">Produktionschef</div></div>
      <div className="person"><div className="ph"><img src="/assets/photos/team/person1.png" alt="Sara Nyström" /></div><div className="nm">Sara Nyström</div><div className="ti">Försäljningsansvarig</div></div>
      <div className="person"><div className="ph"><img src="/assets/photos/team/person5.png" alt="Mikael Holm" /></div><div className="nm">Mikael Holm</div><div className="ti">Tryckoperatör</div></div>
      <div className="person"><div className="ph"><img src="/assets/photos/team/person4.png" alt="Petra Sjögren" /></div><div className="nm">Petra Sjögren</div><div className="ti">Kundtjänst</div></div>
      <div className="person"><div className="ph"><img src="/assets/photos/team/person7.png" alt="Bengt Karlsson" /></div><div className="nm">Bengt Karlsson</div><div className="ti">Verktygsmakare</div></div>
      <div className="person"><div className="ph"><img src="/assets/photos/team/person8.png" alt="Leyla Demir" /></div><div className="nm">Leyla Demir</div><div className="ti">Montering</div></div>
      <div className="person"><div className="ph"><img src="/assets/photos/team/person2.png" alt="Ingrid Persson" /></div><div className="nm">Ingrid Persson</div><div className="ti">Ekonomi &amp; administration</div></div>
    </div>
  </div>
</section>


<section className="sec alt" id="hallbarhet" data-screen-label="Hållbarhet">
  <div className="mx">
    <div className="split">
      <div className="copy">
        <div className="sec-num">03 — Hållbarhet</div>
        <h2 className="disp">Hållbart på riktigt</h2>
        <p>Lokal tillverkning innebär korta transporter och mindre svinn. Vi väljer material med omsorg, återvinner spill och ser löpande över vår energiförbrukning.</p>
        <p>Målet är enkelt: produkter som håller länge och en produktion som belastar miljön så lite som möjligt.</p>
      </div>
      <div className="media"><img src="/assets/photos/identity-blueshirt.png" alt="Hållbar tillverkning i Åseda" /></div>
    </div>
  </div>
</section>


<section className="sec" id="kultur" data-screen-label="Kultur">
  <div className="mx">
    <div className="split">
      <div className="media" style={{ order: "-1" }}><img src="/assets/photos/people-workshop.png" alt="Kulturen på Quickbutton" /></div>
      <div className="copy">
        <div className="sec-num">04 — Kultur</div>
        <h2 className="disp">Stolthet i hantverket</h2>
        <p>Hos oss är vägen från idé till färdig produkt kort. Vi värdesätter yrkesskicklighet, nära samarbete och att alltid hjälpa kunden hela vägen i mål.</p>
        <p>Det är en kultur som byggts upp under mer än 50 år — och som vi vårdar varje dag.</p>
      </div>
    </div>
  </div>
</section>


<section className="cta-band" data-screen-label="CTA">
  <div className="mx">
    <div className="cta-card">
      <div>
        <h2>Vill du veta mer om hur vi jobbar?</h2>
        <p>Hör av dig till teamet i Åseda — vi berättar gärna mer om fabriken, processen och hur vi kan hjälpa er.</p>
      </div>
      <a className="btn btn-onburg" href="/kontakt">Kontakta oss <span className="ar">→</span></a>
    </div>
  </div>
</section>
    </>
  );
}
