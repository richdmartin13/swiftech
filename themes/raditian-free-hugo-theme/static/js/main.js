(function ($) {
    'use strict';

      // search
  $('#search').keyup(function () {
    if (this.value) {
      $(this).addClass('active')
    } else {
      $(this).removeClass('active')
    }
  })
  $('#search').focusout(function () {
    $(this).removeClass('active')
  })

})(jQuery);