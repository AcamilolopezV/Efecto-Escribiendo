const typed = new Typed('.typed', {
  // strings : [
  //   '<i class="dev">Tecnología</i>', 
  //   '<i class="dev">Software</i>',
  //   '<i class="dev">Aplicaciones Web</i>',
  //   '<i class="dev">Gadgets</i>',
  //   '<i class="dev">Telefonía Movil</i>',
  //   '<i class="dev">Cursos Online</i>'],
    
      stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
      typeSpeed: 60, // Velocidad en mlisegundos para poner una letra,
      startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
      backSpeed: 60, // Velocidad en milisegundos para borrrar una letra,
      smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
      shuffle: false, // Alterar el orden en el que escribe las palabras.
      backDelay: 1000, // Tiempo de espera despues de que termina de escribir una palabra.
      loop: true, // Repetir el array de strings
      loopCount: false, // Cantidad de veces a repetir el array.  false = infinite si quieres que se repita 3 o cualquier candidad
      showCursor: true, // Mostrar cursor palpitanto
      cursorChar: ' @', // Caracter para el cursor
      contentType: 'html', // 'html' o 'null' para texto sin formato -  que se escriba en codigo o normal
});