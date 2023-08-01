const squareMeterInput = document.getElementById('squareMeter');
const conversionValueInput = document.getElementById('conversionValue');
const btnSquareFoot = document.getElementById('btnSquareFoot');
const btnSquareYard = document.getElementById('btnSquareYard');
const btnHectare = document.getElementById('btnHectare');

function convertSquareMeterToSquareFoot(squareMeter) {
  return squareMeter * 10.7639;
}

function convertSquareMeterToSquareYard(squareMeter) {
  return squareMeter * 1.19599;
}

function convertSquareMeterToHectare(squareMeter) {
  return squareMeter * 0.0001;
}

function updateConversionValue(conversionValue) {
  conversionValueInput.value = conversionValue.toFixed(6);
}

btnSquareFoot.addEventListener('click', function () {
  const squareMeter = parseFloat(squareMeterInput.value);
  if (!isNaN(squareMeter)) {
    const squareFoot = convertSquareMeterToSquareFoot(squareMeter);
    updateConversionValue(squareFoot);
  }
});

btnSquareYard.addEventListener('click', function () {
  const squareMeter = parseFloat(squareMeterInput.value);
  if (!isNaN(squareMeter)) {
    const squareYard = convertSquareMeterToSquareYard(squareMeter);
    updateConversionValue(squareYard);
  }
});

btnHectare.addEventListener('click', function () {
  const squareMeter = parseFloat(squareMeterInput.value);
  if (!isNaN(squareMeter)) {
    const hectare = convertSquareMeterToHectare(squareMeter);
    updateConversionValue(hectare);
  }
});
