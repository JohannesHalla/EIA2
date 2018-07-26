/*
Aufgabe:    Abschlussaufgabe
Name:       Johannes Halla
Matrikel:   258434
Datum:      26.07.2018
     
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let isRunning = false;
    let CanvasHeight = window.innerHeight;
    let CanvasWidth = window.innerWidth;
    let sheep;
    let enemies = [];
    let imagedata;
    let RenderTimeout;
    let count = 0;
    let lastCount = 0;
    let maxEnemies = 5;
    let maxFakewolf = 2;
    function start(_event) {
        if (!isRunning) {
            Render();
            isRunning = true;
        }
    }
    function init(_event) {
        //Canvas Initialisierung
        Abschlussaufgabe.canvas = document.getElementsByTagName("canvas")[0];
        Abschlussaufgabe.crc2 = Abschlussaufgabe.canvas.getContext("2d");
        Abschlussaufgabe.canvas.style.border = "1px solid black";
        Abschlussaufgabe.canvas.style.margin = "10px";
        Abschlussaufgabe.canvas.height = CanvasHeight - Abschlussaufgabe.canvas.offsetTop - (CanvasHeight * 0.2);
        Abschlussaufgabe.canvas.width = CanvasWidth - (2 * Abschlussaufgabe.canvas.offsetLeft);
        //Hintergrund bzw. Gras zeichnen
        DrawGrass();
        imagedata = Abschlussaufgabe.crc2.getImageData(0, 0, CanvasWidth, CanvasHeight);
        //Schaf und Woelfe werden erstellt (Wölfe im Array mit ID)
        for (let i = 0; i < maxEnemies; i++) {
            enemies.push(new Abschlussaufgabe.Wolf());
        }
        for (let i = 0; i < maxFakewolf; i++) {
            enemies.push(new Abschlussaufgabe.Fakewolf());
        }
        sheep = new Abschlussaufgabe.Sheep();
        //EventListener, wenn man klickt
        Abschlussaufgabe.canvas.addEventListener("mousedown", clickedCollision);
        Abschlussaufgabe.canvas.addEventListener("touchstart", screenTouch, false);
        document.getElementById("neustart").addEventListener("click", neuStart);
        document.getElementById("start").addEventListener("click", start);
        alert("Herzlich Willkommen!\nRette das Schaf Siggi und töte durch einen Klick die Wölfe!\nAber pass auf, sie werden schneller und lass Dich nicht von den Rehen verwirren!\nViel Spaß!");
    }
    function neuStart(_event) {
        document.getElementById('gameStats').innerHTML = "";
        window.clearTimeout(RenderTimeout);
        count = 0;
        lastCount = 0;
        for (let i = 0; i < enemies.length; i++) {
            resetWolf(i);
            enemies[i].speed = 2;
        }
        Render();
    }
    // Render
    function resetWolf(id) {
        enemies[id].position();
    }
    function Render() {
        RenderTimeout = window.setTimeout(Render, 10);
        Abschlussaufgabe.crc2.clearRect(0, 0, Abschlussaufgabe.crc2.canvas.width, Abschlussaufgabe.crc2.canvas.height);
        DrawGrass();
        moveObjects();
        collisionDetection();
        drawObjects();
    }
    function DrawGrass() {
        Abschlussaufgabe.crc2.fillStyle = "rgb(61,179,64)";
        Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.canvas.width, Abschlussaufgabe.canvas.height);
    }
    function moveObjects() {
        sheep.move();
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].move();
        }
    }
    function drawObjects() {
        sheep.draw();
        for (let i = 0; i < enemies.length; i++) {
            //Wenn außerhalb des canvas, dann den Wolf löschen und zurücksetzen
            if (enemies[i].x <= -enemies[i].width) {
                resetWolf(i);
            }
            enemies[i].draw();
        }
    }
    // Kollision
    function clickCollision(clickX, clickY) {
        for (let i = 0; i < enemies.length; i++) {
            if (clickX > enemies[i].x && clickX < (enemies[i].x + enemies[i].width) &&
                clickY > enemies[i].y && clickY < (enemies[i].y + enemies[i].height)) {
                switch (i) {
                    case 5: {
                        break;
                    }
                    case 6: {
                        break;
                    }
                    default: {
                        count++;
                        document.getElementById('gameStats').innerHTML = "<p>Du hast " + count + " Wölfe getötet!</p>";
                        if (count >= (lastCount + 10)) {
                            lastCount = count;
                            for (let i = 0; i < enemies.length; i++) {
                                enemies[i].speed += 0.5;
                            }
                        }
                        resetWolf(i);
                        break;
                    }
                }
            }
        }
    }
    function collisionDetection() {
        for (let i = 0; i < (enemies.length - maxFakewolf); i++) {
            if (sheep.x < (enemies[i].x + enemies[i].width) && (sheep.x + sheep.width) > enemies[i].x &&
                sheep.y < (enemies[i].y + enemies[i].height) && (sheep.y + sheep.height) > enemies[i].y) {
                document.getElementById('gameStats').innerHTML = "<p>Du hast " + count + " Wölfe getötet!</p><h1>VERLOREN</h1>";
                window.clearTimeout(RenderTimeout); //Rendern stoppen
            }
        }
    }
    function screenTouch(_event) {
        let touchX = _event.touches[0].clientX;
        let touchY = _event.touches[0].clientY;
        clickCollision(touchX, touchY);
        event.preventDefault();
    }
    function clickedCollision(_event) {
        let clickX = _event.clientX;
        let clickY = _event.clientY;
        clickCollision(clickX, clickY);
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=main.js.map