/*
Aufgabe:    Abschlussaufgabe
Name:       Johannes Halla
Matrikel:   258434
Datum:      26.07.2018
     
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
*/
namespace Abschlussaufgabe {
    window.addEventListener("load", init);
    let isRunning: boolean = false;
    let CanvasHeight = window.innerHeight;
    let CanvasWidth = window.innerWidth;
    let sheep: Sheep;
    let enemies: Enemies[] = [];
    let imagedata: ImageData;
    let RenderTimeout: number;
    let count: number = 0;
    let lastCount: number = 0;
    let maxEnemies: number = 5;
    let maxFakewolf: number = 2;
    export let crc2: CanvasRenderingContext2D;
    export let canvas: HTMLCanvasElement;


    function start(_event: Event): void {
        if (!isRunning) {
            Render();
            isRunning = true;
        }
    }
    function init(_event: Event): void {

        //Canvas Initialisierung
        canvas = document.getElementsByTagName("canvas")[0];
        crc2 = canvas.getContext("2d");
        canvas.style.border = "1px solid black";
        canvas.style.margin = "10px";
        canvas.height = CanvasHeight - canvas.offsetTop - (CanvasHeight * 0.2);
        canvas.width = CanvasWidth - (2 * canvas.offsetLeft);
        //Hintergrund bzw. Gras zeichnen
        DrawGrass();
        imagedata = crc2.getImageData(0, 0, CanvasWidth, CanvasHeight);

        //Schaf und Woelfe werden erstellt (Wölfe im Array mit ID)
        for (let i = 0; i < maxEnemies; i++) {
            enemies.push(new Abschlussaufgabe.Wolf());
        } for (let i = 0; i < maxFakewolf; i++) {
            enemies.push(new Abschlussaufgabe.Fakewolf());
        }
        sheep = new Abschlussaufgabe.Sheep();
        //EventListener, wenn man klickt
        canvas.addEventListener("mousedown", clickedCollision);
        canvas.addEventListener("touchstart", screenTouch, false);
        document.getElementById("neustart").addEventListener("click", neuStart);
        document.getElementById("start").addEventListener("click", start);
        
        
       alert("Herzlich Willkommen!\nRette das Schaf Siggi und töte durch einen Klick die Wölfe!\nAber pass auf, sie werden schneller und lass Dich nicht von den Rehen verwirren!\nViel Spaß!");
    }

    function neuStart(_event: Event): void {
        document.getElementById('gameStats').innerHTML = "";
        window.clearTimeout(RenderTimeout);
        count = 0;
        lastCount = 0;
        for (let i: number = 0; i < enemies.length; i++) {
            resetWolf(i);
            enemies[i].speed = 2
        }
        Render();
    }
 
    // Render
    function resetWolf(id: number) {      //setzt position zurück
        enemies[id].position();
    }

    function Render() {                 //Renderfunktion wird alle 10ms aufgerufen und malt den Canvas
        RenderTimeout = window.setTimeout(Render, 10);
        crc2.clearRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        DrawGrass();
        moveObjects();
        collisionDetection();
        drawObjects();

    }
    function DrawGrass() {              // Hintergrund
        crc2.fillStyle = "rgb(61,179,64)";
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
    function moveObjects() {            //Objekte bewegen
        sheep.move();
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].move();
        }
    }
    function drawObjects() {            //Objekte zeichnen
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
        function clickCollision(clickX: number, clickY: number) {    //Kollisionsabfrage zwischen Klick/Tap und enemie
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
                            for (let i: number = 0; i < enemies.length; i++) {
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
    function collisionDetection() {             //Kollisionsabfrage zwischen Schaf und Wolf
        for (let i = 0; i < (enemies.length - maxFakewolf); i++) {
            if (sheep.x < (enemies[i].x + enemies[i].width) && (sheep.x + sheep.width) > enemies[i].x &&
                sheep.y < (enemies[i].y + enemies[i].height) && (sheep.y + sheep.height) > enemies[i].y) {
                document.getElementById('gameStats').innerHTML = "<p>Du hast " + count + " Wölfe getötet!</p><h1>VERLOREN</h1>";
                window.clearTimeout(RenderTimeout); //Rendern stoppen
            }
        }
    }
    function screenTouch(_event: TouchEvent): void {               //Funktion für Screen-Taps
        let touchX = _event.touches[0].clientX;
        let touchY = _event.touches[0].clientY;
        clickCollision(touchX, touchY);
        event.preventDefault();
    }
    function clickedCollision(_event: MouseEvent): void {          //Funktion für Mausklicks
        let clickX = _event.clientX;
        let clickY = _event.clientY;
        clickCollision(clickX, clickY);
    }
}