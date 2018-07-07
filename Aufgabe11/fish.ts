namespace Aufgabe11 {

    export class Fish extends MovingObjects{
 

       
        // declare method without keyword function
        
        constructor() {
            super();    
        }
        
        position(): void {
            this.x = Math.random() * crc2.canvas.width;
            this.y = Math.random() * 250;    
        }
        
        colour(): void {
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
      crc2.moveTo(80, 45);
      crc2.quadraticCurveTo(65, 45, 70, 60);
      crc2.quadraticCurveTo(60, 75, 80, 78);
      crc2.quadraticCurveTo(90, 90, 100, 83);
      crc2.quadraticCurveTo(110, 90, 120, 79);
      crc2.quadraticCurveTo(135, 79, 130, 60);
      crc2.quadraticCurveTo(130, 50, 120, 45);
      crc2.quadraticCurveTo(110, 30, 100, 42);
      crc2.quadraticCurveTo(90, 30, 80, 45);
      crc2.moveTo(120, 45);
      crc2.lineTo(130,40);
            
      crc2.quadraticCurveTo(138, 50, 140, 50);
      crc2.quadraticCurveTo(150, 55, 150, 43);
      crc2.quadraticCurveTo(150, 25, 140, 25);
      crc2.quadraticCurveTo(125, 22, 130, 40);
            
      crc2.moveTo(75, 77);
      crc2.lineTo(70,100);
      crc2.moveTo(80, 78);
      crc2.lineTo(90,98);

      crc2.moveTo(120, 79);
      crc2.lineTo(115,100);
      crc2.moveTo(122, 78);
      crc2.lineTo(130,98);
      
      crc2.moveTo(138, 35);
      crc2.arc(138,35,1,0*Math.PI,1.5*Math.PI);
      crc2.moveTo(144, 33);
      crc2.arc(144,33,1,0*Math.PI,1.5*Math.PI);
                   
      crc2.moveTo(140, 25);
      crc2.quadraticCurveTo(165, 30, 145, 28);

      crc2.moveTo(130, 27);
      crc2.quadraticCurveTo(110, 40, 128, 30);

      crc2.fillStyle = '#ffffff';
      crc2.fill();
      crc2.strokeStyle = '#000000';
      crc2.stroke();
        }
    }
    
}