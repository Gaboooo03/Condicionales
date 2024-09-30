let ratonX, ratonY;
let velocidadX, velocidadY;
let colorRaton;
let puntaje = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Posición inicial y velocidad del ratón
  ratonX = random(width);
  ratonY = random(height);
  velocidadX = random(-3, 3);
  velocidadY = random(-3, 3);
  
  // Color inicial del ratón
  colorRaton = color(random(255), random(255), random(255));
}

function draw() {
  background(220);
  
  // Mostrar puntaje
  textSize(24);
  text("Puntaje: " + puntaje, 10, 30);
  
  // Dibujar gato (siguiendo el mouse)
  fill(255, 0, 0);
  ellipse(mouseX, mouseY, 50);
  
  // Dibujar ratón (color aleatorio)
  fill(colorRaton);
  ellipse(ratonX, ratonY, 30);
  
  // Mover ratón
  ratonX += velocidadX;
  ratonY += velocidadY;
  
  // Rebote en bordes
  if (ratonX < 0 || ratonX > width) velocidadX *= -1;
  if (ratonY < 0 || ratonY > height) velocidadY *= -1;
  
  // Detectar colisión
  if (dist(mouseX, mouseY, ratonX, ratonY) < 40) {
    puntaje++;
    ratonX = random(width);
    ratonY = random(height);
    velocidadX = random(-20, 20);
    velocidadY = random(-20, 20);
    colorRaton = color(random(255), random(255), random(255)); // Cambiar color
  }
  
  // Verificar si ha ganado
  if (puntaje >= 10) {
    textSize(32);
    textAlign(CENTER, CENTER);
    text("¡Has ganado!", width / 2, height / 2);
    textAlign(CENTER, CENTER);
    text("¡reinicia para jugar de nuevo!", width / 6, height / 6);
    noLoop(); // Detener el juego
  }
}
