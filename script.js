const roll1 = parseInt((Math.random()*6 + 1))
const roll2 = parseInt((Math.random()*6 + 1))

//extraction from DOM:

const dice1 = document.querySelector('.img1')
const dice2 = document.querySelector('.img2')
const title = document.querySelector('h1')
const button = document.querySelector('.btn')

let playGame = true;

button.addEventListener('click', function(event){
    event.preventDefault();
    play();

    //logic to reload the page after every 2 sec of the mouse click
    setInterval(function() {
        location.reload();
    },2000)
}, false)

function play(){
    switch (roll1) {
        case 1:
            dice1.src = "./images/dice1.png";
            break;
        case 2:
            dice1.src = "./images/dice2.png";
            break;
        case 3:
            dice1.src = "./images/dice3.png";
            break;
        case 4:
            dice1.src = "./images/dice4.png";
            break;
        case 5:
            dice1.src = "./images/dice5.png";
            break;
        case 6:
            dice1.src = "./images/dice6.png";
            break;
    
        default:
            break;
    }
    
    switch (roll2) {
        case 1:
            dice2.src = "./images/dice1.png";
            break;
        case 2:
            dice2.src = "./images/dice2.png";
            break;
        case 3:
            dice2.src = "./images/dice3.png";
            break;
        case 4:
            dice2.src = "./images/dice4.png";
            break;
        case 5:
            dice2.src = "./images/dice5.png";
            break;
        case 6:
            dice2.src = "./images/dice6.png";
            break;
    
        default:
            break;
    }
    
    //logic to insert the flag:
    if(roll1 === roll2){
        title.innerHTML = "🚩It's A Tie🚩"
    }else if(roll1 > roll2){
        title.innerHTML = '🚩Player 1 Wins'
    }else{
        title.innerHTML = 'Player 2 Wins🚩'
    }
}