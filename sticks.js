
const STICK_ORIGIN = new Vector2(970, 11)

function Stick (position) {

    this.position = position;
    this.rotation = 0;
    this.origin = STICK_ORIGIN.copy();
    this.power = 0;
}

Stick.prototype.update = function () {

    if(Mouse.left.down){
        this.increasePower();
    }
    
    this.updateRotation();
}

Stick.prototype.draw = function () {
    Canvas.drawImage(sprites.stick, this.position, this.origin, this.rotation);
}

Stick.prototype.updateRotation = function () {

    let opposite = Mouse.position.y - this.position.y;
    let adjacent = Mouse.position.x - this.position.x;

    this.rotation = Math.atan2(opposite, adjacent);
}

Stick.prototype.increasePower = function() {

    this.power += 100;
    this.origin.x += 5;
}
