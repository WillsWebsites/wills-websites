// Get header height for anchor support
//prettier-ignore
let headerHeight = document.querySelector('.header').getBoundingClientRect().height;

const getHeaderHeight = function () {
  //prettier-ignore
  headerHeight = document.querySelector('.header').getBoundingClientRect().height;
  return headerHeight;
};
const scrollHandler = function (target) {
  if (target.length) {
    headerHeight = getHeaderHeight();
    //prettier-ignore
    $('html,body').stop().animate({
      scrollTop: target.offset().top - headerHeight
      }, {
        // ensures that it goes all the way to the anchor link
        complete: function() {
          headerHeight = getHeaderHeight();
          //prettier-ignore
          if(document.body.scrollTop !== headerHeight || document.documentElement.scrollTop !== headerHeight) {
            $('html,body').animate({
              scrollTop: target.offset().top - headerHeight
            }, 1);
          }
          $('html,body').stop(true, true);
        }
    });
  }
};

// Anchor tag click implementation
$('body:not(.page-meet-will) a[href*="#"]:not([href="#"])').click(function (e) {
  const urlPath = this.href.substring(0, this.href.indexOf("#")); // url wthout hash
  let locationPath = location.href;

  if (locationPath.includes("#")) {
    locationPath = location.href.substring(0, location.href.indexOf("#")); // url wthout hash
  }
  // If the urls are the same then do the anchor animation
  if (urlPath == locationPath) {
    const target = $(this.href.substring(this.href.indexOf("#")));
    scrollHandler(target);
  }
  // Close mobile nav for on page anchors, if clicked in the navigation
  if ($(this).closest("ul").hasClass("menu-list")) {
    $('input[type="checkbox"]').trigger("click");
  }
});

// Go to the anchor tag on site load
if ('body:not(.page-meet-will)') {
  $(window).on("pageshow", function () {
    const hash = window.location.hash;
    //prettier-ignore
    if (hash == '' || hash == '#' || hash == undefined) return false;
  
    const target = $(hash);
    scrollHandler(target);
  });
}

// Header observer
$('<div id="headerView" aria-hidden="true"/>').prependTo("body");
const headerView = document.getElementById("headerView");

const headerReveal = ([entry]) => {
  if (entry.isIntersecting) {
    $(".header").removeClass("scrolled");
  } else {
    $(".header").addClass("scrolled");
  }
};

const headerObserver = new IntersectionObserver(headerReveal, {
  threshold: 1,
  rootMargin: "50px",
});

headerObserver.observe(headerView);

// Section scroll-in observer
const sectionScroll = document.querySelectorAll(".scroll-in");

const sectionReveal = function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    entry.target.classList.add("section-revealed");

    observer.unobserve(entry.target);
  });
};

const sectionObserver = new IntersectionObserver(sectionReveal, {
  root: null,
  threshold: 0.1,
  rootMargin: "150px",
});

sectionScroll.forEach((section) => {
  sectionObserver.observe(section);
});

$("main").css("padding-top", headerHeight);

$(window).on("load resize", function () {
  $("main").css("padding-top", headerHeight);
});
