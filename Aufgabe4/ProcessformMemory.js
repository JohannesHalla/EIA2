/* Aufgabe: 4.1 - Memory
Name: Halla, Johannes
Matrikel:258434
Datum: 06.05.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.

Leider funktioniert der Aufruf der Hauptfunktion "main" nicht. Im HTML entsteht kein Spielfeld, obwohl ich die Funktion nach dem Klick auf den "Lets-Go-Button" aufrufe.
Sitzen irgendwelche Klammern falsch?
*/
var Aufgabe4;
(function (Aufgabe4) {
    let numPlayers;
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush = [];
    var numPairsInt;
    var numPlayerInt;
    let numOpenCards = 0;
    let clickedCards = [];
    let x = 0;
    let newArray = [];
    let inputs = document.getElementsByTagName("input");
    document.addEventListener('DOMContentLoaded', init);
    function init() {
        let startButton = document.getElementById("start");
        startButton.addEventListener("click", main);
    }
    //Hauptfunktion Ablauf   
    function main() {
        let header = document.getElementsByTagName("header");
        header[0].classList.add("hiddenHeader");
        console.log("Header ist versteckt");
        let players = parseInt(inputs[1].value);
        let amountCards = parseInt(inputs[0].value);
        if (players <= 4 && players > 0 && amountCards > 0 && amountCards <= 10) {
            createCardList();
            enterName();
            createCards();
        }
        /*     else {
                 alert("Undefined.");
                 location.reload(true);
             }*/
    }
    // Spielernamen erzeugen
    function enterName() {
        let numPlayers = parseInt(inputs[1].value);
        let node = document.getElementById("spielernamen");
        let childNodeHTML;
        for (let i = 0; i < numPlayers; i++) {
            let spielerName = inputs[i + 1].value;
            childNodeHTML = "<div>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += spielerName;
            childNodeHTML += "</p>";
            childNodeHTML += "<p  id='score" + i + "'>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }
    // Inhalt der Karten erzeugen
    function createCardList() {
        let amountCards = parseInt(inputs[1].value);
        let select = document.getElementById("content");
        let chosenCardContent = select.value;
        for (let i = 1; i <= amountCards; i++) {
            let content = Aufgabe4.deck[chosenCardContent].content[i - 1];
            newArray.push(content);
            newArray.push(content);
            cardContent.splice(0, 1);
        }
    }
    //Karten erzeugen
    function createCards() {
        let amountPairs = parseInt(inputs[1].value);
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        let i = 0;
        for (let i = 0; i < amountPairs * 2; i++) {
            var random = Math.floor(Math.random() * Math.floor(newArray.length));
            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += newArray[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            newArray.splice(random, 1);
            var status = document.getElementsByClassName("hidden");
            for (let i = 0; i < status.length; i++) {
                status[i].addEventListener("click", changeStatus);
            }
        }
    }
    // Karte anklickbar
    var status = document.getElementsByClassName("hidden");
    for (let i = 0; i < status.length; i++) {
        status[i].addEventListener("click", changeStatus);
    }
    // Status von hidden auf open
    function changeStatus(_event) {
        let t = _event.currentTarget;
        if (t.className == "hidden") {
            t.classList.remove("hidden");
            t.classList.add("open");
            numOpenCards++;
            if (numOpenCards == 2) {
                setTimeout(compareContent, 2000); // Zeit
            }
            if (numOpenCards > 2) {
                t.classList.remove("open");
                t.classList.add("hidden");
            }
        }
    }
    //  console.log(numOpenCards);
    // Karten vergleichen
    function compareContent() {
        let karte1 = document.getElementsByClassName("open")[0];
        let karte2 = document.getElementsByClassName("open")[1];
        clickedCards.push(karte1, karte2);
        if (clickedCards[0].innerHTML == clickedCards[1].innerHTML) {
            // Karten werden vom Spielfeld genommen
            clickedCards[0].classList.remove("open");
            clickedCards[0].classList.add("taken");
            clickedCards[1].classList.remove("open");
            clickedCards[1].classList.add("taken");
            x++;
            let playerScore = x.toString();
            document.getElementById('score').innerHTML = playerScore;
            ende();
            console.log(x);
        }
        else {
            clickedCards[0].classList.remove("open");
            clickedCards[1].classList.remove("open");
            clickedCards[0].classList.add("hidden");
            clickedCards[1].classList.add("hidden");
        }
        numOpenCards = 0;
        // clickedCards-Array Inhalt löschen
        clickedCards.splice(0, 2);
        function ende() {
            if (x == numPairsInt) {
                alert("Herzlichen Glückwunsch!");
            }
        }
    }
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=ProcessformMemory.js.map