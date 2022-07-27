function x(objeto) {
  objeto.function = x()
}

let nameFunction = {
  function: y()
}

let newNameFunction = nameFunction.function
export default function callFunction(x) {
  let x = x()
  addEventListener('click', x()) 
}

console.log()
