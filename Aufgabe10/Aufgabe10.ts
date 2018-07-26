 namespace Aufgabe10 {
    window.addEventListener("load", init);
    let bigfishes: Bigfish[] = [];
    let bubbles: Bubbles[] = [];
    let n: number = 7;
    let k: number = 3;
    export let crc2: CanvasRenderingContext2D;
    let imagedata: ImageData;

    function init(_event: Event): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.style.border = "1px solid black";

// Ablauf
        
        water(50);
        ground();





        imagedata = crc2.getImageData(0, 0, 640, 360);
        
// Animation

/*       for (let i: number = 0; i < n; i++) {
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * 250;
        } */

        for (let i: number = 0; i < n - 2; i++) {
            let bubble: Bubbles = new Bubbles();
            bubble.x = Math.random() * (500 - 450) + 350;
            bubble.y = Math.random() * 180;
            bubble.r = Math.random() * 10;
            bubbles.push(bubble);
        }

        for (let i: number = 0; i < k; i++) {
            let bigfish: Bigfish = new Bigfish();
            bigfish.x = Math.random() * crc2.canvas.width;
            bigfish.y = Math.random() * 250;
            bigfishes.push(bigfish);
        }

        animate();
    }

    function animate(): void {
        window.setTimeout(animate, 10);

        crc2.putImageData(imagedata, 0, 0);

  //      moveFishes();
        moveBubbles();
      //  drawFishes();
        drawBubbles();
        moveBigFishes();
        drawBigFishes();
    }
    

// Move & Draw

 /*   function moveFishes(): void {
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }

    function drawFishes(): void {
        for (let i: number = 0; i < fishes.length; i++)
            fishes[i].draw();
    }*/
    function moveBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }

    function drawBubbles(): void {
        for (let i: number = 0; i < bubbles.length; i++)
            bubbles[i].draw();
    }

    function moveBigFishes(): void {
        for (let i: number = 0; i < bigfishes.length; i++)
            bigfishes[i].move();
    }

    function drawBigFishes(): void {
        for (let i: number = 0; i < bigfishes.length; i++)
            bigfishes[i].draw();
    }


    
    // Grund

    function ground(): void {
        crc2.beginPath();
        crc2.moveTo(0, 360);
        crc2.lineTo(0, 225);
        for (let i: number = 0; i < 640; i++) {
            crc2.lineTo(i, 15 * Math.sin(i * .01) + 290);
        }
        crc2.lineTo(640, 360);
        crc2.lineTo(0, 360);
        crc2.fillStyle = "rgb(139, 115, 085)";
        crc2.fill();
        crc2.closePath();
    }

// Wasser

    function water(_y: number) {
        crc2.fillStyle = "rgba(126,192,270,0.8)";
        crc2.fillRect(0, 0, 640, 360);

    }
    
}