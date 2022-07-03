$(document).ready(() =>{
  // $("header").load("views/header.html");
  $("footer").load("views/footer.html");
  $("main").load("views/home.html");
  $("#menuHome").addClass('active');

  function removeClass() {
    $("#menuHome").removeClass("active");
    $("#menuSobre").removeClass("active");
    $("#menuProdutos").removeClass("active");
    $("#menuContato").removeClass("active");
  }

  $("#menuHome").click(() =>{
    $("main").load("views/home.html");
  });
  
  $("#menuInicio").click(() =>{
    $("main").load("views/home.html");
  });
  
  $("#menuPerguntas").click(() =>{
    $("#perguntas_frequentes").load("views/perguntas.html");
  });
  

  $("#menuContato").click(() =>{
    $("#menuContato").addClass("active");
    $("#contato").load("views/contato.html");
  });

});
