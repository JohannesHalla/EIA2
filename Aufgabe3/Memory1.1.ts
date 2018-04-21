/* Aufgabe: 2 - Memory 
Name: Halla, Johannes 
Matrikel:258434 
Datum: 15.04.2018 
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde
nicht kopiert und auch nicht diktiert. */


namespace Memory {
    let numPlayers: number;
    let numPairs: number;
    let cardContent: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let cardPush: string[] = [];
    var numPairsInt: number;
    var numPlayerInt: number;
    let numOpenCards: number = 0;
    let cardShuffle: string[] = [];


    document.addEventListener('DOMContentLoaded', main);

    //Hauptfunktion Ablauf   
    function main(): void {

        player();

        creatCardList(numPairsInt);

        enterName(numPlayerInt);

        createCards(numPairsInt);
    }


    //Spieleranzahl eingeben    
    function player(): number {
        var numPlayer: string = prompt("Gewünschte Anzahl der Spieler   min. 1 | max. 4", "");
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
    function pair(): number {
        var numPairs: string = prompt("Gewünschte Anzahl der Kartenpaare min. 1 | max. 26");
        numPairsInt = parseInt(numPairs);

        if (numPairsInt >= 1 && numPairsInt <= 26) {
            return numPairsInt;

        }
        else {
            alert("Deine Zahl liegt nicht zwischen 1 und 26");
            pair();
        }

    }


    let amount: number = pair();



    //Spielernamen erzeugen
    function enterName(_numPlayer: number): void {
        let node: any = document.getElementById("spielernamen");
        let childNodeHTML: string;

        for (let i: number = 0; i < _numPlayer; i++) {


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

    function creatCardList(x: number): void {
        for (let i: number = 1; i <= x; i++) {
            var content: string = cardContent[0];
            cardPush.push(content);
            cardPush.push(content);

            var remove = cardContent.splice(0, 1);

        }
    }


    //Karten erstellen

    function createCards(_numPairs: number): void {
        let node: any = document.getElementById("spielfeld");
        let childNodeHTML: string;
        let i: number = 0;


        for (let i: number = 0; i < _numPairs * 2; i++) {
            let min: number = 0;
            let max: number = (cardPush.length);

            var random: number = Math.floor(Math.random() * Math.floor(max));




            childNodeHTML = "<div  class='hidden" + "' id='Karte" + i + "'>";
            childNodeHTML += "<h3>";
            childNodeHTML += cardPush[random];
            childNodeHTML += "</h3>";
            childNodeHTML += " </div> ";
            node.innerHTML += childNodeHTML;

            var remove = cardPush.splice(random, 1)


            // Karte anklickbar

            var status = document.getElementsByClassName("hidden");

            for (let i: number = 0; i < status.length; i++) {


                status[i].addEventListener("click", changeStatus);

            }

        }


        // Status von hidden auf open

        function changeStatus(_event: MouseEvent): void {

            let t: HTMLElement = <HTMLElement>_event.target;

            if (t.className = "hidden") {

                numOpenCards++;

                if (!(numOpenCards > 2)) {
                    if (t.className = "hidden") {
                        t.classList.remove("hidden");
                        t.classList.add("open");
                    }

                    console.log(numOpenCards);


                }
            }


            function pushContent(classList: string): void {
                for (let i: number = 0; i < 2; i++) {
                    var compare: string = cardShuffle[0];
                    classList.push(compare);
                }
            }
        }
    }
}