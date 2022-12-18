/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const unitEl = document.getElementById("unit-el");
const convertBtn = document.getElementById("convert-btn");
const lengthText = document.getElementById("length-el");
const volumeText = document.getElementById("volume-el");
const massText = document.getElementById("mass-el");

const length = 3.281
const volume = 0.264
const mass = 2.204


convertBtn.addEventListener("click", function () {
  lengthText.textContent = `${unitEl.value} meters = ${Number(
    unitEl.value * length
  ).toFixed(3)} feet |
  ${unitEl.value} feet = ${Number(unitEl.value / length).toFixed(3)} meters`;
  volumeText.textContent = `${unitEl.value} liters = ${Number(
    unitEl.value * volume
  ).toFixed(3)} gallons |
  ${unitEl.value} gallons = ${Number(unitEl.value / volume).toFixed(3)} liters`;
  massText.textContent = `${unitEl.value} kilos = ${Number(
    unitEl.value * mass
  ).toFixed(3)} pounds |
  ${unitEl.value} pounds = ${Number(unitEl.value / mass).toFixed(3)} kilos`;
});
