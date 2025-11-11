import "./style.css";
import "./theme.js";

const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");
const inputField = document.getElementById("input-field");
const convertButton = document.getElementById("convert-btn");

const convertLength = (x, invert) => {
  if (invert) {
    //convert feet -> meter
    return (x * 0.3048).toFixed(3);
  } else {
    //convert meter -> feet
    return (x / 0.3048).toFixed(3);
  }
};

const convertVolume = (x, invert) => {
  if (invert) {
    //convert gallon -> litter
    return (x * 3.78541).toFixed(3);
  } else {
    //convert litter -> gallon
    return (x / 3.78541).toFixed(3);
  }
};

const convertMass = (x, invert) => {
  if (invert) {
    //convert pound -> kg
    return (x * 0.45359237).toFixed(3);
  } else {
    //convert kd -> pound
    return (x / 0.45359237).toFixed(3);
  }
};

const renderResult = () => {
  const x = Number(inputField.value);
  if (!x) {
    return;
  }
  lengthResult.textContent = `${x} meters = ${convertLength(
    x,
    false
  )} feet | ${x} feet = ${convertLength(x, true)} meters`;
  volumeResult.textContent = `${x} litters = ${convertVolume(
    x,
    false
  )} gallons | ${x} gallons = ${convertVolume(x, true)} litters`;
  massResult.textContent = `${x} kilos = ${convertMass(
    x,
    false
  )} pounds | ${x} pounds = ${convertMass(x, true)} kilos`;
};

convertButton.addEventListener("click", renderResult);
