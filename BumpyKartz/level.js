'use strict'

// The Level class contains most of the assets.
class Level {

    constructor(game, number) {
        this.game = game;
        this.number = number;
        this.init();
    }

    init() {    // needs to be called each time a level is re-started
                // different level numbers should have different behavior
        this.predator = new Predator(this);
        this.player = new Player(this);
        this.safeArea = new SafeArea(this);



        this.numBoids = 100;
        this.boids = [];
        for(let i = 0; i < this.numBoids; i++)
          this.boids.push(new Boid(this));
    }

    run() {
        this.render();
        this.player.run();
        this.predator.run();
        this.safeArea.run();
        this.runBoids();
    }

    runBoids() {    // give every boid some time
        for(let i = 0; i < this.numBoids; i++)
            this.boids[i].run();
    }

    render() {
        // draw whatever
        // here is some place holder
      var playerLives = 5;
      var context = this.game.context;
      context.save();
      // draw a gray background
      context.fillStyle = "blue";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        // draw the level text
      var levelText = ["Zero", "One", "Two","Three"];
      context.fillStyle = "white";
      context.font = "48px sans-serif";
      context.fillText("Level " + levelText[this.number], 250,300);

      context.fillStyle = "green";
      context.fillRect(0, context.canvas.height - 130, context.canvas.width, 130);
      context.fillRect(0,0, 120, context.canvas.height);

      // Heath tiles
      context.fillStyle = "#C14242";
      for (let i = 0; i < playerLives; i++){
        context.rect(context.canvas.width - 208 + i*40, context.canvas.height - 100, 30, 70);
        context.fillRect(context.canvas.width - 208 + i*40, context.canvas.height - 100, 30, 70);
        context.stroke();
      }

      // money
      context.rect(context.canvas.width-320, context.canvas.height-110, 80, 90);
      context.fillStyle = "yellow";
      context.fillRect(context.canvas.width-320, context.canvas.height-110, 80, 90);

      context.fillStyle = "black";
      context.font = "30px Arial";
      context.fillText("Money", context.canvas.width-420, context.canvas.height-50);
    }

}
