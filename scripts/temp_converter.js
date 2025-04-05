
const numbervalue = document.getElementById("numbervalue");
const toFahrenheit_btn = document.getElementById("CelsiusToFahrenheit");
const toCelsius_btn = document.getElementById("FahrenheitToCelsius");
const result = document.getElementById("result");

function convert(){
    event.preventDefault();
    let num = Number(numbervalue.value);

    if(toFahrenheit_btn.checked){
        fahrenheit = (num * 9/5) + 32;
        result.textContent = fahrenheit + " " + toFahrenheit_btn.value;
    }
    else if(toCelsius_btn.checked){
        celsius = (num - 32) * 5/9;
        result.textContent = celsius + " " + toCelsius_btn.value;

    }else{
        result.textContent = "Please, select a conversion mode";
    }
}