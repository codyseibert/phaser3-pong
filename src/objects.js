const { increaseBallVelocity } = require('./actions');

const {
  WIDTH,
  HEIGHT,
  BALL_SPEED,
} = require('./constants');

module.exports.createBall = function createBall() {
  this.ball = this.physics.add
    .sprite(WIDTH / 2, HEIGHT / 2, 'ball')
    .setOrigin(0.5, 0.5)
    .setDisplaySize(25, 25)
    .setCollideWorldBounds(true)
    .setBounce(1);
  this.ball.body.setVelocityX(-BALL_SPEED);
  this.ball.body.setVelocityY(BALL_SPEED);

  this.physics.add.collider(this.leftPaddle, this.ball, increaseBallVelocity.bind(this));
  this.physics.add.collider(this.rightPaddle, this.ball, increaseBallVelocity.bind(this));
}

module.exports.createLeftPaddle = function createLeftPaddle() {
  this.leftPaddle = this.physics.add
    .sprite(30, 300, 'paddle')
    .setOrigin(0.5, 0.5)
    .setDisplaySize(24, 104)
    .setCollideWorldBounds(true)
    .setImmovable(true);
}

module.exports.createRightPaddle = function createRightPaddle() {
  this.rightPaddle = this.physics.add
    .sprite(770, 300, 'paddle')
    .setOrigin(0.5, 0.5)
    .setDisplaySize(24, 104)
    .setCollideWorldBounds(true)
    .setImmovable(true);
}
