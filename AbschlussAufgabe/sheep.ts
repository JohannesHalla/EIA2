namespace Abschlussaufgabe {
    export class Sheep {

        moveUp = false;
        y = canvas.height;
        x=20;
        speed = 3;
        width = 85;
        height = 75;


        constructor() {
            let moveUp: boolean = false;
        }


        position(): void;

        position(): void {
            this.x = canvas.width * 0.15;
            this.y = (canvas.height / 2) - (75 / 2);
        }

        //Wenn Schaf "Canvas-Decke" erreicht, dann bewege es nach unten. Wenn Boden erreicht, bewege es nach oben.
        move() {
            if (this.y >= canvas.height - 75) {
                this.moveUp = true;
            }
            else
                if (this.y <= 0) {
                    this.moveUp = false;
                }
            if (this.moveUp == false) {
                this.y += this.speed;
            } else {
                this.y -= this.speed;
            }
        }

        draw() {
            //hitbox
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x, this.y + 75);
            crc2.lineTo(this.x + 85, this.y + 75);
            crc2.lineTo(this.x + 85, this.y);
            crc2.closePath();
            //crc2.stroke();                               //Hitbox anzeigen


            //Schaf
            crc2.beginPath();
            crc2.moveTo(this.x + 20, this.y + 20);
            crc2.quadraticCurveTo(this.x, this.y + 20, this.x + 5, this.y + 35);
            crc2.quadraticCurveTo(this.x - 5, this.y + 50, this.x + 15, this.y + 53);
            crc2.quadraticCurveTo(this.x + 25, this.y + 90 - 45 + 20, this.x + 100 - 85 + 20, this.y + 83 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 45, this.y + 90 - 45 + 20, this.x + 120 - 85 + 20, this.y + 79 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 70, this.y + 79 - 45 + 20, this.x + 130 - 85 + 20, this.y + 60 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 65, this.y + 50 - 45 + 20, this.x + 120 - 85 + 20, this.y + 45 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 45, this.y + 30 - 45 + 20, this.x + 100 - 85 + 20, this.y + 42 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 25, this.y + 30 - 45 + 20, this.x + 80 - 85 + 20, this.y + 45 - 45 + 20);
            crc2.moveTo(this.x + 55, this.y + 20);
            crc2.lineTo(this.x + 65, this.y + 15);

            crc2.quadraticCurveTo(this.x + 73, this.y + 50 - 45 + 20, this.x + 140 - 85 + 20, this.y + 50 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 85, this.y + 55 - 45 + 20, this.x + 150 - 85 + 20, this.y + 43 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 85, this.y + 25 - 45 + 20, this.x + 140 - 85 + 20, this.y + 25 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 60, this.y + 22 - 45 + 20, this.x + 130 - 85 + 20, this.y + 40 - 45 + 20);

            crc2.moveTo(this.x + 75 - 85 + 20, this.y + 77 - 45 + 20);
            crc2.lineTo(this.x + 70 - 85 + 20, this.y + 100 - 45 + 20);
            crc2.moveTo(this.x + 80 - 85 + 20, this.y + 78 - 45 + 20);
            crc2.lineTo(this.x + 90 - 85 + 20, this.y + 98 - 45 + 20);

            crc2.moveTo(this.x + 120 - 85 + 20, this.y + 79 - 45 + 20);
            crc2.lineTo(this.x + 115 - 85 + 20, this.y + 100 - 45 + 20);
            crc2.moveTo(this.x + 122 - 85 + 20, this.y + 78 - 45 + 20);
            crc2.lineTo(this.x + 130 - 85 + 20, this.y + 98 - 45 + 20);

            crc2.moveTo(this.x + 138 - 85 + 20, this.y + 35 - 45 + 20);
            crc2.arc(this.x + 138 - 85 + 20, this.y + 35 - 45 + 20, 1, 0 * Math.PI, 1.5 * Math.PI);
            crc2.moveTo(this.x + 144 - 85 + 20, this.y + 33 - 45 + 20);
            crc2.arc(this.x + 144 - 85 + 20, this.y + 33 - 45 + 20, 1, 0 * Math.PI, 1.5 * Math.PI);

            crc2.moveTo(this.x + 140 - 85 + 20, this.y + 25 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 165 - 85 + 20, this.y + 30 - 45 + 20, this.x + 145 - 85 + 20, this.y + 28 - 45 + 20);

            crc2.moveTo(this.x + 130 - 85 + 20, this.y + 27 - 45 + 20);
            crc2.quadraticCurveTo(this.x + 110 - 85 + 20, this.y + 40 - 45 + 20, this.x + 128 - 85 + 20, this.y + 30 - 45 + 20);

            crc2.fillStyle = '#ffffff';
            crc2.fill();
            crc2.closePath();
            crc2.strokeStyle = '#000000';
            crc2.stroke();



        }
    }
}