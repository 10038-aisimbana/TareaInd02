$(document).ready(function() {
      // Desactivar todos los elementos de la lista
      $(".dropdown-menu li").addClass("disabled");

      // Activar el elemento "Grupo 3"
      $(".dropdown-menu li a:contains('Grupo 3')").parent().removeClass("disabled");
    });
