document.addEventListener('DOMContentLoaded', function() {
    // Function to get all URL parameters
    function getAllUrlParams() {
        var params = {};
        var search = location.search.substring(1);

        if (search) {
            search.split('&').forEach(function(param) {
                var item = param.split('=');
                params[item[0]] = item[1] && decodeURIComponent(item[1].replace(/\+/g, ' '));
            });
        }

        return params;
    };

    // Get all URL parameters
    var params = getAllUrlParams();

    // Get formId from URL parameters
    var formId = params['formId'];
    
    // Make sure the formId is defined
    if (!formId) {
        console.error("No form ID provided in URL parameters");
        return;
    }

    // Find form by formId
    var form = document.getElementById(formId);

    // Make sure the form exists
    if (!form) {
        console.error("No form found with id: " + formId);
        return;
    }

    // Create hidden fields for each URL parameter and append to the form
    Object.keys(params).forEach(function(key) {
        // We don't want to add formId as a hidden field
        if (key === 'formId') {
            return;
        }
        var input = document.createElement("input");

        input.setAttribute("type", "hidden");
        input.setAttribute("name", key);
        input.setAttribute("id", key + "-hidden"); // adjusted id to avoid duplications
        input.setAttribute("value", params[key]);

        // append to form
        form.appendChild(input);
    });
});
