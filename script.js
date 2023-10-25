const weight = document.querySelector(".weight");
const heightFt = document.querySelector(".feet");
const heightIn = document.querySelector(".inches");
const output = document.querySelector(".output");
const _status = document.querySelector(".status");
let alertBox = document.querySelector("#alertBox");

function checkBMIStatus(e) {
    let status = ''
    if (e <= 18.4) {
        status = 'Underweight'
    } else if (e > 18.5 && e <= 24.9) {
        status = 'Normal'
    }
    else if (e > 24.9 && e <= 39.9) {
        status = 'Overweight'
    } else if (e >= 39.9) {
        status = 'Obese'
    }
    console.log(status);
    _status.textContent = `You are ${status}`
    _status.style.display = "block"
}


function submit() {
    if (heightIn.value <= 0 || heightFt.value <= 0 || weight.value <= 0) {
        alertBox.style.display = "block";
        alertBox.textContent = "Please type valid numbers!";
    } else {
        const foot = heightFt.value * 0.3048;
        const inches = heightIn.value * 0.0254;

        const totalHeightSq = (foot + inches) * (foot + inches);

        const BMI = (weight.value / totalHeightSq).toFixed(2);

        output.style.display = "block"
        output.textContent = BMI;
        checkBMIStatus(BMI)
        alertBox.style.display = "none";
    }

}

function clearAll() {
    heightFt.value = ""
    heightIn.value = ""
    weight.value = ""
    output.textContent = ""
    _status.textContent = ""
    alertBox.style.display = "none";
}