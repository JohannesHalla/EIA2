namespace aufgabe8 {
   
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
        age: number;
        gender: boolean;
        studiengang: string;
    }
    export interface Studis {         [matrikel: string]: Studi;
    }
     export let studiHomoAssoc: Studis = {};  
}