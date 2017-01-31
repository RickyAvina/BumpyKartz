'use strict'

// wait for the window to load and than call back setup()
window.addEventListener('load', setup, false);

var game;   // the global game object
const FRAME_RATE=30;

function setup() {
  game = new Game();
  window.setTimeout(draw, 100);    // wait 100ms for resources to load then start draw loop
}

function draw() {   // the animation loop
    game.run();
    window.setTimeout(draw, 1000/FRAME_RATE);  // come back here every interval
}

// Game is the top level object and it contains the levels
class Game {

  constructor() {   // from setup()
    this.isRunning = true;
    this.canvas =  document.getElementById('canvas');
  	if (!this.canvas || !this.canvas.getContext)
        throw "No valid canvas found!";
    this.context = this.canvas.getContext("2d");
    if(!this.context)
        throw "No valid context found!";
    this.levels = [];
    this.numLevels = 1;     // for now
    this.currentLevel = 1;
    for(let i = 0; i < this.numLevels; i++)
        this.levels.push(new Level(this, i+1));
  }


  run() {       // called from draw()
    if(this.isRunning) {
        this.render();
        this.levels[this.currentLevel-1].run();  // run the current level
    }
  }

  render() {    // draw whatever
    
  }

}
