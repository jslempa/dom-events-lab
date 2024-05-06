/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let equation = ''

/*------------------------ Cached Element References ------------------------*/

const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('.clear')
const equalBtn = document.querySelector('.equals')
const display = document.querySelector('.display')

/*-------------------------------- Functions --------------------------------*/
  
const append = (input) => {
    equation = equation + input
}

const clear = () => {
    display.innerText = ''
    equation = ''
}

const calculate = () => {
    if (display.innerText === '') {
        return
    }
    display.innerText = eval(display.innerText)
}


/*----------------------------- Event Listeners -----------------------------*/

numbers.forEach(number => {
    number.addEventListener("click", (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      console.log(event.target.innerText);
      // Future logic to capture the button's value goes here...
      append(event.target.innerText)
      display.innerText = equation
    });
  });

operators.forEach(operator => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.innerText);
        append(event.target.innerText)
        display.innerText = equation
    });
  });
  
clearBtn.addEventListener('click', clear)

equalBtn.addEventListener('click', calculate)
  
  
  
