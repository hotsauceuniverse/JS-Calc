function add(char) {
  let display = document.getElementById('display')
  display.value = display.value + char
}

function calc() {
  let display = document.getElementById('display')
  let result = eval(display.value)
  document.getElementById('result').value = result
  document.getElementById('display').value = ""

 
}

function reset() {
  document.getElementById('display').value = ""
  document.getElementById('result').value = ""
}
