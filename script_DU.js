
//FIT e-mail

const jmeno = prompt("Zadej jmeno bez diakritiky", "Jindriska").trim()
const prijmeni = prompt("Zadej prijmeni bez diakritiky", "Novakova").trim()
const email = {
    uzivatel: prijmeni.slice(0, 5) + jmeno.slice(0, 3), 
    domena: '@fit.cvut.cz',
};
document.body.innerHTML = `Emailova adresa uzivatele je: ${(email.uzivatel).toLowerCase()}${email.domena}`

//Množstevní slevy
const pocetKusu = Number(prompt("Zadej pocet kusu tricek, ktere si chces objednat"));
let cena = "" 
 
if(pocetKusu <50) {
    cena = 300;
} else if (pocetKusu >=50 && pocetKusu <200) {
    cena = 250;
} else if (pocetKusu >=200 && pocetKusu <500) {
    cena = 200;
} else if (pocetKusu >= 500 && pocetKusu <1000) {
    cena = 150;
} else if (pocetKusu >= 1000) {
    cena = 120;
}

document.body.innerHTML += "Celkova cena objednavky je" + pocetKusu*Number(cena) + "Kč"

//nebo taky funguje
const pocetKusu = Number(prompt("Zadej pocet kusu tricek, ktere si chces objednat"));

if(pocetKusu < 50) {
    document.body.innerHTML += `Celkova cena objednavky je: ` + pocetKusu*300 //pozor tady nesmí být středník
} else if (pocetKusu >= 50  && pocetKusu <200) { //pozor ani tady nesmí za ukončenou závorkou být středník
    document.body.innerHTML +=`Celkova cena objednavky je: ` + pocetKusu*250;
} else if (pocetKusu >= 200 && pocetKusu <500) {
    document.body.innerHTML += `Celkova cena objednavky je: ` + pocetKusu*200;
} else if (pocetKusu >= 500 && pocetKusu <1000) {
    document.body.innerHTML += `Celkova cena objednavky je: ` + pocetKusu*150;
} else if (pocetKusu >= 1000) {
    document.body.innerHTML +=`Celkova cena objednavky je: ` + pocetKusu*120;
} else {
    document.body.innerHTML += `Nespravne zadane mnozstvi`
}
