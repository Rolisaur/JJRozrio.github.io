const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const inputValue = input.value.toLowerCase().replaceAll(/[^a-z0-9]/g, "").split("");
  
  if (!inputValue.length) {
    alert("Please input a value");
  } else {
    checker(inputValue);
  }
});

function checker(stringArray) {
  let count = 0, palindrome = true;
  console.log("full string [" + stringArray + "]");
  console.log(stringArray.length);

  while (palindrome && count < Math.floor(stringArray.length / 2)) {
    if (stringArray[count] != stringArray[stringArray.length - (count + 1)]) {
      palindrome = false;
    }
    count++;
  }

  result.innerHTML += palindrome
    ? `<p>${input.value} is a palindrome</p>`
    : `<p>${input.value} is not a palindrome</p>`
}