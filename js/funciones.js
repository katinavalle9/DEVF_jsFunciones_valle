/* Deberas realizar un semáforo utilizando JS.
El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
Se debe respetar el orden de los colores:
De rojo pasa a Verde.
De amarillo puede pasar a Rojo.
De Verde pasa a Amarillo */

function semaforo() {
  setTimeout(function () {
    document.write(
      '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="green"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg.green{fill:#068920}</style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>'
    );

    setTimeout(function () {
      document.write(
        '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="yellow"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg.yellow{fill:#eddb0c}</style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>'
      );

      setTimeout(function () {
        document.write(
          '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="red"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg.red{fill:#f12009}</style><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>'
        );
        semaforo();
      }, 1000);
    }, 1000);
  }, 1000);
}

semaforo();
