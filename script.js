// ===========================
// Temperature Converter
// ===========================

function convertTemperature() {

    const from = document.getElementById("tempFrom").value;
    const to = document.getElementById("tempTo").value;
    const value = parseFloat(document.getElementById("tempValue").value);

    if (isNaN(value)) {
        alert("Please enter a temperature value.");
        return;
    }

    let celsius;

    // Convert input to Celsius
    switch (from) {
        case "C":
            celsius = value;
            break;
        case "F":
            celsius = (value - 32) * 5 / 9;
            break;
        case "K":
            celsius = value - 273.15;
            break;
    }

    let result;
    let formula = "";

    // Convert Celsius to target unit
    switch (to) {

        case "C":
            result = celsius;
            formula = "°C = °C";
            break;

        case "F":
            result = (celsius * 9 / 5) + 32;
            formula = "(°C × 9/5) + 32";
            break;

        case "K":
            result = celsius + 273.15;
            formula = "°C + 273.15";
            break;

    }

    document.getElementById("tempResult").innerHTML =
        result.toFixed(2) + " °" + to;

    document.getElementById("tempFormula").innerHTML =
        formula;

}


// ===========================
// Swap Temperature Units
// ===========================

function swapTemp() {

    let from = document.getElementById("tempFrom");
    let to = document.getElementById("tempTo");

    let temp = from.value;
    from.value = to.value;
    to.value = temp;

    convertTemperature();

}



// ===========================
// Length Converter
// ===========================

const lengthUnits = {

    km: 1000,
    m: 1,
    cm: 0.01,
    mm: 0.001,
    mi: 1609.344,
    ft: 0.3048,
    in: 0.0254

};

function convertLength() {

    const from = document.getElementById("lenFrom").value;
    const to = document.getElementById("lenTo").value;
    const value = parseFloat(document.getElementById("lenValue").value);

    if (isNaN(value)) {

        alert("Please enter a length value.");

        return;

    }

    let meters = value * lengthUnits[from];

    let result = meters / lengthUnits[to];

    document.getElementById("lenResult").innerHTML =
        result.toFixed(4) + " " + to;

    document.getElementById("lenFormula").innerHTML =
        "1 " + from + " = " +
        (lengthUnits[from] / lengthUnits[to]).toFixed(6) +
        " " + to;

}



// ===========================
// Swap Length Units
// ===========================

function swapLength() {

    let from = document.getElementById("lenFrom");
    let to = document.getElementById("lenTo");

    let temp = from.value;
    from.value = to.value;
    to.value = temp;

    convertLength();

}



// ===========================
// Dark Mode
// ===========================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {

        themeBtn.innerHTML =
            '<i class="bi bi-sun-fill"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="bi bi-moon-fill"></i>';

    }

});



// ===========================
// Default Output
// ===========================

window.onload = function() {

    document.getElementById("tempValue").value = 25;
    convertTemperature();

    document.getElementById("lenValue").value = 2.5;
    convertLength();

};