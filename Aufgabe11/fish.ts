namespace Aufgabe11 {

    export class Fish extends MovingObjects{
 

        // declare method without keyword function
        
        constructor() {
            super();    
        }
        
        setPosition(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * 180;    
        }
        
        setColor(): void {
            this.r = Math.random() * 255;
            this.g = Math.random() * 255;
            this.b = Math.random() * 255;
        }
        
        move(): void {
            this.x -= 1.5;
            
            if (this.x < 1) {
                this.x = 650;
            }
        }

        draw(): void {
        crc2.beginPath();
        crc2.moveTo(this.x, this.y);
        crc2.bezierCurveTo(this.x + - 80, this.y + - 60, this.x + - 80, this.y + 30, this.x, this.y + -20);
        crc2.lineTo(this.x, this.y);
        crc2.fillStyle = "rgba(255,215,0)";     
        crc2.fill();
        crc2.closePath();
            crc2.stroke();
        }
    }
    
}