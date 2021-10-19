# Exerc-cios-de-ParadigmaDeProgramacao

var num1;


num1 = Number(window.prompt('Entre com um valor inteiro para saber se é divisível por 4 e 5'));
if (num1 / 4 == 0 && num1 / 5 == 0) {
  window.alert('Esse número é divisível por 4 e por 5: ' + String(num1));
} else {
  window.alert('Esse número não é divisível por 4 e por 5: ' + String(num1));
}
