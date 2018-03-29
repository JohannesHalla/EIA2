function Feld() {
  var eingabe = prompt("Wie lautet Ihr Name?", "");
  if (eingabe != null) {
    document.getElementById("HTML").innerHTML =
      "Herzlich Willkommen " + eingabe + "!";
  }
}