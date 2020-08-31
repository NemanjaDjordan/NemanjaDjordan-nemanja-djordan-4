var $checkbox = $('.navigation-checkbox'),
  $body = $('body'),
  $headerBottom = $('.header-bottom-wrapper'),
  $navigationButton = $('.nav-burger'),
  $jsNavigation = $('.js-navigation');

// Header
function headerLoop() {
  if ($(window).scrollTop() > 32) {
    $headerBottom.css('top', '0');
  } else {
    $headerBottom.css('top', '3.2rem');
  }
};

$(window).on('scroll', function () {
  headerLoop()
});

// Navigation
$navigationButton.on('click', function () {
  $body.toggleClass("no-scroll body-blur");
});

$(document).on('keyup', function (evt) {
  if (evt.keyCode == 27) {
    $checkbox.prop('checked', false);
    $body.removeClass("no-scroll body-blur");
  }
});
$navigationButton.on('click', function () {
  $body.toggleClass("no-scroll body-blur");
});

// Smooth scroll navigaton
$jsNavigation.on("click touchstart", function () {
  var dataId = $(this).attr('data-id'),
    widowsHeight = $('body').outerHeight() * .02;
  $('html, body').animate({
    scrollTop: $('[data-name="' + dataId + '"]').offset().top - widowsHeight
  }, 1000);
});