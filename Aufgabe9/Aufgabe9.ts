/*
Aufgabe:    9
Name:       Johannes Halla
Matrikel:   258434
Datum:      16.06.2018
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/


namespace unterwasserwelt {
    
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let width: number;
    let height: number; 
    
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        
        width = canvas.width;
        height = canvas.height;
        crc2.strokeStyle = "none";
        
 // Hauptfunktion
        
        water(50);

        ground(height - 60);
        
        
        
 // Felsen
        drawStones(-30, 300);
        drawStones(200, 300);
        drawStones(600, 300);
        
         function drawStones(_x : number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(115, 115, 115)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x +10, _y - 30);
        crc2.lineTo(_x + 20, _y -30);
        crc2.lineTo(_x + 20, _y -30);
        crc2.lineTo(_x + 30, _y -40);
        crc2.lineTo(_x +50, _y -30);
        crc2.lineTo(_x +60, _y -50);
        crc2.lineTo(_x + 70, _y -50);
        crc2.lineTo(_x + 80, _y -45);
        crc2.lineTo(_x +100, _y -30);
        crc2.lineTo(_x +100, _y - 20);
        crc2.lineTo(_x +100, _y -20);
        crc2.lineTo(_x +130, _y +10);
        crc2.lineTo(_x +100, _y +20);
        crc2.lineTo(_x +50, _y +25);
        crc2.lineTo(_x -10, _y + 20);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
      }

        
        
// Schatztruhe
        
        drawTreasureChest(310, 320);
        
        
        function drawTreasureChest(_x: number, _y: number): void { 
        
            crc2.beginPath();
            crc2.fillStyle = "rgb(139,69,19)";
            crc2.moveTo(_x, _y - 50);
            crc2.lineTo(_x + 95, _y - 75);  
            crc2.quadraticCurveTo(_x + 35, _y - 95, _x, _y - 50);         
            crc2.closePath();

            crc2.stroke();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 100, _y);
            crc2.lineTo(_x + 100, _y - 50);
            crc2.lineTo(_x, _y - 50);            
            crc2.closePath();
            crc2.fillStyle = "rgb(139,69,19)";
            crc2.stroke();
            crc2.fill();
            
            
        }
        
        
        
        
 // Seestern       
        
        drawStarfish(500, 320);
        drawStarfish(100, 330);
        
function drawStarfish(_x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,106,106)"; 
        crc2.moveTo(_x, _y+25);
    
        crc2.lineTo(_x - 20, _y);
        crc2.lineTo(_x +5, _y -25);   
        crc2.lineTo(_x -30, _y - 18);
        crc2.lineTo(_x -50, _y - 40);
        crc2.lineTo(_x - 50, _y-12);
        crc2.lineTo(_x -80, _y + 5);
        crc2.lineTo(_x - 50, _y +8);
        crc2.lineTo(_x -50, _y +35);
        crc2.lineTo(_x - 30, _y +12);
    
        crc2.lineTo(_x, _y+25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
}

        
        
        
        
        
// Algen
        
        drawGras(100,360)
               
function drawGras(_x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(0,139,69)";
        crc2.moveTo( _x, _y);
        crc2.lineTo( _x + -10, _y - 150 );
        crc2.lineTo( _x + 15, _y );
        crc2.lineTo( _x + 25, _y - 80 );
        crc2.lineTo( _x + 25, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();   
        }
        
        drawGras1(300,360)  
        
function drawGras1(_x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(0,139,69)";
        crc2.moveTo( _x, _y);
        crc2.lineTo( _x + -20, _y - 120 );
        crc2.lineTo( _x + 15, _y );    
        crc2.lineTo( _x + 10, _y - 80 );
        crc2.lineTo( _x + 25, _y);    
        crc2.lineTo( _x + 40, _y - 140 );
        crc2.lineTo( _x + 35, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();   
        }
        
        drawGras2(600,360)
        
        function drawGras2(_x: number, _y: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(0,139,69)";
        crc2.moveTo( _x, _y);
        crc2.lineTo( _x + -20, _y - 130 );
        crc2.lineTo( _x + 10, _y );
        crc2.lineTo( _x + -5, _y - 150 );
        crc2.lineTo( _x + 15, _y );
        crc2.lineTo( _x + 25, _y - 80 );
        crc2.lineTo( _x + 25, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();   
        }
        
       
 //Blubberblasen groß
              
  for ( let i: number = 0; i < 2; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * 260;

            drawBubbleBig( x, y, 2 );
        }
        
function drawBubbleBig( _x: number, _y: number, _radius: number ): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(0,100,240,0.1)";
        crc2.arc( _x, _y, 20, 0, 2 * Math.PI );
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }       
        
        

// Blubberblasen festgelegt
        
        
      drawBubbles(370, 50, 50, 200, 10);
        function drawBubbles(_x: number, _y: number, _w: number, _h: number, _a: number): void {

            for (let i: number = 0; i < _a; i++) { 
                 let width: number = Math.random() * _w;
                 let height: number = Math.random() * _h;
                 let scale: number = Math.random() * 10;

            crc2.beginPath();
            crc2.arc(_x + width, _y + height, scale, 0, 3 * Math.PI);
            crc2.stroke();
            crc2.fillStyle = "rgb(0,100,240,0.3)";
            crc2.stroke();
            crc2.fill();
            }
        }
  
  

// Fische   
    
    
    for ( let i: number = 0; i < 2; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * 260;
            let r: number = Math.random() * 250;
            let g: number = Math.random() * 250;
            let b: number = Math.random() * 250;

            drawFish( x, y, r, g, b );
        }
        
    for ( let i: number = 0; i < 4; i++ ) {
            let x: number = Math.random() * crc2.canvas.width;
            let y: number = Math.random() * 260;
            let r: number = Math.random() * 250;
            let g: number = Math.random() * 250;
            let b: number = Math.random() * 250;

            drawFishes( x, y, r, g, b );
        }

// Fische dunkelrot
      
    function drawFish(_x: number, _y: number, _r: number, _g: number, _b: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + 120, _y + 110, _x + 130, _y + -60, _x, _y + 30);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgba(100,20,30)";
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
        

    }
    
// Fische gelb
      
    function drawFishes(_x: number, _y: number, _r: number, _g: number, _b: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.bezierCurveTo(_x + - 80, _y + - 60, _x + - 80, _y + 30, _x, _y + -20);
        crc2.lineTo(_x, _y);
        crc2.fillStyle = "rgba(255,215,0)";     
        crc2.fill();
        crc2.closePath();
        crc2.stroke();
    }
        

    
    
    
// Wasser
    function water(_y: number) {
        crc2.fillStyle = "rgba(126,192,270,0.8)";
        crc2.fillRect(0, 0, 640, 360);

  }
// Grund    
    function ground(_y: number) {
    crc2.fillStyle = "rgb(139, 115, 085)"; 
    crc2.beginPath();
    crc2.moveTo(0, height);
    crc2.lineTo(0, _y);
    for (let i: number = 0; i < width; i++) {
      crc2.lineTo(i, 10 * Math.sin(i * .015) + _y);
    }
    crc2.lineTo(width, height);
   crc2.lineTo(0, height);
    crc2.fill();
                crc2.stroke();
    crc2.closePath();
  }
    
}


    
  
    