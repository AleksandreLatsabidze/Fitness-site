var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Add Active Class to Current Element *************
var ul = document.getElementById("myUL");
var links = ul.getElementsByClassName("nav-link");

for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function (event) {
    event.preventDefault();
    for (var j = 0; j < links.length; j++) {
      links[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}
//****************************************************
// document.querySelectorAll(".filter-link").forEach((link) => {
//   link.addEventListener("click", function (e) {
//     e.preventDefault();
//     filterSelection(this.getAttribute("data-filter"));
//   });
// });

// function filterSelection(filter) {
//   var rows = document.querySelectorAll("#filterTable .filterDiv");
//   rows.forEach((row) => {
//     if (filter === "all" || row.classList.contains(filter)) {
//       row.classList.remove("hidden");
//     } else {
//       row.classList.add("hidden");
//     }
//   });

//   updateActiveLink(filter);
// }

// function updateActiveLink(filter) {
//   document.querySelectorAll(".filter-link").forEach((link) => {
//     link.classList.toggle(
//       "active",
//       link.getAttribute("data-filter") === filter
//     );
//   });
// }
