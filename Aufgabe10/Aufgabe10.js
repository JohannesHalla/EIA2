var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let bigfishes = [];
    let bubbles = [];
    let n = 7;
    let k = 3;
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe10.crc2 = canvas.getContext("2d");
        canvas.style.border = "1px solid black";
        // Ablauf
        water(50);
        ground();
        imagedata = Aufgabe10.crc2.getImageData(0, 0, 640, 360);
        // Animation
        /*       for (let i: number = 0; i < n; i++) {
                    fish.x = Math.random() * crc2.canvas.width;
                    fish.y = Math.random() * 250;
                } */
        for (let i = 0; i < n - 2; i++) {
            let bubble = new Aufgabe10.Bubbles();
            bubble.x = Math.random() * (500 - 450) + 350;
            bubble.y = Math.random() * 180;
            bubble.r = Math.random() * 10;
            bubbles.push(bubble);
        }
        for (let i = 0; i < k; i++) {
            let bigfish = new Aufgabe10.Bigfish();
            bigfish.x = Math.random() * Aufgabe10.crc2.canvas.width;
            bigfish.y = Math.random() * 250;
            bigfishes.push(bigfish);
        }
        animate();
    }
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe10.crc2.putImageData(imagedata, 0, 0);
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
    function moveBubbles() {
        for (let i = 0; i < bubbles.length; i++) {
            bubbles[i].move();
        }
    }
    function drawBubbles() {
        for (let i = 0; i < bubbles.length; i++)
            bubbles[i].draw();
    }
    function moveBigFishes() {
        for (let i = 0; i < bigfishes.length; i++)
            bigfishes[i].move();
    }
    function drawBigFishes() {
        for (let i = 0; i < bigfishes.length; i++)
            bigfishes[i].draw();
    }
    // Grund
    function ground() {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(0, 360);
        Aufgabe10.crc2.lineTo(0, 225);
        for (let i = 0; i < 640; i++) {
            Aufgabe10.crc2.lineTo(i, 15 * Math.sin(i * .01) + 290);
        }
        Aufgabe10.crc2.lineTo(640, 360);
        Aufgabe10.crc2.lineTo(0, 360);
        Aufgabe10.crc2.fillStyle = "rgb(139, 115, 085)";
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.closePath();
    }
    // Wasser
    function water(_y) {
        Aufgabe10.crc2.fillStyle = "rgba(126,192,270,0.8)";
        Aufgabe10.crc2.fillRect(0, 0, 640, 360);
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Aufgabe10.js.map