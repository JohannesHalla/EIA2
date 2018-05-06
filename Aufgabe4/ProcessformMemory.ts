/* Aufgabe: 4.1 - Memory 
Name: Halla, Johannes 
Matrikel:258434 
Datum: 06.05.2018 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. 

Leider funktioniert der Aufruf der Hauptfunktion "main" nicht. Im HTML entsteht kein Spielfeld, obwohl ich die Funktion nach dem Klick auf den "Lets-Go-Button" aufrufe. 
Sitzen irgendwelche Klammern falsch?
*/


namespace Aufgabe4 {
    let numPlayers: number;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush: string[] = [];
    var numPairsInt: number;
    var numPlayerInt: number;
    let numOpenCards: number = 0;
    let clickedCards: HTMLElement[] = [];
    let x: number = 0;
    let newArray: string[] = [];
    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");
    document.addEventListener('DOMContentLoaded', init);

    function init(): void {
        let startButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("start");
        startButton.addEventListener("click", main);

    }




    //Hauptfunktion Ablauf   
    function main(): void {

        let header: NodeListOf<HTMLElement> = document.getElementsByTagName("header");
        header[0].classList.add("hiddenHeader")
        
        console.log("Header ist versteckt")


        let players: number = parseInt(inputs[2].value);
        let amountCards: number = parseInt(inputs[1].value);

        if (players <= 4 && players > 0 && amountCards > 0 && amountCards <= newArray.length) {

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
    function enterName(): void {
        let numPlayers: number = parseInt(inputs[1].value);

        let node: any = document.getElementById("spielernamen");
        let childNodeHTML: string;

        for (let i: number = 0; i < numPlayers; i++) {
            let spielerName: string = inputs[i +1].value

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
    function createCardList(): void {
        let amountCards: number = parseInt(inputs[1].value);
        let select: HTMLSelectElement = <HTMLSelectElement>document.getElementById("content");
        let chosenCardContent: string = select.value;


        for (let i: number = 1; i <= amountCards; i++) {
            let content: string = deck[chosenCardContent].content[i - 1];

            newArray.push(content);
            newArray.push(content);

            cardContent.splice(0, 1);
        }
    }

    //Karten erzeugen
    function createCards(): void {
        let amountPairs: number = parseInt(inputs[1].value);
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;
        let i: number = 0;
        for (let i: number = 0; i < amountPairs * 2; i++) {


            var random: number = Math.floor(Math.random() * Math.floor(newArray.length));

            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += newArray[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            newArray.splice(random, 1);

            var status = document.getElementsByClassName("hidden");
            for (let i: number = 0; i < status.length; i++) {


                status[i].addEventListener("click", changeStatus);
            }

        }


    }


    // Karte anklickbar
    var status = document.getElementsByClassName("hidden");



    for (let i: number = 0; i < status.length; i++) {


        status[i].addEventListener("click", changeStatus);

    }


    // Status von hidden auf open
    function changeStatus(_event: MouseEvent): void {

        let t: HTMLElement = <HTMLElement>_event.currentTarget;

        if (t.className == "hidden") {
            t.classList.remove("hidden");
            t.classList.add("open");
            numOpenCards++;

            if (numOpenCards == 2) {

                setTimeout(compareContent, 2000);  // Zeit
            }

            if (numOpenCards > 2) {
                t.classList.remove("open");
                t.classList.add("hidden");

            }
        }
    }

    //  console.log(numOpenCards);

    // Karten vergleichen
    function compareContent(): void {

        let karte1: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("open")[0];
        let karte2: HTMLDivElement = <HTMLDivElement>document.getElementsByClassName("open")[1];

        clickedCards.push(karte1, karte2);

        if (clickedCards[0].innerHTML == clickedCards[1].innerHTML) {

            // Karten werden vom Spielfeld genommen
            clickedCards[0].classList.remove("open");
            clickedCards[0].classList.add("taken");


            clickedCards[1].classList.remove("open");
            clickedCards[1].classList.add("taken");

            x++;
            let playerScore: string = x.toString();
            document.getElementById('score').innerHTML = playerScore;

            ende();
            console.log(x)

        }
        // Karten werden wieder zugedeckt            
        else {
            clickedCards[0].classList.remove("open");
            clickedCards[1].classList.remove("open");
            clickedCards[0].classList.add("hidden");
            clickedCards[1].classList.add("hidden");

        }
        numOpenCards = 0;

        // clickedCards-Array Inhalt löschen
        clickedCards.splice(0, 2);


        function ende(): void {
            if (x == numPairsInt) {

                alert("Herzlichen Glückwunsch!");

            }
        }

    }


}





