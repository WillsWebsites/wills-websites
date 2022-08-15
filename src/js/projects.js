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

// Projects Observer

const projects = document.querySelectorAll('.project-item');

const projectReveal = function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = 1;

        observer.unobserve(entry.target);
    });
};

const projectObserver = new IntersectionObserver(projectReveal, {
    root: null,
    threshold: .25,
});

projects.forEach((project, i) => {
    project.style.transform = 'translateY(100px)';
    project.style.opacity = 0;
    project.style.transitionDelay = `${i % 2 === 0 ?  .2 + (i * .03) : .4 + (i * .02)}s`;
    projectObserver.observe(project);
});


// Website Count Bar Animation

$(document).ready(function() {
    setTimeout(() => {
        const websitesBar = document.getElementById('websites-bar');
        const websiteCount = document.getElementById('website-count');
        let height = 1;
        let adjustHeight = setInterval(frame, .1);

        const websitesHandler = function(heightSpeed) {
            height += heightSpeed;
            websitesBar.style.height = (height * .69) + '%';
            websiteCount.textContent = Math.floor(height);
        }
        
        function frame() {
            if (height >= 104) {
                clearInterval(adjustHeight);
            } else if (height >= 100) {
                websitesHandler(.03)
            } else if (height >= 93) {
                websitesHandler(.07)
            } else if (height >= 80) {
                websitesHandler(.15)
            } else if (height >= 70) {
                websitesHandler(.25)
            } else if (height >= 60) {
                websitesHandler(.35)
            } else if (height >= 50) {
                websitesHandler(.45)
            } else if (height >= 40) {
                websitesHandler(.55)
            } else {
                websitesHandler(.85)
            }
        }
    }, 650);
});
