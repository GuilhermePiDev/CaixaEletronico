
		var saldo = 100.5; //Float
		var extrato = [];
		var nome = prompt("Informe seu nome");
		let senha;
		window.alert("Olá " + nome + " é um prazer ter você por aqui");
		function inicio() {

			var escolha = parseInt(prompt('Selecione uma opção' + '\n' + '1.) Saldo' + '\n' + '2.) Extrato' + '\n' + '3.) Saque' + '\n' + '4.) Deposito' + '\n' + '5.)Transferencia' + '\n' + '6.)Sair'));

			switch (escolha) {
				case 1:
					ver_saldo()
					break;

				case 2:
					ver_extrato()
					break;

				case 3:
					fazer_saque()
					break;

				case 4:
					fazer_deposito()
					break;

				case 5:
					fazer_transferencia()
					break;

				case 6:
					sair()
					break;

				default:
					erro();
			}
		}

		function ver_saldo() {
			senha = prompt('Informe sua senha')
			if (senha != '3589') {
				alert('Informe a senha correta!!!')
				ver_saldo();

			}
			else {
				ver_saldoSemsenha();

			}
		}
		function ver_saldoSemsenha() {
			alert('Seu saldo atual é: ' + saldo);
			inicio();
		}

		function fazer_deposito() {
			senha = prompt('Informe sua senha')
			if (senha != '3589') {
				alert('Informe a senha correta!!!')
				fazer_deposito();
			}
			else {
				var deposito = parseFloat(prompt('Qual o valor para depósito?'));
				// Not a Number
				if (isNaN(deposito) || deposito === '') {
					alert('Por favor, informe um número:');
					fazer_deposito();
				} else {
					if (deposito > 0) {
						saldo += deposito;
						extrato.push('Depósito no valor de : + ' + deposito);
						ver_saldoSemsenha();
					}
					else {
						alert('Operação não autorizada');
						fazer_deposito();
					}
				}
				inicio();
			}
		}

		function fazer_transferencia() {
			senha = prompt('Informe sua senha')
			if (senha != '3589') {
				alert('Informe a senha correta!!!')
				fazer_transferencia();
			}
			else {
				var numeroConta = parseInt(prompt('Informe o número da conta que deseja fazer a transferência'));

				if (isNaN(numeroConta) || numeroConta === '') {
					alert('Informe um número da conta condizente (apenas números)');
					fazer_transferencia();
				}
				else {
					fazer_transferenciaDnv();
					function fazer_transferenciaDnv() {
						var transferencia = parseInt(prompt('Informe o valor que quer transferir'));

						if (transferencia > saldo || transferencia <= 0) {
							alert('Operação não autorizada');
							fazer_transferenciaDnv();
						}
						else {
							saldo -= transferencia;
							extrato.push('Transferência no valor de : - ' + transferencia);
							ver_saldoSemsenha();
						}
					}
				}
				inicio();
			}
		}

		function fazer_saque() {
			senha = prompt('Informe sua senha')
			if (senha != '3589') {
				alert('Informe a senha correta!!!')
				fazer_saque();
			}
			else {
				var saque = parseFloat(prompt('Qual o valor para saque?'));
				if (saque > saldo || saque <= 0) {
					alert("Operação não autorizada")
					fazer_saque();
				}
				else {
					if (isNaN(saque) || saque === '') {
						alert('Por favor, informe um número:');
						fazer_saque();
					} else {
						saldo -= saque;
						extrato.push('Saque no valor de: - ' + saque)
						ver_saldoSemsenha();
						inicio();

					}
				}

			}

		}

		function ver_extrato() {
			senha = prompt('Informe sua senha')
			if (senha != '3589') {
				alert('Informe a senha correta!!!')
				ver_extrato();
			}
			else {
				alert("Seu extrato bancário: \n" + extrato.join("\n"));
				inicio();
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome + ' foi um prazer ter você por aqui!')
				window.close();
			} else {
				inicio();
			}
		}



		inicio();
