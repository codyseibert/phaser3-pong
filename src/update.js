const {
  WIDTH,
  HEIGHT,
  BALL_SPEED,
} = require('./constants');

function runPaddleAI() {
  if (this.ball.y > this.rightPaddle.y) {
    this.rightPaddle.setVelocityY(500);
  } else {
    this.rightPaddle.setVelocityY(-500);
  }
}

function resetBall() {
  this.ball.x = WIDTH / 2;
  this.ball.y = HEIGHT / 2;
  this.ball.setVelocity(-BALL_SPEED, BALL_SPEED);
}

function checkForEndGame() {
  if (this.ball.x <= 20) {
    alert('Game Over: You Lost!');
    resetBall.call(this);
  } else if (this.ball.x >= this.width - 20) {
    alert('Game Over: You Won!');
    resetBall.call(this);
  }
}

module.exports.update = function update() {
  runPaddleAI.call(this);
  checkForEndGame.call(this);
}