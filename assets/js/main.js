var menuIcon = document.querySelector(".menu-icon");
var sideBar = document.querySelector(".sidebar");
var mainContent = document.querySelector(".main-content");

// menuIcon.onclick = function () {
//   sideBar.classList.toggle("small-sidebar");
// };

// @ts-ignore
menuIcon.onclick = function () {
  sideBar.classList.toggle("small-sidebar");
  mainContent.classList.toggle("large-main-content");
};
