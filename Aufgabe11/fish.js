var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        // declare method without keyword function
        constructor() {
            super();
        }
        setPosition() {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = Math.random() * 180;
        }
        setColor() {
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }
        move() {
            this.x -= 1.5;
            if (this.x < 1) {
                this.x = 650;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.bezierCurveTo(this.x + -80, this.y + -60, this.x + -80, this.y + 30, this.x, this.y + -20);
            Aufgabe11.crc2.lineTo(this.x, this.y);
            Aufgabe11.crc2.fillStyle = "rgba(255,215,0)";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fish.js.map