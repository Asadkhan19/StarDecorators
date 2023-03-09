const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(form);

  // You can use AJAX or fetch to submit the form data to the server
  // Here's an example of how to log the form data to the console
  for (const pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
});
