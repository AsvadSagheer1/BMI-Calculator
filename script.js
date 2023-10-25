const weight = document.querySelector(".weight");
const heightFt = document.querySelector(".feet");
const heightIn = document.querySelector(".inches");
const output = document.querySelector(".output");
const _status = document.querySelector(".status");
const alertBox = document.querySelector("#alertBox");
const content = document.querySelectorAll(".content")

function checkBMIStatus(e) {
    let status = ''
    if (e <= 18.4) {
        status = 'Underweight'
        content.forEach(function (element) {
            element.setAttribute("src", "./img/underweight.png");
        });
    } else if (e > 18.5 && e <= 24.9) {
        status = 'Normal'
        content.forEach(function (element) {
            element.setAttribute("src", "./img/normal.png");
        });
    }
    else if (e > 24.9 && e <= 39.9) {
        status = 'Overweight'
        content.forEach(function (element) {
            element.setAttribute("src", "./img/overweight.png");
        });
    } else if (e >= 39.9) {
        status = 'Obese'
        content.forEach(function (element) {
            element.setAttribute("src", "./img/obese.png");
        });
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
    content.forEach(function (element) {
        element.setAttribute("src", "");
    });
}