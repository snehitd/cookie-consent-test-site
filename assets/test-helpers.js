// Test helpers for cookie consent testing
(function() {
  function logAllCookies() {
    const cookies = document.cookie.split(';').map(c => c.trim()).filter(Boolean);
    console.group('Current cookies (' + cookies.length + ')');
    cookies.forEach(c => console.log(c));
    console.groupEnd();
  }
  window.addEventListener('load', function() {
    setTimeout(logAllCookies, 2000);
  });
})();
