class Aluno{
    constructor (nome, idade){
    this.nome = nome 
    this.idade = idade
    }
}
let academia = []

function cobrarMen(pessoa){
    console.log(`Foi transferido 50 reais de ${pessoa.nome}`)
}

function comprarMaq(maquina){
    academia.push(maquina)
}

function venderMaq(maquina){
    let vender = academia.indexOf(maquina)
    if(vender !== -1){
        academia.splice(vender,1)
    }
}


function olharAcad(){
    if(academia.length === 0){
        console.log('Não tem equipamentos disponíveis')
    } else {
        console.log('Esses são seus itens: ')
        // o let ap = 0 serve para falar de qual elemento vai começar
        for(let ap = 0; ap < academia.length; ap++){
        // o ap + 1 serve pra dizer de qual numero vai começar a contagem
            console.log(`${ap + 1} - ${academia[ap]}`)
        }
    }
}
let pessoa1 = new Aluno('Carlos', 20)
let pessoa2 = new Aluno('Leticia', 22)

cobrarMen(pessoa1)
cobrarMen(pessoa2)

comprarMaq('leg press')
comprarMaq('supino')
comprarMaq('hack')

olharAcad()
venderMaq('supino')
olharAcad()