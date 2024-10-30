document.addEventListener('DOMContentLoaded', () => {
  const firstInput = document.querySelector('.js-calculator__input_first');
  const secondInput = document.querySelector('.js-calculator__input_second');
  const output = document.querySelector('.js-calculator__output');

  const aspectRatioCalculate = () => {
    const firstNumber = parseFloat(firstInput.value);
    const secondNumber = parseFloat(secondInput.value);

    if (isNaN(firstNumber) || isNaN(secondNumber) || secondNumber === 0) {
      output.innerHTML = 'Введите корректные значения';
      return;
    }

    const result = (firstNumber / secondNumber).toFixed(3);
    output.innerHTML = result;
  };

  firstInput.addEventListener('input', aspectRatioCalculate);
  secondInput.addEventListener('input', aspectRatioCalculate);
});
