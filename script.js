const currencyFirstEl = document.getElementById("currency-first");

const worthFirstEl = document.getElementById("worth-first")

const currencySecondEl = document.getElementById("currency-second")

const worthSecondEl = document.getElementById("worth-first")

const exchangeRateEl = document.getElementById("exchange-rate")

updateRate()

function updateRate(){
    fetch(`https://v6.exchangerate-api.com/v6/3966400c4d6092196ff7ce22/latest/${currencyFirstEl.value}`)
    .then((res)=> res.json())
    .then((data)=> {
        const rate = data.conversion_rates
        [currencySecondEl.value];
        console.log(rate);
        exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate + " " + currencySecondEl.value}`;
        worthSecondEl.value = (worthFirstEl.value * rate).toFixed(3)
  });
}

currencyFirstEl.addEventListener("change",
updateRate)

currencySecondEl.addEventListener("change",
updateRate)

worthFirstEl.addEventListener("input", updateRate)