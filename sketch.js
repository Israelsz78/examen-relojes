let horaLaPaz = 0; 
let horaCDMX = 0; 
let horaBarcelona = 0; 

function setup() {
  createCanvas(800, 400);
  angleMode(DEGREES);
  textAlign(CENTER, CENTER);
  textSize(20);

let now = new Date();
  let currentHour = now.getHours();
  let currentMinute = now.getMinutes();
  
  horaLaPaz = currentHour + currentMinute / 60;
  horaCDMX = (horaLaPaz + 1) % 24; 
  horaBarcelona = (horaLaPaz + 8) % 24;
  
  updateHora();
}

function draw() {
  background(255);

  drawClock(width * 0.25, height / 2, horaLaPaz);
  text("La Paz, BCS", width * 0.25, height * 0.8);

  drawClock(width * 0.5, height / 2, horaCDMX);
  text("Ciudad de México", width * 0.5, height * 0.8);

  drawClock(width * 0.75, height / 2, horaBarcelona);
  text("Barcelona, España", width * 0.75, height * 0.8);
}

function drawClock(x, y, hora) {
  stroke(0);
  strokeWeight(2);
  noFill();
  ellipse(x, y, 200);

  let horaAng = map(hora % 12, 0, 12, -90, 270);
  let minAng = map((hora % 1) * 60, 0, 60, -90, 270);

  let secAng = map(second(), 0, 60, 0, 360);
  secAng -= 90;
  
  drawHand(x, y, 70, horaAng, 6);
  drawHand(x, y, 90, minAng, 4); 
  drawHand(x, y, 80, secAng, 2); 
}

function drawHand(x, y, len, angle, weight) {
  let endX = x + cos(angle) * len;
  let endY = y + sin(angle) * len;
  strokeWeight(weight);
  line(x, y, endX, endY);
  
}

function updateHora() {
  let timeValue = document.getElementById('timeInput').value;
  let timeArray = timeValue.split(':');

  if (timeArray.length === 2) {
    let newHour = parseInt(timeArray[0]);
    let newMinute = parseInt(timeArray[1]);

    if (!isNaN(newHour) && newHour >= 0 && newHour <= 23 &&
        !isNaN(newMinute) && newMinute >= 0 && newMinute <= 59) {
      horaLaPaz = newHour + newMinute / 60; 
      horaCDMX = (horaLaPaz + 1) % 24; 
      horaBarcelona = (horaLaPaz + 8) % 24; 
      
      redraw();
      
    }
  }
}


