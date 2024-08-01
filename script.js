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
//******************FilterTable**********************************
var getClassName = function () {
  document.onclick = function (e) {
    if (e.target.classList.contains("filter-link")) {
      var className = e.target.getAttribute("data-filter");
      // Alert the value

      if (className == "1") {
        var elements = document.querySelectorAll(".Dnone");

        elements.forEach(function (element) {
          element.style.display = "block";
        });
      } else {
        var elements = document.querySelectorAll(".Dnone");

        elements.forEach(function (element) {
          element.style.display = "none";
        });
      }

      var elements1 = document.querySelectorAll(".filter-" + className);

      elements1.forEach(function (element2) {
        element2.style.display = "block";
      });
    }
  };
};

getClassName();
// ******************FilterTable*********************************
