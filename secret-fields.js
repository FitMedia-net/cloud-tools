    // Parse current URL
    const urlParams = new URLSearchParams(window.location.search);

    // Get form element
    const form = document.getElementTagName("form");

    // Iterate through each URL parameter
    urlParams.forEach((value, key) => {
        // Create new input element
        const input = document.createElement("input");

        // Set input type as hidden
        input.type = "hidden";

        // Set input name and value
        input.name = key;
        input.value = value;

        // Append input to form
        form.appendChild(input);
    });
