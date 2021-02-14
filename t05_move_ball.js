/********************************************************/
t05_move_ball
/********************************************************/
 var m_ballX = 50
 var m_ballY = 50
function setup() {
  createCanvas(400, 400);
}

function draw() {
   background(200);
    m_ballX = m_ballX + 1
    m_ballY = m_ballY + 1
    var m_ball = ellipse(m_ballX, m_ballY, 100, 100)
   


  }