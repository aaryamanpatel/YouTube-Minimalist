// content.js
// This script removes the video length from YouTube thumbnails.

// Function to remove the video length from a single thumbnail
// function removeVideoLength(thumbnail) {
//     const videoLengthElement = thumbnail.querySelector(".ytd-thumbnail-overlay-time-status-renderer");
//     if (videoLengthElement) {
//       videoLengthElement.style.display = "none";
//     }
//   }
  
  // Function to remove the video length from all thumbnails on the page
//   function removeVideoLengthFromAllThumbnails() {
//     const thumbnails = document.querySelectorAll("#time-status");
//     thumbnails.forEach((thumbnail) => {
//         thumbnail.style.display = "none";
//     });
//     console.log("Removed video length from all thumbnails.");
//   }
  
//   // Execute the function when the page is loaded
//   window.addEventListener("DOMContentLoaded", removeVideoLengthFromAllThumbnails);

//   const thumbnails = document.querySelectorAll("#time-status");

//   thumbnails.forEach((thumbnail) => {
//       thumbnail.style.display = "none";
//       console.log("Removed video length from all thumbnails.");
//   });

// function removeTime (){

//     const thumbnails = document.querySelectorAll("#time-status");

//     thumbnails.forEach((thumbnail) => {
//         thumbnail.style.display = "none";
//         console.log("Removed video length from all thumbnails.");
//     });
// }

// window.addEventListener("DOMContentLoaded", removeTime);



// Function to hide video length from all thumbnails
// function hideVideoLength() {
//     const thumbnails = document.querySelectorAll(".ytd-thumbnail-overlay-time-status-renderer");
//     thumbnails.forEach((thumbnail) => {
//       thumbnail.style.display = "none";
//     });
//   }
  
//   // Execute the function when the page is loaded
//   window.addEventListener("load", hideVideoLength);
  
//   console.log("Removed video length from all thumbnails.");

  // content.js
// This script removes the video length from YouTube thumbnails.

// function removeVideoLength() {
//     // const videoLengthElements = document.querySelectorAll(".style-scope.ytd-thumbnail-overlay-time-status-renderer");
    
//     // videoLengthElements.forEach((videoLengthElement) => {
//     //   videoLengthElement.style.display = "none !important";
//     // });
//     // const videoLengthElements = document.querySelectorAll(".ytd-thumbnail-overlay-time-status-renderer");
    
//     // videoLengthElements.forEach((videoLengthElement) => {
//     //   videoLengthElement.style.display = "none !important";
//     // });
//     const videoLengthElements = document.querySelectorAll("ytd-thumbnail[loaded] #overlays.ytd-thumbnail");
    
//     videoLengthElements.forEach((videoLengthElement) => {
//       videoLengthElement.style.display = "none !important";
//     });
//   }

//----------------------------------------------------------------------------------------------

// function injectCSSRules() {
//     const style = document.createElement("style");
//     style.innerHTML = `
//       /* Show loaded ytd-thumbnail with overlays */
//       ytd-thumbnail[loaded="true"] #overlays.ytd-thumbnail {
//         display: none !important;
//       }
//     `;
//     document.head.appendChild(style);
//   }
  
//   // Execute the function when the page is loaded
//   window.addEventListener("DOMContentLoaded", injectCSSRules);
  
// //   // Execute the function when the page is loaded
// //   window.addEventListener("DOMContentLoaded", removeVideoLength);

// //   removeVideoLength();

//   alert("Removed video length from all thumbnails.")


(function() {
  var url = window.location.href.toString().trim();
  if (url.indexOf('youtube.com') == -1) {
      return;
  }

  console.log("YouTube Thumbnail Time Remover Started");

  var intervalRunning = false;
  var interval = setInterval(function() {

      if (intervalRunning == false) {
          intervalRunning = true;

          var thumbnailTimeElements = document.querySelectorAll('.style-scope.ytd-thumbnail-overlay-time-status-renderer');

          if (thumbnailTimeElements) {
              for (var i = 0; i < thumbnailTimeElements.length; i++) {
                  var thumbnailTimeElement = thumbnailTimeElements[i];
                  thumbnailTimeElement.style.display = 'none'; // Hide the time element
              }
              console.log("Removed video length from thumbnails.");
          }

          intervalRunning = false;
      }
  }, 1000); // Adjust the interval as needed (e.g., 1000 milliseconds for 1 second)
})();
