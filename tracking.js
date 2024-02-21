// FitMedia Pixel Script - Last Updated 21st February 2024
(function() {
    // Function to get the GTM ID from the query string of the script's own URL
    function getQueryParam(name) {
        var scriptTags = document.getElementsByTagName('script');
        for (var i = 0; i < scriptTags.length; i++) {
            if (scriptTags[i].src.indexOf('tracking.js') > -1) {
                var url = scriptTags[i].src;
                name = name.replace(/[\[\]]/g, '\\$&');
                var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                    results = regex.exec(url);
                if (!results || !results[2]) return null;
                return decodeURIComponent(results[2].replace(/\+/g, ' '));
            }
        }
        return null;
    }

    var id = getQueryParam('id'); // Get Tracking ID from the script's URL parameter
    if (!id) {
        console.error('Tracking ID not found in URL');
        return;
    }

    // Inject the <head> script
    var headScript = document.createElement('script');
    headScript.async = true;
    headScript.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://tracking.fitmedia.cloud/zpdfwzls.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-${id}');`;
    document.head.appendChild(headScript);

    // Inject the <body> script (no-script tag)
    window.addEventListener('DOMContentLoaded', (event) => {
        var noscript = document.createElement('noscript');
        var iframe = document.createElement('iframe');
        iframe.src = `https://tracking.fitmedia.cloud/ns.html?id=GTM-${id}`;
        iframe.height = '0';
        iframe.width = '0';
        iframe.style.display = 'none';
        iframe.style.visibility = 'hidden';

        noscript.appendChild(iframe);
        document.body.insertBefore(noscript, document.body.firstChild);
    });
})();

