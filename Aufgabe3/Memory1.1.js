/* Aufgabe: 2 - Memory
Name: Halla, Johannes
Matrikel:258434
Datum: 15.04.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */
var Memory;
(function (Memory) {
    let numPlayers;
    let numPairs;
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush = [];
    var numPairsInt;
    var numPlayerInt;
    let numOpenCards = 0;
    let clickedCards = [];
    let x = 0;
    document.addEventListener('DOMContentLoaded', main);
    //Hauptfunktion Ablauf   
    function main() {
        player();
        creatCardList(numPairsInt);
        enterName(numPlayerInt);
        createCards(numPairsInt);
    }
    //Spieleranzahl eingeben    
    function player() {
        var numPlayer = prompt("Gewünschte Anzahl der Spieler   min. 1 | max. 4", "");
        numPlayerInt = parseInt(numPlayer);
        if (numPlayerInt >= 1 && numPlayerInt <= 4) {
            return numPlayerInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 4");
            player();
        }
    }
    //Kartenpaare eingeben
    function pair() {
        var numPairs = prompt("Gewünschte Anzahl der Kartenpaare min. 1 | max. 26");
        numPairsInt = parseInt(numPairs);
        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            pair();
        }
    }
    let amount = pair();
    //Spielernamen erzeugen
    function enterName(_numPlayer) {
        let node = document.getElementById("spielernamen");
        let childNodeHTML;
        for (let i = 0; i < _numPlayer; i++) {
            childNodeHTML = "<div>";
            childNodeHTML += "<h2>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += "Player " + i;
            childNodeHTML += "</p>";
            childNodeHTML += "</h2>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }
    //Inhalt der Karten erzeugen
    function creatCardList(x) {
        for (let i = 1; i <= x; i++) {
            var content = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);
            var remove = cardContent.splice(0, 1);
        }
    }
    //Karten erstellen
    function createCards(_numPairs) {
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        let i = 0;
        for (let i = 0; i < _numPairs * 2; i++) {
            let min = 0;
            let max = (cardPush.length);
            var random = Math.floor(Math.random() * Math.floor(max));
            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            var remove = cardPush.splice(random, 1);
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
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Memory1.1.js.map