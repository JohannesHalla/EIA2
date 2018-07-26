namespace Abschlussaufgabe {
    export class Fakewolf extends Enemies {

        speed: number = 2;
        x: number;
        y: number;
        width: number = 143;
        height: number = 75

        constructor() {
            super();
        }

        //Bewegung von rechts nach links, dann Stop

        position() {
            this.x = Math.random() * ((canvas.width * 1.6) - canvas.width) + canvas.width;
            this.y = Math.random() * (canvas.height - 75);

        }

        move() {
            this.x -= this.speed;
        }

        draw() {

            //hitbox
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 75);
            crc2.lineTo(this.x + 143, this.y + 75);
            crc2.lineTo(this.x + 143, this.y);
            crc2.closePath();
            //crc2.stroke();   //Hitbox anzeigen

            //Rehkörper
            crc2.beginPath();
            crc2.moveTo(this.x + 40, this.y + 25);
            crc2.quadraticCurveTo(this.x + 40 + 120, this.y + 25 - 30, this.x + 40 + 100, this.y + 25 + 50);
            crc2.quadraticCurveTo(this.x + 40 + 70, this.y - 10, this.x + 40, this.y + 25 + 50);
            crc2.quadraticCurveTo(this.x + 40 + 10, this.y + 25 + 25, this.x + 40, this.y + 25);
            //PUNKTE

            

            //Kopf         
            crc2.lineTo(this.x + 40 - 10, this.y + 25 - 10);
            crc2.quadraticCurveTo(this.x + 40 - 20, this.y + 25 - 20, this.x + 40 - 25, this.y + 25 - 15);
            crc2.quadraticCurveTo(this.x + 40 - 35, this.y + 25 - 10, this.x + 40 - 40, this.y + 25);
            crc2.quadraticCurveTo(this.x + 40 - 40, this.y + 25 + 15, this.x + 40 - 30, this.y + 25 + 10);
            crc2.quadraticCurveTo(this.x + 40 - 5, this.y + 25 - 5, this.x + 40 - 10, this.y + 25 - 10);

            // Ohren
            crc2.moveTo(this.x + 30, this.y + 25 - 10);
            crc2.lineTo(this.x + 38, this.y + 8);
            crc2.lineTo(this.x + 25, this.y + 25 - 15);
            crc2.lineTo(this.x + 25, this.y + 25 - 25);
            crc2.lineTo(this.x + 20, this.y + 25 - 18);
            crc2.closePath();

            // Mund
            crc2.moveTo(this.x + 40 - 30, this.y + 25 + 10);
            crc2.quadraticCurveTo(this.x + 20, this.y + 25, this.x + 40 - 20, this.y + 25 - 4);


            //Augen
            crc2.moveTo(this.x + 40 - 20, this.y + 25 - 8);
            crc2.arc(this.x + 40 - 20, this.y + 25 - 8, 1.5, 0 * Math.PI, 2 * Math.PI);

            crc2.moveTo(this.x + 40 - 27, this.y + 25 - 10);
            crc2.arc(this.x + 40 - 27, this.y + 25 - 10, 1.3, 0 * Math.PI, 2 * Math.PI);

            // Schwanz
            crc2.moveTo(this.x + 130, this.y + 25);
            crc2.quadraticCurveTo(this.x + 150, this.y + 15, this.x + 120, this.y + 20);
            

            crc2.fillStyle = '#8B5A2B';
            crc2.fill();

            crc2.closePath();
            crc2.stroke();

        }
    }
}