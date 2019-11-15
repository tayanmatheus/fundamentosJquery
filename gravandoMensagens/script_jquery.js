$(function() {
  //colorando o button para azul
  $("#azul").click(function() {
    $("p").css("color", "blue");
    $("#mensagem").text("Mensagem alterada para azul");
  });
  //colorindo o button para vermelho
  $("#vermelho").click(function() {
    $("p").css("color", "red");
    //aparece a mensagem avisando que mudou de cor
    $("#mensagem").text("Cor alterada com sucesso.");
    //oculta a mensagem
    $("#mensagem").delay(3000);
    $("#mensagem").fadeOut("fast");
  });
});
