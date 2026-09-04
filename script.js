const form = document.querySelector(".formulario"); // captura envio do formulário

function CalcularIMC() {
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    if (peso.value === "" || altura.value === "") {
      Resultado("Peso ou altura não informado");
      return;
    }

    const Valorimc = imc(peso.value, altura.value);
    const classificacao = nivelImc(Valorimc);
    const mensagem = `Seu imc é: ${Valorimc} (${classificacao})`;
    Resultado(mensagem);
  });
}

function Resultado(mensagem) {
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = mensagem;
}

function imc(peso, altura) {
  const imc = Number(peso) / Number(altura) ** 2;
  return imc.toFixed(2);
}

function nivelImc(imc) {
  const nivel = [
    "Abaixo do peso",
    "Peso normal",
    "Sobrepeso",
    "Obesidade grau 1",
    "Obesidade grau 2",
    "Obesidade grau 3",
  ];

  if (imc <= 18.5) return nivel[0];
  if (imc > 18.5 && imc <= 24.9) return nivel[1];
  if (imc > 25 && imc <= 29.9) return nivel[2];
  if (imc > 30 && imc <= 34.9) return nivel[3];
  if (imc > 35 && imc <= 39.9) return nivel[4];
  if (imc > 40) return nivel[5];
}
CalcularIMC();
