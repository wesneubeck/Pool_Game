
function Canvas2D () {
    this._canvas = document.getElementById("screen");
    this._canvasContext = this._canvas.getContext("2d");
}

//creating a way to clear the canvas
Canvas2D.prototype.clear = function () {
    this._canvasContext.clearRect(0, 0, this._canvas.width, this._canvas.height);
}

//creating a draw image method for the canvas
//going to pass a image and its position to the drawn
Canvas2D.prototype.drawImage = function (image, position, origin, rotation = 0) {

    if (!position) {
        position = new Vector2();
    }

    if (!origin) {
        origin = new Vector2();
    }

    this._canvasContext.save();
    this._canvasContext.translate(position.x, position.y);
    this._canvasContext.rotate(rotation);
    this._canvasContext.drawImage(image, -origin.x, -origin.y);
    this._canvasContext.restore();
} 

let Canvas = new Canvas2D();
