const $buttonStonePlayer1 = document.querySelector('.button-move-stone-1')
const $buttonPaperPlayer1 = document.querySelector('.button-move-paper-1')
const $buttonScissorsPlayer1 = document.querySelector('.button-move-scissors-1')

const $buttonStonePlayer2 = document.querySelector('.button-move-stone-2')
const $buttonPaperPlayer2 = document.querySelector('.button-move-paper-2')
const $buttonScissorsPlayer2 = document.querySelector('.button-move-scissors-2')

const $moveBox1 = document.querySelector('#move-Box-1')
const $moveBox2 = document.querySelector('#move-Box-2')


function handleStone1Move() {
    $moveBox1.innerHTML='<img src="/images/stone.png"  alt"imagem de tesoura" title"imagem de tesoura">'
}
function handlePaper1Move() {
    $moveBox1.innerHTML ='<img src="/images/paper.png" alt"imagem de papel" title"imagem de papel">'
}
function handleScissors1Move() {
    $moveBox1.innerHTML ='<img src="/images/scissors.png" alt"imagem de pedra" title"imagem de pedra">'
}

//  player 2 moves
function handleStone2Move() {
    $moveBox2.innerHTML='<img src="/images/stone.png" alt"imagem de tesoura" title"imagem de tesoura">'
}

function handlePaper2Move() {
    $moveBox2.innerHTML ='<img src="/images/paper.png" alt"imagem de papel" title"imagem de papel">'
}

function handleScissors2Move() {
    $moveBox2.innerHTML ='<img src="/images/scissors.png" alt"imagem de pedra" title"imagem de pedra">'
}

$buttonStonePlayer1.addEventListener('click',handleStone1Move)
$buttonPaperPlayer1.addEventListener('click',handlePaper1Move)
$buttonScissorsPlayer1.addEventListener('click',handleScissors1Move)

$buttonStonePlayer2.addEventListener('click',handleStone2Move)
$buttonPaperPlayer2.addEventListener('click',handlePaper2Move)
$buttonScissorsPlayer2.addEventListener('click',handleScissors2Move)

