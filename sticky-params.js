// Last updated on 8th August 2023
document.addEventListener("DOMContentLoaded", function() {

  (function() {
    var currentDomain = window.location.hostname;
    var queryParams = ['fm_campaign', 'fm_adgroup', 'fm_ad', 'fm_keyword', 'ref'];

    var links = document.querySelectorAll('a');

    links.forEach(function(link) {
      if (shouldDecorate(link)) {
        link.href = decorateUrl(link.href);
      }
    });

    function shouldDecorate(link) {
      // Consider sub-domains by checking if the link's hostname ends with the current domain
      var isSubDomain = link.hostname === currentDomain || 
                        (link.hostname.endsWith('.' + currentDomain) && link.hostname.split('.').slice(-2).join('.') === currentDomain);

      return isSubDomain && !link.href.includes("#");
    }

    function decorateUrl(urlToDecorate) {
      var collectedQueryParams = queryParams.filter(function(param) {
        return getQueryParam(param);
      }).map(function(param) {
        return param + '=' + getQueryParam(param);
      });

      // Check if the URL already has query parameters
      var separator = urlToDecorate.includes('?') ? '&' : '?';
      return urlToDecorate + (collectedQueryParams.length ? separator + collectedQueryParams.join('&') : '');
    }

    function getQueryParam(name) {
      var regex = new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)');
      var match = regex.exec(window.location.search);
      return match ? decodeURIComponent(match[1]) : null;
    }

  })();

});

