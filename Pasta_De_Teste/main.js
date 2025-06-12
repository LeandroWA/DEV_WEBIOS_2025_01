document.getElementById("formNotas").addEventListener("submit", function(event) {
  event.preventDefault(); // evita o recarregamento da página

  // Pegando os valores dos inputs
  let nota1 = parseFloat(document.getElementById("nota1").value);
  let nota2 = parseFloat(document.getElementById("nota2").value);
  let nota3 = parseFloat(document.getElementById("nota3").value);
  let nota4 = parseFloat(document.getElementById("nota4").value);

  // Calculando a média
  let media = (nota1 + nota2 + nota3 + nota4) / 4;

  // Criando mensagem com if, else if e else
  let mensagem = "A média do aluno com as 4 notas é: " + media.toFixed(2) + ". ";

  if (media >= 7) {
      mensagem += "Aluno aprovado!";
  } else if (media >= 5) {
      mensagem += "Aluno em recuperação.";
  } else {
      mensagem += "Aluno reprovado.";
  }

  // Exibindo o resultado
  document.getElementById("resultado").textContent = mensagem;
});