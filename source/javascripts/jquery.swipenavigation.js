/*
 *  Project:
 *  Description:
 *  Author:
 *  License:
 *  Howto:

    $('.js-swipenavigation').swipenavigation();
*/

;(function(jQuery) {

  var pluginName = 'swipenavigation';
  $[pluginName] = function(element, options) {

    var defaults = {
        pluginName: pluginName
    }
    var plugin = this;
    plugin.settings = {}

    plugin.init = function() {
        plugin.settings = $.extend({}, defaults, options);
        plugin.initListner();
        plugin.initHover();
    },

    //----------------------------------------------------------------------

    plugin.initListner = function(e) {
      $(element).on('mousewheel', function(event) {
        event.preventDefault();
        var $el = $(element).find('ul');
        $el.scrollLeft($el.scrollLeft()-event.deltaY);
      });
    },

    plugin.initHover = function(e) {
      $(element).find('a').each(function(index, el) {
        var $el = $(el);
        $el.on('mouseover touchstart', function(event) {
          $el.addClass('hover');
        });
        $el.on('mouseout touchend', function(event) {
          $el.removeClass('hover');
        });
      });
    },

    //----------------------------------------------------------------------

    plugin.init();
  }

  $.fn[pluginName] = function(options) {if(!options) options = {};options.items = [];return this.each(function(i) {options.id = i;options.items.push($(this));if (undefined == $(this).data(pluginName)) {var plugin = new $[pluginName](this, options);$(this).data(pluginName, plugin);}});}

})(jQuery);
