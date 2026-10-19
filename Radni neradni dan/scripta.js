
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

