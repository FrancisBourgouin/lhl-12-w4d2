$(document).ready(function() {
  // document.querySelectorAll('.alien-btn')

  $('.alien-btn').on('click', function(event) {
    const talk = $(this)
      .closest('.alien-section')
      .find('.talk');

    talk.append('\u{1F4AC}');
  });
});
