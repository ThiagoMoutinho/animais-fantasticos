/*
function Carro(marca, preco){
    this.marca = marca
    this.preco = preco
}

const honda = new Carro('Honda', 80.000);
const fiat = new Carro('Fiat', 75.000)

const pessoa = {
    nome: 'Nome Pessoa',
    idade: 0,
    andar() {
        console.log(this.nome + 'andou')
    }
}

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(this.nome + ' andou');
    }
}*/

// function Pessoa(nome, idade) {
//     this.nome = nome;
//     this.idade = idade;
// }
//
// const thiago = new Pessoa('Thiago', 32)
//
// console.log(Pessoa.prototype)
// console.log(thiago)
//
// let valor = 48.69
//
// valor = valor.toLocaleString('pt-BR', {style: 'currency' ,currency: 'BRL'})
//
// console.log(valor)
//
// // console.log(Math.PI)
//
// const aleatorio = Math.floor(Math.random() * 500)
//
// console.log(aleatorio)

/*
const carros = ['Ford', 'Fiat', 'Honda']

carros.forEach((item, index, array) => {
    console.log(item, index, array)
})

console.log(carros)*/

const carros = ['Ford', 'Fiat', 'Honda']

const novaArray = carros.map((item, index, array) => {
    return item.toUpperCase()
})

const numero = [2, 4, 6, 8, 10, 12]

const numeroX2 = numero.map((item) => item * 2)

console.log(numeroX2)
novaArray.unshift('byd')

console.log(carros)
console.log(novaArray)

const aulas = [10, 25, 30]

const aulasX  = aulas.reduce((acc, item) => {
    console.log(acc, item)
    return acc + item
}, 0)

console.log(aulasX)
