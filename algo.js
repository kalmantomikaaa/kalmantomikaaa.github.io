/*
Összegzés algoritmusa

összeg = 0
CIKLUS AMÍG van még szám, addig
    szám = következő elem
    összeg = összeg + szám
Ciklus vége

*/

let numericArray = [1, 3, 4, 2, 6, 4, 7, 8, 5];
let sum = 0;
for (let i = 0; i < numericArray.length; i++) {
    sum += numericArray[i]
}
console.log("Sum: ", sum);

/*
Számlálás algoritmusa

db = 0
CIKLUS AMÍG VAN MÉG SZÁM ADDIG
    szám = következő elem
    HA igaz a feltétel a számra AKKOR
    db = db+1
    feltétel vége
Ciklus vége

*/

let db = 0
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db);

/* 
Szélsőérték keresés algoritmusa

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG
    szám = következő szám
    HA szám > legnagyobb, AKKOR
    legnagyobb = szám
    FELTÉTEL VÉGE
Ciklus vége

*/

let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest){
        biggest = numericArray[i];
    }
}
console.log("The biggest number: ", biggest);

let lowest = numericArray[0];
for (let i = 0; i > numericArray.length; i++) {
    if (numericArray[i] > lowest){
        lowest = numericArray[i];
    }
}
console.log("The lowest number: ", lowest);

/*
Eldöntés tétele (Algoritmusa)

Találat = HAMIS
CIKLUS AMÍG van elem ÉS NEM találat
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS CÉGE

*/

let contains = false;
for (let i = 0; i < numericArray.length && contains == false; i++) {
    if (numericArray[i] == 9) {
        contains = true;

    }
}

console.log("Valami szám: ", contains);

console.log("Ez: ", 3 % 5 > 1 ? 4 : 7)