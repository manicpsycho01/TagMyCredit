/* Explanation overlay.
   Each page provides <script type="application/json" id="explain-data"> with:
   { "kind": "Original site" | "Concept 1 · Ledger" ..., "title": "...", "summary": "...",
     "notes": { "<data-ex id>": { "title", "what", "terms": [[term, meaning]...], "why", "changed": [..] } } }
   and marks sections with data-ex="<id>". "changed" is optional (concepts only). */
(function () {
  var dataEl = document.getElementById('explain-data');
  if (!dataEl) return;
  var data = JSON.parse(dataEl.textContent);
  var PAGES = [
    ['original.html', 'Original'],
    ['concept-1-ledger.html', '1 · Ledger'],
    ['concept-2-signal.html', '2 · Signal'],
    ['concept-3-gulf.html', '3 · Gulf'],
    ['concept-4-gulf-merged.html', '4 · Merged']
  ];
  var here = location.pathname.split('/').pop();

  var secs = Array.prototype.filter.call(document.querySelectorAll('[data-ex]'), function (el) {
    return data.notes[el.getAttribute('data-ex')];
  });
  if (!secs.length) return;

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }

  var root = document.createElement('div');
  root.className = 'ex-root';
  root.innerHTML =
    '<aside class="ex-drawer" aria-label="Page explanation">' +
      '<div class="ex-head">' +
        '<div class="ex-kind"><span class="ex-badge">' + esc(data.kind) + '</span><button class="ex-x" type="button" data-ex-hide>Hide notes</button></div>' +
        '<p class="ex-title">' + esc(data.title) + '</p>' +
        '<p class="ex-sum">' + esc(data.summary) + '</p>' +
        '<nav class="ex-pages" aria-label="Compare pages">' + PAGES.map(function (p) {
          return '<a href="' + p[0] + '"' + (p[0] === here ? ' aria-current="page"' : '') + '>' + p[1] + '</a>';
        }).join('') + '</nav>' +
      '</div>' +
      '<div class="ex-body" aria-live="polite"></div>' +
      '<div class="ex-nav"><button type="button" data-ex-prev>← Previous</button><button type="button" data-ex-next>Next →</button></div>' +
    '</aside>' +
    '<button class="ex-open-btn" type="button" data-ex-show>Explain this page</button>';
  document.body.appendChild(root);
  var body = root.querySelector('.ex-body');

  var pins = secs.map(function (sec, i) {
    if (getComputedStyle(sec).position === 'static') sec.style.position = 'relative';
    var b = document.createElement('button');
    b.type = 'button';
    b.className = 'ex-pin';
    b.textContent = i + 1;
    b.setAttribute('aria-label', 'Explain: ' + data.notes[sec.getAttribute('data-ex')].title);
    b.addEventListener('click', function () { show(i, false); });
    sec.appendChild(b);
    return b;
  });

  var cur = -1, lock = 0;
  function render(i) {
    var n = data.notes[secs[i].getAttribute('data-ex')];
    var h = '<div><span class="ex-count">SECTION ' + (i + 1) + ' OF ' + secs.length + '</span><h3 class="ex-note-title">' + esc(n.title) + '</h3></div>';
    if (n.changed && n.changed.length) {
      h += '<div class="ex-block ex-changed"><h4>What changed vs. the original</h4><ul>' + n.changed.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>';
    }
    if (n.what) h += '<div class="ex-block"><h4>What this section does</h4><p>' + esc(n.what) + '</p></div>';
    if (n.terms && n.terms.length) {
      h += '<div class="ex-block"><h4>Terms</h4><dl class="ex-terms">' + n.terms.map(function (t) {
        return '<div><dt>' + esc(t[0]) + '</dt><dd>' + esc(t[1]) + '</dd></div>';
      }).join('') + '</dl></div>';
    }
    if (n.why) h += '<div class="ex-block"><h4>Why it’s built this way</h4><p>' + esc(n.why) + '</p></div>';
    if (n.issues && n.issues.length) {
      h += '<div class="ex-block ex-issues"><h4>Weak spots</h4><ul>' + n.issues.map(function (c) { return '<li>' + esc(c) + '</li>'; }).join('') + '</ul></div>';
    }
    body.innerHTML = h;
    body.scrollTop = 0;
  }
  function show(i, scroll) {
    if (i < 0 || i >= secs.length) return;
    if (cur > -1) { secs[cur].classList.remove('ex-active'); pins[cur].removeAttribute('aria-current'); }
    cur = i;
    secs[i].classList.add('ex-active');
    pins[i].setAttribute('aria-current', 'true');
    render(i);
    root.querySelector('[data-ex-prev]').disabled = i === 0;
    root.querySelector('[data-ex-next]').disabled = i === secs.length - 1;
    if (scroll) {
      lock = Date.now() + 900;
      secs[i].scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    }
  }

  function onScroll() {
    if (Date.now() < lock || !document.documentElement.classList.contains('ex-on')) return;
    var mark = window.innerHeight * 0.35, best = 0;
    secs.forEach(function (s, i) { if (s.getBoundingClientRect().top <= mark) best = i; });
    if (best !== cur) show(best, false);
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  function setOn(on) {
    document.documentElement.classList.toggle('ex-on', on);
    try { localStorage.setItem('tmc-explain', on ? '1' : '0'); } catch (e) {}
    if (on) { (root.querySelector('[data-ex-hide]')).focus({ preventScroll: true }); onScroll(); }
  }
  root.querySelector('[data-ex-hide]').addEventListener('click', function () { setOn(false); });
  root.querySelector('[data-ex-show]').addEventListener('click', function () { setOn(true); });
  root.querySelector('[data-ex-prev]').addEventListener('click', function () { show(cur - 1, true); });
  root.querySelector('[data-ex-next]').addEventListener('click', function () { show(cur + 1, true); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.documentElement.classList.contains('ex-on')) setOn(false);
  });

  var saved = null;
  try { saved = localStorage.getItem('tmc-explain'); } catch (e) {}
  document.documentElement.classList.toggle('ex-on', saved !== '0');
  show(0, false);
  onScroll();
})();
