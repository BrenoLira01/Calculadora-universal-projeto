//Nome da pessoa
alert("**SEJA BEM VINDO(A) A CALCULADORA UNIVERSAL!**");
var nome = prompt("Por favor, digite o seu nome:");
alert("É um prazer te conhecer " + nome + " 😎👍");

//O que deseja converter
var converter = prompt(
  "**O QUE POSSO FAZER PRA TE AJUDAR HOJE?** \n\n" +
    "Escolha entre:\n\n" +
    "1. 💲 Converter dólar para real \n" +
    "2. 🚀 Converter anos luz para quilômetro \n" +
    "3. 💰 Converter Real para Bitcoin \n" +
    "4. 🌡️ Converter Grau Celcius para Fahrenheit\n\n" +
    "Digite o número que correspondente à sua escolha:"
);

//Converter  Dolar
if (converter == "1") {
  alert("Tá cheio da grana em 😉");

  var valorEmDolar = prompt("💵 Quantos dólares deseja converter?");
  var valorEmDolarFormatado = valorEmDolar.replace(",", ".");
  var cotacaoDoDolar = 4.9;

  var valorEmReal = valorEmDolarFormatado * cotacaoDoDolar;
  valorEmReal = valorEmReal.toFixed(2);
  alert("O resultado é RS: " + valorEmReal);
}

//Converter anos luz em quilômetros
else if (converter == "2") {
  alert("Tá pensando em viajar? 😎");

  var valorEmAnosLuz = Number(prompt("🚀 Quantos anos luz deseja converter?"));
  var umAnosLuz = 9.461;

  var valorEmQuilometro = umAnosLuz * valorEmAnosLuz;
  valorEmQuilometro = valorEmQuilometro.toFixed(3);
  alert("O resultado é " + valorEmQuilometro + " trilhôes de quilômetros");
}

//Converter Bitcoin em real
else if (converter == "3") {
  alert("Quem me dera ter um Bitcoin 😎");

  var valorEmReal = Number(prompt("Quantos reais deseja converter?"));
  var cotacaoDoBitCoin = 181139.86;

  var valorEmBitCoin = valorEmReal / cotacaoDoBitCoin;
  valorEmBitCoin = valorEmBitCoin.toFixed(6);
  alert("O resultado é " + valorEmBitCoin + " Bitcoins");
}

//Converter temperatura
else if (converter == "4") {
  alert("Não sei ai, mas aqui tá quente 🥵");

  var valorCelcius = Number(prompt("Diga o valor em Celcius:"));
  var valorEmFahrenheit = (valorCelcius * 9) / 5 + 32;

  valorEmFahrenheit = valorEmFahrenheit.toFixed(2);
  alert("O resultado é " + valorEmFahrenheit + " Fahrenheit");
}
alert("Até outra hora " + nome);