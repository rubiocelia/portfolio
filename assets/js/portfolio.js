document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".menu-tab");
  var galleryItems = document.querySelectorAll(".gallery__item");

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      var tabId = this.getAttribute("data-tab");

      tabs.forEach(function (t) {
        t.parentElement.classList.remove("portfolio__option--active");
      });
      this.parentElement.classList.add("portfolio__option--active");

      galleryItems.forEach(function (item) {
        if (item.getAttribute("data-tab") === tabId || tabId === "all") {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
});
