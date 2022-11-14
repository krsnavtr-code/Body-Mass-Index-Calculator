let age = document.querySelector("#age");
let height = document.querySelector("#height");
let weight = document.querySelector("#weight");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let form = document.querySelector("#form");
// let alerts = document.querySelector("#alerts");

validateForm =()=> {
    if (
        age.value == "" ||
        height.value == "" ||
        weight.value == "" ||
        (male.checked == false && female.checked == false)
    ) {
        alert("Field all the values");
        document
            .querySelector("#submit")
            .removeEventListener("click", countBmi);
    } else {
        countBmi();
    }
}
document.querySelector("#submit").addEventListener("click", validateForm);

countBmi =()=> {
    let p = [age.value, height.value, weight.value];
    if (male.checked) {
        p.push("male");
    } else if (female.checked) {
        p.push("female");
    }
    form.reset();
    let bmi = Number(p[2]) / (((Number(p[1]) / 100) * Number(p[1])) / 100);
    let result = "";
    if (bmi < 18.5) {
        result = "Underweight";
    } else if (18.5 <= bmi && bmi <= 24.9) {
        result = "Healthy";
    } else if (25 <= bmi && bmi <= 29.9) {
        result = "Overweight";
    } else if (30 <= bmi && bmi <= 34.9) {
        result = "Obese";
    } else if (35 <= bmi) {
        result = "Extremely obese";
    }
    let h1 = document.createElement("h1");
    let h2 = document.createElement("h2");
    let t = document.createTextNode(result);
    let b = document.createTextNode("BMI: ");
    let r = document.createTextNode(parseFloat(bmi).toFixed(2));
    h1.appendChild(t);
    h2.appendChild(b);
    h2.appendChild(r);
    document.body.appendChild(h1);
    document.body.appendChild(h2);
    document.querySelector("#submit").removeEventListener("click", countBmi);
    document
        .querySelector("#submit")
        .removeEventListener("click", validateForm);
}
document.querySelector("#submit").addEventListener("click", countBmi);