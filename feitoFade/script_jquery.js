$(function() {
  //colorando o button para azul
  $("#azul").click(function() {
    $("p").css("backgroud-color", "blue");
    //fadeOut - esconder a div de maneira suave
    $("p").fadeOut("fast"); //faz a movimentacao rapido
    //delay - pausa a execucao do js por um determinado tempo
    // apos 1 segundos
    $("p").delay(1000);
    //fadeIn revela de forma suave
    $("p").fadeIn("fast"); //faz a movimentacao rapido
  });
  //colorindo o button para vermelho
  $("#vermelho").click(function() {
    $("p").css("backgroud-color", "red");
    //fadeOut - esconder a div de maneira suave
    $("p").fadeOut("slow"); // slow faz ser mais lento ainda
    //delay - pausa a execucao do js por um determinado tempo
    // apos 1 segundos
    $("p").delay(1000);
    //fadeIn revela de forma suave
    $("p").fadeIn("slow"); //slow faz ser mais lento ainda
  });
});
