function converteNumero(){
  let baseInicial = parseInt(document.querySelector("#baseInicial").value);
  let baseFinal = parseInt(document.querySelector("#baseFinal").value);
  let numero = document.querySelector("#numero").value;
  let resultadoDaConversao = document.querySelector("#resultado");

  // verificando o input dos dados
  if(baseInicial === baseFinal) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong> <span class="text-primary">Não há conversão a ser feita</span>`;
  }
  
  // Binario pra decimal
  function binarioParaDecimal(numero) {
    numero = numero.toString()
    numero = numero.split("");
    let potencia = 1;
    let aux = 0;
    let resultado = 0;
    let limiteLaco = numero.length -1
    for(let i = limiteLaco; i >= 0; i--) {
      if (aux == 0) {
        resultado += parseInt(numero[i]) * (baseInicial * 1);
      }
      if (aux > 0) {
        potencia *= baseInicial;
        resultado += parseInt(numero[i]) * (baseInicial * potencia);
      }
      aux++;
    }
    return resultado / baseInicial;
  }
  if(baseInicial == 2 && baseFinal == 10) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${binarioParaDecimal(numero)}<span class="small">(${baseFinal})</span></span>`;
  }

  // Octal pra decimal
  function octalParaDecimal(numero) {
    numero = numero.toString()
    numero = numero.split("");
    let potencia = 1;
    let aux = 0;
    let resultado = 0;
    let limiteLaco = numero.length -1
    for(let i = limiteLaco; i >= 0; i--) {
      if (aux == 0) {
        resultado += parseInt(numero[i]) * (baseInicial * 1);
      }
      if (aux > 0) {
        potencia *= baseInicial;
        resultado += parseInt(numero[i]) * (baseInicial * potencia);
      }
      aux++;
    }
    return resultado / baseInicial;
  }
  if(baseInicial == 8 && baseFinal == 10) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${octalParaDecimal(numero)}<span class="small">(${baseFinal})</span></span>`;
  }

  // Hexadecimal pra decimal
  function hexadecimalParaDecimal(numero) {
    numero = numero.toString()
    numero = numero.split("");
    let potencia = 1;
    let aux = 0;
    let limiteLaco = numero.length -1
    let resultado = 0;
    for(let i = limiteLaco; i >= 0; i--) {
      switch (numero[i]) {
        case 'A':
        case 'a':  
          numero[i] = 10;
          break;
        case 'B':
        case 'b':  
          numero[i] = 11;
          break;
        case 'C':  
        case 'c':  
          numero[i] = 12;
          break;
        case 'D':  
        case 'd':  
          numero[i] = 13;
          break;
        case 'E':  
        case 'e':  
          numero[i] = 14;
          break;
        case 'F':  
        case 'f':  
          numero[i] = 15;
          break;
      }
      if (aux == 0) {
        resultado += parseInt(numero[i]) * (baseInicial * 1);
      }
      if (aux > 0) {
        potencia *= baseInicial;
        resultado += parseInt(numero[i]) * (baseInicial * potencia);
      }
      aux++;
    }
    return resultado / baseInicial;
  }
  if(baseInicial == 16 && baseFinal == 10) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${hexadecimalParaDecimal(numero)}<span class="small">(${baseFinal})</span></span>`;
  }

  // função para usar na conversão de decimal para binario, octal, hexadecimal
  function inverteResultado(resultado) {
    resultado = resultado.split("");
    let resultadoFinal  = "";
    for(let i = resultado.length -1; i >= 0; i--) {
      resultadoFinal += resultado[i];
    }
    return resultadoFinal;
  }

  //Decimal para hexadecimal 
  function decimalParaHexadecimal(numero){
    let valor = "";
    switch (numero) {
      case 10:
        valor= 'A';
        break;
      case 11:
        valor= "B";
        break;
      case 12:
        valor= "C";
        break;
      case 13:
        valor= "D";
        break;
      case 14:
        valor= "E";
        break;
      case 15:
        valor= "F";
        break;
      default:
        valor = numero;
    }
    return valor;
  }
  
  // decimal para binario
  function decimalParaBinario(numero, baseFinal) {
    let dividendo =  numero;
    let resultado = "";
    let i = 0;
    let resto = 0;

    while (i == 0) {
      resto = parseInt(dividendo) % baseFinal;
      if (baseFinal === 16) {
        resto = decimalParaHexadecimal(resto);
      }
      resultado += resto.toString();
      dividendo = parseInt(dividendo / baseFinal);
    
      if(dividendo < baseFinal){
        resultado += dividendo.toString();
        i++;
      }
    }
    resultado =  inverteResultado(resultado);
    if(resultado[0] == 0) {
        resultado = resultado.substring(1);
    }
    return resultado;
  }

  if (baseInicial == 10 && baseFinal == 2 || baseFinal == 8 || baseFinal == 16) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${decimalParaBinario(numero, baseFinal)}<span class="small">(${baseFinal})</span></span>`;
  } 

  // binario para octal
  function binarioParaOctal(numero) {
    let resultado = binarioParaDecimal(numero) / 2;
    let resultadoFinal = decimalParaBinario(resultado, 8);
    return resultadoFinal;
  }
  if (baseInicial == 2 && baseFinal == 8) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${binarioParaOctal(numero)}<span class="small">(${baseFinal})</span></span>`;
  } 

  // Binario para hexadecimal
  function binarioParaHexadecimal(numero) {
    let resultado = binarioParaDecimal(numero);
    let resultadoFinal = decimalParaHexadecimal(resultado);
    return resultadoFinal;
  }
  if (baseInicial == 2 && baseFinal == 16) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${binarioParaHexadecimal(numero)}<span class="small">(${baseFinal})</span></span>`;
  } 

  // Octal para binario
  function octalParaBinario(numero) {
    let resultado = octalParaDecimal(numero);
    console.log(resultado);
    let resultadoFinal = decimalParaBinario(resultado, baseFinal);
    return resultadoFinal;
  }
  if (baseInicial == 8 && baseFinal == 2) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${octalParaBinario(numero)}<span class="small">(${baseFinal})</span></span>`;
  } 

  // Octal para hexadecimal
  function octalParaHexadecimal(numero) {
    let resultado = octalParaDecimal(numero);
    console.log(resultado);
    let resultadoFinal = decimalParaBinario(resultado, baseFinal);
    return resultadoFinal;
  }
  if (baseInicial == 8 && baseFinal == 16) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${octalParaHexadecimal(numero)}<span class="small">(${baseFinal})</span></span>`;
  }
  
  // Hexadeciamal pra binario
  function hexadecimalParaBinario(numero) {
    let resultado = hexadecimalParaDecimal(numero);
    let resultadoFinal = decimalParaBinario(resultado, baseFinal);
    return resultadoFinal;
  }
  if (baseInicial == 16 && baseFinal == 2) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${hexadecimalParaBinario(numero)}<span class="small">(${baseFinal})</span></span>`;
  }

  //  Hexadecimal para octal
  function hexadecimalPraOctal(numero) {
    let resultado = hexadecimalParaDecimal(numero);
    let resultadoFinal = decimalParaBinario(resultado, baseFinal);
    return resultadoFinal;
  }
  if (baseInicial == 16 && baseFinal == 8) {
    if (numero.length === 0) {
      resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class = "text-danger">ERRO! O número a ser convertido não foi encontrado.</span>`;
      return;
    }
    resultadoDaConversao.innerHTML = `<strong>Resultado: </strong><span class="text-secondary">${hexadecimalPraOctal(numero)}<span class="small">(${baseFinal})</span></span>`;
  }
}