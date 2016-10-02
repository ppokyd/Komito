/**
 * Defines <code>komito.trackers.dom.scroll</code> namespace.
 * @namespace
 */
komito.trackers.dom.scroll = {

  /**
   * Initializes scroll tracking.
   */
  init: function() {
    if (komito.config['trackScroll']) {
      /** @type {Object} */ var map = {25: 0, 50: 0, 75: 0, 100: 0};
      /** @type {Element} */ var root = dom.document.documentElement;
      /** @type {number} */ var depth;

      dom.events.addEventListener(
          dom.context, dom.events.TYPE.SCROLL, function() {
            /** @type {number} */ var percent =
                (root.scrollTop + dom.document.body.scrollTop) /
                (root.scrollHeight - root.clientHeight) * 100;
            depth = ~~(percent / 25) * 25;
            if (depth && !map[depth]) {
              map[depth] = 1;
              komito.track(
                  komito.EVENT_ACTION_TYPE, 'scroll', 'depth', depth + '%');
            }
          });
    }
  }
};
