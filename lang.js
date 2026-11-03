(function () {
  var KEY = 'vaha-site-lang';
  var root = document.documentElement;

  function pick() {
    try {
      var saved = localStorage.getItem(KEY);
      if (saved === 'tr' || saved === 'en') return saved;
    } catch (e) {}
    var nav = (navigator.language || '').toLowerCase();
    return nav.indexOf('tr') === 0 ? 'tr' : 'en';
  }

  function apply(lang) {
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    var title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.getAttribute('content');
  }

  apply(pick());

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-set]');
    if (!btn) return;
    var lang = btn.getAttribute('data-set');
    try {
      localStorage.setItem(KEY, lang);
    } catch (err) {}
    apply(lang);
  });
})();
