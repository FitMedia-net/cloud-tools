<script>
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
