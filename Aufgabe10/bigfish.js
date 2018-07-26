var Aufgabe10;
(function (Aufgabe10) {
    class Bigfish {
        constructor() {
            this.speed = 3;
        }
        // declare method without keyword function
        move() {
            this.x -= this.speed;
        }
        draw() {
            //hitbox
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x, this.y);
            Aufgabe10.crc2.lineTo(this.x, this.y + 75);
            Aufgabe10.crc2.lineTo(this.x + 143, this.y + 75);
            Aufgabe10.crc2.lineTo(this.x + 143, this.y);
            Aufgabe10.crc2.closePath();
            //Main.crc2.stroke();   //Hitbox anzeigen
            //Wolfkörper
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.moveTo(this.x + 40, this.y + 25);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 40 + 120, this.y + 25 - 30, this.x + 40 + 100, this.y + 25 + 50);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 40 + 80, this.y + 25 - 20, this.x + 40, this.y + 25 + 50);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 40 + 10, this.y + 25 + 25, this.x + 40, this.y + 25);
            //Kopf         
            Aufgabe10.crc2.lineTo(this.x + 40 - 10, this.y + 25 - 10);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 40 - 20, this.y + 25 - 20, this.x + 40 - 25, this.y + 25 - 15);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 40 - 35, this.y + 25 - 10, this.x + 40 - 40, this.y + 25);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 40 - 40, this.y + 25 + 15, this.x + 40 - 30, this.y + 25 + 10);
            Aufgabe10.crc2.quadraticCurveTo(this.x + 40 - 5, this.y + 25 - 5, this.x + 40 - 10, this.y + 25 - 10);
            // Ohren
            Aufgabe10.crc2.moveTo(this.x + 40 - 10, this.y + 25 - 10);
            Aufgabe10.crc2.lineTo(this.x + 40 - 5, this.y + 25 - 20);
            Aufgabe10.crc2.lineTo(this.x + 40 - 15, this.y + 25 - 15);
            Aufgabe10.crc2.lineTo(this.x + 40 - 15, this.y + 25 - 25);
            Aufgabe10.crc2.lineTo(this.x + 40 - 20, this.y + 25 - 18);
            Aufgabe10.crc2.closePath();
            // Mund
            Aufgabe10.crc2.moveTo(this.x + 40 - 30, this.y + 25 + 10);
            Aufgabe10.crc2.lineTo(this.x + 40 - 30, this.y + 25 + 2);
            Aufgabe10.crc2.lineTo(this.x + 40 - 25, this.y + 25 + 2);
            Aufgabe10.crc2.lineTo(this.x + 40 - 25, this.y + 25 - 4);
            Aufgabe10.crc2.lineTo(this.x + 40 - 20, this.y + 25 - 4);
            //Augen
            Aufgabe10.crc2.moveTo(this.x + 40 - 20, this.y + 25 - 8);
            Aufgabe10.crc2.arc(this.x + 40 - 20, this.y + 25 - 8, 1.5, 0 * Math.PI, 2 * Math.PI);
            Aufgabe10.crc2.moveTo(this.x + 40 - 27, this.y + 25 - 10);
            Aufgabe10.crc2.arc(this.x + 40 - 27, this.y + 25 - 10, 1.3, 0 * Math.PI, 2 * Math.PI);
            // Schwanz
            Aufgabe10.crc2.moveTo(this.x + 40 + 90, this.y + 25);
            Aufgabe10.crc2.lineTo(this.x + 40 + 130, this.y + 25 - 20);
            Aufgabe10.crc2.lineTo(this.x + 40 + 140, this.y + 25 - 10);
            Aufgabe10.crc2.lineTo(this.x + 40 + 130, this.y + 25 - 12);
            Aufgabe10.crc2.lineTo(this.x + 40 + 130, this.y + 25 - 7);
            Aufgabe10.crc2.lineTo(this.x + 40 + 122, this.y + 25 - 7);
            Aufgabe10.crc2.lineTo(this.x + 40 + 122, this.y + 25 - 2);
            Aufgabe10.crc2.fillStyle = '#696969';
            Aufgabe10.crc2.fill();
            Aufgabe10.crc2.closePath();
            Aufgabe10.crc2.stroke();
        }
    }
    Aufgabe10.Bigfish = Bigfish;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=bigfish.js.map