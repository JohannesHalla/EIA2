var Aufgabe11;
(function (Aufgabe11) {
    class Fish extends Aufgabe11.MovingObjects {
        // declare method without keyword function
        constructor() {
            super();
        }
        position() {
            this.x = Math.random() * Aufgabe11.crc2.canvas.width;
            this.y = Math.random() * 250;
        }
        colour() {
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
            Aufgabe11.crc2.moveTo(80, 45);
            Aufgabe11.crc2.quadraticCurveTo(65, 45, 70, 60);
            Aufgabe11.crc2.quadraticCurveTo(60, 75, 80, 78);
            Aufgabe11.crc2.quadraticCurveTo(90, 90, 100, 83);
            Aufgabe11.crc2.quadraticCurveTo(110, 90, 120, 79);
            Aufgabe11.crc2.quadraticCurveTo(135, 79, 130, 60);
            Aufgabe11.crc2.quadraticCurveTo(130, 50, 120, 45);
            Aufgabe11.crc2.quadraticCurveTo(110, 30, 100, 42);
            Aufgabe11.crc2.quadraticCurveTo(90, 30, 80, 45);
            Aufgabe11.crc2.moveTo(120, 45);
            Aufgabe11.crc2.lineTo(130, 40);
            Aufgabe11.crc2.quadraticCurveTo(138, 50, 140, 50);
            Aufgabe11.crc2.quadraticCurveTo(150, 55, 150, 43);
            Aufgabe11.crc2.quadraticCurveTo(150, 25, 140, 25);
            Aufgabe11.crc2.quadraticCurveTo(125, 22, 130, 40);
            Aufgabe11.crc2.moveTo(75, 77);
            Aufgabe11.crc2.lineTo(70, 100);
            Aufgabe11.crc2.moveTo(80, 78);
            Aufgabe11.crc2.lineTo(90, 98);
            Aufgabe11.crc2.moveTo(120, 79);
            Aufgabe11.crc2.lineTo(115, 100);
            Aufgabe11.crc2.moveTo(122, 78);
            Aufgabe11.crc2.lineTo(130, 98);
            Aufgabe11.crc2.moveTo(138, 35);
            Aufgabe11.crc2.arc(138, 35, 1, 0 * Math.PI, 1.5 * Math.PI);
            Aufgabe11.crc2.moveTo(144, 33);
            Aufgabe11.crc2.arc(144, 33, 1, 0 * Math.PI, 1.5 * Math.PI);
            Aufgabe11.crc2.moveTo(140, 25);
            Aufgabe11.crc2.quadraticCurveTo(165, 30, 145, 28);
            Aufgabe11.crc2.moveTo(130, 27);
            Aufgabe11.crc2.quadraticCurveTo(110, 40, 128, 30);
            Aufgabe11.crc2.fillStyle = '#ffffff';
            Aufgabe11.crc2.fill();
            Aufgabe11.crc2.strokeStyle = '#000000';
            Aufgabe11.crc2.stroke();
        }
    }
    Aufgabe11.Fish = Fish;
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=fish.js.map