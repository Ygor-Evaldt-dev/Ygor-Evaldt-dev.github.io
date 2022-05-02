/*Insere os números digitados*/
function inserir(num) {
  let numero = document.querySelector("#resultado").innerHTML;
  document.querySelector("#resultado").innerHTML = numero + num;
}
/*Limpa todos os numeros*/
function limpaResultado() {
  document.querySelector("#resultado").innerHTML = "";
}
/*Limpa o ultimo numero digitado*/
function apagar() {
  let numeros = document.querySelector("#resultado").innerHTML;
  document.querySelector("#resultado").innerHTML = numeros.substring(
    0,
    numeros.length - 1
  );
}
/*Imprime o resultado na calculadora*/
function calcular() {
  let resuldado = document.querySelector("#resultado").innerHTML;
  if (resuldado) {
    document.querySelector("#resultado").innerHTML = eval(resuldado);
  }
}