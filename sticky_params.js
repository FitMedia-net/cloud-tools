(function() {
  var currentDomain = window.location.hostname;
  var queryParams = ['utm_medium', 'utm_source', 'utm_campaign', 'fm_campaign', 'fm_adgroup', 'fm_ad', 'ref'];

  var links = document.querySelectorAll('a');

  links.forEach(function(link) {
    if (shouldDecorate(link)) {
      link.href = decorateUrl(link.href);
    }
  });

  function shouldDecorate(link) {
    return link.hostname === currentDomain && !link.href.includes("#");
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

})();
