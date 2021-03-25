chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript(null, {
        "file": "popup.js"
    }, function(){ 
        "popup.js";
        alert("Say goodbye to those ads!");
        console.log("Say goodbye to those ads!");
    });
  })