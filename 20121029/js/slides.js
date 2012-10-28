(function() {

  jQuery(function() {
    var CURRENT, HASH, KEYTARGET, PREFIX, TRANSFORM, checkURL, createOutline, hideOutline, keyAction, resize, showOutline, showSlide, touchAgents;
    CURRENT = 0;
    PREFIX = (jQuery.browser.webkit && '-webkit-') || (jQuery.browser.mozilla && '-moz-') || (jQuery.browser.msie && '-ms-') || (jQuery.browser.opera && '-o-') || '';
    TRANSFORM = PREFIX + 'transform';
    KEYTARGET = jQuery.browser.msie ? document.body : window;
    HASH = null;
    keyAction = function(e) {
      if ([74, 76, 40, 39, 32].indexOf(e.keyCode) >= 0) {
        showSlide(++CURRENT);
        location.hash = CURRENT;
        return e.preventDefault();
      } else if ([72, 75, 38, 37].indexOf(e.keyCode) >= 0) {
        showSlide(--CURRENT);
        location.hash = CURRENT;
        return e.preventDefault();
      }
    };
    createOutline = function() {
      var div, i;
      div = jQuery('#outline');
      if (div.length === 0) {
        div = jQuery('<div>').attr('id', 'outline');
        div.appendTo(jQuery(document.body));
      } else {
        div.empty();
      }
      i = 0;
      jQuery('.slide').each(function() {
        var s;
        s = jQuery('<div>');
        jQuery(this).children().each(function() {
          return s.append(jQuery(this).clone());
        });
        s.attr('id', "outline/" + i).appendTo(div);
        return i++;
      });
      return div;
    };
    showOutline = function() {
      jQuery(KEYTARGET).unbind('keyup', keyAction);
      jQuery('#outline').show();
      jQuery('#slides').hide();
      jQuery('#toolbox .forOutline').show();
      jQuery('#toolbox .forSlides').hide();
      return jQuery('body').css({
        overflow: 'visible'
      });
    };
    hideOutline = function() {
      jQuery(KEYTARGET).unbind('keyup', keyAction);
      jQuery(KEYTARGET).keyup(keyAction);
      jQuery('#outline').hide();
      jQuery('#slides').show();
      jQuery('#toolbox .forOutline').hide();
      jQuery('#toolbox .forSlides').show();
      return jQuery('body').css({
        overflow: 'hidden'
      });
    };
    showSlide = function(num) {
      var slides;
      slides = jQuery('.slide');
      if (num >= slides.length) {
        num = slides.length - 1;
      } else if (num < 0) {
        num = 0;
      }
      CURRENT = num;
      slides.removeClass('current').eq(num).addClass('current');
      if (CURRENT > 0) {
        jQuery('#toolbox a.prev').attr('href', "#" + (CURRENT - 1)).unbind('click');
      } else {
        jQuery('#toolbox a.prev').attr('href', "#").click(function(e) {
          return e.preventDefault();
        });
      }
      if (CURRENT <= slides.length - 2) {
        jQuery('#toolbox a.next').attr('href', "#" + (CURRENT + 1)).unbind('click');
      } else {
        jQuery('#toolbox a.next').attr('href', "#").click(function(e) {
          return e.preventDefault();
        });
      }
      return jQuery('#toolbox a.toSlide').attr('href', "#" + CURRENT);
    };
    checkURL = function(show) {
      var matched, num, outline, slideNum;
      slideNum = 0;
      if (HASH === location.hash) {
        return null;
      } else {
        HASH = location.hash;
      }
      outline = false;
      if (location.hash.match(/#?outline/)) {
        outline = true;
      } else if ((matched = location.hash.match(/#?(\d+)/))) {
        num = parseInt(matched[1]);
        if (CURRENT !== num) {
          slideNum = num;
          show = true;
        }
      }
      if (show) showSlide(slideNum);
      if (outline) {
        return showOutline();
      } else {
        return hideOutline();
      }
    };
    resize = function() {
      var h, w, wdw;
      wdw = jQuery(window);
      h = wdw.outerHeight();
      w = wdw.outerWidth();
      return jQuery('.slide').each(function() {
        var sh, sw, t, zoom;
        t = jQuery(this);
        t.css({
          width: '',
          height: '',
          top: 0
        });
        t.css(TRANSFORM, '');
        sw = t.width();
        sh = t.height();
        if (sh > h) {
          zoom = h / sh;
          t.css('width', sw / zoom);
          t.css(TRANSFORM, "scale(" + zoom + ")");
          sh = t.height() * zoom;
        }
        return t.css('top', h / 2 - sh / 2);
      });
    };
    jQuery(window).bind('resize', resize);
    resize();
    jQuery('img').bind('load', resize);
    createOutline();
    checkURL(true);
    setInterval(checkURL, 50);
    touchAgents = ['iPhone', 'iPad', 'Android'];
    if (!navigator.userAgent.match(new RegExp(touchAgents.join('|')))) {
      return setTimeout(function() {
        return jQuery('#toolbox').addClass('shown');
      }, 3000);
    }
  });

}).call(this);
