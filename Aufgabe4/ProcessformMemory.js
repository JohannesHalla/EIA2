/* Aufgabe: 4.1 - Memory
Name: Halla, Johannes
Matrikel:258434
Datum: 06.05.2018
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert.

Korrigierte Variante
*/
var Memory04;
(function (Memory04) {
    let cardContent = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
    let newArray = [];
    let cardOpen = [];
    let numPairs;
    let numPlayer;
    let numCardsOpen = 0;
    let openArray = [];
    let cardsTaken = [];
    let x = 0;
    let inputs = document.getElementsByTagName("input");
    document.addEventListener('DOMContentLoaded', init);
    function init() {
        let startButton = document.getElementById("startButton");
        startButton.addEventListener("click", main);
    }
    //Mainfunktion Memory  
    function main() {
        let header = document.getElementsByTagName("header");
        header[0].classList.add("hiddenHeader");
        let players = parseInt(inputs[0].value);
        let amountCards = parseInt(inputs[5].value);
        if (players <= 4 && players > 0 && amountCards > 0 && amountCards <= 10) {
            //player();
            createCardList();
            createPlayers();
            createCards();
        }
        else {
            alert("Undefined!");
            location.reload(true);
        }
    }
    //Spielernamen erzeugen
    function createPlayers() {
        let players = parseInt(inputs[0].value);
        let node = document.getElementById("playersnames");
        let childNodeHTML;
        for (let i = 0; i < players; i++) {
            let playerName = inputs[i + 1].value;
            childNodeHTML = "<div>";
            childNodeHTML += "<p class='namen'>";
            childNodeHTML += playerName;
            childNodeHTML += "</p>";
            childNodeHTML += "<p  id='Punktestand" + i + "'>";
            childNodeHTML += "0";
            childNodeHTML += "</p>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
        }
    }
    //Karteninhalt erstellen   
    function createCardList() {
        let amountCards = parseInt(inputs[5].value);
        let select = document.getElementById("cardContent");
        let chosenCardContent = select.value;
        for (let i = 1; i <= amountCards; i++) {
            let content = Memory04.decks[chosenCardContent].cardContent[i - 1];
            newArray.push(content);
            newArray.push(content);
            cardContent.splice(0, 1);
            console.log(newArray);
        }
    }
    //Karten erstellen   
    function createCards() {
        let amountCards = parseInt(inputs[5].value);
        let node = document.getElementById("spielfeld");
        let childNodeHTML;
        for (let i = 0; i < amountCards * 2; i++) {
            var random = Math.floor(Math.random() * Math.floor(newArray.length));
            childNodeHTML = "<div  class='card" + "hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += newArray[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;
            newArray.splice(random, 1);
            var status = document.getElementsByClassName("cardhidden");
            for (let i = 0; i < status.length; i++) {
                status[i].addEventListener("click", changeStatus);
            }
        }
    }
    // Karten aufdecken
    function changeStatus(_event) {
        let target = _event.currentTarget;
        if (target.classList.contains("cardhidden")) {
            target.classList.remove("cardhidden");
            target.classList.add("cardopen");
            numCardsOpen++;
            if (numCardsOpen == 2) {
                setTimeout(compareCards, 1500);
            }
            if (numCardsOpen > 2) {
                target.classList.remove("cardopen");
                target.classList.add("cardhidden");
            }
        }
    }
    // Karten vergleichen
    function compareCards() {
        let amountCards = parseInt(inputs[5].value);
        let karte1 = document.getElementsByClassName("cardopen")[0];
        let karte2 = document.getElementsByClassName("cardopen")[1];
        openArray.push(karte1, karte2);
        console.log(openArray);
        if (openArray[0].innerHTML == openArray[1].innerHTML) {
            openArray[0].classList.remove("cardopen");
            openArray[1].classList.remove("cardopen");
            openArray[0].classList.add("cardtaken");
            openArray[1].classList.add("cardtaken");
            console.log("Kartenpaar abeglegt");
            x++;
            let playerScore = x.toString();
            document.getElementById('Punktestand0').innerHTML = playerScore;
            // Gratulation
            if (x == amountCards) {
                alert("Congratulations!");
                location.reload(true);
            }
        }
        else {
            openArray[0].classList.remove("cardopen");
            openArray[1].classList.remove("cardopen");
            openArray[0].classList.add("cardhidden");
            openArray[1].classList.add("cardhidden");
        }
        numCardsOpen = 0;
        openArray.splice(0, 2);
    }
})(Memory04 || (Memory04 = {}));
//# sourceMappingURL=ProcessformMemory.js.map