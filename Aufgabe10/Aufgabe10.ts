/* namespace Aufgabe10 {
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

        drawStones(-30, 300);
        drawStones(200, 300);
        drawStones(600, 300);

        drawTreasureChest(310, 320);

        drawStarfish(500, 320);
        drawStarfish(100, 330);

        drawGras(80, 360);
        drawGras1(300, 360);
        drawGras2(600, 360);




        imagedata = crc2.getImageData(0, 0, 640, 360);
        
// Animation

        for (let i: number = 0; i < n; i++) {
            fish.x = Math.random() * crc2.canvas.width;
            fish.y = Math.random() * 250;
        }

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

        moveFishes();
        moveBubbles();
        drawFishes();
        drawBubbles();
        moveBigFishes();
        drawBigFishes();
    }
    

// Move & Draw

    function moveFishes(): void {
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }

    function drawFishes(): void {
        for (let i: number = 0; i < fishes.length; i++)
            fishes[i].draw();
    }

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
    
// Seagrass

    function drawGras(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(0,139,69)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + -10, _y - 150);
        crc2.lineTo(_x + 15, _y);
        crc2.lineTo(_x + 25, _y - 80);
        crc2.lineTo(_x + 25, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }


    function drawGras1(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(0,139,69)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + -20, _y - 120);
        crc2.lineTo(_x + 15, _y);
        crc2.lineTo(_x + 10, _y - 80);
        crc2.lineTo(_x + 25, _y);
        crc2.lineTo(_x + 40, _y - 140);
        crc2.lineTo(_x + 35, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }


    function drawGras2(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(0,139,69)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + -20, _y - 130);
        crc2.lineTo(_x + 10, _y);
        crc2.lineTo(_x + -5, _y - 150);
        crc2.lineTo(_x + 15, _y);
        crc2.lineTo(_x + 25, _y - 80);
        crc2.lineTo(_x + 25, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

// Rocks
    
    function drawStones(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(115, 115, 115)";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 10, _y - 30);
        crc2.lineTo(_x + 20, _y - 30);
        crc2.lineTo(_x + 20, _y - 30);
        crc2.lineTo(_x + 30, _y - 40);
        crc2.lineTo(_x + 50, _y - 30);
        crc2.lineTo(_x + 60, _y - 50);
        crc2.lineTo(_x + 70, _y - 50);
        crc2.lineTo(_x + 80, _y - 45);
        crc2.lineTo(_x + 100, _y - 30);
        crc2.lineTo(_x + 100, _y - 20);
        crc2.lineTo(_x + 100, _y - 20);
        crc2.lineTo(_x + 130, _y + 10);
        crc2.lineTo(_x + 100, _y + 20);
        crc2.lineTo(_x + 50, _y + 25);
        crc2.lineTo(_x - 10, _y + 20);
        crc2.lineTo(_x, _y);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
    }

// Treasure Chest

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
    
   
    function drawStarfish(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.fillStyle = "rgb(255,106,106)";
        crc2.moveTo(_x, _y + 25);

        crc2.lineTo(_x - 20, _y);
        crc2.lineTo(_x + 5, _y - 25);
        crc2.lineTo(_x - 30, _y - 18);
        crc2.lineTo(_x - 50, _y - 40);
        crc2.lineTo(_x - 50, _y - 12);
        crc2.lineTo(_x - 80, _y + 5);
        crc2.lineTo(_x - 50, _y + 8);
        crc2.lineTo(_x - 50, _y + 35);
        crc2.lineTo(_x - 30, _y + 12);

        crc2.lineTo(_x, _y + 25);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
}