namespace Aufgabe10 {

    export class Chest {
        x: number = 310;
        y: number = 320;
        


        // declare method without keyword function
    /*    move(): void {
            this.y -= 2;

            if (this.y < 0) {
                this.y = 250;
            }

        } */

        draw(): void {

        crc2.beginPath();
        crc2.fillStyle = "rgb(0,69,19)";
        crc2.moveTo(310, 320 - 50);
        crc2.lineTo(310 + 95, 320 - 75);
        crc2.quadraticCurveTo(310 + 35, 320 - 95, 310, 320 - 50);
        crc2.closePath();
            }
    }

}
