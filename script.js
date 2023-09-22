

// DOMContentLoaded:
// codigo seja executado somente após o carregamento completo do DOM

document.addEventListener("DOMContentLoaded", function () {
const calculatorDiv = document.getElementById("calculator");
const resultElement = document.getElementById("result");
let currentInput = "";


        function handleButtonClick(event) {
        if (event.target.classList.contains("btn")) {
          const pValue = event.target.value.trim();
          currentInput += pValue;
          resultElement.innerHTML = currentInput;
        }
      }
      calculatorDiv.addEventListener("click", handleButtonClick);

      
    })
