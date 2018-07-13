const game = require('./index');

module.exports.preload = function preload() {
  this.load.image('ball', 'assets/ball.png');
  this.load.image('paddle', 'assets/paddle.png');
};