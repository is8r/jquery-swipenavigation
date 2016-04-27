// This is where it all goes :)

$(document).on('ready', function() {
  var $target = $('.js-swipenavigation');
  var hasTapEvent = ('ontouchstart' in window);

  if(hasTapEvent) {
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

