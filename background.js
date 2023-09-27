chrome.tabs.onUpdated.addListener((tabId, tab) => {
    if(tab.url && tab.url.includes("youtube.com/watch")){
        const queryParameters = tab.url.split("?")[1];
        const ulrParameters = new URLSearchParams(queryParameters);
        console.log(ulrParameters);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: ulrParameters.get("v")
        });
    }
})
