const convertButton = document.querySelector(".convert-button");
const currencySelect2 = document.querySelector("#currency2");
const currencySelect1 = document.querySelector("#currency1");
 async function convertValues() {

    const inputCurrencyValue = document.querySelector(".Value-currency").value

    const value1 = document.querySelector("#value1")

    const valueOther = document.querySelector("#other")

const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL,BRL-USD,BRL-EUR,BRL-GBP,USD-EUR,USD-GBP,EUR-USD,EUR-GBP,GBP-USD,GBP-EUR").then(response => response.json())
 
   
    let realToday = 1
    let dolarToday = data.USDBRL.high
    let euroToday = data.EURBRL.high
    let libraToday = data.GBPBRL.high

    if (currencySelect1.value == "real") {
        value1.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
         realToday = 1
         dolarToday = data.USDBRL.high
         euroToday = data.EURBRL.high
         libraToday = data.GBPBRL.high}

    if (currencySelect1.value == "dolar") {
        value1.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
        realToday = data.BRLUSD.high
         dolarToday = 1
         euroToday = data.USDEUR.high
         libraToday = data.USDGBP.high}
    
    if (currencySelect1.value == "euro") {
        value1.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
        realToday = data.BRLEUR.high
        dolarToday = data.USDEUR.high
        euroToday = 1
        libraToday = data.GBPEUR.high}
    
    if (currencySelect1.value == "libra") {
        value1.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
        realToday = data.BRLGBP.high
         dolarToday = data.USDGBP.high
         euroToday = data.EURGBP.high
         libraToday = 1}
    

    if (currencySelect2.value == "dolar") {
        valueOther.innerHTML = new Intl.NumberFormat("en-US", {

            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }
    if (currencySelect2.value == "euro") {
        valueOther.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)

    }
    if (currencySelect2.value == "libra") {
        valueOther.innerHTML = new Intl.NumberFormat("de-DE", {

            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)

    }
    if (currencySelect2.value == "real") {
        valueOther.innerHTML = new Intl.NumberFormat("pt-BR", {

            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / realToday)

    }

    

}




function changeCurrency() {

    const currency = document.querySelector("#text-currency")
    const logoCurrency = document.querySelector("#logo-currency")
    const currency1 = document.querySelector("#text-currency1")
    const logoCurrency1 = document.querySelector("#logo-currency1")

    if (currencySelect2.value == "dolar") {
        currency.innerHTML = "Dolar"
        logoCurrency.src = "./img/Dolar.png"
    }
    if (currencySelect2.value == "euro") {
        currency.innerHTML = "Euro"
        logoCurrency.src = "./img/Euro.png"
    }
    if (currencySelect2.value == "libra") {
        currency.innerHTML = "Libra Esterlina"
        logoCurrency.src = "./img/Libra.png"
    }
    if (currencySelect2.value == "real") {
        currency.innerHTML = "Real"
        logoCurrency.src = "./img/brasil 2.png"
    }
    convertValues()

    if (currencySelect1.value == "dolar") {
        currency1.innerHTML = "Dolar"
        logoCurrency1.src = "./img/Dolar.png"

    }
    if (currencySelect1.value == "euro") {
        currency1.innerHTML = "Euro"
        logoCurrency1.src = "./img/Euro.png"
    }
    if (currencySelect1.value == "libra") {
        currency1.innerHTML = "Libra Esterlina"
        logoCurrency1.src = "./img/Libra.png"
    }
    if (currencySelect1.value == "real") {
        currency1.innerHTML = "Real"
        logoCurrency1.src = "./img/brasil 2.png"

    }


}


convertButton.addEventListener("click", convertValues)
currencySelect2.addEventListener("change", changeCurrency)
currencySelect1.addEventListener("change", changeCurrency)