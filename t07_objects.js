/********************************************************/
//t07_objects
/********************************************************/
// Ball 1 Object
var ball = {
xPos: 100,
yPos: 100,
speedX: 40,
speedY: 60,
diameter: 75,
};
//Circle 2 Object
var ball1 = {
xPos: 70,
yPos: 70,
speedX: 8,
speedY: 5,
diameter: 50, 
};


function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(220, 50);
  // 1st ball
  fill(0, 100, 200)
   ellipse(ball.xPos, ball.yPos, ball.diameter)
      ball.xPos = ball.xPos + ball.speedX
      ball.yPos = ball.yPos + ball.speedY
// Movement speed of 1st ball
   if(ball.xPos > (width - (ball.diameter / 2))){
      ball.speedX = ball.speedX * -1 ;
      ball.xPos = width - ball.diameter / 2;
   }else if(ball.xPos < (ball.diameter / 2)){
      ball.speedX = ball.speedX * -1;
      ball.xPos = ball.diameter / 2;
   }

   if(ball.yPos > (height - (ball.diameter / 2))){
      ball.speedY = ball.speedY * -1
      ball.yPos =  height - (ball.diameter / 2)
     
   }else if(ball.yPos < (ball.diameter / 2)){
      ball.speedY = ball.speedY * -1;
      ball.yPos = ball.diameter / 2;
     
   }


// 2nd Ball
/**** 
fill(0, 100, 100)
   ellipse(ball1.xPos, ball1.yPos, ball1.diameter)
// Movement speed of 2nd ball
   if(ball1.xPos >=  (width - (ball1.diameter / 2))){
      ball1.speedX = ball1.speedX * -1
   }else if(ball1.xPos <= (((width - width) + (ball1.diameter / 2)))){
      ball1.speedX = ball1.speedX * -1
   }

   if(ball1.yPos >=  (height - (ball1.diameter / 2))){
      ball1.speedY = ball1.speedY * -1
   }else if(ball1.yPos <= (((height - height) + (ball1.diameter / 2)))){
      ball1.speedY = ball1.speedY * -1
   }
   ball1.xPos = ball1.xPos + ball1.speedX
   ball1.yPos = ball1.yPos + ball1.speedY
 **/  
}