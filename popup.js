// popup.js
var toggleExtensionCheckbox = document.getElementById("toggleExtension");

toggleExtensionCheckbox.addEventListener("change", function() {
    // Send a message to the content script when the checkbox changes
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var activeTab = tabs[0];
        chrome.scripting.executeScript({
            target: { tabId: activeTab.id },
            function: function(enableExtension) {
                // Send a message to the content script
                chrome.runtime.sendMessage({ enableExtension: enableExtension });
            },
            args: [toggleExtensionCheckbox.checked]
        });
    });
});
