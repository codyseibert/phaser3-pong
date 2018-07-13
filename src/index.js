const Phaser = require('phaser');

const { preload } = require('./preload');
const { create } = require('./create');
const { update } = require('./update');

module.exports = new Phaser.Game({
  type: Phaser.WEBGL,
  parent: 'game',
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: true,
    },
  },
  scene: {
    preload,
    create,
    update,
    extend: {
      ball: null,
      leftPaddle: null,
      rightPaddle: null,
    },
  },
});
