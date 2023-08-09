// Last updated on 9th August 2023
(function() {
    // Get current URL
    const currentUrl = new URL(window.location.href);
    
    console.log("Current URL:", currentUrl.href);

    // List of parameters to search for
    const searchParamsList = ['fm_campaign', 'fm_adgroup', 'fm_ad', 'fm_keyword', 'ref'];

    // Collect the values of the listed parameters if they exist
    const existingParams = {};
    searchParamsList.forEach(param => {
        const value = currentUrl.searchParams.get(param);
        if (value) {
            existingParams[param] = value;
        }
    });

    console.log("Existing Parameters:", existingParams);

    if (Object.keys(existingParams).length === 0) {
        console.log("No existing parameters found from the list.");
        return;
    }

    // Search through all the hyperlinks on the page
    const hyperlinks = document.querySelectorAll("a");

    hyperlinks.forEach(link => {
        try {
            const linkUrl = new URL(link.href);

            // Check if hyperlink shares the same domain as the current page
            if (linkUrl.hostname === currentUrl.hostname) {
                console.log("Processing hyperlink:", link.href);
                
                // Append the parameters from existingParams to the hyperlink
                for (const [key, value] of Object.entries(existingParams)) {
                    linkUrl.searchParams.set(key, value);
                }
                
                link.href = linkUrl.href;
                console.log("Updated hyperlink:", link.href);
            }
        } catch (e) {
            console.warn("Invalid hyperlink found or error processing:", link.href);
        }
    });

    console.log("Processing complete!");
})();
