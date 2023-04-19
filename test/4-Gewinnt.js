let currentPlayer = "red";

let otherPlayer = "blue";

let Farbenprüfung;

let wincounter;

let prüfnummerneu;

let movecount = 0;
let movecountSpalte1 = 0;
let movecountSpalte2 = 0;
let movecountSpalte3 = 0;
let movecountSpalte4 = 0;
let movecountSpalte5 = 0;
let movecountSpalte6 = 0;
let movecountSpalte7 = 0;

let Kreisidentifizierung;

let Kreisnummer;

let Testkreis;

function clicked1() {

    if (movecountSpalte1 < 6) {
        movecountSpalte1 += 1;
        console.log("1:", movecountSpalte1);
        Kreisidentifizierung = "Kreis" + movecountSpalte1 + "1";
        document.getElementById(Kreisidentifizierung).style.backgroundColor = currentPlayer;

        Farbenprüfung = currentPlayer;

        if (currentPlayer === "red") {
            currentPlayer = "blue";
            otherPlayer = "red"
        } else if (currentPlayer === "blue") {
            currentPlayer = "red";
            otherPlayer = "blue";
        }
        Kreisnummer = movecountSpalte1 * 10 + 1;
        neuerPunkt();
    }
}

function clicked2() {

    if (movecountSpalte2 < 6) {
        movecountSpalte2 += 1;
        console.log("2:", movecountSpalte2);
        Kreisidentifizierung = "Kreis" + movecountSpalte2 + "2";
        document.getElementById(Kreisidentifizierung).style.backgroundColor = currentPlayer;

        Farbenprüfung = currentPlayer;

        if (currentPlayer === "red") {
            currentPlayer = "blue";
            otherPlayer = "red"
        } else if (currentPlayer === "blue") {
            currentPlayer = "red";
            otherPlayer = "blue";
        }
        Kreisnummer = movecountSpalte2 * 10 + 2;
        neuerPunkt();
    }
}

function clicked3() {

    if (movecountSpalte3 < 6) {
        movecountSpalte3 += 1;
        console.log("3:", movecountSpalte3);
        Kreisidentifizierung = "Kreis" + movecountSpalte3 + "3";
        document.getElementById(Kreisidentifizierung).style.backgroundColor = currentPlayer;

        Farbenprüfung = currentPlayer;

        if (currentPlayer === "red") {
            currentPlayer = "blue";
            otherPlayer = "red"
        } else if (currentPlayer === "blue") {
            currentPlayer = "red";
            otherPlayer = "blue";
        }
        Kreisnummer = movecountSpalte3 * 10 + 3;
        neuerPunkt();
    }
}

function clicked4() {

    if (movecountSpalte4 < 6) {
        movecountSpalte4 += 1;
        console.log("4:", movecountSpalte4);
        Kreisidentifizierung = "Kreis" + movecountSpalte4 + "4";
        document.getElementById(Kreisidentifizierung).style.backgroundColor = currentPlayer;

        Farbenprüfung = currentPlayer;

        if (currentPlayer === "red") {
            currentPlayer = "blue";
            otherPlayer = "red"
        } else if (currentPlayer === "blue") {
            currentPlayer = "red";
            otherPlayer = "blue";
        }
        Kreisnummer = movecountSpalte4 * 10 + 4;
        neuerPunkt();
    }
}

function clicked5() {

    if (movecountSpalte5 < 6) {
        movecountSpalte5 += 1;
        console.log("5:", movecountSpalte5);
        Kreisidentifizierung = "Kreis" + movecountSpalte5 + "5";
        document.getElementById(Kreisidentifizierung).style.backgroundColor = currentPlayer;

        Farbenprüfung = currentPlayer;

        if (currentPlayer === "red") {
            currentPlayer = "blue";
            otherPlayer = "red"
        } else if (currentPlayer === "blue") {
            currentPlayer = "red";
            otherPlayer = "blue";
        }
        Kreisnummer = movecountSpalte5 * 10 + 5;
        neuerPunkt();
    }
}

function clicked6() {

    if (movecountSpalte6 < 6) {
        movecountSpalte6 += 1;
        console.log("6:", movecountSpalte6);
        Kreisidentifizierung = "Kreis" + movecountSpalte6 + "6";
        document.getElementById(Kreisidentifizierung).style.backgroundColor = currentPlayer;

        Farbenprüfung = currentPlayer;

        if (currentPlayer === "red") {
            currentPlayer = "blue";
            otherPlayer = "red"
        } else if (currentPlayer === "blue") {
            currentPlayer = "red";
            otherPlayer = "blue";
        }
        Kreisnummer = movecountSpalte6 * 10 + 6;
        neuerPunkt();
    }
}

