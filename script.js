// Loading Animation

<<<<<<< HEAD
=======
window.onload = function () {
  fetch("nav1.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-container").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error fetching navbar:", error);
    });
};
>>>>>>> ac21ef0 (Initial commit)

// Page 6 Animation
function page6Animations() {
  gsap.from("#btm6-part2 h4", {
    x: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#btm6-part2",
      scroller: "#main",
      start: "top 80%",
      end: "top 10%",
<<<<<<< HEAD
      scrub: true
    }
=======
      scrub: true,
    },
>>>>>>> ac21ef0 (Initial commit)
  });
}

const dropdown = document.querySelector(".dropdown");
const backdrop = document.querySelector("#nav-backdrop");

<<<<<<< HEAD
dropdown.addEventListener("mouseenter", () => {
  backdrop.style.display = "block";
});

dropdown.addEventListener("mouseleave", () => {
  backdrop.style.display = "none";
});
=======
// dropdown.addEventListener("mouseenter", () => {
//   backdrop.style.display = "block";
// });

// dropdown.addEventListener("mouseleave", () => {
//   backdrop.style.display = "none";
// });
>>>>>>> ac21ef0 (Initial commit)

var sections = document.querySelectorAll(".sec-right");

sections.forEach(function (elem) {
  const video = elem.querySelector("video");

  elem.addEventListener("mouseenter", function () {
    video.style.opacity = "1";
    video.play();
  });

  elem.addEventListener("mouseleave", function () {
    video.style.opacity = "0";
    video.load(); // resets the video
  });
});
<<<<<<< HEAD
loadingAnimation();
page6Animations();
=======
// loadingAnimation();
page6Animations();

// byVar
// const details = document.getElementById('details-w');
// details.addEventListener('toggle', function () {
//   if (!details.open) {
//     details.open = true; // Reopen if someone tries to close it
//   }
// });

function toggleMenu() {
  mobileMenu.classList.toggle('show');
  // document.getElementById('nav-backdrop').style.display = mobileMenu.classList.contains('show') ? 'block' : 'none';
}

//
// const ids = ["w", "seo", "ppc","m", "inf", "wm","ba", "np", "bb"]; // Example: identifiers for different accordions

// ids.forEach((id) => {
//   console.log('id:', id)
  
  
// });

// const details = document.getElementById(`details-w`);
// const summary = details.querySelector(`#summary-w`);
// const content = details.querySelector(`.content-w`);

// summary.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (!details.classList.contains("open")) {
//     details.classList.add("open");
//     content.style.maxHeight = content.scrollHeight + "px";
//     details.setAttribute("open", true);
//   } else {
//     content.style.maxHeight = content.scrollHeight + "px";
//     requestAnimationFrame(() => {
//       content.style.maxHeight = "0";
//     });

//     content.addEventListener(
//       "transitionend",
//       function handler() {
//         details.removeAttribute("open");
//         details.classList.remove("open");
//         content.removeEventListener("transitionend", handler);
//       }
//     );
//   }
// });

document.querySelector('.cta-button').addEventListener('click', function(e) {
  e.preventDefault();
  
  const button = this;
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  ripple.style.width = ripple.style.height = Math.max(button.offsetWidth, button.offsetHeight) + 'px';
  ripple.style.left = (e.offsetX - button.offsetWidth/2) + 'px';
  ripple.style.top = (e.offsetY - button.offsetHeight/2) + 'px';
  ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
  
  button.appendChild(ripple);
  
  setTimeout(() => {
      ripple.remove();
  }, 600);
});

// Make shapes slightly interactive
document.addEventListener('mousemove', function(e) {
  const shapes = document.querySelectorAll('.shape');
  const mouseX = e.clientX / window.innerWidth;
  const mouseY = e.clientY / window.innerHeight;
  
  shapes.forEach((shape, index) => {
      // Each shape reacts slightly differently
      const moveFactor = index % 2 === 0 ? 0.01 : -0.02;
      const currentLeft = parseFloat(shape.style.left || getComputedStyle(shape).left);
      const currentTop = parseFloat(shape.style.top || getComputedStyle(shape).top);
      
      shape.style.left = `calc(${currentLeft}px + ${(mouseX - 0.5) * moveFactor * 100}px)`;
      shape.style.top = `calc(${currentTop}px + ${(mouseY - 0.5) * moveFactor * 100}px)`;
  });
});
>>>>>>> ac21ef0 (Initial commit)
