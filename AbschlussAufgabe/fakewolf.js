var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Fakewolf extends Abschlussaufgabe.Enemies {
        constructor() {
            super();
            this.speed = 2;
            this.width = 143;
            this.height = 75;
        }
        //Bewegung von rechts nach links, dann Stop
        position() {
            this.x = Math.random() * ((Abschlussaufgabe.canvas.width * 1.6) - Abschlussaufgabe.canvas.width) + Abschlussaufgabe.canvas.width;
            this.y = Math.random() * (Abschlussaufgabe.canvas.height - 75);
        }
        move() {
            this.x -= this.speed;
        }
        draw() {
            //hitbox
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.lineTo(this.x, this.y + 75);
            Abschlussaufgabe.crc2.lineTo(this.x + 143, this.y + 75);
            Abschlussaufgabe.crc2.lineTo(this.x + 143, this.y);
            Abschlussaufgabe.crc2.closePath();
            //Main.crc2.stroke();   //Hitbox anzeigen
            //Wolfkörper
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x + 40, this.y + 25);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 40 + 120, this.y + 25 - 30, this.x + 40 + 100, this.y + 25 + 50);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 40 + 70, this.y - 10, this.x + 40, this.y + 25 + 50);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 40 + 10, this.y + 25 + 25, this.x + 40, this.y + 25);
            //Kopf         
            Abschlussaufgabe.crc2.lineTo(this.x + 40 - 10, this.y + 25 - 10);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 40 - 20, this.y + 25 - 20, this.x + 40 - 25, this.y + 25 - 15);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 40 - 35, this.y + 25 - 10, this.x + 40 - 40, this.y + 25);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 40 - 40, this.y + 25 + 15, this.x + 40 - 30, this.y + 25 + 10);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 40 - 5, this.y + 25 - 5, this.x + 40 - 10, this.y + 25 - 10);
            // Ohren
            Abschlussaufgabe.crc2.moveTo(this.x + 40 - 10, this.y + 25 - 10);
            Abschlussaufgabe.crc2.lineTo(this.x + 40 - 5, this.y + 25 - 20);
            Abschlussaufgabe.crc2.lineTo(this.x + 40 - 15, this.y + 25 - 15);
            Abschlussaufgabe.crc2.lineTo(this.x + 40 - 15, this.y + 25 - 25);
            Abschlussaufgabe.crc2.lineTo(this.x + 40 - 20, this.y + 25 - 18);
            Abschlussaufgabe.crc2.closePath();
            // Mund
            Abschlussaufgabe.crc2.moveTo(this.x + 40 - 30, this.y + 25 + 10);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 20, this.y + 25, this.x + 40 - 20, this.y + 25 - 4);
            //Augen
            Abschlussaufgabe.crc2.moveTo(this.x + 40 - 20, this.y + 25 - 8);
            Abschlussaufgabe.crc2.arc(this.x + 40 - 20, this.y + 25 - 8, 1.5, 0 * Math.PI, 2 * Math.PI);
            Abschlussaufgabe.crc2.moveTo(this.x + 40 - 27, this.y + 25 - 10);
            Abschlussaufgabe.crc2.arc(this.x + 40 - 27, this.y + 25 - 10, 1.3, 0 * Math.PI, 2 * Math.PI);
            // Schwanz
            Abschlussaufgabe.crc2.moveTo(this.x + 130, this.y + 25);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.x + 150, this.y + 15, this.x + 120, this.y + 20);
            Abschlussaufgabe.crc2.fillStyle = '#8B5A2B';
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.stroke();
        }
    }
    Abschlussaufgabe.Fakewolf = Fakewolf;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=fakewolf.js.map