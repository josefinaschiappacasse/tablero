
let sketch
function setup() {
 sketch = createCanvas(800, 800);
 sketch.parent("p5");
 background(255);

}

function draw() {
  tablero(); 
  fill("white");
  ficha(50, 750, 85);
  ficha(250, 750, 85);
  ficha(450, 750, 85);
  ficha(650, 750, 85);
  ficha(150, 650, 85);
  ficha(350, 650, 85);
  ficha(550, 650, 85);
  ficha(750, 650, 85);
  ficha(50, 550, 85);
  ficha(250, 550, 85);
  ficha(450, 550, 85);
  ficha(650, 550, 85);
  
  fill("red");
  ficha(150, 50, 85);
  ficha(350, 50, 85);
  ficha(550, 50, 85);
  ficha(750, 50, 85);
  ficha(50, 150, 85);
  ficha(250, 150, 85);
  ficha(450, 150, 85);
  ficha(650, 150, 85);
  ficha(150, 250, 85);
  ficha(350, 250, 85);
  ficha(550, 250, 85);
  ficha(750, 250, 85);
  

}

function tablero() {
  var ancho_celda = width / 8;
  var alto_celda = height / 8;

  //8 filas
  for (var j = 0; j < 8; j++) {

    //colores de la fila
    var color_celda_par;
    var color_celda_impar;
    if (j % 2 == 0) {
      //fila par 
      color_celda_par = color(155, 155, 155);
      color_celda_impar = 0;
    } else {
      //fila impar 
      color_celda_par = 0;
      color_celda_impar = color(155, 155, 155);
    }

    // una fila
    for (var i = 0; i < 8; i++) {
      //si el módulo del contador de la fila es par
      if (i % 2 == 0) {
        // Si el residuo es 0 es par
        fill(color_celda_par)
      } else {
        // Si el residuo es diferente de 0 es impar
        fill(color_celda_impar)
      }
      // Dibujamos un cuadrado
      rect(i * ancho_celda, j * alto_celda, ancho_celda, alto_celda)
    }
  }
}

function ficha(x, y, diametro) {

  //pintar ficha
 
  stroke(181, 184, 177);
  strokeWeight(1);
  ellipse(x, y, diametro);


}