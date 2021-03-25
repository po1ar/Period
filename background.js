chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        "file": "popup.js"
    }, function(){ 
        "popup.js";
        alert("Say goodbye to those ads! *If you still have an ad, refresh the page");
        console.log("Say goodbye to those ads!");
    });
  })