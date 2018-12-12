 //在320的屏幕下1rem=100px
  (function(doc, win) {
    var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
    var recalc = function() {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      var fontSize = 100 * (clientWidth / 320);
      if (fontSize > 160) fontSize = 100;
      docEl.style.fontSize = fontSize + 'px';
    };
    if (!doc.addEventListener) return;
    recalc();
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
  })(document, window)