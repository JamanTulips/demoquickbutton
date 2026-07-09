export default function Page() {
  return (
    <>
<section className="insp-hero" data-screen-label="Inspiration hero">
  <div className="mx">
    <div className="crumb"><a href="/">Start</a><span className="sep">/</span><span className="here">Inspiration</span></div>
    <span className="eyebrow red">Inspiration</span>
    <h1>Inspiration för din <em>bransch</em>.</h1>
    <p className="lede">Utforska hur olika branscher använder namnskyltar, pins och profilprodukter — och se vad som är populärt just nu.</p>
  </div>
</section>


<section className="branch-sec" id="branscher" data-screen-label="Branscher">
  <div className="mx">
    <div className="branch-grid">
      <a className="bcard feat" href="/inspiration/vard-omsorg">
        <div className="ph">
          <span className="chip">Utvald bransch</span>
          <img src="https://images.pexels.com/photos/6129657/pexels-photo-6129657.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Vårdpersonal med namnskylt" />
          <span className="ph-credit">Pexels</span>
        </div>
        <div className="cap">
          <h3>Vård &amp; omsorg <span className="go">→</span></h3>
          <p>Namnskyltar som skapar trygghet och igenkänning i mötet mellan personal och patient — i material som tål en krävande vårdmiljö, dag efter dag.</p>
        </div>
      </a>
      <a className="bcard" href="/inspiration/hotell-restaurang">
        <div className="ph"><img src="/assets/photos/industries/hotel-restaurang.jpg" alt="Hotell och restaurang" /></div>
        <div className="cap">
          <h3>Hotell &amp; restaurang <span className="go">→</span></h3>
          <p>Personal som syns och känns igen — från reception till servering.</p>
        </div>
      </a>

      <a className="bcard" href="#">
        <div className="ph"><img src="/assets/photos/industries/ind-event.jpg" alt="Event och mässa" /></div>
        <div className="cap">
          <h3>Event &amp; mässa <span className="go">→</span></h3>
          <p>Snabba namnskyltar, knappar och badges för mässor och event.</p>
        </div>
      </a>

      <a className="bcard" href="#">
        <div className="ph"><img src="/assets/photos/industries/ind-detalj.jpg" alt="Detaljhandel och bank" /></div>
        <div className="cap">
          <h3>Detaljhandel &amp; bank <span className="go">→</span></h3>
          <p>Professionellt bemötande i butik, bank och på kontoret.</p>
        </div>
      </a>

      <a className="bcard" href="#">
        <div className="ph"><img src="/assets/photos/industries/ind-transport.jpg" alt="Transport" /></div>
        <div className="cap">
          <h3>Transport <span className="go">→</span></h3>
          <p>Tåliga skyltar och ID för förare och personal i rörelse.</p>
        </div>
      </a>

      <a className="bcard" href="#">
        <div className="ph"><img src="/assets/photos/industries/ind-kampanj.jpg" alt="Kampanj och profil" /></div>
        <div className="cap">
          <h3>Kampanj &amp; profil <span className="go">→</span></h3>
          <p>Knappar, pins och profilprodukter som bär ert budskap.</p>
        </div>
      </a>

    </div>
  </div>
</section>


<section className="trend-sec" data-screen-label="Populärt just nu">
  <div className="mx">
    <div className="sec-head">
      <div>
        <span className="eyebrow">Inför höstmässan</span>
        <h2 className="disp">Populärt just nu</h2>
      </div>
      <p>Produkter som beställs flitigt den här säsongen — över alla kategorier.</p>
    </div>
    <div className="trend-grid">
      <a className="tcard" href="#">
        <div className="ph"><img src="/assets/photos/tags/tag-silver-rect.jpg" alt="Namnskylt i metall" /></div>
        <div className="body"><span className="note">Bästsäljare</span><span className="nm">Namnskylt metall</span><span className="cat">Namnskyltar</span></div>
      </a>
      <a className="tcard" href="#">
        <div className="ph"><img src="/assets/photos/tags/tag-wood-oval.jpg" alt="Namnskylt i trä, oval" /></div>
        <div className="body"><span className="note">Nyhet</span><span className="nm">Namnskylt trä — oval</span><span className="cat">Namnskyltar</span></div>
      </a>
      <a className="tcard" href="#">
        <div className="ph"><img src="/assets/photos/tags/tag-gold-rect.jpg" alt="Namnskylt i guld" /></div>
        <div className="body"><span className="note">Premium</span><span className="nm">Namnskylt guld</span><span className="cat">Namnskyltar</span></div>
      </a>
      <a className="tcard" href="#">
        <div className="ph"><img src="/assets/photos/tags/tag-black-oval.jpg" alt="Namnskylt i svart, oval" /></div>
        <div className="body"><span className="note">Express</span><span className="nm">Namnskylt svart — oval</span><span className="cat">Namnskyltar</span></div>
      </a>
    </div>
  </div>
</section>


<section className="insp-cta" data-screen-label="CTA">
  <div className="mx">
    <div className="cta-card">
      <div className="cta-main">
        <h2>Vill du ha hjälp att komma igång?</h2>
        <a className="btn cta-btn" href="/kontakt">Kontakta oss <span className="ar">→</span></a>
      </div>
      <p>Berätta om ditt projekt så hjälper vi dig hitta rätt produkter för din bransch.</p>
    </div>
  </div>
</section>
    </>
  );
}
