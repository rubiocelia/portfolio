document.addEventListener("DOMContentLoaded", function () {
  var tabs = document.querySelectorAll(".menu-tab"); // Seleccionamos todas las pestañas
  var galleryItems = document.querySelectorAll(".gallery__item"); // Seleccionamos todos los elementos de la galería

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento por defecto del enlace

      var tabId = this.getAttribute("data-tab"); // Obtenemos el atributo data-tab de la pestaña seleccionada

      // Cambiar la clase activa en las pestañas
      tabs.forEach(function (t) {
        t.parentElement.classList.remove("portfolio__option--active");
      });
      this.parentElement.classList.add("portfolio__option--active");

      // Mostrar u ocultar los elementos de la galería según la pestaña seleccionada
      galleryItems.forEach(function (item) {
        if (item.getAttribute("data-tab") === tabId || tabId === "all") {
          item.classList.remove("hidden"); // Mostrar el item
        } else {
          item.classList.add("hidden"); // Ocultar el item
        }
      });
    });
  });
});
