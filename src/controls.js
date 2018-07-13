module.exports.setupPaddleControls = function setupPaddleControls() {
  const velocity = 500;
  this.input.keyboard.on('keydown_W', () => {
    this.leftPaddle.setVelocityY(-1 * velocity);
  });

  this.input.keyboard.on('keydown_S', () => {
    this.leftPaddle.setVelocityY(velocity);
  });

  this.input.keyboard.on('keyup_W', () => {
    this.leftPaddle.setVelocityY(0);
  });

  this.input.keyboard.on('keyup_S', () => {
    this.leftPaddle.setVelocityY(0);
  });
}