// Last updated on 2nd August 2023
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

    // Create hidden fields for each URL parameter
    var params = getAllUrlParams();
    var forms = document.getElementsByTagName('form');
    var currentUrl = window.location.href;
    var pageTitle = document.title;

    Array.from(forms).forEach(function(form) {
        Object.keys(params).forEach(function(key) {
            var input = document.createElement("input");

            input.setAttribute("type", "hidden");
            input.setAttribute("name", key);
            input.setAttribute("id", key + "-" + form.id); // adjusted id to avoid duplications
            input.setAttribute("value", params[key]);

            // append to form
            form.appendChild(input);
        });

        // Create hidden fields for the current page URL and title
        var urlInput = document.createElement("input");
        urlInput.setAttribute("type", "hidden");
        urlInput.setAttribute("name", "currentUrl");
        urlInput.setAttribute("id", "currentUrl" + "-" + form.id); // adjusted id to avoid duplications
        urlInput.setAttribute("value", currentUrl);
        form.appendChild(urlInput);

        var titleInput = document.createElement("input");
        titleInput.setAttribute("type", "hidden");
        titleInput.setAttribute("name", "pageTitle");
        titleInput.setAttribute("id", "pageTitle" + "-" + form.id); // adjusted id to avoid duplications
        titleInput.setAttribute("value", pageTitle);
        form.appendChild(titleInput);
    });
});
