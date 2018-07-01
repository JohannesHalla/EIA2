var Aufgabe10;
(function (Aufgabe10) {
    class Chest {
        constructor() {
            this.x = 310;
            this.y = 320;
        }
        // declare method without keyword function
        /*    move(): void {
                this.y -= 2;
    
                if (this.y < 0) {
                    this.y = 250;
                }
    
            } */
        draw() {
            Aufgabe10.crc2.beginPath();
            Aufgabe10.crc2.fillStyle = "rgb(0,69,19)";
            Aufgabe10.crc2.moveTo(310, 320 - 50);
            Aufgabe10.crc2.lineTo(310 + 95, 320 - 75);
            Aufgabe10.crc2.quadraticCurveTo(310 + 35, 320 - 95, 310, 320 - 50);
            Aufgabe10.crc2.closePath();
        }
    }
    Aufgabe10.Chest = Chest;
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=chest.js.map