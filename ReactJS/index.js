class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    saque(valor){
        if(this.saldo >= valor){
            this.saldo -= valor; 
        }
    }

    deposito(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }
}

const cliente1 = new Cliente();
cliente1.nome = "Felipe Dantas";
cliente1.cpf = 07984376425;


console.log(cliente1);