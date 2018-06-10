namespace L04_Interfaces {
  
    export interface Studi {
        name: string;
        firstname: string;
        matrikel: number;                       
        studiengang: string;                    
        age: number;
        gender: boolean;
    }


    export interface Studis {
         [matrikel: string]: Studi;
    }


    export let studiSimpleArray: Studi[] = [];
    
    export let studiHomoAssoc: Studis = {};
    
}