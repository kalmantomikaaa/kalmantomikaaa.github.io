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

window.addEventListener("resize", function() {
    console.log(this.innerHeight, this.innerWidth);
});

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev){
    event.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for(let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value
    }

    console.log( values );
})

let sendButton = document.querySelector("form .btn.btn-primary");

sendButton.addEventListener("click", function() {
    alert("Hello");
});

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild( helpText );

parent.removeChild(helpText);