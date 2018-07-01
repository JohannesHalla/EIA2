var Aufgabe11;
(function (Aufgabe11) {
    window.addEventListener("load", init);
    let objects = [];
    let n = 7;
    let k = 3;
    let imagedata;
    function init(_event) {
        let canvas = document.getElementsByTagName("canvas")[0];
        Aufgabe11.crc2 = canvas.getContext("2d");
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
        imagedata = Aufgabe11.crc2.getImageData(0, 0, 640, 360);
        // Animation
        canvas.addEventListener("click", insertNewObjects);
        animate();
    }
    function insertNewObjects(_event) {
        let mouseX = _event.clientX;
        let mouseY = _event.clientY;
        for (let i = 0; i < 3; i++) {
            let food = new Aufgabe11.Food();
            if (i == 1) {
                food.x = mouseX;
                food.y = mouseY;
                objects.push(food);
            }
            else {
                food.x = mouseX + Math.random() * 40 - 2;
                food.y = mouseY + Math.random() * 30 - 2;
                objects.push(food);
            }
        }
    }
    animate();
    function animate() {
        window.setTimeout(animate, 10);
        Aufgabe11.crc2.putImageData(imagedata, 0, 0);
    }
    moveObjects();
    drawObjects();
    // Move & Draw
    function moveObjects() {
        for (let i = 0; i < objects.length; i++) {
            objects[i].move();
        }
    }
    function drawObjects() {
        for (let i = 0; i < objects.length; i++)
            objects[i].draw();
    }
    // Grund
    function ground() {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(0, 360);
        Aufgabe11.crc2.lineTo(0, 225);
        for (let i = 0; i < 640; i++) {
            Aufgabe11.crc2.lineTo(i, 15 * Math.sin(i * .01) + 290);
        }
        Aufgabe11.crc2.lineTo(640, 360);
        Aufgabe11.crc2.lineTo(0, 360);
        Aufgabe11.crc2.fillStyle = "rgb(139, 115, 085)";
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.closePath();
    }
    // Wasser
    function water(_y) {
        Aufgabe11.crc2.fillStyle = "rgba(126,192,270,0.8)";
        Aufgabe11.crc2.fillRect(0, 0, 640, 360);
    }
    // Seagrass
    function drawGras(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.fillStyle = "rgb(0,139,69)";
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + -10, _y - 150);
        Aufgabe11.crc2.lineTo(_x + 15, _y);
        Aufgabe11.crc2.lineTo(_x + 25, _y - 80);
        Aufgabe11.crc2.lineTo(_x + 25, _y);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
    function drawGras1(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.fillStyle = "rgb(0,139,69)";
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + -20, _y - 120);
        Aufgabe11.crc2.lineTo(_x + 15, _y);
        Aufgabe11.crc2.lineTo(_x + 10, _y - 80);
        Aufgabe11.crc2.lineTo(_x + 25, _y);
        Aufgabe11.crc2.lineTo(_x + 40, _y - 140);
        Aufgabe11.crc2.lineTo(_x + 35, _y);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
    function drawGras2(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.fillStyle = "rgb(0,139,69)";
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + -20, _y - 130);
        Aufgabe11.crc2.lineTo(_x + 10, _y);
        Aufgabe11.crc2.lineTo(_x + -5, _y - 150);
        Aufgabe11.crc2.lineTo(_x + 15, _y);
        Aufgabe11.crc2.lineTo(_x + 25, _y - 80);
        Aufgabe11.crc2.lineTo(_x + 25, _y);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
    // Rocks
    function drawStones(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.fillStyle = "rgb(115, 115, 115)";
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 10, _y - 30);
        Aufgabe11.crc2.lineTo(_x + 20, _y - 30);
        Aufgabe11.crc2.lineTo(_x + 20, _y - 30);
        Aufgabe11.crc2.lineTo(_x + 30, _y - 40);
        Aufgabe11.crc2.lineTo(_x + 50, _y - 30);
        Aufgabe11.crc2.lineTo(_x + 60, _y - 50);
        Aufgabe11.crc2.lineTo(_x + 70, _y - 50);
        Aufgabe11.crc2.lineTo(_x + 80, _y - 45);
        Aufgabe11.crc2.lineTo(_x + 100, _y - 30);
        Aufgabe11.crc2.lineTo(_x + 100, _y - 20);
        Aufgabe11.crc2.lineTo(_x + 100, _y - 20);
        Aufgabe11.crc2.lineTo(_x + 130, _y + 10);
        Aufgabe11.crc2.lineTo(_x + 100, _y + 20);
        Aufgabe11.crc2.lineTo(_x + 50, _y + 25);
        Aufgabe11.crc2.lineTo(_x - 10, _y + 20);
        Aufgabe11.crc2.lineTo(_x, _y);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
    // Treasure Chest
    function drawTreasureChest(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.fillStyle = "rgb(139,69,19)";
        Aufgabe11.crc2.moveTo(_x, _y - 50);
        Aufgabe11.crc2.lineTo(_x + 95, _y - 75);
        Aufgabe11.crc2.quadraticCurveTo(_x + 35, _y - 95, _x, _y - 50);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.moveTo(_x, _y);
        Aufgabe11.crc2.lineTo(_x + 100, _y);
        Aufgabe11.crc2.lineTo(_x + 100, _y - 50);
        Aufgabe11.crc2.lineTo(_x, _y - 50);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fillStyle = "rgb(139,69,19)";
        Aufgabe11.crc2.stroke();
        Aufgabe11.crc2.fill();
    }
    function drawStarfish(_x, _y) {
        Aufgabe11.crc2.beginPath();
        Aufgabe11.crc2.fillStyle = "rgb(255,106,106)";
        Aufgabe11.crc2.moveTo(_x, _y + 25);
        Aufgabe11.crc2.lineTo(_x - 20, _y);
        Aufgabe11.crc2.lineTo(_x + 5, _y - 25);
        Aufgabe11.crc2.lineTo(_x - 30, _y - 18);
        Aufgabe11.crc2.lineTo(_x - 50, _y - 40);
        Aufgabe11.crc2.lineTo(_x - 50, _y - 12);
        Aufgabe11.crc2.lineTo(_x - 80, _y + 5);
        Aufgabe11.crc2.lineTo(_x - 50, _y + 8);
        Aufgabe11.crc2.lineTo(_x - 50, _y + 35);
        Aufgabe11.crc2.lineTo(_x - 30, _y + 12);
        Aufgabe11.crc2.lineTo(_x, _y + 25);
        Aufgabe11.crc2.closePath();
        Aufgabe11.crc2.fill();
        Aufgabe11.crc2.stroke();
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=Aufgabe11.js.map