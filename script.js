const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const tree = document.querySelector('.tree3');



const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');


    }, 600)
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudsPosition = clouds.offsetLeft;
    const treePosition = tree.offsetLeft;



    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 100){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        clouds.style.animation = 'none';
        clouds.style.left = `${cloudsPosition}px`;

        tree.style.animation = 'none';
        tree.style.left = `${treePosition}px`;

        mario.src = 'IMG/game-over.png';
        mario.style.width = '90px';
        mario.style.marginLeft = '40px';

        clearInterval(loop);
    }

}, 10)

document.addEventListener('keydown', jump);

