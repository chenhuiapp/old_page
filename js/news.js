$(document).ready(function() {
  // Adapted from http://cs61.org
  var announcementIndex = 0;

  function setAnnouncements(offset) {
    var newIndex = announcementIndex  + offset;
    var announcementNumber = $('.announcement').length;

    if (newIndex < 0 || newIndex >= announcementNumber) {
      return;
    }

    $('#announcement-' + announcementIndex).hide(0, function() {
      $('#announcement-' + newIndex).show(0);
    });

    announcementIndex = newIndex;

    if (announcementIndex == 0) {
      $('#announcement-' + announcementIndex + ' .announcement-btn-older')
        .attr("data-toggle", "popover");
      $('#announcement-' + announcementIndex + ' .announcement-btn-older')
        .attr("data-placement", "left");
      $('#announcement-' + announcementIndex + ' .announcement-btn-older')
        .attr("data-content", "No more recent news.");
    }
    if (announcementIndex >= announcementNumber - 1) {
      $('#announcement-' + announcementIndex + ' .announcement-btn-newer')
        .addClass('disabled');
    }
    
  }
  setAnnouncements(0);

  $('.announcement-btn-older > a').click(function() {
    setAnnouncements(-1);
  });
  $('.announcement-btn-newer > a').click(function() {
    setAnnouncements(1);
  });
  $('[data-toggle="popover"]').popover();
});

function rotateCard(btn){
  var $card = $(btn).closest('.card-container');
  console.log($card);
  if($card.hasClass('hover')){
    $card.removeClass('hover');
  } else {
    $card.addClass('hover');
  }
};