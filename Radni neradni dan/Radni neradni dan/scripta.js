
const danas = new Date();
const dan = danas.getDay();

let nazivDana;

switch (dan) {
    case 0:
        nazivDana = "Nedjelja";
        break;
    case 1:
        nazivDana = "Ponedjeljak";
        break;
    case 2:
        nazivDana = "Utorak";
        break;
    case 3:
        nazivDana = "Srijeda";
        break;
    case 4:
        nazivDana = "Četvrtak";
        break;
    case 5:
        nazivDana = "Petak";
        break;
    case 6:
        nazivDana = "Subota";
        break;
}

console.log("Danas je " + nazivDana + ".");

if (dan >= 1 && dan <= 5) {
    console.log("Danas je radni dan.");
} else {
    console.log("Danas je neradni dan.");
}

if (dan === 1) {
    console.log("Ja najviše volim JS od svih programskih jezika");
} else if (dan === 4) {
    console.log("Mali petak!");
} else if (dan === 5) {
    console.log("Vikend na Vidiku!");
}
