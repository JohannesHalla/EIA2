var Aufgabe10;
(function (Aufgabe10) {
    window.addEventListener("load", init);
    let bigfishes = [];
    let fishes = [];
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
        drawStones(-30, 300);
        drawStones(200, 300);
        drawStones(600, 300);
        drawTreasureChest(310, 320);
        drawStarfish(500, 320);
        drawStarfish(100, 330);
        drawGras(80, 360);
        drawGras1(300, 360);
        drawGras2(600, 360);
        imagedata = Aufgabe10.crc2.getImageData(0, 0, 640, 360);
        // Animation
        for (let i = 0; i < n; i++) {
            let fish = new Aufgabe10.Fish();
            fish.x = Math.random() * Aufgabe10.crc2.canvas.width;
            fish.y = Math.random() * 250;
            fishes.push(fish);
        }
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
        moveFishes();
        moveBubbles();
        drawFishes();
        drawBubbles();
        moveBigFishes();
        drawBigFishes();
    }
    // Move & Draw
    function moveFishes() {
        for (let i = 0; i < fishes.length; i++) {
            fishes[i].move();
        }
    }
    function drawFishes() {
        for (let i = 0; i < fishes.length; i++)
            fishes[i].draw();
    }
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
    // Seagrass
    function drawGras(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "rgb(0,139,69)";
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + -10, _y - 150);
        Aufgabe10.crc2.lineTo(_x + 15, _y);
        Aufgabe10.crc2.lineTo(_x + 25, _y - 80);
        Aufgabe10.crc2.lineTo(_x + 25, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function drawGras1(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "rgb(0,139,69)";
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + -20, _y - 120);
        Aufgabe10.crc2.lineTo(_x + 15, _y);
        Aufgabe10.crc2.lineTo(_x + 10, _y - 80);
        Aufgabe10.crc2.lineTo(_x + 25, _y);
        Aufgabe10.crc2.lineTo(_x + 40, _y - 140);
        Aufgabe10.crc2.lineTo(_x + 35, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function drawGras2(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "rgb(0,139,69)";
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + -20, _y - 130);
        Aufgabe10.crc2.lineTo(_x + 10, _y);
        Aufgabe10.crc2.lineTo(_x + -5, _y - 150);
        Aufgabe10.crc2.lineTo(_x + 15, _y);
        Aufgabe10.crc2.lineTo(_x + 25, _y - 80);
        Aufgabe10.crc2.lineTo(_x + 25, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    // Rocks
    function drawStones(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "rgb(115, 115, 115)";
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 10, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 20, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 20, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 30, _y - 40);
        Aufgabe10.crc2.lineTo(_x + 50, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 60, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 70, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 80, _y - 45);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 30);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 20);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 20);
        Aufgabe10.crc2.lineTo(_x + 130, _y + 10);
        Aufgabe10.crc2.lineTo(_x + 100, _y + 20);
        Aufgabe10.crc2.lineTo(_x + 50, _y + 25);
        Aufgabe10.crc2.lineTo(_x - 10, _y + 20);
        Aufgabe10.crc2.lineTo(_x, _y);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    // Treasure Chest
    function drawTreasureChest(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "rgb(139,69,19)";
        Aufgabe10.crc2.moveTo(_x, _y - 50);
        Aufgabe10.crc2.lineTo(_x + 95, _y - 75);
        Aufgabe10.crc2.quadraticCurveTo(_x + 35, _y - 95, _x, _y - 50);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.moveTo(_x, _y);
        Aufgabe10.crc2.lineTo(_x + 100, _y);
        Aufgabe10.crc2.lineTo(_x + 100, _y - 50);
        Aufgabe10.crc2.lineTo(_x, _y - 50);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fillStyle = "rgb(139,69,19)";
        Aufgabe10.crc2.stroke();
        Aufgabe10.crc2.fill();
    }
    function drawStarfish(_x, _y) {
        Aufgabe10.crc2.beginPath();
        Aufgabe10.crc2.fillStyle = "rgb(255,106,106)";
        Aufgabe10.crc2.moveTo(_x, _y + 25);
        Aufgabe10.crc2.lineTo(_x - 20, _y);
        Aufgabe10.crc2.lineTo(_x + 5, _y - 25);
        Aufgabe10.crc2.lineTo(_x - 30, _y - 18);
        Aufgabe10.crc2.lineTo(_x - 50, _y - 40);
        Aufgabe10.crc2.lineTo(_x - 50, _y - 12);
        Aufgabe10.crc2.lineTo(_x - 80, _y + 5);
        Aufgabe10.crc2.lineTo(_x - 50, _y + 8);
        Aufgabe10.crc2.lineTo(_x - 50, _y + 35);
        Aufgabe10.crc2.lineTo(_x - 30, _y + 12);
        Aufgabe10.crc2.lineTo(_x, _y + 25);
        Aufgabe10.crc2.closePath();
        Aufgabe10.crc2.fill();
        Aufgabe10.crc2.stroke();
    }
})(Aufgabe10 || (Aufgabe10 = {}));
//# sourceMappingURL=Aufgabe10.js.map