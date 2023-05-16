chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
        code: 'var invertDiv = document.createElement("div");invertDiv.style.cssText = "height: 100vh !important; width: 100vw !important; position: fixed !important; top: 0 !important; z-index: 2147483647 !important; background: #fff !important; left: 0 !important; mix-blend-mode: difference !important; pointer-events: none !important;";document.body.appendChild(invertDiv);'
    });
});
