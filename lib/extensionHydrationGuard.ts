/**
 * Strips known browser-extension DOM injections before React hydrates.
 * Heurio (and similar tools) mutate <head>/metadata nodes and cause mismatches.
 */
export const EXTENSION_HYDRATION_GUARD_SCRIPT = `
(function () {
  var SELECTORS = ['#heurio-app', '.heurio-app', '.heurio-overlay'];
  function removeInjectedNodes() {
    SELECTORS.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(function (node) {
        node.remove();
      });
    });
  }
  removeInjectedNodes();
  if (typeof MutationObserver === 'undefined') return;
  var observer = new MutationObserver(removeInjectedNodes);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('DOMContentLoaded', function () {
    removeInjectedNodes();
    window.setTimeout(function () {
      observer.disconnect();
    }, 8000);
  });
})();
`.trim();
