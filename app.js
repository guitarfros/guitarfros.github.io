(() => {
  const $ = (id) => document.getElementById(id);
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const groupOf = (id) => SITE.groups.find((g) => g.id === id);
  const OS = [
    { key: "linux", label: "LINUX",  suffix: "linux" },
    { key: "mac",   label: "MacOS",  suffix: "mac" },
    { key: "win",   label: "WIN",    suffix: "win" },
  ];

  const LANGS = ["gl", "es", "en"];
  function initialLang() {
    try { const s = localStorage.getItem("gf-lang"); if (LANGS.includes(s)) return s; } catch (e) {}
    const n = (navigator.language || "").slice(0, 2).toLowerCase();
    return LANGS.includes(n) ? n : "en";
  }
  const state = { group: (SITE.defaultGroup && groupOf(SITE.defaultGroup)) ? SITE.defaultGroup : SITE.groups[0].id, index: 0, lang: initialLang() };
  let swipedAt = 0;      // evita que un deslizamento conte tamén como clic
  let lastFocus = null;
  // L: texto simple ou {gl,es,en}  ·  T: texto fixo da interface
  const L = (v) => (v && typeof v === "object") ? (v[state.lang] || v.gl || Object.values(v)[0] || "") : (v || "");
  const T = (k) => (I18N[state.lang] && I18N[state.lang][k]) || I18N.gl[k] || k;

  function applyStatic() {
    document.documentElement.lang = state.lang;
    document.title = T("title");
    const m = document.querySelector('meta[name="description"]'); if (m) m.content = T("metaDesc");
    document.querySelectorAll("[data-i18n]").forEach((e) => { e.textContent = T(e.dataset.i18n); });
    document.querySelectorAll("[data-i18n-aria]").forEach((e) => e.setAttribute("aria-label", T(e.dataset.i18nAria)));
    document.querySelectorAll("[data-i18n-alt]").forEach((e) => e.setAttribute("alt", T(e.dataset.i18nAlt)));
    document.querySelectorAll(".lang [data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)));
  }
  function setLang(l) {
    state.lang = l;
    try { localStorage.setItem("gf-lang", l); } catch (e) {}
    applyStatic();
    renderAll(true);
  }
  const list = () => PLUGINS.filter((p) => p.group === state.group);

  /* ---------- chapa plateada xerada (cando non hai imaxe) ---------- */
  function hash(str) { let h = 0; for (const c of str) h = (h * 31 + c.charCodeAt(0)) >>> 0; return h; }

  function faceplate(p) {
    const g = groupOf(p.group);
    const h = hash(p.id);
    const knobs = 3 + (h % 3);               // 3 a 5 potenciómetros
    const gap = 320 / knobs;
    let k = "";
    for (let i = 0; i < knobs; i++) {
      const cx = 40 + gap * (i + 0.5);
      const ang = -130 + ((h >> (i * 3)) % 7) * 43;    // posición distinta por knob
      k += `<g transform="translate(${cx} 218)">
        <circle r="24" fill="url(#kn${p.id})" stroke="#1d1e20" stroke-width="2"/>
        <circle r="17" fill="none" stroke="rgba(255,255,255,.18)" stroke-width="1"/>
        <line x1="0" y1="-5" x2="0" y2="-20" stroke="#f1ebd8" stroke-width="3" stroke-linecap="round" transform="rotate(${ang})"/>
      </g>`;
    }
    const long = p.name.length > 12;
    return `<svg viewBox="0 0 400 300" role="img" aria-label="${esc(g.brand + " " + p.name)}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pl${p.id}" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#eceeef"/><stop offset=".5" stop-color="#c3c6c9"/><stop offset="1" stop-color="#a9adb1"/>
        </linearGradient>
        <radialGradient id="kn${p.id}" cx=".35" cy=".3" r=".9">
          <stop offset="0" stop-color="#6a6d71"/><stop offset="1" stop-color="#1f2022"/>
        </radialGradient>
      </defs>
      <filter id="wn${p.id}" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="4" seed="${h % 40}" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 .5  0 0 0 0 .24  0 0 0 0 .07  3 0 0 0 -1.7"/></filter>
      <filter id="bl${p.id}"><feGaussianBlur stdDeviation="9"/></filter>
      <mask id="mk${p.id}"><rect width="400" height="300" fill="#000"/><rect x="4" y="4" width="392" height="292" rx="10" fill="none" stroke="#fff" stroke-width="40" filter="url(#bl${p.id})"/></mask>
      <rect x="4" y="4" width="392" height="292" rx="10" fill="url(#pl${p.id})" stroke="#6d7074" stroke-width="3"/>
      <rect x="4" y="4" width="392" height="292" rx="10" filter="url(#wn${p.id})" mask="url(#mk${p.id})" style="mix-blend-mode:multiply"/>
      <rect x="14" y="14" width="372" height="272" rx="6" fill="none" stroke="rgba(0,0,0,.25)" stroke-width="1.5"/>
      <g fill="#8e9296" stroke="#4a4c4f" stroke-width="1.2">
        <circle cx="28" cy="28" r="7"/><circle cx="372" cy="28" r="7"/><circle cx="28" cy="272" r="7"/><circle cx="372" cy="272" r="7"/>
      </g>
      <g stroke="#3b3d40" stroke-width="2"><line x1="24" y1="31" x2="32" y2="25"/><line x1="368" y1="25" x2="376" y2="31"/><line x1="24" y1="275" x2="32" y2="269"/><line x1="368" y1="269" x2="376" y2="275"/></g>
      <text x="200" y="66" text-anchor="middle" font-family="'Barlow Condensed',sans-serif" font-weight="700" font-size="17" letter-spacing="4" fill="#3a3c3f">${esc(g.brand.toUpperCase())}</text>
      <text x="200" y="124" text-anchor="middle" font-family="'Alfa Slab One',serif" font-size="${long ? 34 : 46}" fill="#1b1c1e" stroke="rgba(255,255,255,.7)" stroke-width=".6" paint-order="stroke">${esc(p.name)}</text>
      <line x1="60" y1="150" x2="340" y2="150" stroke="rgba(0,0,0,.3)" stroke-width="1.5"/>
      <line x1="60" y1="152" x2="340" y2="152" stroke="rgba(255,255,255,.7)" stroke-width="1"/>
      <text x="200" y="176" text-anchor="middle" font-family="'Barlow Condensed',sans-serif" font-weight="600" font-size="16" letter-spacing="3" fill="#4a4c4f">${esc(L(p.tag).toUpperCase())}</text>
      ${p.group === "apps" ? "" : k}
      ${p.group === "apps" ? `<g transform="translate(200 232)"><circle r="26" fill="#f1ebd8" stroke="#1b1c1e" stroke-width="3"/><text y="9" text-anchor="middle" font-family="'Alfa Slab One',serif" font-size="26" fill="#1b1c1e">GF</text></g>` : ""}
      <circle cx="356" cy="58" r="7" fill="${g.led}" stroke="#2a2b2d" stroke-width="2"/>
      <circle cx="354" cy="56" r="2.4" fill="rgba(255,255,255,.75)"/>
    </svg>`;
  }

  // Espazo para a imaxe: usa p.image, ou busca automaticamente assets/plugins/<id>.png|jpg|webp.
  // Se non hai imaxe, queda a chapa plateada xerada.
  function media(p) {
    const wrap = document.createElement("div");
    wrap.className = "media";
    wrap.innerHTML = faceplate(p);
    const candidates = p.image
      ? [p.image]
      : ["png", "jpg", "jpeg", "webp"].map((e) => `assets/plugins/${p.id}.${e}`);
    const tryNext = (i) => {
      if (i >= candidates.length) return;
      const img = new Image();
      img.alt = `${groupOf(p.group).brand} ${p.name}`;
      img.onload = () => { wrap.innerHTML = ""; wrap.appendChild(img); };
      img.onerror = () => tryNext(i + 1);
      img.src = candidates[i];
    };
    tryNext(0);
    return wrap;
  }

  /* ---------- grupos ---------- */
  function renderGroups() {
    const nav = $("groups");
    nav.innerHTML = "";
    SITE.groups.forEach((g) => {
      const b = document.createElement("button");
      b.className = "switch";
      b.type = "button";
      b.setAttribute("aria-pressed", String(g.id === state.group));
      b.style.setProperty("--led", g.led);
      b.innerHTML = `<i class="led"></i><span>${esc(L(g.title))}</span>`;
      b.onclick = () => { state.group = g.id; state.index = 0; renderAll(true); };
      nav.appendChild(b);
    });
  }

  /* ---------- carrusel ---------- */
  function renderTrack(rebuild) {
    const items = list();
    const track = $("track");
    if (rebuild) {
      track.innerHTML = "";
      items.forEach((p, i) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "card";
        card.setAttribute("aria-label", `${p.name}`);
        card.appendChild(media(p));
        card.onclick = () => {
          if (Date.now() - swipedAt < 400) return;
          if (i === state.index) openLightbox(list()[i]);   // o central amplíase
          else go(i);
        };
        track.appendChild(card);
      });
    }
    [...track.children].forEach((card, i) => {
      // posición circular: despois do último vén o primeiro
      const n = items.length;
      let o = (((i - state.index) % n) + n) % n;
      if (o > n / 2) o -= n;
      const prevO = card.dataset.o === undefined ? null : Number(card.dataset.o);
      const jump = prevO !== null && Math.abs(o - prevO) > 1;   // salta dun extremo ao outro
      if (jump) card.style.transition = "none";                 // sen animación (non cruza a pantalla)
      card.dataset.o = o;
      card.style.setProperty("--o", o);
      card.style.setProperty("--abs", Math.min(Math.abs(o), 3));
      card.style.zIndex = String(10 - Math.abs(o));
      card.classList.toggle("active", o === 0);
      card.classList.toggle("far", Math.abs(o) > 2);
      card.tabIndex = o === 0 ? 0 : -1;
      card.setAttribute("aria-current", o === 0 ? "true" : "false");
      card.setAttribute("aria-label", o === 0 ? `${items[i].name} – ${T("zoom")}` : items[i].name);
      card.title = o === 0 ? T("zoom") : "";
      if (jump) { void card.offsetWidth; card.style.transition = ""; }
    });
    $("prev").disabled = items.length < 2;
    $("next").disabled = items.length < 2;

    const dots = $("dots");
    dots.innerHTML = "";
    items.forEach((p, i) => {
      const d = document.createElement("button");
      d.type = "button";
      d.className = "dot" + (i === state.index ? " on" : "");
      d.setAttribute("aria-label", p.name);
      d.onclick = () => go(i);
      dots.appendChild(d);
    });
  }

  /* ---------- detalle ---------- */
  function dlUrl(p, os) {
    const custom = p.downloads && p.downloads[os.key];
    if (custom === null) return null;                // marcado como non dispoñible
    if (custom) return custom;
    return SITE.releasesBase ? `${SITE.releasesBase}${p.id}-${os.suffix}.zip` : null;
  }

  function renderDetail() {
    const p = list()[state.index];
    if (!p) return;
    const g = groupOf(p.group);
    $("d-brand").textContent = g.brand;
    const nm = $("d-name");
    nm.textContent = "";
    if (p.readme) {                       // o nome leva ao README de GitHub
      const a = document.createElement("a");
      a.className = "name-link";
      a.href = p.readme; a.target = "_blank"; a.rel = "noopener";
      a.title = T("readme");
      a.textContent = p.name;
      nm.appendChild(a);
    } else {
      nm.textContent = p.name;
    }
    if (p.wip) {                          // selo EN CONSTRUCIÓN
      const b = document.createElement("span");
      b.className = "wip-badge";
      b.textContent = T("wip.title");
      nm.appendChild(b);
    }
    $("d-tag").textContent = L(p.tag);
    $("d-desc").textContent = L(p.description);
    const box = $("d-downloads");
    box.innerHTML = "";
    OS.forEach((os) => {
      const url = dlUrl(p, os);
      const a = document.createElement(url ? "a" : "span");
      a.className = "push" + (url ? "" : " off");
      a.innerHTML = `<small>${esc(url ? T("dl.for") : T("dl.soon"))}</small><b>${os.label}</b>`;
      if (url) { a.href = url; a.rel = "noopener"; }
      else { a.setAttribute("aria-disabled", "true"); a.title = T("dl.na"); }
      box.appendChild(a);
    });
  }

  function go(i) {
    const n = list().length;
    state.index = ((i % n) + n) % n;                          // carrusel continuo
    renderTrack(false);
    renderDetail();
  }

  function renderAll(rebuild) {
    renderGroups();
    renderTrack(rebuild);
    renderDetail();
  }

  const logo = document.querySelector(".hero-logo");
  logo.addEventListener("error", () => {
    const f = document.createElement("div");
    f.className = "hero-logo fallback";
    f.textContent = "GF";
    logo.replaceWith(f);
  });

  /* ---------- ventá flotante ---------- */
  function openLightbox(p) {
    const lb = $("lightbox");
    lastFocus = document.activeElement;
    const box = $("lb-media");
    box.innerHTML = "";
    box.appendChild(media(p));
    $("lb-cap").textContent = `${groupOf(p.group).brand} · ${p.name}`;
    lb.setAttribute("aria-label", p.name);
    lb.hidden = false;
    document.body.classList.add("lb-open");
    $("lb-close").focus();
  }
  function closeLightbox() {
    const lb = $("lightbox");
    if (lb.hidden) return;
    lb.hidden = true;
    document.body.classList.remove("lb-open");
    $("lb-media").innerHTML = "";
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $("lightbox").addEventListener("click", closeLightbox);
  document.addEventListener("keydown", (e) => {
    if ($("lightbox").hidden) return;
    if (e.key === "Escape") closeLightbox();
    else if (e.key === "Tab") { e.preventDefault(); $("lb-close").focus(); }
  });

  /* ---------- controis ---------- */
  document.querySelectorAll(".lang [data-lang]").forEach((b) => { b.onclick = () => setLang(b.dataset.lang); });
  $("prev").onclick = () => go(state.index - 1);
  $("next").onclick = () => go(state.index + 1);
  $("track").addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") { go(state.index - 1); e.preventDefault(); }
    if (e.key === "ArrowRight") { go(state.index + 1); e.preventDefault(); }
  });
  let x0 = null;
  $("track").addEventListener("pointerdown", (e) => { x0 = e.clientX; });
  window.addEventListener("pointerup", (e) => {
    if (x0 === null) return;
    const dx = e.clientX - x0; x0 = null;
    if (Math.abs(dx) > 50) { swipedAt = Date.now(); go(state.index + (dx < 0 ? 1 : -1)); }
  });

  /* ---------- inicio (admite enlaces tipo #studio/sf-tape-machine) ---------- */
  const [hg, hid] = location.hash.slice(1).split("/");
  if (groupOf(hg)) {
    state.group = hg;
    const idx = list().findIndex((p) => p.id === hid);
    if (idx >= 0) state.index = idx;
  }
  $("wip").hidden = !SITE.underConstruction;
  document.body.classList.toggle("has-wip", !!SITE.underConstruction);
  applyStatic();
  renderAll(true);
})();
