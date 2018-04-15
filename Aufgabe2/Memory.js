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
    document.addEventListener('DOMContentLoaded', main);
    //Hauptfunktion Ablauf
    function main() {
        Player();
        creatCardList(numPairsInt);
        enterName(numPlayerInt);
        creatCards(numPairsInt);
    }
    //Spieleranzahl eingeben
    function Player() {
        var numPlayer = prompt("Gewünschte Anzahl der Spieler   min. 1 | max. 4", "");
        numPlayerInt = parseInt(numPlayer);
        if (numPlayerInt >= 1 && numPlayerInt <= 4) {
            return numPlayerInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 4");
            Player();
        }
    }
    //Kartenpaare eingeben
    function Pair() {
        var numPairs = prompt("Gewünschte Anzahl der Kartenpaare   min. 1 | max. 26");
        numPairsInt = parseInt(numPairs);
        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;
        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            Pair();
        }
    }
    let amount = Pair();
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
    function creatCards(_numPairs, state = ["hidden", "open", "taken"]) {
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        let i = 0;
        for (let i = 0; i < _numPairs * 2; i++) {
            let min = 0;
            let max = (cardPush.length);
            var random = Math.floor(Math.random() * Math.floor(max));
            childNodeHTML = "<div  class='card" + randomStatus() + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }
    //Status vergeben 
    function randomStatus() {
        let randomStatus = Math.random();
        if (randomStatus <= .5) {
            return "hidden";
        }
        else if (randomStatus > .5 && randomStatus <= .95) {
            return "taken";
        }
        else if (randomStatus > .95) {
            return "open";
        }
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=Memory.js.map