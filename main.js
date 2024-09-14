let celsiusInput = document.getElementById("cel");
let fahrenheitInput = document.getElementById("fah");
let convertBtn = document.getElementById('convertBtn');
let result = document.getElementById("result");

convertBtn.addEventListener("click", function() {
    if (celsiusInput.value !== "") {
        CtoF();
        fahrenheitInput.value = "";
    } else if (fahrenheitInput.value !== "") {
        FtoC();
        celsiusInput.value = "";
    } else {
        result.textContent = "Please enter a value!";
    }
});

function CtoF() {
    let output = (parseFloat(celsiusInput.value) * 9 / 5) + 32;
    fahrenheitInput.value = output.toFixed(2);
    result.textContent = celsiusInput.value + " °C = " + output.toFixed(2) + " °F";
}

function FtoC() {
    let output = (parseFloat(fahrenheitInput.value) - 32) * 5 / 9;
    celsiusInput.value = output.toFixed(2);
    result.textContent = fahrenheitInput.value + " °F = " + output.toFixed(2) + " °C";
}
