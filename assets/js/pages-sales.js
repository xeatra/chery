/* =====================================================================
   PAGES — home · range · model · configurator · stock · vehicle · request · offers · offer · prices · tech
   ===================================================================== */
(function () {
  const SP = window.SP; SP.pages = SP.pages || {};
  const t = SP.t, L = v => SP.L(v), I = SP.icon, esc = SP.esc, eur = v => SP.eur(v);
  const famModels = f => f.models.map(id => SP.model(id));
  const keyRow = m => '<dl class="keys">' + m.key.map(k => '<div><dt>' + k[0] + '<small>' + L(k[1]) + '</small></dt><dd>' + L(SP.SPEC_LABELS[k[2]]) + '</dd></div>').join('') + '</dl>';
  const fuelOf = m => SP.fuelChip(m.fuel);
  /* sibling powertrains of the same family (TIGGO 7 HEV ↔ TIGGO 7 CSH) */
  const sibs = (m, cls) => { const f = m.fam; if (f.models.length < 2) return ''; return '<div class="ptsw ' + (cls || '') + '" role="tablist" aria-label="' + t('fam.choose') + '">' + famModels(f).map(x => '<a role="tab" aria-selected="' + (x.id === m.id) + '" href="model.html?m=' + x.id + '">' + L(SP.FUEL[x.fuel]) + '</a>').join('') + '</div>'; };

  /* ================================================================ HOME */
  SP.pages.home = function () {
    const slides = [
      { m: 't9csh', img: 'assets/img/t9csh/hero.webp', k: { ro: 'Noul TIGGO 9 CSH', en: 'The new TIGGO 9 CSH' }, t: { ro: 'Flagship-ul Chery a sosit.', en: 'Chery’s flagship has arrived.' }, s: { ro: 'SUV premium cu 7 locuri, 428 CP, tracțiune integrală și 143 km electric.', en: 'Premium 7-seat SUV, 428 hp, all-wheel drive and 143 km electric.' } },
      { m: 't8csh', img: 'assets/img/t8csh/hero.webp', k: { ro: 'TIGGO 8 CSH', en: 'TIGGO 8 CSH' }, t: { ro: '7 locuri. Super Hybrid.', en: '7 seats. Super Hybrid.' }, s: { ro: 'Plug-in hybrid de 279 CP, până la 90 km electric, de la 39.490 € cu TVA.', en: '279 hp plug-in hybrid, up to 90 km electric, from €39,490 incl. VAT.' } },
      { m: 't4hev', img: 'assets/img/t4hev/hero2.webp', k: { ro: 'TIGGO 4 HEV', en: 'TIGGO 4 HEV' }, t: { ro: 'Hibridul urban, de la 22.990 €.', en: 'The urban hybrid, from €22,990.' }, s: { ro: 'Full hybrid de 163 CP, 5,3 l/100 km și ADAS complet din echiparea de bază.', en: '163 hp full hybrid, 5.3 l/100 km and full ADAS as standard.' } }
    ];
    const hero = '<section class="hero" data-hero>' + slides.map((s, i) => '<div class="hero__s' + (i ? '' : ' is-on') + '"><img src="' + s.img + '" alt="' + SP.model(s.m).name + '"' + (i ? ' loading="lazy"' : ' fetchpriority="high"') + '></div>').join('') +
      '<div class="container hero__in"><p class="hero__slogan">' + t('home.h1') + '</p>' + slides.map((s, i) => '<div class="hero__c' + (i ? '' : ' is-on') + '"><p class="eyebrow">' + L(s.k) + '</p><h1 class="hero__t">' + L(s.t) + '</h1><p class="hero__d">' + L(s.s) + '</p>' +
        '<div class="btnrow"><a class="btn btn--ink" href="model.html?m=' + s.m + '">' + t('c.explore') + '</a><a class="btn btn--glass" href="solicita.html?tip=test-drive&m=' + s.m + '">' + t('c.testdrive') + '</a></div></div>').join('') +
      '<div class="hero__dots">' + slides.map((s, i) => '<button type="button" aria-label="' + SP.model(s.m).name + '" data-dot="' + i + '"' + (i ? '' : ' class="is-on"') + '><span>' + SP.model(s.m).name + '</span></button>').join('') + '</div></div></section>';

    const selector = '<section class="section sel sel--sand" id="modele"><div class="container"><p class="eyebrow">' + t('home.range') + '</p><h2 class="h2 sel__h">TIGGO</h2>' +
      '<div class="sel__tabs" data-seltabs></div><div class="sel__stage" data-selstage></div>' +
      '<p class="sel__all"><a class="link" href="modele.html">' + t('home.allModels') + I('arrow') + '</a></p></div></section>';

    const local = '<section class="section"><div class="container"><div class="local"><div><p class="eyebrow">' + t('home.local') + '</p><h2 class="h2">' + t('home.localT') + '</h2></div><p class="lead">' + t('home.localD') + '</p></div>' +
      '<div class="grid3 locs">' + SP.LOCATIONS.map(l => '<a class="lcard" href="locatie.html?id=' + l.id + '"><img src="' + l.img + '" alt="" loading="lazy"><div><p class="eyebrow">' + L(l.city) + '</p><h3>' + L(l.name) + '</h3><p>' + l.address + '</p><span class="link link--sm">' + t('lo.view') + I('arrow') + '</span></div></a>').join('') + '</div></div></section>';

    const csh = '<section class="band"><img class="band__bg" src="assets/img/t8csh/hero.webp" alt="" loading="lazy"><div class="container band__in"><div class="band__txt"><p class="eyebrow">' + t('home.csh') + '</p><h2 class="h2">' + t('home.cshT') + '</h2><p>' + t('home.cshD') + '</p><a class="btn btn--glass" href="tehnologie.html">' + t('nav.tech') + I('arrow') + '</a></div>' +
      '<dl class="stats">' + [['143', 'km', 'home.c1'], ['428', SP.lang === 'en' ? 'hp' : 'CP', 'home.c2'], ['≤25', 'min', 'home.c3'], ['8', SP.lang === 'en' ? 'yrs' : 'ani', 'home.c4']].map(s => '<div><dt>' + s[0] + '<small>' + s[1] + '</small></dt><dd>' + t(s[2]) + '</dd></div>').join('') + '</dl></div></section>';

    const order = { stock: 0, demo: 1, transit: 2 };
    const stock = '<section class="section section--soft"><div class="container">' + SP.shead(t('home.stock'), t('home.stockT'), null, [t('c.viewAll') + ' (' + SP.STOCK.length + ')', 'stoc.html']) +
      '<div class="grid4">' + SP.STOCK.slice().sort((a, b) => order[a.status] - order[b.status]).filter((v, i, a) => a.findIndex(x => x.model.family === v.model.family) === i).slice(0, 4).map(SP.stockCard).join('') + '</div></div></section>';

    const offers = '<section class="section"><div class="container">' + SP.shead(t('home.offers'), t('home.offersT'), null, [t('c.viewAll'), 'oferte.html']) +
      '<div class="grid3">' + SP.OFFERS.slice(0, 3).map(SP.offerCard).join('') + '</div></div></section>';

    const global = '<section class="section section--sand"><div class="container glob"><div><p class="eyebrow">' + t('home.global') + '</p><h2 class="h2">' + t('home.globalT') + '</h2><p class="lead">' + t('home.globalD') + '</p></div>' +
      '<div class="glob__n"><strong>100+</strong><span>' + (SP.lang === 'en' ? 'countries' : 'țări') + '</span></div></div></section>';

    const news = '<section class="section"><div class="container">' + SP.shead(t('nav.news'), SP.lang === 'en' ? 'CHERY news' : 'Știri CHERY', null, [t('c.viewAll'), 'stiri.html']) + '<div class="grid3">' + SP.NEWS.slice(0, 3).map(SP.newsCard).join('') + '</div></div></section>';

    const unsure = '<section class="section section--soft"><div class="container cta"><h2 class="h2">' + (SP.lang === 'en' ? 'We are CHERY Demo Auto, at your service!' : 'Suntem CHERY Demo Auto, îți stăm la dispoziție!') + '</h2><p class="lead">' + t('home.unsureD') + '</p><div class="btnrow btnrow--c"><a class="btn btn--ink" href="contact.html">' + (SP.lang === 'en' ? 'Contact us' : 'Contactează-ne') + '</a><a class="btn btn--line" href="solicita.html?tip=test-drive">' + t('c.testdrive') + '</a></div></div></section>';

    return {
      title: '', html: hero + selector + local + csh + stock + offers + global + news + unsure,
      bind(root) {
        /* hero slider */
        const h = root.querySelector('[data-hero]'); let cur = 0, timer;
        const go = i => { cur = i; h.querySelectorAll('.hero__s').forEach((x, j) => x.classList.toggle('is-on', j === i)); h.querySelectorAll('.hero__c').forEach((x, j) => x.classList.toggle('is-on', j === i)); h.querySelectorAll('[data-dot]').forEach((x, j) => x.classList.toggle('is-on', j === i)); };
        const auto = () => { clearInterval(timer); timer = setInterval(() => go((cur + 1) % slides.length), 7000); };
        h.querySelectorAll('[data-dot]').forEach(b => b.addEventListener('click', () => { go(+b.dataset.dot); auto(); }));
        if (!matchMedia('(prefers-reduced-motion: reduce)').matches) auto();
        /* model selector — all TIGGO models, like the importer site */
        let mid = 't4hev';
        const drawTabs = () => { root.querySelector('[data-seltabs]').innerHTML = SP.MODELS.map(m => '<button data-selm="' + m.id + '" class="' + (m.id === mid ? 'is-on' : '') + '">' + m.name + '</button>').join(''); root.querySelectorAll('[data-selm]').forEach(b => b.addEventListener('click', () => { mid = b.dataset.selm; drawTabs(); drawStage(); })); };
        const drawStage = () => {
          const m = SP.model(mid), st = root.querySelector('[data-selstage]');
          st.innerHTML = '<div class="sel__img' + (m.photoColors ? ' sel__img--photo' : '') + '"><img src="' + m.img('studio') + '" alt="' + m.name + '"></div>' +
            '<div class="sel__info"><div>' + fuelOf(m) + '<h3 class="h3">' + m.name + '</h3><p>' + L(m.tagline) + '</p></div>' + keyRow(m) +
            '<div class="sel__price"><small>' + t('c.from') + '</small><strong>' + eur(m.from) + '</strong><small>' + t('c.vat') + '</small></div>' +
            '<div class="btnrow"><a class="btn btn--ink" href="model.html?m=' + m.id + '">' + t('c.explore') + '</a><a class="btn btn--line" href="configurator.html?m=' + m.id + '">' + t('c.configure') + '</a><a class="btn btn--line" href="solicita.html?tip=test-drive&m=' + m.id + '">' + t('c.testdrive') + '</a></div></div>';
        };
        drawTabs(); drawStage();
      }
    };
  };

  /* ================================================================ RANGE (all models, by family) */
  SP.pages.range = function () {
    const fuels = ['all', 'ice', 'hev', 'phev'];
    const hero = '<section class="bhero"><img src="assets/img/t9csh/hero.webp" alt="" fetchpriority="high"><div class="container bhero__in">' + SP.logo('chery', 'logo--xl') + '<h1 class="h1">' + (SP.lang === 'en' ? 'The TIGGO range' : 'Gama TIGGO') + '</h1><p>' + (SP.lang === 'en' ? 'Four families of modern SUVs with premium design: petrol, full hybrid and Chery Super Hybrid plug-in.' : 'Patru familii de SUV-uri moderne cu design premium: benzină, full hybrid și plug-in Chery Super Hybrid.') + '</p><span class="chip chip--glass">' + SP.MODELS.length + ' ' + (SP.lang === 'en' ? 'models' : 'modele') + '</span></div></section>';
    const list = f => SP.FAMILIES.map(fa => { const ms = famModels(fa).filter(m => f === 'all' || m.fuel === f); return ms.length ? '<div class="fam" id="' + fa.id + '"><div class="fam__h"><h2 class="h3">' + fa.name + '</h2><p>' + L(fa.tagline) + '</p><span class="fam__n">' + ms.length + ' ' + (ms.length > 1 ? t('fam.powertrains') : (SP.lang === 'en' ? 'powertrain' : 'motorizare')) + '</span></div><div class="grid3">' + ms.map(SP.modelCard).join('') + '</div></div>' : ''; }).join('');
    const html = hero + '<section class="section"><div class="container"><div class="fchips" role="tablist">' + fuels.map((f, i) => '<button role="tab" aria-selected="' + (i === 0) + '" data-f="' + f + '">' + t('f.' + f) + '</button>').join('') +
      '<a class="fchips__sw" href="preturi.html">' + t('nav.prices') + I('arrow') + '</a></div><div data-list>' + list('all') + '</div></div></section>';
    return {
      title: SP.lang === 'en' ? 'Models' : 'Modele', html,
      bind(root) { root.querySelectorAll('[data-f]').forEach(x => x.addEventListener('click', () => { root.querySelectorAll('[data-f]').forEach(y => y.setAttribute('aria-selected', String(y === x))); root.querySelector('[data-list]').innerHTML = list(x.dataset.f); })); }
    };
  };

  /* ================================================================ MODEL */
  SP.specRows = m => Object.keys(SP.SPEC_LABELS).filter(k => m.specs[k]).map(k => '<div><dt>' + L(SP.SPEC_LABELS[k]) + '</dt><dd>' + L(m.specs[k]) + '</dd></div>').join('');
  SP.equipTable = (m, onlyCol) => {
    const g = (SP.EQUIP[m.id] || []); const vs = m.versions;
    const cols = onlyCol == null ? vs.map((v, i) => i) : [onlyCol];
    const cell = x => x === 'y' ? '<span class="yes" aria-label="' + t('c.std') + '">' + I('check') + '</span>' : x === 'n' ? '<span class="no" aria-label="' + t('c.na') + '">—</span>' : '<span class="txt">' + esc(x) + '</span>';
    return '<div class="equip" data-equip>' + g.map((grp, gi) => '<details class="equip__g"' + (gi < 1 ? ' open' : '') + '><summary><span>' + grp[0] + '</span><small>' + grp[1].length + '</small>' + I('down') + '</summary><div class="tbl-wrap"><table class="tbl"><thead><tr><th></th>' + cols.map(c => '<th class="c">' + vs[c].name + '</th>').join('') + '</tr></thead><tbody>' +
      grp[1].map(r => '<tr><td>' + esc(r[0]) + '</td>' + cols.map(c => '<td class="c">' + cell(r[c + 1]) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div></details>').join('') + '</div>' +
      (SP.lang === 'en' ? '<p class="note">' + t('m.equipLang') + '</p>' : '');
  };

  SP.pages.model = function () {
    const m = SP.model(SP.param('m')) || SP.MODELS[0];
    const stock = SP.STOCK.filter(v => v.modelId === m.id);
    const anchors = [['overview', 'prezentare'], ['versions', 'versiuni'], ['colors', 'culori'], ['specs', 'date-tehnice'], ['equipment', 'dotari'], ['stock', 'stoc'], ['downloads', 'documente']];
    const hero = '<section class="mhero"><img class="mhero__bg" src="' + m.img('hero') + '" alt="' + m.name + '" fetchpriority="high"><div class="container mhero__in"><p class="eyebrow eyebrow--w">CHERY · ' + m.fam.name + '</p><h1 class="mhero__t">' + m.name + '</h1><p class="mhero__s">' + L(m.tagline) + '</p>' +
      sibs(m, 'ptsw--glass') +
      '<p class="mhero__p"><small>' + t('c.from') + '</small> ' + eur(m.from) + ' <small>' + t('c.vat') + '</small></p>' +
      '<div class="btnrow"><a class="btn btn--ink" href="configurator.html?m=' + m.id + '">' + t('c.configure') + '</a><a class="btn btn--glass" href="solicita.html?tip=test-drive&m=' + m.id + '">' + t('c.testdrive') + '</a><a class="btn btn--glass" href="solicita.html?tip=oferta&m=' + m.id + '">' + t('c.offer') + '</a></div></div></section>';
    const sub = '<nav class="subnav"><div class="container subnav__in"><strong>' + m.name + '</strong><ul>' + anchors.map(a => '<li><a href="#' + a[1] + '">' + t('m.' + a[0]) + '</a></li>').join('') + '</ul><a class="btn btn--ink btn--sm" href="configurator.html?m=' + m.id + '">' + t('c.configure') + '</a></div></nav>';
    const sib = m.fam.models.length > 1 ? famModels(m.fam).filter(x => x.id !== m.id)[0] : null;
    const overview = '<section class="section" id="prezentare"><div class="container ov"><div><p class="eyebrow">' + t('m.overview') + '</p><p class="ov__intro">' + L(m.intro) + '</p>' +
      (sib ? '<a class="sibl" href="model.html?m=' + sib.id + '"><img src="' + sib.img('studio') + '" alt="" loading="lazy"><span><small>' + t('m.sibling') + '</small><strong>' + sib.name + '</strong><em>' + L(SP.FUEL[sib.fuel]) + ' · ' + t('c.from') + ' ' + eur(sib.from) + '</em></span>' + I('arrow') + '</a>' : '') + '</div>' + keyRow(m) + '</div></section>';
    const versions = '<section class="section section--soft" id="versiuni"><div class="container">' + SP.shead(t('m.versions'), m.name, null) +
      '<div class="vgrid vgrid--' + m.versions.length + '">' + m.versions.map(v => '<article class="vcard"><header><p class="kicker">' + t('m.trim') + '</p><h3>' + v.name + '</h3><p class="vcard__e">' + L(v.engine) + '</p></header>' +
        '<div class="vcard__p"><small>' + t('c.list') + ', ' + t('c.vat') + '</small><strong>' + eur(v.list) + '</strong><small>' + eur(v.net) + ' ' + t('c.noVat') + ' · ' + (SP.lang === 'en' ? 'code' : 'cod') + ' ' + v.code + '</small></div>' +
        '<ul class="ticks">' + L(v.hi).map(h => '<li>' + I('check') + h + '</li>').join('') + '</ul>' +
        '<div class="btnrow"><a class="btn btn--ink btn--sm" href="configurator.html?m=' + m.id + '&v=' + v.id + '">' + t('c.configure') + '</a><a class="btn btn--line btn--sm" href="solicita.html?tip=oferta&m=' + m.id + '">' + t('c.offer') + '</a></div></article>').join('') + '</div>' +
      '<p class="note">' + t('m.disclaimer') + ' ' + SP.date(m.validFrom, { month: 'long', year: 'numeric' }) + '. ' + t('m.disclaimer2') + '</p></div></section>';
    const groups = [['std', 'm.colorStd'], ['extra', 'm.colorExtra'], ['bitone', 'm.colorBi']];
    const c0 = m.colors[0];
    const colors = '<section class="section" id="culori"><div class="container cols"><div class="cols__stage' + (m.photoColors ? ' cols__stage--photo' : '') + '"><img data-cimg src="' + m.colorImg(c0.code) + '" alt=""></div><div class="cols__p"><p class="eyebrow">' + t('m.colors') + '</p><h2 class="h3" data-cname>' + L(c0.name) + '</h2><p class="muted" data-cprice>' + t('m.colorStd') + ' · ' + t('c.included') + ' · ' + c0.code + '</p>' +
      groups.filter(g => m.colors.some(c => c.group === g[0])).map(g => { const cs = m.colors.filter(c => c.group === g[0]); return '<div class="swg"><p>' + t(g[1]) + (cs[0].price ? ' · +' + eur(cs[0].price) : '') + '</p><div class="sw">' + cs.map(c => '<button type="button" aria-label="' + esc(L(c.name)) + '" aria-pressed="' + (c === c0) + '" style="--c:' + c.hex + '" class="' + (c.group === 'bitone' ? 'sw--bi' : '') + '" data-c="' + c.code + '"></button>').join('') + '</div></div>'; }).join('') +
      '<h3 class="h4 ints__h">' + t('m.interior') + '</h3><ul class="ints">' + m.interiors.map(i => '<li><span style="--c:' + i.hex + '"></span>' + L(i.name) + (i.trims ? ' · ' + i.trims.map(id => m.versions.find(v => v.id === id).name).join(', ') : '') + '</li>').join('') + '</ul></div></div>' +
      '<div class="container"><div class="gal gal--' + m.gallery.length + '">' + m.gallery.map((g, i) => '<a class="gal__i" href="#" data-lightbox=\'' + JSON.stringify(m.gallery.map(x => m.img(x))) + '\' data-index="' + i + '"><img src="' + m.img(g) + '" alt="' + m.name + '" loading="lazy"></a>').join('') + '</div><p class="note">' + (SP.lang === 'en' ? 'Images for illustration only.' : 'Imagini cu titlu de prezentare.') + '</p></div></section>';
    const specs = '<section class="section section--soft" id="date-tehnice"><div class="container">' + SP.shead(t('m.specs'), m.name, null) + '<dl class="specs">' + SP.specRows(m) + '</dl><p class="note">' + t('m.consNote') + '</p></div></section>';
    const equip = '<section class="section" id="dotari"><div class="container">' + SP.shead(t('m.equipment'), SP.lang === 'en' ? 'Equipment by version' : 'Dotări pe versiuni', t('m.equipNote')) + SP.equipTable(m) + '</div></section>';
    const st = '<section class="section section--soft" id="stoc"><div class="container">' + SP.shead(t('m.stock'), m.name + ' ' + t('m.inStockT'), null, [t('c.viewAll'), 'stoc.html?m=' + m.id]) +
      (stock.length ? '<div class="grid4">' + stock.map(SP.stockCard).join('') + '</div>' : '<p class="muted">' + t('m.noStock') + '</p>') + '</div></section>';
    const docs = '<section class="section" id="documente"><div class="container">' + SP.shead(t('m.downloads'), t('c.priceList') + ' ' + m.name, null) +
      '<a class="doc" href="assets/docs/' + m.pdf + '" target="_blank" rel="noopener">' + I('doc') + '<span><strong>' + t('c.priceList') + ' & ' + (SP.lang === 'en' ? 'spec sheet' : 'fișă tehnică') + ' ' + m.name + '</strong><small>PDF · Chery Romania · ' + SP.date(m.validFrom, { month: 'long', year: 'numeric' }) + '</small></span>' + I('download') + '</a></div></section>';
    const cta = '<section class="section section--sand"><div class="container cta"><img src="' + m.img('studio') + '" alt="" loading="lazy"' + (m.photoColors ? ' class="is-photo"' : '') + '><h2 class="h2">' + t('m.cta') + '</h2><p class="lead">' + t('m.ctaD') + '</p><div class="btnrow btnrow--c"><a class="btn btn--ink" href="configurator.html?m=' + m.id + '">' + t('c.configure') + '</a><a class="btn btn--line" href="solicita.html?tip=test-drive&m=' + m.id + '">' + t('c.testdrive') + '</a></div></div></section>';
    return {
      title: m.name, html: hero + sub + overview + versions + colors + specs + equip + st + docs + cta,
      bind(root) {
        root.querySelectorAll('[data-c]').forEach(b => b.addEventListener('click', () => {
          const c = m.colors.find(x => x.code === b.dataset.c), img = root.querySelector('[data-cimg]');
          root.querySelectorAll('[data-c]').forEach(x => x.setAttribute('aria-pressed', String(x === b)));
          img.classList.add('is-fade'); setTimeout(() => { img.src = m.colorImg(c.code); img.classList.remove('is-fade'); }, 160);
          root.querySelector('[data-cname]').textContent = L(c.name);
          root.querySelector('[data-cprice]').textContent = (c.price ? '+' + eur(c.price) : t('m.colorStd') + ' · ' + t('c.included')) + ' · ' + c.code;
        }));
      }
    };
  };

  /* ================================================================ CONFIGURATOR (5 steps: model → powertrain → version → exterior → interior & options) */
  SP.pages.configurator = function () {
    const m0 = SP.model(SP.param('m'));
    if (!m0) {
      return { title: t('cfg.title'), html: SP.phead(t('cfg.title'), t('cfg.pick'), null) + '<section class="section section--tight"><div class="container">' + SP.FAMILIES.map(f => '<div class="cpick"><h2 class="h3">' + f.name + ' <small>' + L(f.tagline) + '</small></h2><div class="cpick__g">' + famModels(f).map(x => '<a class="cpick__c" href="configurator.html?m=' + x.id + '"><img src="' + x.img('studio') + '" alt="" loading="lazy"' + (x.photoColors ? ' class="is-photo"' : '') + '><strong>' + x.name + '</strong><small>' + L(SP.FUEL[x.fuel]) + ' · ' + t('c.from') + ' ' + eur(x.from) + '</small><span class="btn btn--ink btn--sm">' + t('c.configure') + '</span></a>').join('') + '</div></div>').join('') + '</div></section>' };
    }
    const s = { step: 1, mid: m0.id, v: null, c: null, i: null, acc: [] };
    const M = () => SP.model(s.mid);
    const intOk = (m, i, vid) => !i.trims || i.trims.includes(vid);
    const reset = (vid) => { const m = M(); s.v = (m.versions.find(x => x.id === vid) || m.versions[0]).id; s.c = m.colors[0].code; s.i = m.interiors.find(i => intOk(m, i, s.v)).id; s.acc = []; };
    reset(SP.param('v'));
    const accs = () => SP.ACCESSORIES.filter(a => a.fits === 'all' || a.fits.includes(M().fuel));
    const steps = ['cfg.s1', 'cfg.s2', 'cfg.s3', 'cfg.s4', 'cfg.s5'];
    const ver = () => M().versions.find(x => x.id === s.v), col = () => M().colors.find(x => x.code === s.c), int = () => M().interiors.find(x => x.id === s.i);
    const total = () => ver().list + col().price + int().price + s.acc.reduce((a, id) => a + accs().find(x => x.id === id).price, 0);
    const code = () => (s.mid + '-' + s.v + '-' + s.c + '-' + s.i + (s.acc.length ? '-' + s.acc.join('.') : '')).toUpperCase();

    const html = '<section class="cfg"><div class="cfg__stage"><div class="cfg__top"><a class="link link--sm" href="configurator.html">' + I('arrowL') + t('cfg.change') + '</a>' + SP.logo('chery', 'logo--sm') + '</div><h1 class="cfg__name"><b data-mname></b> <span data-vname></span></h1><div class="cfg__img"><img data-stage alt=""></div><p class="cfg__cap" data-cap></p></div>' +
      '<aside class="cfg__panel"><ol class="cfg__steps">' + steps.map((k, i) => '<li><button type="button" data-goto="' + (i + 1) + '"><span>' + (i + 1) + '</span>' + t(k) + '</button></li>').join('') + '</ol><div class="cfg__body" data-body></div>' +
      '<div class="cfg__bar"><div><small>' + t('cfg.total') + '</small><strong data-total></strong><small data-monthly></small></div><div class="cfg__nav"><button class="btn btn--line btn--sm" data-prev aria-label="' + t('c.back') + '">' + I('arrowL') + '</button><button class="btn btn--ink btn--sm" data-next></button></div></div></aside></section>' +
      '<section class="section section--soft" id="rezumat" hidden data-summary></section>';

    function body() {
      const m = M();
      if (s.step === 1) return '<h2 class="h4">' + t('cfg.s1') + '</h2><div class="clist">' + SP.FAMILIES.map(f => '<label class="copt copt--fam"><input type="radio" name="f" value="' + f.id + '"' + (f.id === m.family ? ' checked' : '') + '><img src="' + SP.model(f.models[0]).img('studio') + '" alt=""><span class="copt__n">' + f.name + '<small>' + L(f.tagline) + '</small></span><em>' + t('c.from') + ' ' + eur(f.from) + '</em></label>').join('') + '</div>';
      if (s.step === 2) return '<h2 class="h4">' + t('cfg.s2') + '</h2>' + famModels(m.fam).map(x => '<label class="opt"><input type="radio" name="m" value="' + x.id + '"' + (x.id === s.mid ? ' checked' : '') + '><span><span class="opt__h"><strong>' + x.name + '</strong><em>' + t('c.from') + ' ' + eur(x.from) + '</em></span><span class="opt__f">' + fuelOf(x) + '</span><dl class="minispecs">' + ['sysPower', 'power', 'trans', 'drive', 'evRange', 'cons', 'co2'].filter(k => x.specs[k]).slice(0, 5).map(k => '<div><dt>' + L(SP.SPEC_LABELS[k]) + '</dt><dd>' + L(x.specs[k]) + '</dd></div>').join('') + '</dl></span></label>').join('') +
        (m.fam.models.length < 2 ? '<p class="note">' + (SP.lang === 'en' ? 'This model has a single powertrain.' : 'Acest model are o singură motorizare.') + '</p>' : '');
      if (s.step === 3) return '<h2 class="h4">' + t('cfg.s3') + '</h2>' + m.versions.map(v => '<label class="opt"><input type="radio" name="v" value="' + v.id + '"' + (v.id === s.v ? ' checked' : '') + '><span><span class="opt__h"><strong>' + v.name + '</strong><em>' + eur(v.list) + '</em></span><small class="muted">' + L(v.engine) + '</small><ul class="ticks ticks--sm">' + L(v.hi).slice(0, 5).map(h => '<li>' + I('check') + h + '</li>').join('') + '</ul></span></label>').join('');
      if (s.step === 4) return '<h2 class="h4">' + t('cfg.s4') + '</h2><div class="clist">' + m.colors.map(c => '<label class="copt"><input type="radio" name="c" value="' + c.code + '"' + (c.code === s.c ? ' checked' : '') + '><span class="copt__sw' + (c.group === 'bitone' ? ' sw--bi' : '') + '" style="--c:' + c.hex + '"></span><span class="copt__n">' + L(c.name) + '<small>' + c.code + (c.group === 'std' ? ' · ' + t('m.colorStd') : '') + '</small></span><em>' + (c.price ? '+' + eur(c.price) : t('c.included')) + '</em></label>').join('') + '</div>';
      return '<h2 class="h4">' + t('cfg.int') + '</h2><div class="clist">' + m.interiors.map(i => { const ok = intOk(m, i, s.v); return '<label class="copt' + (ok ? '' : ' is-off') + '"><input type="radio" name="i" value="' + i.id + '"' + (i.id === s.i ? ' checked' : '') + (ok ? '' : ' disabled') + '><span class="copt__sw" style="--c:' + i.hex + '"></span><span class="copt__n">' + L(i.name) + (ok ? '' : '<small>' + t('cfg.intNA') + ' ' + i.trims.map(id => m.versions.find(v => v.id === id).name).join(', ') + '</small>') + '</span><em>' + (i.price ? '+' + eur(i.price) : t('c.included')) + '</em></label>'; }).join('') + '</div>' +
        '<h2 class="h4 cfg__acc">' + t('cfg.accTitle') + '</h2><p class="note">' + t('cfg.accNote') + '</p><div class="clist">' + accs().map(a => '<label class="copt copt--chk"><input type="checkbox" name="a" value="' + a.id + '"' + (s.acc.includes(a.id) ? ' checked' : '') + '><span class="copt__box">' + I('check') + '</span><span class="copt__n">' + L(a.name) + '</span><em>+' + eur(a.price) + '</em></label>').join('') + '</div>';
    }
    function draw(root) {
      const m = M(), v = ver(), c = col(), i = int();
      root.querySelector('[data-mname]').textContent = m.name;
      root.querySelector('[data-vname]').textContent = v.name;
      const img = root.querySelector('[data-stage]');
      const photo = (s.step === 5 && i.img) || m.photoColors;
      const src = s.step === 5 && i.img ? m.img(i.img) : m.colorImg(c.code);
      if (img.getAttribute('src') !== src) { img.classList.add('is-fade'); setTimeout(() => { img.src = src; img.classList.toggle('is-photo', !!photo); img.classList.remove('is-fade'); }, 150); }
      root.querySelector('[data-cap]').textContent = L(SP.FUEL[m.fuel]) + ' · ' + L(c.name) + ' · ' + L(i.name);
      root.querySelectorAll('[data-goto]').forEach(b => { const n = +b.dataset.goto; b.parentNode.className = n === s.step ? 'is-on' : n < s.step ? 'is-done' : ''; });
      root.querySelector('[data-body]').innerHTML = body();
      root.querySelector('[data-total]').textContent = eur(total());
      root.querySelector('[data-monthly]').textContent = t('cfg.monthly') + ' ' + eur(SP.monthly(total())) + '/' + t('c.month');
      root.querySelector('[data-prev]').disabled = s.step === 1;
      root.querySelector('[data-next]').innerHTML = (s.step === 5 ? t('cfg.finish') : t('c.next')) + I('arrow');
      root.querySelectorAll('[data-body] input').forEach(inp => inp.addEventListener('change', () => {
        if (inp.name === 'f') { s.mid = SP.family(inp.value).models[0]; reset(); history.replaceState(null, '', 'configurator.html?m=' + s.mid); }
        if (inp.name === 'm') { s.mid = inp.value; reset(); history.replaceState(null, '', 'configurator.html?m=' + s.mid); }
        if (inp.name === 'v') { s.v = inp.value; const mm = M(); if (!intOk(mm, int(), s.v)) s.i = mm.interiors.find(x => intOk(mm, x, s.v)).id; }
        if (inp.name === 'c') s.c = inp.value; if (inp.name === 'i') s.i = inp.value;
        if (inp.name === 'a') s.acc = [...root.querySelectorAll('[name="a"]:checked')].map(x => x.value);
        draw(root);
      }));
    }
    function summary(root) {
      const m = M(), v = ver(), c = col(), i = int(), sec = root.querySelector('[data-summary]');
      const row = (k, val, p) => '<tr><th>' + k + '</th><td>' + val + '</td><td class="num">' + p + '</td></tr>';
      sec.hidden = false;
      sec.innerHTML = '<div class="container sum"><div><p class="eyebrow">' + t('cfg.summary') + '</p><h2 class="h2">' + m.name + ' ' + v.name + '</h2><div class="sum__img' + (m.photoColors ? ' sum__img--photo' : '') + '"><img src="' + m.colorImg(c.code) + '" alt=""></div>' +
        '<div class="tbl-wrap"><table class="tbl sum__t"><tbody>' + row(t('cfg.base'), m.name + ' ' + v.name + ' · ' + L(v.engine), eur(v.list)) + row(t('cfg.s4'), L(c.name) + ' (' + c.code + ')', c.price ? eur(c.price) : t('c.included')) + row(t('cfg.int'), L(i.name), i.price ? eur(i.price) : t('c.included')) +
        s.acc.map(id => { const a = accs().find(x => x.id === id); return row(t('cfg.accTitle'), L(a.name), eur(a.price)); }).join('') + '</tbody><tfoot><tr><th>' + t('cfg.total') + '</th><td><small>' + t('cfg.totalNote') + '</small></td><td class="num"><strong>' + eur(total()) + '</strong></td></tr></tfoot></table></div>' +
        '<p class="note">' + t('cfg.code') + ': <code>' + code() + '</code> · ' + t('cfg.monthly') + ' ' + eur(SP.monthly(total())) + '/' + t('c.month') + ' — ' + t('cfg.finNote') + '</p></div>' +
        '<div class="panel"><h3 class="h4">' + t('cfg.send') + '</h3><p class="muted">' + t('cfg.sendD') + '</p>' + SP.leadForm({ type: 'configuration', ctx: code(), submit: t('cfg.send'), message: true }) + '</div></div>';
      sec.querySelector('form').addEventListener('submit', e => { e.preventDefault(); const f = e.target; if (!SP.validate(f)) return; /* Integration point: POST /api/leads (type=configuration, payload=configuration code + items) */ f.outerHTML = SP.done(t('cfg.done'), t('f.okD'), '#' + SP.ref('CFG')); });
      sec.querySelectorAll('form').forEach(f => f.removeAttribute('data-lead'));
      sec.scrollIntoView({ behavior: 'smooth' });
    }
    return {
      title: t('cfg.title') + ' ' + m0.name, html,
      bind(root) {
        root.querySelectorAll('[data-goto]').forEach(b => b.addEventListener('click', () => { s.step = +b.dataset.goto; draw(root); }));
        root.querySelector('[data-prev]').addEventListener('click', () => { if (s.step > 1) { s.step--; draw(root); } });
        root.querySelector('[data-next]').addEventListener('click', () => { if (s.step < 5) { s.step++; draw(root); } else summary(root); });
        draw(root);
      }
    };
  };

  /* ================================================================ STOCK */
  SP.pages.stock = function () {
    const st = { loc: 'all', model: SP.param('m') || '', fuel: '', status: '', max: '', sort: 'rec' };
    const sel = (k, lab, opts) => '<div class="field"><label for="s-' + k + '">' + lab + '</label><select id="s-' + k + '" data-s="' + k + '"><option value="">' + t('st.any') + '</option>' + opts.map(o => '<option value="' + o[0] + '"' + (st[k] === String(o[0]) ? ' selected' : '') + '>' + o[1] + '</option>').join('') + '</select></div>';
    const html = SP.phead(t('st.eyebrow'), t('st.title'), t('st.sub')) + '<section class="section section--tight"><div class="container">' +
      '<div class="stbar"><div class="seg seg--sm" role="tablist">' + [['all', t('f.all')]].concat(SP.LOCATIONS.map(l => [l.id, L(l.city)])).map(b => '<button role="tab" aria-selected="' + (b[0] === st.loc) + '" data-b="' + b[0] + '">' + b[1] + '</button>').join('') + '</div>' +
      '<div class="stbar__r"><span class="muted" data-count></span><button class="btn btn--line btn--sm fbtn" data-fo>' + I('sliders') + t('st.filters') + '</button><label class="sr" for="s-sort">' + t('st.sort') + '</label><select id="s-sort" class="sel-sm" data-s="sort"><option value="rec">' + t('st.rec') + '</option><option value="asc">' + t('st.asc') + '</option><option value="desc">' + t('st.desc') + '</option></select></div></div>' +
      '<div class="stock"><aside class="filters" data-filters><div class="filters__h"><strong>' + t('st.filters') + '</strong><button class="link link--sm" data-reset>' + t('st.reset') + '</button><button class="filters__x" data-fc aria-label="' + t('nav.close') + '">' + I('x') + '</button></div>' +
      '<div class="field"><label for="s-model">' + t('st.model') + '</label><select id="s-model" data-s="model"><option value="">' + t('st.any') + '</option>' + SP.FAMILIES.map(f => '<optgroup label="' + f.name + '">' + famModels(f).map(m => '<option value="' + m.id + '"' + (m.id === st.model ? ' selected' : '') + '>' + m.name + '</option>').join('') + '</optgroup>').join('') + '</select></div>' +
      sel('fuel', t('st.fuel'), ['ice', 'hev', 'phev'].map(f => [f, t('f.' + f)])) + sel('status', t('st.status'), ['stock', 'transit', 'demo'].map(s => [s, t('status.' + s)])) +
      sel('max', t('st.max'), [25000, 30000, 35000, 40000, 45000].map(p => [p, eur(p)])) + '<button class="btn btn--ink btn--block filters__go" data-fc>' + t('st.show') + '</button></aside><div class="grid3" data-res></div></div></div></section>';
    function apply(root) {
      let l = SP.STOCK.filter(v => (st.loc === 'all' || v.location === st.loc) && (!st.model || v.modelId === st.model) && (!st.fuel || v.model.fuel === st.fuel) && (!st.status || v.status === st.status) && (!st.max || v.price <= +st.max));
      if (st.sort === 'asc') l.sort((a, b) => a.price - b.price); if (st.sort === 'desc') l.sort((a, b) => b.price - a.price);
      root.querySelector('[data-count]').textContent = l.length + ' ' + t('st.results');
      root.querySelector('[data-res]').innerHTML = l.length ? l.map(SP.stockCard).join('') : '<div class="empty">' + I('car') + '<p>' + t('st.none') + '</p><a class="btn btn--ink" href="configurator.html">' + t('nav.config') + '</a></div>';
    }
    return {
      title: t('st.title'), html,
      bind(root) {
        root.querySelectorAll('[data-b]').forEach(b => b.addEventListener('click', () => { st.loc = b.dataset.b; root.querySelectorAll('[data-b]').forEach(x => x.setAttribute('aria-selected', String(x === b))); apply(root); }));
        root.addEventListener('change', e => { const k = e.target.dataset && e.target.dataset.s; if (k) { st[k] = e.target.value; apply(root); } });
        root.querySelector('[data-reset]').addEventListener('click', () => { ['model', 'fuel', 'status', 'max'].forEach(k => { st[k] = ''; root.querySelector('[data-s="' + k + '"]').value = ''; }); apply(root); });
        const f = root.querySelector('[data-filters]');
        root.querySelector('[data-fo]').addEventListener('click', () => { f.classList.add('is-open'); document.body.classList.add('noscroll'); });
        root.querySelectorAll('[data-fc]').forEach(b => b.addEventListener('click', () => { f.classList.remove('is-open'); document.body.classList.remove('noscroll'); }));
        apply(root);
      }
    };
  };

  /* ================================================================ VEHICLE (stock car + full version sheet from importer data) */
  SP.pages.vehicle = function () {
    const v = SP.STOCK.find(x => x.id === SP.param('id')) || SP.STOCK[0];
    const m = v.model, vi = m.versions.indexOf(v.version), adv = SP.TEAM[v.advisor], loc = SP.LOCATIONS.find(l => l.id === v.location);
    const gal = JSON.stringify(v.gallery);
    const facts = [['v.version', v.version.name], ['st.fuel', L(SP.FUEL[m.fuel])], ['v.year', v.year], ['v.km', SP.num(v.km) + ' km'], ['v.color', L(v.color.name) + ' (' + v.color.code + ')'], ['v.int', L(v.interior.name)], ['v.vin', v.vin.slice(0, 11) + '••••••'], ['v.loc', L(loc.short)]];
    const html = '<div class="container crumbs"><a class="link link--sm" href="stoc.html">' + I('arrowL') + t('v.back') + '</a></div>' +
      '<section class="section section--tight"><div class="container vd"><div class="vd__g"><a class="vd__main' + (m.photoColors ? ' vd__main--photo' : '') + '" href="#" data-lightbox=\'' + gal + '\' data-index="0">' + SP.statusChip(v.status) + '<img data-main src="' + v.gallery[0] + '" alt="' + esc(m.name) + '"' + (m.photoColors ? ' class="is-photo"' : '') + '></a>' +
      '<div class="vd__th">' + v.gallery.map((g, i) => '<button type="button" data-th="' + i + '"' + (i ? '' : ' class="is-on"') + '><img src="' + g + '" alt="" loading="lazy"></button>').join('') + '</div></div>' +
      '<div class="vd__i">' + SP.logo('chery', 'logo--sm') + '<h1 class="vd__t">' + m.name + ' <span>' + v.version.name + '</span></h1><p class="muted">' + L(v.version.engine) + '</p>' +
      '<div class="pbox">' + (v.priceList > v.price ? '<div><span>' + t('c.list') + '</span><s>' + eur(v.priceList) + '</s></div>' : '') + '<div class="pbox__m"><span>' + (SP.lang === 'en' ? 'Price' : 'Preț') + '</span><strong>' + eur(v.price) + '</strong></div><div><span>' + t('c.vatIncl') + '</span><span>' + t('v.rate') + ' ' + eur(SP.monthly(v.price)) + '/' + t('c.month') + '</span></div>' +
      (v.extraDiscount ? '<p class="pbox__d">' + I('tag') + t('v.discount') + ': −' + eur(v.extraDiscount) + '</p>' : '') + '</div>' +
      '<dl class="facts">' + facts.map(f => '<div><dt>' + t(f[0]) + '</dt><dd>' + f[1] + '</dd></div>').join('') + '</dl>' +
      '<div class="btnrow"><a class="btn btn--ink" href="#oferta">' + t('c.offer') + '</a><a class="btn btn--line" href="#test-drive">' + t('c.testdrive') + '</a></div>' +
      '<div class="adv"><span class="avatar">' + adv.name.split(' ').map(x => x[0]).join('') + '</span><div><small>' + t('v.advisor') + '</small><strong>' + adv.name + '</strong><span>' + L(adv.role) + '</span></div><a class="iconbtn" href="tel:' + adv.phone.replace(/\s/g, '') + '" aria-label="' + t('c.call') + '">' + I('phone') + '</a><a class="iconbtn" href="https://wa.me/' + SP.DEALER.whatsapp.replace(/\D/g, '') + '" target="_blank" rel="noopener" aria-label="WhatsApp">' + I('whatsapp') + '</a></div></div></div></section>' +
      '<section class="section section--soft"><div class="container">' + SP.shead(t('v.fromSP'), m.name + ' ' + v.version.name, L(m.intro)) +
      '<div class="vsheet"><div><h3 class="h4">' + t('m.highlights') + '</h3><ul class="ticks">' + L(v.version.hi).map(h => '<li>' + I('check') + h + '</li>').join('') + '</ul><h3 class="h4">' + t('m.specs') + '</h3><dl class="specs specs--1">' + SP.specRows(m) + '</dl><p class="note">' + t('m.consNote') + '</p>' +
      '<a class="doc" href="assets/docs/' + m.pdf + '" target="_blank" rel="noopener">' + I('doc') + '<span><strong>' + t('c.priceList') + ' ' + m.name + '</strong><small>PDF · Chery Romania</small></span>' + I('download') + '</a></div>' +
      '<div><h3 class="h4">' + t('m.equipment') + ' · ' + v.version.name + '</h3>' + SP.equipTable(m, vi) + '</div></div></div></section>' +
      '<section class="section"><div class="container forms2"><div class="panel" id="oferta"><h2 class="h4">' + t('v.reqOffer') + '</h2>' + SP.leadForm({ type: 'offer', ctx: v.id, message: true }) + '</div><div class="panel" id="test-drive"><h2 class="h4">' + t('v.td') + '</h2>' + SP.leadForm({ type: 'testdrive', ctx: v.id }) + '</div></div></section>' +
      '<section class="section section--soft"><div class="container">' + SP.shead(t('home.stock'), t('v.similar'), null, [t('v.configure'), 'configurator.html?m=' + m.id]) + '<div class="grid4">' + SP.STOCK.filter(x => x.id !== v.id && (x.modelId === v.modelId || x.model.family === m.family)).concat(SP.STOCK.filter(x => x.id !== v.id && x.model.family !== m.family)).slice(0, 4).map(SP.stockCard).join('') + '</div></div></section>';
    return {
      title: m.name + ' ' + v.version.name, html,
      bind(root) { const main = root.querySelector('[data-main]'), a = root.querySelector('.vd__main'); root.querySelectorAll('[data-th]').forEach(b => b.addEventListener('click', () => { main.src = v.gallery[+b.dataset.th]; a.dataset.index = b.dataset.th; main.classList.toggle('is-photo', +b.dataset.th > 0 || !!m.photoColors); root.querySelectorAll('[data-th]').forEach(x => x.classList.toggle('is-on', x === b)); })); }
    };
  };

  /* ================================================================ REQUEST: test drive / quote / call me */
  SP.pages.request = function () {
    const map = { 'test-drive': 'td', oferta: 'offer', suna: 'call' };
    let type = map[SP.param('tip')] || 'offer'; const mid = SP.param('m') || 't7csh';
    const tabs = [['td', 'req.td', 'wheel'], ['offer', 'req.offer', 'doc'], ['call', 'req.call', 'phone']];
    const html = SP.phead(t('nav.contact'), t('req.title'), t('req.sub')) + '<section class="section section--tight"><div class="container req">' +
      '<div><div class="rtabs" role="tablist">' + tabs.map(x => '<button role="tab" aria-selected="' + (x[0] === type) + '" data-rt="' + x[0] + '">' + I(x[2]) + t(x[1]) + '</button>').join('') + '</div><div class="panel" data-rf></div></div>' +
      '<aside class="req__a" data-ra></aside></div></section>';
    return {
      title: t('req.title'), html,
      bind(root) {
        let model = mid;
        const draw = () => {
          root.querySelector('[data-rf]').innerHTML = SP.leadForm({ type, model, when: type === 'call', message: type !== 'call', submit: type === 'td' ? t('req.td') : type === 'call' ? t('req.call') : t('req.offer') });
          const f = root.querySelector('[data-rf] form'); f.removeAttribute('data-lead');
          const loc = '<div class="field field--full"><label for="rq-loc">' + t('f.loc') + '</label><select id="rq-loc" name="location">' + SP.LOCATIONS.map(l => '<option value="' + l.id + '">' + L(l.name) + ' · ' + l.address + '</option>').join('') + '</select></div>';
          f.querySelector('.grid-f').insertAdjacentHTML('beforeend', loc);
          const s = f.querySelector('[name="model"]'); if (s) s.addEventListener('change', () => { model = s.value; aside(); });
          f.addEventListener('submit', e => { e.preventDefault(); if (!SP.validate(f)) return; /* Integration point: POST /api/leads (location → SP branch) */ f.outerHTML = SP.done(t('f.ok'), t('f.okD'), '#' + SP.ref('WEB')); });
          aside();
        };
        const aside = () => { const m = SP.model(model) || SP.MODELS[0]; root.querySelector('[data-ra]').innerHTML = '<div class="rcard"><img src="' + m.img('studio') + '" alt=""' + (m.photoColors ? ' class="is-photo"' : '') + '><div><p class="kicker">CHERY · ' + m.fam.name + '</p><h3>' + m.name + '</h3><p>' + L(m.tagline) + '</p><p class="rcard__p">' + t('c.from') + ' <strong>' + eur(m.from) + '</strong> ' + t('c.vat') + '</p><a class="link link--sm" href="model.html?m=' + m.id + '">' + t('c.explore') + I('arrow') + '</a></div></div>' +
          '<ul class="contactl"><li>' + I('phone') + '<span><strong>' + SP.DEALER.phone + '</strong>' + t('ct.sales') + '</span></li><li>' + I('pin') + '<span><strong>3</strong>' + (SP.lang === 'en' ? 'showrooms: Bucharest, Cluj, Constanța' : 'showroom-uri: București, Cluj, Constanța') + '</span></li><li>' + I('shield') + '<span><strong>7 ' + (SP.lang === 'en' ? 'years' : 'ani') + '</strong>' + t('nav.warranty') + ' CHERY</span></li></ul>'; };
        root.querySelectorAll('[data-rt]').forEach(b => b.addEventListener('click', () => { type = b.dataset.rt; root.querySelectorAll('[data-rt]').forEach(x => x.setAttribute('aria-selected', String(x === b))); draw(); }));
        draw();
      }
    };
  };

  /* ================================================================ OFFERS */
  SP.pages.offers = function () {
    const f = SP.OFFERS.find(o => o.featured), cats = ['all', 'auto', 'finance', 'service'];
    const html = SP.phead(t('nav.offers'), t('of.title'), t('of.sub')) + '<section class="section section--tight"><div class="container">' +
      '<article class="feat"><img src="' + f.img + '" alt=""><div class="feat__b"><p class="eyebrow">' + t('of.featured') + '</p><h2 class="h2">' + L(f.title) + '</h2><p class="lead">' + L(f.lead) + '</p><div class="btnrow"><a class="btn btn--ink" href="oferta.html?id=' + f.id + '">' + t('of.apply') + '</a><small class="muted">' + t('c.valid') + ' ' + SP.date(f.valid) + '</small></div></div></article>' +
      '<div class="fchips" role="tablist">' + cats.map((c, i) => '<button role="tab" aria-selected="' + (i === 0) + '" data-oc="' + c + '">' + t('of.cat.' + c) + '</button>').join('') + '<a class="fchips__sw" href="preturi.html">' + t('nav.prices') + I('arrow') + '</a></div><div class="grid3" data-ol>' + SP.OFFERS.map(SP.offerCard).join('') + '</div></div></section>';
    return { title: t('of.title'), html, bind(root) { root.querySelectorAll('[data-oc]').forEach(b => b.addEventListener('click', () => { root.querySelectorAll('[data-oc]').forEach(x => x.setAttribute('aria-selected', String(x === b))); root.querySelector('[data-ol]').innerHTML = SP.OFFERS.filter(o => b.dataset.oc === 'all' || o.cat === b.dataset.oc).map(SP.offerCard).join(''); })); } };
  };
  SP.pages.offer = function () {
    const o = SP.OFFERS.find(x => x.id === SP.param('id')) || SP.OFFERS[0], m = o.model ? SP.model(o.model) : null;
    const html = '<section class="ohero"><img src="' + o.img + '" alt=""><div class="container ohero__in"><a class="link link--sm link--w" href="oferte.html">' + I('arrowL') + t('of.title') + '</a><span class="chip chip--glass">' + esc(o.tag) + '</span><h1 class="h1">' + L(o.title) + '</h1><p class="lead">' + L(o.lead) + '</p></div></section>' +
      '<section class="section"><div class="container req"><div class="panel"><h2 class="h4">' + t('of.apply') + '</h2>' + SP.leadForm({ type: 'offer', model: o.model || 't7csh', ctx: o.id, message: true }) + '</div><aside class="req__a">' + (m ? '<div class="rcard"><img src="' + m.img('studio') + '" alt=""' + (m.photoColors ? ' class="is-photo"' : '') + '><div><h3>' + m.name + '</h3><p>' + L(m.tagline) + '</p><a class="link link--sm" href="model.html?m=' + m.id + '">' + t('c.explore') + I('arrow') + '</a></div></div>' : '') + '<p class="note">' + t('of.terms') + ' ' + t('c.valid') + ' ' + SP.date(o.valid) + '.</p></aside></div></section>';
    return { title: L(o.title), html };
  };

  /* ================================================================ PRICES (all versions, like the importer “Prețuri” page) */
  SP.pages.prices = function () {
    const html = SP.phead(t('nav.offers'), t('pr.title'), t('pr.sub')) + '<section class="section section--tight"><div class="container">' +
      SP.FAMILIES.map(f => '<div class="pfam"><h2 class="h3">' + f.name + '</h2>' + famModels(f).map(m => '<article class="prow"><a class="prow__img' + (m.photoColors ? ' prow__img--photo' : '') + '" href="model.html?m=' + m.id + '"><img src="' + m.img('studio') + '" alt="' + m.name + '" loading="lazy"></a>' +
        '<div class="prow__b"><div class="prow__h"><div><h3><a href="model.html?m=' + m.id + '">' + m.name + '</a></h3>' + fuelOf(m) + '</div><div class="btnrow"><a class="btn btn--ink btn--sm" href="configurator.html?m=' + m.id + '">' + t('c.configure') + '</a><a class="btn btn--line btn--sm" href="assets/docs/' + m.pdf + '" target="_blank" rel="noopener">' + I('download') + 'PDF</a></div></div>' +
        '<div class="tbl-wrap"><table class="tbl ptbl"><thead><tr><th>' + t('pr.version') + '</th><th>' + t('pr.engine') + '</th><th>' + t('pr.code') + '</th><th class="num">' + t('pr.net') + '</th><th class="num">' + t('pr.gross') + '</th></tr></thead><tbody>' +
        m.versions.map(v => '<tr><td><strong>' + v.name + '</strong></td><td>' + L(v.engine) + '</td><td><code>' + v.code + '</code></td><td class="num">' + eur(v.net) + '</td><td class="num"><strong>' + eur(v.list) + '</strong></td></tr>').join('') + '</tbody></table></div>' +
        '<p class="prow__paint">' + t('pr.paint') + ': ' + m.colors.filter(c => c.price).map(c => L(c.name)).join(', ') + ' · +' + eur(m.colors.find(c => c.price).price) + ' · ' + t('m.colorStd') + ': ' + L(m.colors[0].name) + '</p></div></article>').join('') + '</div>').join('') +
      '<p class="note">' + t('pr.note') + ' ' + t('m.disclaimer') + ' 2026.</p></div></section>';
    return { title: t('pr.title'), html };
  };

  /* ================================================================ TECH — Chery Super Hybrid */
  SP.pages.tech = function () {
    const csh = SP.MODELS.filter(m => m.fuel === 'phev'), hev = SP.MODELS.filter(m => m.fuel === 'hev');
    const en = SP.lang === 'en';
    const parts = [['bolt', en ? 'Dedicated 1.5 TGDI engine' : 'Motor 1.5 TGDI dedicat', en ? 'A turbo petrol engine tuned for hybrid use, working at its most efficient point most of the time.' : 'Motor turbo pe benzină optimizat pentru hibridizare, care funcționează cel mai des în zona de eficiență maximă.'],
      ['sliders', en ? 'DHT hybrid transmission' : 'Transmisie hibridă DHT', en ? 'The Dedicated Hybrid Transmission switches automatically between electric, series and parallel modes. 3DHT on TIGGO 9 adds a second motor and all-wheel drive.' : 'Transmisia dedicată hibrid (DHT) comută automat între modurile electric, serie și paralel. 3DHT pe TIGGO 9 adaugă un al doilea motor și tracțiune integrală.'],
      ['shield', en ? 'Battery built to last' : 'Baterie gândită să dureze', en ? '18.3 kWh LiFePO4 on TIGGO 7 and 8 CSH, 34.46 kWh NCM on TIGGO 9 CSH, covered by an 8-year or 160,000 km warranty.' : '18,3 kWh LiFePO4 pe TIGGO 7 și 8 CSH, 34,46 kWh NCM pe TIGGO 9 CSH, cu garanție de 8 ani sau 160.000 km.']];
    const html = '<section class="bhero"><img src="assets/img/t8csh/hero.webp" alt="" fetchpriority="high"><div class="container bhero__in"><p class="eyebrow eyebrow--w">' + t('nav.tech') + '</p><h1 class="h1">' + t('tc.title') + '</h1><p>' + t('tc.sub') + '</p><span class="chip chip--glass">CSH · HEV</span></div></section>' +
      '<section class="section"><div class="container"><div class="local"><div><p class="eyebrow">' + (en ? 'How it works' : 'Cum funcționează') + '</p><h2 class="h2">' + (en ? 'Electric every day. Petrol when you travel.' : 'Electric în fiecare zi. Benzină când pleci la drum.') + '</h2></div><p class="lead">' + (en ? 'Charge at home or at a DC station and most daily trips are fully electric. On long journeys the petrol engine takes over, with no range anxiety. EV and HEV modes let you choose.' : 'Încarci acasă sau la o stație DC și majoritatea drumurilor zilnice sunt 100% electrice. La drum lung preia motorul pe benzină, fără grija autonomiei. Modurile EV și HEV îți lasă alegerea.') + '</p></div>' +
      '<div class="grid3 tcards">' + parts.map(p => '<div class="tcard">' + I(p[0]) + '<h3>' + p[1] + '</h3><p>' + p[2] + '</p></div>').join('') + '</div></div></section>' +
      '<section class="section section--soft"><div class="container">' + SP.shead(en ? 'Compare' : 'Compară', en ? 'Chery Super Hybrid models' : 'Modelele Chery Super Hybrid', null, [t('nav.prices'), 'preturi.html']) +
      '<div class="tbl-wrap"><table class="tbl ctbl"><thead><tr><th></th>' + csh.map(m => '<th><a href="model.html?m=' + m.id + '">' + m.name + '</a></th>').join('') + '</tr></thead><tbody>' +
      ['sysPower', 'drive', 'evRange', 'battery', 'charge', 'co2', 'seats'].map(k => '<tr><th>' + L(SP.SPEC_LABELS[k]) + '</th>' + csh.map(m => '<td>' + (m.specs[k] ? L(m.specs[k]) : '—') + '</td>').join('') + '</tr>').join('') +
      '<tr><th>' + t('c.from') + '</th>' + csh.map(m => '<td><strong>' + eur(m.from) + '</strong></td>').join('') + '</tr></tbody></table></div><p class="note">' + t('m.consNote') + '</p></div></section>' +
      '<section class="section"><div class="container">' + SP.shead(en ? 'No plug needed' : 'Fără priză', en ? 'Full hybrid (HEV)' : 'Full hybrid (HEV)', en ? 'TIGGO 4 HEV and TIGGO 7 HEV charge themselves while driving and braking.' : 'TIGGO 4 HEV și TIGGO 7 HEV se încarcă singure, din mers și la frânare.') + '<div class="grid2">' + hev.map(SP.modelCard).join('') + '</div></div></section>' +
      '<section class="section section--sand"><div class="container cta"><h2 class="h2">' + (en ? 'Feel the difference on a test drive' : 'Simte diferența la un test drive') + '</h2><p class="lead">' + (en ? 'Available in Bucharest, Cluj and Constanța.' : 'Disponibil în București, Cluj și Constanța.') + '</p><div class="btnrow btnrow--c"><a class="btn btn--ink" href="solicita.html?tip=test-drive&m=t8csh">' + t('c.testdrive') + '</a><a class="btn btn--line" href="configurator.html?m=t7csh">' + t('c.configure') + '</a></div></div></section>';
    return { title: t('tc.title'), html };
  };
})();
