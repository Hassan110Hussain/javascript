const form = document.querySelector("form");
// this usecase will give u empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const result = document.querySelector("#results");
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = "Please enter valid height ${height}!";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = "Please enter valid weight ${weight}!";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    let message = "";

    if (bmi < 18.6) {
      message = "🟡 You are Under Weight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      message = "🟢 You are in Normal Range";
    } else {
      message = "🔴 You are Over Weight";
    }

    result.innerHTML = `
    <p>Your BMI is <strong>${bmi}</strong></p>
    <p>${message}</p>
  `;
  }
});
