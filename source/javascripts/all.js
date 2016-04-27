// This is where it all goes :)

$(document).on('ready', function() {
  var $target = $('.js-swipenavigation');

  $target.on('mousewheel', function(event) {
    event.preventDefault();
    var $el = $target.find('ul');
    $el.scrollLeft($el.scrollLeft()-event.deltaY);
  });

  $target.find('a').each(function(index, el) {
    var $el = $(el);
    $el.on('mouseover touchstart', function(event) {
      $el.addClass('hover');
    });
    $el.on('mouseout touchend', function(event) {
      $el.removeClass('hover');
    });
  });

});

