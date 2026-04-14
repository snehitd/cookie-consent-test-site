// Test helpers for cookie consent testing
(function() {
  function logAllCookies() {
    const cookies = document.cookie.split(';').map(c => c.trim()).filter(Boolean);
    console.group('Current cookies (' + cookies.length + ')');
    cookies.forEach(c => console.log(c));
    console.groupEnd();
  }
  function logAllScripts() {
    const scripts = document.querySelectorAll('script');
    console.group('Loaded scripts (' + scripts.length + ')');
    scripts.forEach(s => console.log(s.src || '[inline]', '| type=' + s.type));
    console.groupEnd();
  }
  window.addEventListener('load', function() {
    // Small floating inspector button
    const btn = document.createElement('button');
    btn.textContent = 'Inspect cookies & scripts';
    btn.style.cssText = 'position:fixed;bottom:16px;right:16px;' +
      'padding:10px 14px;background:#1b4f72;color:#fff;' +
      'border:none;border-radius:4px;cursor:pointer;z-index:9999;';
    btn.onclick = function() {
      logAllCookies();
      logAllScripts();
      alert('See the browser console (F12) for details.');
    };
    document.body.appendChild(btn);
    // Also log on page load
    setTimeout(logAllCookies, 2000);
  });
})();
