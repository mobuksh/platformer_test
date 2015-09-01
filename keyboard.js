/**
 * Created by mrcheese on 25/08/15.
 */

var keyboard = function () {
    var self = this;
    window.addEventListener('keydown', function (evt) {self.onKeyDown(evt);}, false)
    window.addEventListener('keyup', function (evt) {self.onKeyUp(evt);}, false)
    this.keyListeners = new Array();
    this.keys = new Array();
    this.KEY_SPACE = 32;
    this.KEY_LEFT = 37;
    this.KEY_RIGHT = 39;
    this.KEY_UP = 38;
    this.KEY_DOWN = 40;
    this.KEY_A = 65;
    this.KEY_D = 68;
    this.KEY_S = 83;
    this.KEY_W = 87;
    this.KEY_SHIFT = 16;

}

keyboard.prototype.onKeyDown = function(evt) {
    this.keys[evt.keyCode] = true;
};

keyboard.prototype.onKeyUp = function(evt) {
    this.keys[evt.keyCode] = false;
};

keyboard.prototype.isKeyDown = function(evt) {
    return this.keys[evt.keyCode];
};


