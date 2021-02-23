function teste1(num){
    if(num>7)  //Sem usar o "{}" (bloco de codigo) apos o IF ele só vai reconhecer a primeira linha de codigo apos o if//
        console.log(num)    //no caso esse IF só reconhece essa linha de codigo condicional a ele
        console.log('final')
}

// teste1(6)
// teste1(8)

function teste2(num){
    if(num > 7); { //ao usar o ';' ele encerra o bloco de codigo, é como se ele cortasse a ligação da condição com o resto do codigo.
        console.log(num)

    }
}

teste2(6)
teste2(8)
