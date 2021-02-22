/********************************************************/
//t10_array_of_objects.js
/********************************************************/
// Ball 1 Object
var ball = [];

// Start of code
function setup() {
  createCanvas(400, 400);
  for (i = 0; i < 4; i++) {
    ball[i] = {
      xPos: random(0, width),
      yPos: random(0, height),
      speedX: random(5, 10),
      speedY: random(5, 10),
      red: random(0, 255),
      green: random(0, 255),
      blue: random(0, 255),
      transparency(0,255)
      diameter: 50,
      display: function () {
        fill(this.red,this.green,this.blue,this.transparency)
        m_ball(this.xPos, this.yPos, this.diameter);
      },
      move: function () {
        this.xPos = this.xPos + this.speedX;
        this.yPos = this.yPos + this.speedY;
      },
      bounce: function () {
        //Movement speed of 1st ball xPos
        if (this.xPos >= (width - (this.diameter / 2))) {
          this.speedX = this.speedX * -1;
          this.xPos = width - (this.diameter / 2);
        } else if (this.xPos <= (this.diameter / 2)) {
          this.speedX = this.speedX * -1;
          this.xPos = this.diameter / 2;
        }
        // Movement speed of 1st ball yPos
        if (this.yPos >= (height - (this.diameter / 2))) {
          this.speedY = this.speedY * -1;
          this.yPos = height - (this.diameter / 2);
        } else if (this.yPos <= (this.diameter / 2)) {
          this.speedY = this.speedY * -1;
          this.yPos = this.diameter / 2;
        }
      }
    }
  }
  // Creating a slider
  slider = createSlider(50, 200, 0, 1);
  slider.position(10, 10)
}
// Draws all the function called in this loop
function draw() {
  background(200, 200, 200);
  for (i = 0; i < 4; i++) {
    ball[i].move();
    ball[i].display();
    ball[i].bounce();
    // Increases the ball size
    ball[i].diameter = slider.value()
  }
}

//Function to make the ball
function m_ball(x, y, diameter) {
  ellipse(x, y, diameter);
}