// Last updated on 8th August 2023
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired!");

    (function() {
        var currentDomain = window.location.hostname;
        console.log("Current domain:", currentDomain);
        var queryParams = ['fm_campaign', 'fm_adgroup', 'fm_ad', 'fm_keyword', 'ref'];

        var links = document.querySelectorAll('a');
        console.log("Number of links found:", links.length);

        links.forEach(function(link, index) {
            console.log("Inspecting link", index + 1, "with href:", link.href);
            if (shouldDecorate(link)) {
                console.log("Decorating link", index + 1);
                link.href = decorateUrl(link.href);
                console.log("New href for link", index + 1, ":", link.href);
            } else {
                console.log("Not decorating link", index + 1);
            }
        });

        function shouldDecorate(link) {
            // Consider sub-domains by checking if the link's hostname ends with the current domain
            var isSubDomain = link.hostname === currentDomain || 
                            (link.hostname.endsWith('.' + currentDomain) && link.hostname.split('.').slice(-2).join('.') === currentDomain);
            
            var shouldDecorateResult = isSubDomain && !link.href.includes("#");
            console.log("shouldDecorate result for", link.href, ":", shouldDecorateResult);

            return shouldDecorateResult;
        }

        function decorateUrl(urlToDecorate) {
            var collectedQueryParams = queryParams.filter(function(param) {
                return getQueryParam(param);
            }).map(function(param) {
                return param + '=' + getQueryParam(param);
            });

            console.log("Collected query params:", collectedQueryParams);

            // Check if the URL already has query parameters
            var separator = urlToDecorate.includes('?') ? '&' : '?';
            var decoratedUrl = urlToDecorate + (collectedQueryParams.length ? separator + collectedQueryParams.join('&') : '');

            console.log("Decorated URL:", decoratedUrl);
            return decoratedUrl;
        }

        function getQueryParam(name) {
            var regex = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)');
            var match = regex.exec(window.location.search);
            var paramValue = match ? decodeURIComponent(match[1]) : null;
            
            console.log("Query param", name, "value:", paramValue);

            return paramValue;
        }

    })();

});

