let pesopeca = 150;
let numeropecas =  7;
let nomepeca = "roda";

// peso das peças
if (pesopeca > 100) {
    console.log("pode cadastrar a peça")
} else{
    console.log("cadastrar produto maior que 100g")
}

// numeros de peças 
if (numeropecas >= 10 ) {
    console.log( "impossivel cadastrar, numero de peças exedido")
} else {
    console.log("podemos seguir com o cadastro")
}

// nome da peça

if (nomepeca.length <= 3  ){
    console.log("infome um nome correto, esse nome não existe")
} else {
    console.log("nome correto")
}


