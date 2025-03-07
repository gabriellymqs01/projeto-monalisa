function setup() {
    createCanvas(400, 400);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("black");
    fill("pink");
    circle(250, 260, 300); // rosto
    fill("with");
    circle(250, 150, 60); // olho esquerdo
    circle(150, 150, 60); // olho direito
    line(190, 300, 250, 235); // boca
    fill("red");
    triangle(150, 189, 180, 220, 220, 220); // nariz
    line(123, 115, 178, 113); // sobrancelha esquerda
    line(123, 115, 279, 106); // sobrancelha direita
    // circle(300,150,10); // pupila esquerda
    //circle(250,150,10); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 40); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 40); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }