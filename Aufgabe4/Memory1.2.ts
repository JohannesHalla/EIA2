namespace Aufgabe4 {


    export interface cardDeck {
        name: string;
        content: string[];
        color: string;
        font: string;
        size: number;
        cssClass: string;
    }


    export interface Deck {
        [deckname: string]: cardDeck;
    }

    export let deck: Deck = {}
    
    
    deck["Letters"] = {
        name: "Letters",
        content: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        color: "hsba(0.5,1.0,0.0,1.0)",
        font: "Arial",
        size: 50,
        cssClass: "letters",

    }

    deck["Animals"] = {
        name: "Animals",
        content: ["Krokdil", "Pferd", "Guerteltier", "Zebra", "Schnecke", "Frosch", "Forelle", "Tiger", "Maus"],
        color: "hsba(0.5,1.0,0.0,1.0)",
        font: "Helvetica",
        size: 30,
        cssClass: "animals",

    }

    deck["Cities"] = {
        name: "Cities",
        content: ["Berlin", "Hamburg", "New York", "Tokyo", "Oslo", "Rom", "Paris", "Wien", "Moskau", "Amsterdam", "Seoul"],
        color: "hsba(0.5,1.0,0.0,1.0)",
        font: "Arial",
        size: 40,
        cssClass: "cities",

    }

}