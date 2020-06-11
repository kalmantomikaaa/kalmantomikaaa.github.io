//Ár kiírása
function calcAmount() {
    let price = 200;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
}

function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 db");
    } else if (amountNumber < 1) {
        alert("Minimum 1 db");
    } else {
        let amount = amountNumber * price
        showAmount.innerHTML = amount;
    }
}
//Vége

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']")
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons.addEventListener("click", function(ev) {
        console.log( ev );
        this.parentElement.style.display ="none";
    });
}

//Select elem kitöltése
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Sajt",
    "Avokádó"
];
let toppingSelect = document.querySelector("#topInput")
let index = 0;
while(index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}
//Vége
