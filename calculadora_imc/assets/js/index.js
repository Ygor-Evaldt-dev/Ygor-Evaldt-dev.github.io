function goForm(event) {
  event.preventDefault();
  let $ = document.querySelector.bind(document);

  function calculateIMC() {
    let weigth = parseFloat($("#weigth").value);
    let height = parseFloat($("#heigth").value);

    let imc = weigth / Math.pow(height, 2);

    console.log(height, weigth);
    return imc.toFixed(2);
  }

  let imc = calculateIMC();
  let result = $("#result");
  
  if(imc < 18.5) {
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Abaixo do peso`;
  } 
  else if(imc >= 18.5 && imc <= 24.9){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Peso normal`;
  }
  else if(imc >= 25 && imc <= 29.9){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Acima do peso (sobrepeso)`;
  }
  else if(imc >= 30 && imc <= 34.9){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Obesidade I`;
  }
  else if(imc >= 35 && imc <= 39.9){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Obesidade II`;
  }
  else if(imc > 40){
    result.innerHTML = `<span>IMC: </span>${imc}<br><span>Classificação: </span>Obesidade III`;
  }
}
