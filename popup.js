document.addEventListener('DOMContentLoaded', function () {
    var toggleButton = document.getElementById('toggleButton');
    toggleButton.addEventListener('click', function () {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            chrome.tabs.executeScript(tabs[0].id, { code: 'var invertDiv = document.createElement("div");invertDiv.style.cssText = "height: 100% !important; width: 100vw !important; position: absolute !important; top: 0 !important; z-index: 1000 !important; background: #fff !important; left: 0 !important; mix-blend-mode: difference !important; pointer-events: none !important;";document.body.appendChild(invertDiv);' });
        });
    });
});
