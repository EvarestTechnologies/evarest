// Shared behaviour for every mockup page.
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Intro: once per visit.
const intro = document.getElementById('intro');
if (intro) {
  let seen = false;
  try { seen = sessionStorage.getItem('ev-intro') === '1'; sessionStorage.setItem('ev-intro', '1'); } catch (e) { seen = true; }
  if (reduce || seen) intro.remove();
  else { setTimeout(() => intro.classList.add('lift'), 1000); setTimeout(() => intro.remove(), 1900); }
}

// Header turns solid on scroll.
const hdr = document.getElementById('hdr');
const solid = () => hdr.classList.toggle('solid', scrollY > 30);
addEventListener('scroll', solid, { passive: true }); solid();

// ZEYA chat plays in (home hero only).
const msgs = [...document.querySelectorAll('#chat .m')];
const typing = document.getElementById('typing');
if (msgs.length) {
  const start = intro && intro.isConnected ? 1200 : 300;
  const t = reduce ? [0, 0, 0, 0] : [start, start + 1000, start + 2400, start + 4100];
  msgs.forEach((m, i) => setTimeout(() => {
    if (i === 3 && typing) typing.classList.remove('show');
    m.classList.add('show');
    if (i === 2 && typing && !reduce) setTimeout(() => typing.classList.add('show'), 400);
  }, t[i]));
}

// Fade and curtain reveals. A fully clipped element never reports as visible, so watch its parent.
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll('.fade').forEach(el => io.observe(el));
const io2 = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('.reveal').forEach(r => r.classList.add('in')); io2.unobserve(e.target); } }), { threshold: .1 });
new Set([...document.querySelectorAll('.reveal')].map(r => r.parentElement)).forEach(p => io2.observe(p));

// Work index: an image follows the cursor (fine pointers only).
const follow = document.getElementById('follow'), ft = document.getElementById('followTxt');
if (follow && matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce) {
  document.querySelectorAll('.row').forEach(r => {
    r.addEventListener('mouseenter', () => {
      const img = document.getElementById('followImg');
      if (r.dataset.src) { img.src = r.dataset.src; img.hidden = false; ft.hidden = true; }
      else { img.hidden = true; ft.hidden = false; ft.textContent = r.dataset.img; }
      follow.classList.add('on');
    });
    r.addEventListener('mouseleave', () => follow.classList.remove('on'));
    r.addEventListener('mousemove', e => { follow.style.left = e.clientX + 'px'; follow.style.top = e.clientY + 'px'; });
  });
}

// Magnetic buttons.
if (!reduce) document.querySelectorAll('.magnetic').forEach(b => {
  b.addEventListener('mousemove', e => {
    const r = b.getBoundingClientRect();
    b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .3}px)`;
  });
  b.addEventListener('mouseleave', () => b.style.transform = '');
});

// Gentle parallax: photos drift slower than the page. Off for reduced motion and touch.
if (!reduce && matchMedia('(hover: hover)').matches) {
  const par = [...document.querySelectorAll('.par')];
  const tick = () => {
    par.forEach(el => {
      const box = el.parentElement.getBoundingClientRect();
      if (box.bottom < 0 || box.top > innerHeight) return;
      const shift = (box.top + box.height / 2 - innerHeight / 2) * -(+el.dataset.speed || .2);
      el.style.transform = `translate3d(0, ${shift.toFixed(1)}px, 0) scale(${(1 + (+el.dataset.speed || .2)).toFixed(2)})`;
    });
  };
  addEventListener('scroll', () => requestAnimationFrame(tick), { passive: true }); tick();
}

// Mobile menu.
const mb = document.getElementById('menuBtn'), dr = document.getElementById('drawer');
if (mb && dr) {
  mb.addEventListener('click', () => { dr.classList.add('open'); document.body.style.overflow = 'hidden'; });
  dr.querySelectorAll('a, .close').forEach(el => el.addEventListener('click', () => { dr.classList.remove('open'); document.body.style.overflow = ''; }));
}

// Road map: the road bends through each stop; labels sit outside each bend.
const road = document.getElementById('road');
if (road) {
  const stops = [...road.querySelectorAll('.stop')];
  const W = 1440, H = 420, top = 130, bottom = 300, n = stops.length;
  const pts = stops.map((s, i) => ({ x: 70 + i * ((W - 140) / (n - 1)), y: i % 2 ? bottom : top }));
  const half = (pts[1].x - pts[0].x) / 2;
  let d = `M ${pts[0].x - 50} ${pts[0].y} L ${pts[0].x} ${pts[0].y}`;
  for (let i = 1; i < n; i++) d += ` C ${pts[i - 1].x + half} ${pts[i - 1].y}, ${pts[i].x - half} ${pts[i].y}, ${pts[i].x} ${pts[i].y}`;
  d += ` L ${pts[n - 1].x + 50} ${pts[n - 1].y}`;
  road.querySelectorAll('path').forEach(p => p.setAttribute('d', d));
  const base = road.querySelector('.base'), done = road.querySelector('.done');
  const L = base.getTotalLength();
  const lenAt = x => { let lo = 0, hi = L; for (let k = 0; k < 30; k++) { const m = (lo + hi) / 2; if (base.getPointAtLength(m).x < x) lo = m; else hi = m; } return lo; };
  let nowLen = L;
  stops.forEach((s, i) => {
    s.style.left = (pts[i].x / W * 100) + '%';
    s.style.top = (pts[i].y / H * 100) + '%';
    s.querySelector('.pin').style.top = '-11px';
    const card = s.querySelector('.card');
    if (pts[i].y === top) card.style.bottom = '30px'; else card.style.top = '30px';
    if (s.classList.contains('now')) nowLen = lenAt(pts[i].x);
  });
  done.style.strokeDasharray = L;
  done.style.strokeDashoffset = L;
  const show = () => { done.style.strokeDashoffset = L - nowLen; };
  if (reduce) show(); else new IntersectionObserver((es, o) => es.forEach(e => { if (e.isIntersecting) { show(); o.disconnect(); } }), { threshold: .3 }).observe(road);
}
