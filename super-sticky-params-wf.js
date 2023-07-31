window.addEventListener('DOMContentLoaded', function() {
    var currentDomain = window.location.hostname;
    var queryParams = ['utm_medium', 'utm_source', 'utm_campaign', 'fm_campaign', 'fm_adgroup', 'fm_ad', 'ref'];

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
    }

    var params = getAllUrlParams();
    var forms = document.getElementsByClassName('w-form');
    
    Array.prototype.slice.call(forms).forEach(function(form) {
        Object.keys(params).forEach(function(key) {
            var input = document.createElement("input");

            input.setAttribute("type", "hidden");
            input.setAttribute("name", key);
            input.setAttribute("id", key + "-" + form.id); // adjusted id to avoid duplications
            input.setAttribute("value", params[key]);

            form.appendChild(input);
        });
    });

    var links = document.querySelectorAll('a');

    links.forEach(function(link) {
        if (shouldDecorate(link)) {
            link.href = decorateUrl(link.href);
        }
    });

    function shouldDecorate(link) {
        return (link.hostname === currentDomain || link.hostname.endsWith('.' + currentDomain)) && !link.href.includes("#");
    }

    function decorateUrl(urlToDecorate) {
        var collectedQueryParams = queryParams.filter(function(param) {
            return getQueryParam(param);
        }).map(function(param) {
            return param + '=' + getQueryParam(param);
        });

        return urlToDecorate + (collectedQueryParams.length ? '?' + collectedQueryParams.join('&') : '');
    }

    function getQueryParam(name) {
        var regex = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)');
        var match = regex.exec(window.location.search);
        return match ? decodeURIComponent(match[1]) : null;
    }

});
