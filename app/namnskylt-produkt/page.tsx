export default function Page() {
  return (
    <>
<section className="pd-hero" data-screen-label="Produkt hero">
  <div className="mx">
    <div className="crumb"><a href="/">Start</a><span className="sep">/</span><a href="/namnskyltar">Namnskyltar</a><span className="sep">/</span><span className="here">Klassisk namnskylt med logotyp</span></div>
    <div style={{ marginTop: "18px" }}>
      <span className="eyebrow red">Namnskyltar — Produkt</span>
      <h1>Klassisk namnskylt med logotyp</h1>
      <p>Se specifikationen nedan. När du är intresserad gör du en intresseanmälan till en återförsäljare som hjälper dig med pris, korrektur och beställning.</p>
    </div>
  </div>
</section>


<section className="product" data-screen-label="Produkt">
  <div className="mx">
    <div className="product-grid">
      
      <div className="panel">
        <div className="panel-lab">Denna namnskylt</div>
        <div className="preview">
          <img className="preview-photo" src="/assets/photos/tags/tag-silver-rect.jpg" alt="Borstad silver namnskylt med logotyp" />
        </div>
        <div className="thumbs">
          <button className="thumb active"><img src="/assets/photos/tags/tag-silver-rect.jpg" alt="Rektangulär borstad silver" /></button>
          <button className="thumb"><img src="/assets/photos/tags/tag-silver-oval.jpg" alt="Elips borstad silver" /></button>
          <button className="thumb"><img src="/assets/photos/tags/tag-black-rect.jpg" alt="Rektangulär matt svart" /></button>
        </div>

        <div className="spec-lab">Specifikation</div>
        <div className="spec">
          <div className="spec-row editable"><span className="k">Format</span><span className="v">75 × 35 mm <svg className="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></span></div>
          <div className="spec-row editable"><span className="k">Material</span><span className="v">Tryckt ytbehandling <svg className="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></span></div>
          <div className="spec-row editable"><span className="k">Fäste</span><span className="v">Magnet <svg className="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></span></div>
          <div className="spec-row editable"><span className="k">Innehåll</span><span className="v">Logotyp, namn, titel <svg className="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></span></div>
          <div className="spec-row editable"><span className="k">Logotyp</span><span className="v">Uppe till vänster <svg className="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></span></div>
          <div className="spec-row editable"><span className="k">Typsnitt</span><span className="v">Standard <svg className="pen" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg></span></div>
        </div>
        <p className="desc">En slitstark namnskylt i klassiskt format, framtagen för daglig användning inom vård, handel och kontor. Den tryckta ytbehandlingen ger skarpa färger och tål rengöring, och magnetfästet skonar kläderna. Vill du ha ett annat format, fäste eller innehåll? Återförsäljaren hjälper dig att anpassa skylten efter dina behov.</p>
      </div>

      
      <aside>
        <div className="inquiry">
          <div className="lab">Intresseanmälan</div>
          <h2>Skräddarsy hos en av våra återförsäljare</h2>
          <p className="sub">Välj en återförsäljare nedan så skickar du en intresseanmälan. De hjälper dig med pris, korrektur och beställning.</p>
          <div className="reseller-list">
            <button className="reseller-btn"><span className="av">PS</span><span className="meta"><span className="nm">Profilbutiken Stockholm</span><span className="loc">Stockholm · Sverige</span></span><span className="ar">→</span></button>
            <button className="reseller-btn"><span className="av">RG</span><span className="meta"><span className="nm">Reklam &amp; Profil Göteborg</span><span className="loc">Göteborg · Sverige</span></span><span className="ar">→</span></button>
            <button className="reseller-btn"><span className="av">SM</span><span className="meta"><span className="nm">Skylt &amp; Tryck Malmö</span><span className="loc">Malmö · Sverige</span></span><span className="ar">→</span></button>
            <button className="reseller-btn"><span className="av">NO</span><span className="meta"><span className="nm">Nordic Profile Oslo</span><span className="loc">Oslo · Norge</span></span><span className="ar">→</span></button>
            <button className="reseller-btn"><span className="av">HP</span><span className="meta"><span className="nm">Helsinki Print &amp; Sign</span><span className="loc">Helsingfors · Finland</span></span><span className="ar">→</span></button>
          </div>
          <a className="all" href="/aterforsaljare">Se alla återförsäljare</a>
          <p className="fine">Ingen beställning sker här — återförsäljaren tar hand om offert, korrektur och leverans.</p>
        </div>
      </aside>
    </div>
  </div>
</section>





<div className="modal-scrim" id="scrim">
  <div className="modal" role="dialog" aria-modal="true">
    <button className="x" aria-label="Stäng">&times;</button>
    
    <div id="modal-form">
      <h3 id="modal-title">Intresseanmälan till …</h3>
      <p className="mdesc">Fyll i dina uppgifter så skickar vi din intresseanmälan till återförsäljaren.</p>
      <div className="reseller-contact" id="modal-contact">
        <div className="rc-head">
          <span className="rc-av" id="rc-av">PS</span>
          <span className="rc-id"><span className="rc-name" id="rc-name">Profilbutiken Stockholm</span><span className="rc-loc" id="rc-loc">Stockholm · Sverige</span></span>
        </div>
        <div className="rc-rows">
          <div className="rc-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/></svg>
            <span className="rc-val" id="rc-person">Kontaktperson</span>
          </div>
          <div className="rc-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
            <a className="rc-val" id="rc-email" href="#">e-post</a>
          </div>
          <div className="rc-row">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L20 13l-1 4a2 2 0 0 1-2 1.5A14 14 0 0 1 3.5 6 2 2 0 0 1 5 4Z"/></svg>
            <a className="rc-val" id="rc-phone" href="#">telefon</a>
          </div>
        </div>
      </div>
      <form>
        <div className="field"><label for="f-name">Namn</label><input id="f-name" placeholder="Ditt namn" required /></div>
        <div className="field"><label for="f-email">E-post</label><input id="f-email" type="email" placeholder="din@epost.se" required /></div>
        <div className="field"><label for="f-msg">Meddelande</label><textarea id="f-msg" rows="3">Jag är intresserad av den här produkten: Klassisk namnskylt med logotyp.</textarea></div>
        <button type="submit" className="btn btn-primary btn-full">Skicka intresseanmälan</button>
      </form>
    </div>
    
    <div id="modal-success" className="success" style={{ display: "none" }}>
      <div className="check"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12.5l5 5L20 6"/></svg></div>
      <h3>Tack! Din intresseanmälan har skickats.</h3>
      <p id="success-msg">Återförsäljaren återkommer till dig så snart som möjligt.</p>
      <button className="btn btn-secondary btn-full">Stäng</button>
    </div>
  </div>
</div>
    </>
  );
}
