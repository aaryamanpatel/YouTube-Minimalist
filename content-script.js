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

function injectCSSRules() {
    const style = document.createElement("style");
    style.innerHTML = `
      /* Show loaded ytd-thumbnail with overlays */
      ytd-thumbnail[loaded="true"] #overlays.ytd-thumbnail {
        display: none !important;
      }
    `;
    document.head.appendChild(style);
  }
  
  // Execute the function when the page is loaded
  window.addEventListener("DOMContentLoaded", injectCSSRules);
  
//   // Execute the function when the page is loaded
//   window.addEventListener("DOMContentLoaded", removeVideoLength);

//   removeVideoLength();

  alert("Removed video length from all thumbnails.")
  