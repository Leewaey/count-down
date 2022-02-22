// Set the date we're counting down to
var countDownDate = new Date("Mar 15, 2022 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  (scrollLeft = window.pageXOffset || document.documentElement.scrollLeft),
    // if any scroll is attempted,
    // set this to the previous value
    (window.onscroll = function () {
      window.scrollTo(scrollLeft, scrollTop);
    });
}
function enableScroll() {
  window.onscroll = function () {};
}

document.getElementById("button").addEventListener("click", () => {
  document.querySelector(".bg-modal").style.display = "flex";
  document.querySelector(".bg-modal-2").style.display = "flex";
  window.scrollTo(0, 0);
});
document.querySelector(".close").addEventListener("click", () => {
  document.querySelector(".bg-modal").style.display = "none";
  document.querySelector(".bg-modal-2").style.display = "none";
});
document.querySelector(".button").addEventListener("click", () => {
  document.querySelector(".bg-modal").style.display = "none";
  document.querySelector(".bg-modal-2").style.display = "none";
  alert("thank you");
});

// Animation using GSAP
gsap.from(".logo", { duration: 1.5, x: -200, opacity: 0, ease: "ease-in" });
gsap.from(".object-one", {
  duration: 2,
  y: -200,
  opacity: 0,
  ease: "ease-in",
});
gsap.from(".object-two", {
  duration: 2,
  y: 200,
  opacity: 0,
  ease: "ease-in",
});
gsap.from(".image-container", {
  duration: 1.5,
  x: 200,
  ease: "ease-in",
});
gsap.from(".heading", {
  duration: 1.5,
  x: -200,
  opacity: 0,
  ease: "ease-in",
  delay: 0.5,
});
gsap.from(".left", {
  duration: 1.5,
  x: -200,
  opacity: 0,
  ease: "ease-in",
  delay: 1,
});
gsap.from("#button", {
  duration: 1,
  x: -200,
  opacity: 0,
  ease: "ease-in",
  delay: 1.5,
});

gsap.from(".test", {
  scrollTrigger: {
    trigger: ".test",
  },
  opacity: 0,
  duration: 1,
  x: -200,
  ease: "ease-in",
});
gsap.from(".container-two-heading", {
  scrollTrigger: {
    trigger: ".test",
  },
  opacity: 0,
  duration: 1,
  x: 200,
  ease: "ease-in",
  delay: 0.2,
});
gsap.from("hr", {
  scrollTrigger: {
    trigger: ".test",
  },
  opacity: 0,
  duration: 1,
  x: 200,
  ease: "ease-in",
  delay: 0.2,
});
gsap.from(".container-two-content", {
  scrollTrigger: {
    trigger: ".test",
  },
  opacity: 0,
  duration: 1.5,
  x: -200,
  ease: "ease-in",
  delay: 0.2,
});
gsap.from(".object-three", {
  scrollTrigger: {
    trigger: ".container-two-content",
  },
  opacity: 0,
  duration: 2,
  y: 200,
  x: 100,
  ease: "ease-in",
  delay: 0.5,
});
