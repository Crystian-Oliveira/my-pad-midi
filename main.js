
// 

// function tocaSomPom (){
//     document.querySelector('#som_tecla_pom').play()
// }
// document.querySelector('.tecla_pom').onclick = tocaSomPom

// function tocaSomClap (){
//     document.querySelector('#som_tecla_clap').play()
// }
// document.querySelector('.tecla_clap').onclick = tocaSomClap

// function tocaSomTim (){
//     document.querySelector('#som_tecla_tim').play()
// }
// document.querySelector('.tecla_tim').onclick = tocaSomTim

// function tocaSomPuff(){
//     document.querySelector('#som_tecla_puff').play()
// }
// document.querySelector('.tecla_puff').onclick = tocaSomPuff

// function tocaSomSplash(){
//     document.querySelector('#som_tecla_splash').play()
// }
// document.querySelector('.tecla_splash').onclick = tocaSomSplash

// function tocaSomToim(){
//     document.querySelector('#som_tecla_toim').play()
// }
// document.querySelector('.tecla_toim').onclick = tocaSomToim

// function tocaSomPsh(){
//     document.querySelector('#som_tecla_psh').play()
// }
// document.querySelector ('.tecla_psh').onclick = tocaSomPsh

// function tocaSomTic(){
//     document.querySelector('#som_tecla_tic').play()
// }
// document.querySelector('.tecla_tic').onclick = tocaSomTic

// function tocaSomTom(){
//     document.querySelector('#som_tecla_tom').play()
// }
// document.querySelector ('.tecla_tom').onclick = tocaSomTom



///<!-------------------------------------------------------- I make a 'const' to give a name for the function -------------------------------------------

function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// for (var i = 0; i < 9; i++) {
//     console.log(i);
//     // more statements
//  }


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; //conta todas as teclas
    const instrumento = tecla.classList[1]; //pega a ultima class da tecla selecionada "classList[qualClass]"
    const idAudio = `#som_${instrumento}`; //incrementa à string "#som_" aquela class que foi selecionada pelo instrumento. Que acaba com tecla_...

    console.log (idAudio)


    
    tecla.onclick = function (){
        tocaSom (idAudio)
    }
}