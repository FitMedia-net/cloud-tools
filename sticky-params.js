<script>
// Catch and append all URL parameters to all hyperlinks that contain one of the below domains
(function() {
  var domainsToDecorate = [
          'fitmedia.net'
      ],
      queryParams = [
          'utm_medium', 
          'utm_source',
          'utm_campaign',
          'ref'
      ]
  // do not edit anything below this line
  var links = document.querySelectorAll('a'); 

// check if links contain domain from the domainsToDecorate array and then decorates
  for (var linkIndex = 0; linkIndex < links.length; linkIndex++) {
      for (var domainIndex = 0; domainIndex < domainsToDecorate.length; domainIndex++) { 
          if (links[linkIndex].href.indexOf(domainsToDecorate[domainIndex]) > -1 && links[linkIndex].href.indexOf("#") === -1) {
              links[linkIndex].href = decorateUrl(links[linkIndex].href);
          }
      }
  }
// decorates the URL with query params
  function decorateUrl(urlToDecorate) {
      urlToDecorate = (urlToDecorate.indexOf('?') === -1) ? urlToDecorate + '?' : urlToDecorate + '&';
      var collectedQueryParams = [];
      for (var queryIndex = 0; queryIndex < queryParams.length; queryIndex++) {
          if (getQueryParam(queryParams[queryIndex])) {
              collectedQueryParams.push(queryParams[queryIndex] + '=' + getQueryParam(queryParams[queryIndex]))
          }
      }
      return urlToDecorate + collectedQueryParams.join('&');
  }

  // borrowed from https://stackoverflow.com/questions/831030/
  // a function that retrieves the value of a query parameter
  function getQueryParam(name) {
      if (name = (new RegExp('[?&]' + encodeURIComponent(name) + '=([^&]*)')).exec(window.location.search))
          return decodeURIComponent(name[1]);
  }

})();

window.onload = function() {
      // Get all forms on the page
      var forms = document.getElementsByTagName('form');

      // Loop through each form
      for(var i = 0; i < forms.length; i++) {
        
        // Create a new hidden input fields
        var inputMedium = document.createElement('url_medium');
        var inputCampaign = document.createElement('url_campaign');
        var inputSource = document.createElement('url_source');
        var inputRef = document.createElement('url_ref');
        
        // Set the input type to hidden
        inputMedium.setAttribute('type', 'hidden');
        inputCampaign.setAttribute('type', 'hidden');
        inputSource.setAttribute('type', 'hidden');
        inputRef.setAttribute('type', 'hidden');
        
        // Set the name attributes
        inputMedium.setAttribute('name', 'hiddenField');
        inputCampaign.setAttribute('name', 'hiddenField');
        inputSource.setAttribute('name', 'hiddenField');
        inputRef.setAttribute('name', 'hiddenField');

        
        // Set the value attributes
        inputMedium.setAttribute('value', 'hiddenValue');
        inputCampaign.setAttribute('value', 'hiddenValue');
        inputSource.setAttribute('value', 'hiddenValue');
        inputRef.setAttribute('value', 'hiddenValue');


        // Append the hidden input to the form
        forms[i].appendChild(inputMedium);
        forms[i].appendChild(inputCampaign);
        forms[i].appendChild(inputSource);
        forms[i].appendChild(inputRef);
      }
    }
</script>
