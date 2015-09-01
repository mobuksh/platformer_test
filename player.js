/**
 * Created by mrcheese on 25/08/15.
 */
var player = function() {
    this.image = document.createElement("img");
    this.image.src = "hero.png";
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.rotation = 0;
}

player.prototype.update = function (deltaTime) {
    //if (typeof(this.rotation == "undefined")) {
    //    this.rotation = 0;
    //}

    if (input_keyboard.isKeyDown(input_keyboard.KEY_SPACE)) {
        this.rotation -= deltaTime;
    } else {
        this.rotation += deltaTime;
    }
}

player.prototype.draw = function() {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(this.image, -this.image.width/2, -this.image.height/2);
    context.restore();
}