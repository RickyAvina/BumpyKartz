'use strict'

class Predator extends Mover {
    constructor(level) {
        super();               // required
        this.level = level;  // access to all the other objects.  e.g. this.level.boids or this.level.game.canvas
        // other Predator properties
    }
    run() {
        // do whatever actions
        this.render();
        }
    render() {
        // draw whatever
        }
    // other Predator methods ...
}