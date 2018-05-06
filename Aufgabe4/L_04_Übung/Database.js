var L04;
(function (L04) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", searchmatrikel);
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let genderButton = document.getElementById("male");
        let matrikel = inputs[2].value;
        let studiengang = document.getElementsByTagName("select")[0];
        let savestudiengang = studiengang.value;
        let studi;
        studi = {
            name: inputs[0].value,
            firstname: inputs[1].value,
            matrikel: parseInt(matrikel),
            age: parseInt(inputs[3].value),
            gender: genderButton.checked,
            studiengang: savestudiengang
        };
        console.log(studi);
        console.log(studi.age);
        console.log(studi["age"]);
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        L04.studiHomoAssoc[matrikel] = studi;
        // nur um das auch noch zu zeigen...
        L04.studiSimpleArray.push(studi);
    }
    function searchmatrikel(_event) {
        let search = document.getElementsByTagName("input")[6];
        let savesearch = search.value;
        let student = L04.studiHomoAssoc[savesearch];
        console.log(savesearch);
        if (student == undefined) {
            alert("Matrikelnummer ist flasch.");
        }
        else {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = "Vorname:  " + student.firstname + "\r\n" + "Name:  " + student.name + "\r\n" + "Alter:  " + student.age + "\r\n" + "Studiengang:  " + student.studiengang;
        }
    }
    function refresh(_event) {
        let output = document.getElementsByTagName("textarea")[0];
        output.value = "";
        // for-in-Schleife iteriert über die Schlüssel des assoziativen Arrays
        for (let matrikel in L04.studiHomoAssoc) {
            let studi = L04.studiHomoAssoc[matrikel];
            let line = matrikel + ": ";
            line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre" + ", " + studi.studiengang;
            line += studi.gender ? "(M)" : "(F)";
            output.value += line + "\n";
        }
        function search(_event) {
            let n = 0;
            let output = document.getElementsByTagName("textarea")[2];
            let mNumb = document.getElementById("matrikelNumber");
            output.value = "";
            for (let matrikel in L04.studiHomoAssoc) {
                let studi = L04.studiHomoAssoc[matrikel];
                let line = matrikel + ": ";
                let lengthstudiHomoAssoc = L04.studiSimpleArray.length;
                if (mNumb.value == studi.matrikel.toString()) {
                    line += studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
                    line += studi.gender ? "(M)" : "(F)";
                    output.value += line + "\n";
                }
                else if ((lengthstudiHomoAssoc - 1) == n) {
                    let info = "No student found.";
                    output.value += info + "\n";
                    n = 0;
                }
                else {
                    n++;
                }
            }
        }
        // zusätzliche Konsolenausgaben zur Demonstratio
        console.group("Simple Array");
        console.log(L04.studiSimpleArray);
        console.groupEnd();
        console.group("Associatives Array (Object)");
        console.log(L04.studiHomoAssoc);
        console.groupEnd();
    }
})(L04 || (L04 = {}));
//# sourceMappingURL=Database.js.map