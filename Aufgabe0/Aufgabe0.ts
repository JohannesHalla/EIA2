function Feld(): void {
  var eingabe : string = prompt("Wie lautet Ihr Name?", "");
  if (eingabe != null) {
    document.getElementById("HTML").innerHTML =
      "Herzlich Willkommen " + eingabe + "!";
  }
}
