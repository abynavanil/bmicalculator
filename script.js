let gender = null;

const h1 = document.getElementById("h1");
const w1 = document.getElementById("w1");
const ageVal = document.getElementById("age-val");
const bmi = document.getElementById("bmi");
const bodyfat = document.getElementById("bodyfat");
const resultDiv = document.getElementById("resultdiv");
const okButton = document.getElementById("okbutton");

// Function to calculate BMI and Body Fat Percentage
function calc() {
    if (!h1.value || !w1.value || !ageVal.value) {
        alert("Enter Sufficient Input");
        return;
    }

    const height = parseFloat(h1.value);
    const weight = parseFloat(w1.value);
    const age = parseFloat(ageVal.value);

    const output = weight / ((height / 100) ** 2);
    let input = "";

    if (output < 16) {
        input = "Severe Thinness";
    } else if (output >= 16 && output < 17) {
        input = "Moderate Thinness";
    } else if (output >= 17 && output < 18.5) {
        input = "Mild Thinness";
    } else if (output >= 18.5 && output < 25) {
        input = "Normal";
    } else if (output >= 25 && output < 30) {
        input = "Overweight" ;
    } else if (output >= 30 && output < 35) {
        input = "Obese Class I";
    } else if (output >= 35 && output < 40) {
        input = "Obese Class II";
    } else {
        input = "Obese Class III";
    }

    bmi.innerHTML = `BMI: ${output.toFixed(2)} (${input})`;

    if (gender === null) {
        alert("Please select a gender");
        return;
    }

    const bfp = 1.2 * output + 0.23 * age - (gender === 1 ? 16.2 : 5.4);
    bodyfat.innerHTML = `BODY FAT: ${bfp.toFixed(2)}%`;

    // Show the result div
    resultDiv.style.display = "flex";
}

// Function to set gender to male
function genderm() {
    gender = 1;
    document.getElementById("men").style.transform = "scale(1.05)";
    document.getElementById("women").style.transform = "scale(1)";
    document.getElementById("m").style.color = "blue";
    document.getElementById("f").style.color = "white";
}

// Function to set gender to female
function genderf() {
    gender = 0;
    document.getElementById("women").style.transform = "scale(1.05)";
    document.getElementById("men").style.transform = "scale(1)";
    document.getElementById("f").style.color = "pink";
    document.getElementById("m").style.color = "white";
}

// Event listener to hide result div on clicking OK button
okButton.addEventListener("click", function () {
    resultDiv.style.display = "none";
});