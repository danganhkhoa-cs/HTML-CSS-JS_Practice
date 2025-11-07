import "./style.css";

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const generatePasswordButton = document.getElementById("generate-password-btn");
const numberPasswordCheckbox = document.getElementById("number-password");
const specialCharacterPasswordCheckbox = document.getElementById(
  "special-character-password"
);
const passwordLengthInput = document.getElementById("password-length");
const firstPassword = document.getElementById("first-password");
const secondPassword = document.getElementById("second-password");
let isContainNumber = false;
let isContainSpecialCharacter = false;

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function getRandomPassword(length, isContainNumber, isContainSpecialCharacter) {
  let result = "";
  const specialCharacters = [
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];
  const numberCharacters = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

  if (!length) return result;

  for (let i = 0; i < length; ++i) {
    const character = getRandomCharacter();
    if (numberCharacters.includes(character)) {
      if (isContainNumber) {
        result += character;
      } else {
        --i;
        continue;
      }
    }
    if (specialCharacters.includes(character)) {
      if (isContainSpecialCharacter) {
        result += character;
      } else {
        --i;
        continue;
      }
    }
    result += character;
  }

  return result;
}

function renderPassword() {
  const length = parseInt(passwordLengthInput.value);
  isContainNumber = numberPasswordCheckbox.checked;
  isContainSpecialCharacter = specialCharacterPasswordCheckbox.checked;

  if (length > 20 || !length) {
    alert("Length must be interger in range [8, 15]");
    return;
  }

  const password1 = getRandomPassword(
    length,
    isContainNumber,
    isContainSpecialCharacter
  );
  const password2 = getRandomPassword(
    length,
    isContainNumber,
    isContainSpecialCharacter
  );

  firstPassword.textContent = password1;
  secondPassword.textContent = password2;
  console.log(password1);
}

generatePasswordButton.addEventListener("click", renderPassword);
