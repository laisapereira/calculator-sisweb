

// DOMContentLoaded: codigo seja executado somente após o carregamento completo do DOM

document.addEventListener("DOMContentLoaded", function () {
const calculatorDiv = document.getElementById("calculator");
const resultElement = document.getElementById("result");
let currentInput = "";


  function clearAll() {
    currentInput = "";
    resultElement.innerHTML = "0";
  }

  function clearLastButton() {
    const result = resultElement.innerHTML;
    resultElement.innerHTML = result.substring(0, result.length - 1);
    currentInput = resultElement.innerHTML;
  }

  function handleNumberClick(event) {
    const pValue = event.target.value;
    currentInput += pValue;
    resultElement.innerHTML = currentInput;
  }

  function calculate() {
    var result = resultElement.innerHTML;
    if(result) {
      resultElement.innerHTML = eval(result);
      currentInput = resultElement.innerHTML;
    }
  }

  function handleButtonClick(event) {
    switch (true) {
      case event.target.classList.contains("clean-button"):
        clearAll();
        break;
      case event.target.classList.contains("clean-each-button"):
        clearLastButton();
        break;
      case event.target.classList.contains("btn"):
        handleNumberClick(event);
        break;
      default:
        calculate(); 
        break;
    }
  }

  calculatorDiv.addEventListener("click", handleButtonClick);
});
