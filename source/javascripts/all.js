// This is where it all goes :)

var _ua = (function(u){
  return {
    Tablet:(u.indexOf("windows") != -1 && u.indexOf("touch") != -1 && u.indexOf("tablet pc") == -1)
      || u.indexOf("ipad") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") == -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("tablet") != -1)
      || u.indexOf("kindle") != -1
      || u.indexOf("silk") != -1
      || u.indexOf("playbook") != -1,
    Mobile:(u.indexOf("windows") != -1 && u.indexOf("phone") != -1)
      || u.indexOf("iphone") != -1
      || u.indexOf("ipod") != -1
      || (u.indexOf("android") != -1 && u.indexOf("mobile") != -1)
      || (u.indexOf("firefox") != -1 && u.indexOf("mobile") != -1)
      || u.indexOf("blackberry") != -1
  }
})(window.navigator.userAgent.toLowerCase());

$(document).on('ready', function() {
  var $target = $('.js-swipenavigation');

  if(_ua.Tablet || _ua.Mobile) {
    $target.find('a').each(function(index, el) {
      var $el = $(el);
      $el.addClass('hover-disabled');
      $el.on('touchstart', function(event) {
        $el.addClass('touch');
      });
      $el.on('touchend', function(event) {
        $el.removeClass('touch');
      });
    });
  } else {
    $target.on('mousewheel', function(event) {
      event.preventDefault();
      var $el = $target.find('ul');
      $el.scrollLeft($el.scrollLeft()-event.deltaY);
    });
  }

});