function clicked7() {

    if (movecountSpalte7 < 6) {
        movecountSpalte7 += 1;
        console.log("7:", movecountSpalte7);
        Kreisidentifizierung = "Kreis" + movecountSpalte7 + "7";
        document.getElementById(Kreisidentifizierung).style.backgroundColor = currentPlayer;

        Farbenprüfung = currentPlayer;

        if (currentPlayer === "red") {
            currentPlayer = "blue";
            otherPlayer = "red"
        } else if (currentPlayer === "blue") {
            currentPlayer = "red";
            otherPlayer = "blue";
        }
        Kreisnummer = movecountSpalte7 * 10 + 7;
        neuerPunkt();
    }
}

function clickedrestart() {
    location.reload();
}

function neuerPunkt() {
    movecount += 1;
    console.log("movecount: " + movecount);
    console.log("Kreis: " + Kreisidentifizierung);

    wincounter = 1;

    prüfnummerneu = Kreisnummer;

    while (true) {
        prüfnummerneu = prüfnummerneu - 10;
        if (prüfnummerneu < 11 || prüfnummerneu > 17 && prüfnummerneu < 21 || prüfnummerneu > 27 && prüfnummerneu < 31 || prüfnummerneu > 37 && prüfnummerneu < 41 || prüfnummerneu > 47 && prüfnummerneu < 51 || prüfnummerneu > 57 && prüfnummerneu < 61 || prüfnummerneu > 67) {
            break;
        }
        Testkreis = String("Kreis" + prüfnummerneu);

        if (document.getElementById(Testkreis).style.backgroundColor === Farbenprüfung) {
            wincounter += 1;
            if (wincounter === 4) {
                if (Farbenprüfung === "red") {
                    alert("Rot hat gewonnen!");
                } else {
                    alert("Blau hat gewonnen!");
                }
                endByWon = true;
                break;
            }
        } else {
            break;
        }
        console.log(Testkreis)
    }
    wincounter = 1;
    prüfnummerneu = Kreisnummer;
    while (true) {
        prüfnummerneu = prüfnummerneu - 9;
        if (prüfnummerneu < 11 || prüfnummerneu > 17 && prüfnummerneu < 21 || prüfnummerneu > 27 && prüfnummerneu < 31 || prüfnummerneu > 37 && prüfnummerneu < 41 || prüfnummerneu > 47 && prüfnummerneu < 51 || prüfnummerneu > 57 && prüfnummerneu < 61 || prüfnummerneu > 67) {
            break;
        }
        Testkreis = String("Kreis" + prüfnummerneu);

        if (document.getElementById(Testkreis).style.backgroundColor === Farbenprüfung) {
            wincounter += 1;
            if (wincounter === 4) {
                if (Farbenprüfung === "red") {
                    alert("Rot hat gewonnen!");
                } else {
                    alert("Blau hat gewonnen!");
                }
                endByWon = true;
                break;
            }
        } else {
            break;
        }
        console.log(Testkreis)
    }
    prüfnummerneu = Kreisnummer;
    while (true) {
        prüfnummerneu = prüfnummerneu + 9;
        if (prüfnummerneu < 11 || prüfnummerneu > 17 && prüfnummerneu < 21 || prüfnummerneu > 27 && prüfnummerneu < 31 || prüfnummerneu > 37 && prüfnummerneu < 41 || prüfnummerneu > 47 && prüfnummerneu < 51 || prüfnummerneu > 57 && prüfnummerneu < 61 || prüfnummerneu > 67) {
            break;
        }
        Testkreis = String("Kreis" + prüfnummerneu);

        if (document.getElementById(Testkreis).style.backgroundColor === Farbenprüfung) {
            wincounter += 1;
            if (wincounter === 4) {
                if (Farbenprüfung === "red") {
                    alert("Rot hat gewonnen!");
                } else {
                    alert("Blau hat gewonnen!");
                }
                endByWon = true;
                break;
            }
        } else {
            break;
        }
        console.log(Testkreis)
    }
    wincounter = 1;
    prüfnummerneu = Kreisnummer;
    while (true) {
        prüfnummerneu = prüfnummerneu + 11;
        if (prüfnummerneu < 11 || prüfnummerneu > 17 && prüfnummerneu < 21 || prüfnummerneu > 27 && prüfnummerneu < 31 || prüfnummerneu > 37 && prüfnummerneu < 41 || prüfnummerneu > 47 && prüfnummerneu < 51 || prüfnummerneu > 57 && prüfnummerneu < 61 || prüfnummerneu > 67) {
            break;
        }
        Testkreis = String("Kreis" + prüfnummerneu);

        if (document.getElementById(Testkreis).style.backgroundColor === Farbenprüfung) {
            wincounter += 1;
            if (wincounter === 4) {
                if (Farbenprüfung === "red") {
                    alert("Rot hat gewonnen!");
                } else {
                    alert("Blau hat gewonnen!");
                }
                endByWon = true;
                break;
            }
        } else {
            break;
        }
        console.log(Testkreis)
    }
    prüfnummerneu = Kreisnummer;
    while (true) {
        prüfnummerneu = prüfnummerneu - 11;
        if (prüfnummerneu < 11 || prüfnummerneu > 17 && prüfnummerneu < 21 || prüfnummerneu > 27 && prüfnummerneu < 31 || prüfnummerneu > 37 && prüfnummerneu < 41 || prüfnummerneu > 47 && prüfnummerneu < 51 || prüfnummerneu > 57 && prüfnummerneu < 61 || prüfnummerneu > 67) {
            break;
        }
        Testkreis = String("Kreis" + prüfnummerneu);

        if (document.getElementById(Testkreis).style.backgroundColor === Farbenprüfung) {
            wincounter += 1;
            if (wincounter === 4) {
                if (Farbenprüfung === "red") {
                    alert("Rot hat gewonnen!");
                } else {
                    alert("Blau hat gewonnen!");
                }
                endByWon = true;
                break;
            }
        } else {
            break;
        }
        console.log(Testkreis)
    }
    wincounter = 1;
    prüfnummerneu = Kreisnummer;
    while (true) {
        prüfnummerneu = prüfnummerneu + 1;
        if (prüfnummerneu < 11 || prüfnummerneu > 17 && prüfnummerneu < 21 || prüfnummerneu > 27 && prüfnummerneu < 31 || prüfnummerneu > 37 && prüfnummerneu < 41 || prüfnummerneu > 47 && prüfnummerneu < 51 || prüfnummerneu > 57 && prüfnummerneu < 61 || prüfnummerneu > 67) {
            break;
        }
        Testkreis = String("Kreis" + prüfnummerneu);

        if (document.getElementById(Testkreis).style.backgroundColor === Farbenprüfung) {
            wincounter += 1;
            if (wincounter === 4) {
                if (Farbenprüfung === "red") {
                    alert("Rot hat gewonnen!");
                } else {
                    alert("Blau hat gewonnen!");
                }
                endByWon = true;
                break;
            }
        } else {
            break;
        }
        console.log(Testkreis)
    }
    prüfnummerneu = Kreisnummer;
    while (true) {
        prüfnummerneu = prüfnummerneu - 1;
        if (prüfnummerneu < 11 || prüfnummerneu > 17 && prüfnummerneu < 21 || prüfnummerneu > 27 && prüfnummerneu < 31 || prüfnummerneu > 37 && prüfnummerneu < 41 || prüfnummerneu > 47 && prüfnummerneu < 51 || prüfnummerneu > 57 && prüfnummerneu < 61 || prüfnummerneu > 67) {
            break;
        }
        Testkreis = String("Kreis" + prüfnummerneu);

        if (document.getElementById(Testkreis).style.backgroundColor === Farbenprüfung) {
            wincounter += 1;
            if (wincounter === 4) {
                if (Farbenprüfung === "red") {
                    alert("Rot hat gewonnen!");
                } else {
                    alert("Blau hat gewonnen!");
                }
                endByWon = true;
                break;
            }
        } else {
            break;
        }
        console.log(Testkreis)
    }



    if (movecount === 42) {
        alert("Das Spiel ist unentschieden!");
    } else if (endByWon) {
        movecountSpalte1 = 6;
        movecountSpalte2 = 6;
        movecountSpalte3 = 6;
        movecountSpalte4 = 6;
        movecountSpalte5 = 6;
        movecountSpalte6 = 6;
        movecountSpalte7 = 6;
    }

}

