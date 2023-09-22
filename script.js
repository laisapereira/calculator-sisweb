

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

  function fatorial() {
    const result = parseInt(resultElement.innerHTML)
    if (isNaN(result)) {
      alert("Por favor, insira um número válido antes de calcular o fatorial.");
      return;
    }
  
    if (result < 0) {
      alert("O fatorial não pode ser feito para números negativos.");
      return;
    }
  
    if (result === 0 || result === 1) {
      resultElement.innerHTML = 1;
    } else {
      let newResult = 1;
      for (let i = 2; i <= result; i++) {
        newResult *= i;
      }
      resultElement.innerHTML = newResult;
    }
  }

  function sqrtNumber() {
    const result = parseInt(resultElement.innerHTML)
    if (isNaN(result)) {
      alert("Por favor, insira um número válido antes de calcular a raiz quadrada.");
      return;
    }
  
    if (result < 0) {
      alert("A raiz quadrada não pode ser feita para números negativos.");
      return;
    }
  
    resultElement.innerHTML = Math.sqrt(result);

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
      case event.target.classList.contains("fatorial"):
        fatorial();
        break;
      case event.target.classList.contains("sqrt"):
        sqrtNumber();
        break;
      default:
        calculate(); 
        break;
    }
  }

  calculatorDiv.addEventListener("click", handleButtonClick);
});
