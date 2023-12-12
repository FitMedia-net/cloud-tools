(function(w, d, s, l) {
    // Function to get ID from the query string
    function getQueryParam(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    var id = getQueryParam('id'); // Get Tracking ID from URL parameter
    if (!id) {
        console.error('ID not found in URL');
        return;
    }

    w[l] = w[l] || [];
    w[l].push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js'
    });
    
    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';
    
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-' + id + dl;
    f.parentNode.insertBefore(j, f);

    w.addEventListener('load', function() {
        var iframe = d.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-' + id;
        d.body.insertBefore(iframe, d.body.firstChild);
    });
})(window, document, 'script', 'dataLayer');
