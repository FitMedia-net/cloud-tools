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
    var forms = document.getElementsById('_builder-form');
    
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
    });
});
