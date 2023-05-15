//CÓDIGO COM AJUDA DO DEV EM DOBRRO

const btnAvancar = document.getElementById('btn-avancar');
const btnVoltar = document.getElementById('btn-voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
    //cartoes[0]
}

btnAvancar.addEventListener('click', function (){

    if(cartaoAtual===cartoes.length - 1){ 

        cartaoAtual = 0; 

    } else{
        cartaoAtual++;
    }
    esconderCartaoSelecionado();  
    mostrarCartao(cartaoAtual);
});

btnVoltar.addEventListener('click', function (){ 

    if(cartaoAtual === 0) {  
        
        cartaoAtual = cartoes.length - 1; 

    }else{
        cartaoAtual--;
    }
    esconderCartaoSelecionado();
    mostrarCartao(cartaoAtual);
});


// ATIVAÇÃO DAS SETAS PELO TECLADO
const mapaTeclado = {
'ArrowLeft': 'btn-voltar',
'ArrowRight': 'btn-avancar',
}

const ativandoTeclado = (event) => {
    
    const tecla = event.key;
    const teclaEscolhida = () => Object.keys(mapaTeclado).indexOf(tecla) !== -1;
    if (teclaEscolhida()) document.getElementById(mapaTeclado[tecla]).click();
};

document.addEventListener('keydown', ativandoTeclado);