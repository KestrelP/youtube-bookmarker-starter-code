chrome.tabs.onUpdated.addListener((tabId, tab) =>{
  if(tab.url && tab.url.include("youtube.com/watch")){
    const queryParameters = tab.url.split("?")[1];
    const urlPArameters = new URLSearchParams(queryPArameters);

    chrome.tabs.sendMessage(tabId, {
      type: "NEW",
      videoId: urlPArameters.get("v")
    })
  }
})