function inserir(valor) {
  let numero = document.querySelector("#resultado").innerHTML;
  document.querySelector("#resultado").innerHTML = numero + valor;
}

function limpaUltimoNumero() {
  let numeros = document.querySelector("#resultado").innerHTML;
  document.querySelector("#resultado").innerHTML = numeros.substring(
    0,
    numeros.length - 1
  );
}

function limpaResultado() {
  let resultado = document.querySelector("#resultado");
  resultado.innerHTML = "";
}

function imprimeResultado() {
  let operacao = document.querySelector("#resultado").innerHTML;
  if (operacao) {
    document.querySelector("#resultado").innerHTML = eval(operacao);
  }
}
