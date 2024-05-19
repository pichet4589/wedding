document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.getElementById("about");
  const leftBox = document.querySelector(".slide-in-left");
  const rightBox = document.querySelector(".slide-in-right");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log("entry", entry);
      if (entry.isIntersecting) {
        leftBox.classList.add("slide-in-left-active");
        rightBox.classList.add("slide-in-right-active");
      }
    });
  });

  observer.observe(aboutSection);
});
