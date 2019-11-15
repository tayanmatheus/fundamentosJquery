$(function() {
  //colorando o button para azul
  $("#azul").click(function() {
    $("p").css("color", "blue");
    $("#mensagem").text("Mensagem alterada para azul");
  });
  //colorindo o button para vermelho
  $("#vermelho").click(function() {
    $("p").css("color", "red");
    //encadeamento - nao e necessario ficar repetindo o #mensagem.
    $("#mensagem")
      .text("Cor alterada com sucesso.")
      .delay(3000)
      .fadeOut("fast");
  });
});
