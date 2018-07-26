namespace Abschlussaufgabe {

    export class Enemies {
        x: number;
        y: number;
        speed: number;
        width: number;
        height: number;

        constructor() {
            this.position();
            this.x = Math.random() * ((canvas.width * 1.6) - canvas.width) + canvas.width;
            this.y = Math.random() * (canvas.height - 75);
        }

        color(): void {

        }

        position(): void {
            this.x = Math.random() * ((canvas.width * 1.6) - canvas.width) + canvas.width;
            this.y = Math.random() * (canvas.height - 75);
            alert("test");
        }


        move(): void {

        }

        draw(): void {

        }
    }

}