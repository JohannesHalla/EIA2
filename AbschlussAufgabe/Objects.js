var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Enemies {
        constructor() {
            this.position();
            this.x = Math.random() * ((Abschlussaufgabe.canvas.width * 1.6) - Abschlussaufgabe.canvas.width) + Abschlussaufgabe.canvas.width;
            this.y = Math.random() * (Abschlussaufgabe.canvas.height - 75);
        }
        color() {
        }
        position() {
            this.x = Math.random() * ((Abschlussaufgabe.canvas.width * 1.6) - Abschlussaufgabe.canvas.width) + Abschlussaufgabe.canvas.width;
            this.y = Math.random() * (Abschlussaufgabe.canvas.height - 75);
            alert("test");
        }
        move() {
        }
        draw() {
        }
    }
    Abschlussaufgabe.Enemies = Enemies;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=Objects.js.map