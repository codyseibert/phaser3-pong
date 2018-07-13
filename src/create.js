const {
  createBall,
  createLeftPaddle,
  createRightPaddle,
} = require('./objects');

const {
  setupPaddleControls,
} = require('./controls');

module.exports.create = function create() {
  this.cameras.main.zoom = 1.0;

  this.physics.world.setBounds(0, 0, 800, 600);

  createLeftPaddle.call(this);
  createRightPaddle.call(this);
  createBall.call(this);

  setupPaddleControls.call(this);
}