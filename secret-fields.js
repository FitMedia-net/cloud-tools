  document.addEventListener('DOMContentLoaded', function() {
    // Get parameters from URL
    let params = (new URL(document.location)).searchParams;

    // Get form to append hidden inputs
    let form = document.getElementByTagName('form');

    // Loop over each parameter
    params.forEach((value, key) => {
      // Create a new hidden field
      let hiddenField = document.createElement('input');
      hiddenField.type = 'hidden';
      hiddenField.name = key;
      hiddenField.value = value;

      // Append hidden field to form
      form.appendChild(hiddenField);
    });
  });
