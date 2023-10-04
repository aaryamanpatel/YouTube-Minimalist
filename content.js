// // content.js
// // This script injects CSS rules to hide specific elements on YouTube thumbnails.

// // Function to inject CSS rules to hide elements
// function injectCSSRules() {
//     const style = document.createElement("style");
//     style.innerHTML = `
//         ytd-video-meta-block[rich-meta] #metadata-line.ytd-video-meta-block {
//             display: none !important;
//         }

//         #time-status .ytd-thumbnail-overlay-time-status-renderer {
//             display: none !important;
//         }

//         #thumbnail.ytd-thumbnail .ytd-thumbnail-overlay-time-status-renderer {
//             display: none !important;
//         }

//         #thumbnail.ytd-thumbnail .ytd-thumbnail-overlay-time-status-renderer {
//             bottom: 0 !important;
//         }`;
//     document.head.appendChild(style);
// }

// // Execute the function when the page is loaded
// window.addEventListener("DOMContentLoaded", () => {
//     console.log("YouTube Thumbnail Hider is running!");
//     injectCSSRules();
// });

const videoLengthElements = document.querySelectorAll(".ytd-video-meta-duration");

videoLengthElements.forEach(element => element.remove());