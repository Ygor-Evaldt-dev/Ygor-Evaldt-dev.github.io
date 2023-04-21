function enviaFormulario(){
  let respostaFormulario = document.querySelector("#respostaFormulario");

  let dadosFormulario = {
    nome: document.querySelector("#nome").value,
    email: document.querySelector("#email").value,
    mensagem: document.querySelector("#mensagem").value
  }

  if(dadosFormulario.nome &&  dadosFormulario.email) {
    respostaFormulario.innerHTML  = `<span class="text-success">Mensagem enviada com sucesso !</span>`;
    return;
  }
  if (!dadosFormulario.nome){
    respostaFormulario.innerHTML = `<span class="text-danger">Você esqueceu de preencher um campo nome</span>`;
    return;
  }
  if (!dadosFormulario.email){
    respostaFormulario.innerHTML = `<span class="text-danger">Você esqueceu de preencher um campo email</span>`;
    return;
  }
}
