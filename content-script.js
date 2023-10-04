(function() {
  var url = window.location.href.toString().trim();
  if (url.indexOf('youtube.com') == -1) {
      return;
  }

  console.log("YouTube Thumbnail Customizer Started");

  var intervalRunning = false;
  var interval = setInterval(function() {

      if (intervalRunning == false) {
          intervalRunning = true;

          // Remove video length elements
          var thumbnailTimeElements = document.querySelectorAll('.style-scope.ytd-thumbnail-overlay-time-status-renderer');
          if (thumbnailTimeElements) {
              for (var i = 0; i < thumbnailTimeElements.length; i++) {
                  thumbnailTimeElements[i].style.display = 'none'; // Hide the time element
              }
          }

            // Remove video length, views, and date metadata elements
            var metadataLineElements = document.querySelectorAll('ytd-video-meta-block[rich-meta] #metadata-line.ytd-video-meta-block');

            if (metadataLineElements) {
                for (var j = 0; j < metadataLineElements.length; j++) {
                    var metadataLineElement = metadataLineElements[j];
                    metadataLineElement.style.display = 'none'; // Hide the entire metadata line
                }
            }

            var metadataLineElements_2 = document.querySelectorAll('ytd-grid-video-renderer:not([rich-meta]) #metadata-line.ytd-grid-video-renderer');

            if (metadataLineElements_2) {
                for (var j = 0; j < metadataLineElements_2.length; j++) {
                    var metadataLineElement_2 = metadataLineElements_2[j];
                    metadataLineElement_2.style.display = 'none'; // Hide the entire metadata line
                }
            }

          console.log("Removed video length, views, and date metadata from thumbnails.");

          intervalRunning = false;
      }
  }, 200); // Adjust the interval as needed (e.g., 1000 milliseconds for 1 second)
})();


// work on after:

// var enabled = false;

// function updateExtensionBehavior(){
//   if (enabled) {
//     (function() {
//   var url = window.location.href.toString().trim();
//   if (url.indexOf('youtube.com') == -1) {
//       return;
//   }

//   console.log("YouTube Thumbnail Customizer Started");

//   var intervalRunning = false;
//   var interval = setInterval(function() {

//       if (intervalRunning == false) {
//           intervalRunning = true;

//           // Remove video length elements
//           var thumbnailTimeElements = document.querySelectorAll('.style-scope.ytd-thumbnail-overlay-time-status-renderer');
//           if (thumbnailTimeElements) {
//               for (var i = 0; i < thumbnailTimeElements.length; i++) {
//                   thumbnailTimeElements[i].style.display = 'none'; // Hide the time element
//               }
//           }

//             // Remove video length, views, and date metadata elements
//             var metadataLineElements = document.querySelectorAll('ytd-video-meta-block[rich-meta] #metadata-line.ytd-video-meta-block');

//             if (metadataLineElements) {
//                 for (var j = 0; j < metadataLineElements.length; j++) {
//                     var metadataLineElement = metadataLineElements[j];
//                     metadataLineElement.style.display = 'none'; // Hide the entire metadata line
//                 }
//             }

//           console.log("Removed video length, views, and date metadata from thumbnails.");

//           intervalRunning = false;
//       }
//   }, 700); // Adjust the interval as needed (e.g., 1000 milliseconds for 1 second)
// })();
//   } else {
//     clearInterval(interval);
//   }
// }

// // Listen for messages from the popup script
// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   if (request.enableExtension !== undefined) {
//       enabled = request.enableExtension;
//       updateExtensionBehavior();
//   }
// });

// // Initialize extension behavior based on the initial state (disabled by default)
// updateExtensionBehavior();

