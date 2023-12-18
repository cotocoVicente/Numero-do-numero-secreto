let listaDeNumSorteados = [];
let numeroLimite = 10
let numSecreto = gerarNumeroAleatorio();
let tentativas = 0;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}
function msgInicial(){

    exibirTextoNaTela('h1', 'Jogo do numero secreto!')
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10')
}

msgInicial()

function verificarChute(){
    
    let chute = document.querySelector('input').value
    console.log(chute == numSecreto)
    
    if(chute == numSecreto){
        tentativas++
        let mensagemTentativa =  tentativas > 1 ? 'tentativas!' : 'tentativa!'
        exibirTextoNaTela('h1', 'ACERTOU!!!')
        exibirTextoNaTela('p', `voce acertou o numero secretro!! com ${tentativas} ${mensagemTentativa}`)
        document.getElementById('reiniciar').removeAttribute('disabled')   
        
    }else 
        if (chute < numSecreto){
        tentativas++
        exibirTextoNaTela('h1', 'ERROU!')
        exibirTextoNaTela('p', `O numero secreto é maior do que: ${chute}`)
        limparCampo()
        
    }else{
        tentativas++
        exibirTextoNaTela('h1', 'ERROU!')
        exibirTextoNaTela('p', `O numero secreto é menor do que: ${chute}`)
        limparCampo()
    }

}

function gerarNumeroAleatorio(){
     let numEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElemtnosNaLista = listaDeNumSorteados.length;

    if( quantidadeDeElemtnosNaLista == numeroLimite){
        listaDeNumSorteados = []
    }

     if(listaDeNumSorteados.includes(numEscolhido)){
        return gerarNumeroAleatorio()
     } else {
        listaDeNumSorteados.push(numEscolhido)
        console.log(listaDeNumSorteados)
        return numEscolhido;
     }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ''
}

function reinicarJogo(){
    numSecreto = gerarNumeroAleatorio();
    limparCampo()
    tentativas = 1;
    msgInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)

}







