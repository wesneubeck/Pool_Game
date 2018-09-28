

function Vector2(x, y){

    this.x = x;
    this.y = y;
}

Vector2.prototype.copy = function () {
    return new Vector2(this.x, this.y);
}





