var valorDaHoraAula, NumeroDeHorasTrabalhadas, descontoDoINSS, salarioBruto, salarioLiquido;


valorDaHoraAula = 45;
NumeroDeHorasTrabalhadas = 80;
descontoDoINSS = 0.09;
salarioBruto = NumeroDeHorasTrabalhadas * NumeroDeHorasTrabalhadas;
descontoDoINSS = salarioBruto * descontoDoINSS;
salarioLiquido = salarioBruto - descontoDoINSS;
window.alert('O valor do salario liquido é:' + String(salarioLiquido));
