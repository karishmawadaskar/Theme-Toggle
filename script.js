function calculateSI() {
    const initialInvestment =
        parseFloat(document.getElementById("investment").value);
    const interestRate =
        parseFloat(document.getElementById("interest-rate").value) / 100;
    const investmentYears =
        parseInt(document.getElementById("investment-years").value);
    let totalAmount = initialInvestment;

    for (let i = 1; i <= investmentYears; i++) {
        totalAmount *= (1 + interestRate);
    }

    result.innerText =
        `After ${investmentYears} years, your investment` +
        ` will be worth $${totalAmount.toFixed(2)}.`;
}
function reset() {
    const initialInvestment = document.getElementById("investment")
    initialInvestment.value = ""

    const interestRate = document.getElementById("interest-rate")
    interestRate.value = ""

    const investmentYears = document.getElementById("investment-years")
    investmentYears.value = ""

    const resultElement = document.getElementById("result")
    resultElement.innerText = ""
}
function themeToggle() {
    const body = document.body;
    const button = document.getElementById('themeToggle');

    if (body.classList.contains('day')) {
        body.classList.remove('day');
        body.classList.add('night');
        button.classList.remove('day');
        button.classList.add('night');

    } else {
        body.classList.remove('night');
        body.classList.add('day');
        button.classList.remove('night');
        button.classList.add('day');

    }

}
