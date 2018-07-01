var Aufgabe11;
(function (Aufgabe11) {
    class Bigfish {
        // declare method without keyword function
        move() {
            this.x += 1;
            if (this.x > 660) {
                this.x = -75;
            }
        }
        draw() {
            Aufgabe11.crc2.beginPath();
            Aufgabe11.crc2.moveTo(this.x, this.y);
            Aufgabe11.crc2.bezierCurveTo(this.x + 120, this.y + 110, this.x + 130, this.y + -60, this.x, this.y + 30);
            Aufgabe11.crc2.lineTo(this.x, this.y);
            Aufgabe11.crc2.fillStyle = "rgba(100,20,30)";
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.closePath();
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Bigfish = Bigfish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=bigfish.js.map