import React from "react";
import ReactDOM from "react-dom/client";
import Project from "./Project";

const liveSites = ReactDOM.createRoot(document.getElementById("project-list"));
liveSites.render(<Project />);

// //Lazy Load images
// const images = document.querySelectorAll('img[data-src]');

// const imageReveal = function (entries, observer) {
//   entries.forEach(entry => {
//     if (!entry.isIntersecting) return;
//     console.log(entry);
//     entry.target.src = entry.target.getAttribute('data-src');
//     entry.target.removeAttribute('data-src');
//     // entry.target.addEventListener('load', function () {
//     //   entry.target.classList.remove('lazy-img');
//     // });
//     observer.unobserve(entry.target);
//   });
// };

// const imageObserver = new IntersectionObserver(imageReveal, {
//   root: null,
//   threshold: 0,
//   rootMargin: '200px',
// });

// images.forEach(img => imageObserver.observe(img));

$(document).ready(function () {
  // Website Count Bar Animation
  const websitesBar = document.getElementById("websites-bar");
  const websiteCount = document.getElementById("website-count");

  const barAnimation = function () {
    if (window.matchMedia("(prefers-reduced-motion").matches) {
      websitesBar.style.height = 94 * 0.8 + "%";
      websiteCount.textContent = Math.floor(94);
      return;
    }

    setTimeout(() => {
      let height = 1;
      let adjustHeight = setInterval(frame, 0.1);

      const websitesHandler = function (heightSpeed) {
        height += heightSpeed;
        websitesBar.style.height = height * 0.8 + "%";
        websiteCount.textContent = Math.floor(height);
      };

      function frame() {
        if (height >= 94) {
          clearInterval(adjustHeight);
        } else if (height >= 88) {
          websitesHandler(0.04);
        } else if (height >= 82) {
          websitesHandler(0.07);
        } else if (height >= 70) {
          websitesHandler(0.15);
        } else if (height >= 60) {
          websitesHandler(0.25);
        } else if (height >= 50) {
          websitesHandler(0.35);
        } else if (height >= 40) {
          websitesHandler(0.45);
        } else if (height >= 30) {
          websitesHandler(0.55);
        } else {
          websitesHandler(0.85);
        }
      }
    }, 650);
  };

  // Turn off the website bar animation for any device below tablet
  if (window.matchMedia("(min-width: 768px)").matches) {
    barAnimation();
  } else {
    websitesBar.style.height = 94 * 0.8 + "%";
    websiteCount.textContent = Math.floor(94);
  }
});
