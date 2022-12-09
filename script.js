const mario = document.querySelector('.mario'); /*querySelector selecionou a class mario acessando todo conteudo dentro dessa class*/
const pipe = document.querySelector('.pipe'); /*querySelector selecionou a class pipe acessando todo conteudo dentro dessa class*/

const jump = () => {
    mario.classList.add('jump'); /*a class jump vai ser adiciona a class mario assim gerando um pulo como foi feito na animacao*/

    setTimeout(()  => {

        mario.classList.remove('jump'); /*quando a animacao de jump terminar ele vai remover a animacao e comecar outra quando apertar outra tecla*/

    }, 500); /*500 e o time do evento*/
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); /*converte uma string para numero*/

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 &&  marioPosition < 100) {  

        pipe.style.animation = 'none'; /*desativando a animacao do pipe*/
        pipe.style.left = `${pipePosition}px`; /*definindo que quando o pipePosition chegar a 120px left ele vai parar o objeto*/

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; /*quando */

        mario.src = 'game-over.png';
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10); /*10 e o time do evento*/

document.addEventListener('keydown', jump); /*keydown e para quando eu apertar alguma tecla ele ativa a funcao jump que e para o personagem dar um pulo*/