class BancoPortoRico{
    constructor(nome,conta,cpf){
        this.nome = nome;
        this.conta = conta;
        this.cpf = cpf;
    }
    setarConta(novaConta){
        if (typeof novaConta == "String"){
            this.conta = novaConta
        }
    }
}


let p1 = new BancoPortoRico ("Andrade","Corrente",17820735813)
let p2 = new BancoPortoRico ("Andre","Poupança",18430548233)
let p3 = new BancoPortoRico ("Lucas","Poupaça",73957251850)
let p4 = new BancoPortoRico ("João","Corrente",9326534822)

p1.setarConta("corrente");
p2.setarConta("Poupança");
p3.setarConta("Poupança");
p4.setarConta("corrente");

console.log(`nome ${p1.nome} conta ${p1.conta} cpf ${p1.cpf}`)
console.log(`nome ${p2.nome} conta ${p2.conta} cpf ${p2.cpf}`)
console.log(`nome ${p3.nome} conta ${p3.conta} cpf ${p3.cpf}`)
console.log(`nome ${p4.nome} conta ${p4.conta} cpf ${p4.cpf}`)

