/********************************************************/
//
/********************************************************/
 var m_ballX = 50
 var m_ballY = 50
 var bSpeedX = 4
 var bSpeedY = 7
function setup() {
  createCanvas(400, 400);
}

function draw() {
   background(200);
    var m_ball = ellipse(m_ballX, m_ballY, 50, 50)

      if(m_ballX >= 375){
      bSpeedX = bSpeedX * -1
   }else if(m_ballX <= 25){
      bSpeedX = bSpeedX * -1
   }

     if(m_ballY >= 375){
      bSpeedY = bSpeedY * -1
   }else if(m_ballY <= 25){
      bSpeedY = bSpeedY * -1
   }
   m_ballX = m_ballX + bSpeedX
   m_ballY = m_ballY + bSpeedY
  }
