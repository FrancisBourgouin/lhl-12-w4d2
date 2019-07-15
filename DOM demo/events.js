document.addEventListener('DOMContentLoaded', function(event) {
  console.log('The DOM is loaded!');

  document
    .querySelector('input[type=submit]')
    .addEventListener('click', function(event) {
      // prevents the default submission of the form
      event.preventDefault();
      console.log('clicking ok');
    });
});
