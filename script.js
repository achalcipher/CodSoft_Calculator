let input = '';
function appendInput(value) {
  input += value;
  document.getElementById('inputScreen').innerText = input;
}

function calculate() {
  try {
    let result = eval(input);
    document.getElementById('outputScreen').innerText = result;
  } catch (error) {
    document.getElementById('outputScreen').innerText = 'Error';
  }
}

function clearScreen() {
  input = '';
  document.getElementById('inputScreen').innerText = '';
  document.getElementById('outputScreen').innerText = '';
}

function deleteLast() {
  input = input.slice(0, -1); 
  document.getElementById('inputScreen').innerText = input;
}