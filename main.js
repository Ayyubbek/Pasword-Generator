function $(selector) {
  return document.querySelector(selector);
}

const passwordOutput = $("#password");
const copyPasswordBtn = $("#copy-password-btn");
const generatePasswordBtn = $("#generate-password-btn");

const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
const digits = "0123456789".split("");
const specialCharacters = "!@#$%^&*()_-+=[]{}\\|<,>.?/'\";:".split("");

const allCharacters = [
  upperCaseLetters,
  lowerCaseLetters,
  digits,
  specialCharacters,
];

function getRandomChar(charSet) {
  const index = Math.floor(Math.random() * charSet.length);
  return charSet[index];
}

function generatePassword(length = 16) {
  let password = "";

  for (let i = 0; i < length; i++) {
    const charSet =
      allCharacters[Math.floor(Math.random() * allCharacters.length)];
    password += getRandomChar(charSet);
  }

  return password;
}

function handleGeneratePassword() {
  const password = generatePassword();
  passwordOutput.value = password;
}

function handleCopyPassword() {
  const password = passwordOutput.value;
  if (!password) return;

  navigator.clipboard.writeText(password).then(() => {
    copyPasswordBtn.textContent = "✅ Copied!";
    setTimeout(() => {
      copyPasswordBtn.textContent = "📋 Copy";
    }, 1500);
  });
}

generatePasswordBtn.addEventListener("click", handleGeneratePassword);
copyPasswordBtn.addEventListener("click", handleCopyPassword);
