'use strict'

class SafeArea {
    constructor(level) {
        this.level = level;  // access to all the other objects.  e.g. this.level.boids or this.level.game.canvas
        // other SafeArea properties
        this.boids = [];    // the safe area may contain boids that are within its bounds
    }
    run() {
        // do whatever actions
        this.render();
        }
    render() {
        // draw whatever
        }
    // other SafeArea methods ...
}