const togg = document.querySelector("#toggle");
const side = document.querySelector(".sidebar");
const siderem = document.querySelector("#sidecross");

togg.addEventListener("click", function toggle() {
  side.classList.toggle("active");
  side.style.left = 0;
});
siderem.addEventListener("click", function toggle() {
  side.classList.remove("active");
  side.style.left = "-100%";
});

// document.body.addEventListener("click", function (customEvent) {
//   // Check if the click was outside the hamburger menu and close the menu if it's open
//   if (
//     !side.contains(customEvent.target) ||
//     !togg.contains(customEvent.target)
//   ) {
//     side.classList.remove("active");
//     side.style.opacity = "0";
//   }
// });
