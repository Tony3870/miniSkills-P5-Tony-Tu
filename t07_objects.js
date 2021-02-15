/********************************************************/
//t07_objects
/********************************************************/

var ball = {
xPos: 50,
yPos: 50,
speedX: 5,
speedY: 7,
diameter: 50,
};
//Circle 2 Object
circle1 = {
x: 70,
y: 70,
speedX: 5,
speedY: 7,
diameter: 75, 
};


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  // 1st ciccle

ellipse(ball.xPos, ball.yPos, ball.diameter)

   if(ball.xPos >=  (width - (ball.diameter / 2))){
      ball.speedX = ball.speedX * -1
   }else if(ball.xPos <= (((width - width) + (ball.diameter / 2)))){
      ball.speedX = ball.speedX * -1
   }

   if(ball.yPos >=  (height - (ball.diameter / 2))){
      ball.speedY = ball.speedY * -1
   }else if(ball.yPos <= (((height - height) + (ball.diameter / 2)))){
      ball.speedY = ball.speedY * -1
   }
   ball.xPos = ball.xPos + ball.speedX
   ball.yPos = ball.yPos + ball.speedY
   
}