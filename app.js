// document.addEventListener("DOMContentLoaded", function() {
//     const video = document.getElementById("background-video");
  
//     video.addEventListener("canplaythrough", function() {
//       video.play();
//     });
//   });
  
//scroll feature
  document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("background-video");
    const featuresSection = document.getElementById("features");
  
    video.addEventListener("canplaythrough", function() {
      video.play();
    });
  
    window.addEventListener("scroll", function() {
      const scrollPosition = window.scrollY;
      const featuresOffset = featuresSection.offsetTop;
  
      if (scrollPosition >= featuresOffset - 200) {
        featuresSection.classList.add("active");
      } else {
        featuresSection.classList.remove("active");
      }
    });
  });
  


    // Smooth scrolling animation
    function smoothScroll(target) {
      const startPosition = window.pageYOffset;
      const targetPosition = target.offsetTop;
      const distance = targetPosition - startPosition;
      const duration = 500;
      let start = null;

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }

      window.requestAnimationFrame(step);
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    // Animate features on scroll
    function animateFeaturesOnScroll() {
      const features = document.querySelectorAll('.feature');

      function checkViewport() {
        features.forEach((feature) => {
          const position = feature.getBoundingClientRect();

          if (position.top < window.innerHeight - 100) {
            feature.classList.add('animate');
          }
        });
      }

      window.addEventListener('scroll', checkViewport);
      window.addEventListener('resize', checkViewport);
      checkViewport();
    }

    animateFeaturesOnScroll();