let button = document.querySelector('button')

button.addEventListener('click', function(evt){
    let randNum1 = Math.floor(Math.random() * 6 + 1)
    let randNum2 = Math.floor(Math.random() * 6 + 1)
    let randomDiceImage1 = 'images/dice' + randNum1 + '.png'
    let randomDiceImage2 = 'images/dice' + randNum2 + '.png'

    document.querySelectorAll('img')[0].setAttribute('src', randomDiceImage1);
    document.querySelectorAll('img')[1].setAttribute('src', randomDiceImage2);
    if (randNum1 > randNum2){
        document.querySelector('h1').innerHTML = 'Player 1 wins!'
    }else if(randNum2 > randNum1){
        document.querySelector('h1').innerHTML = 'Player 2 wins!'
    }else{
        document.querySelector('h1').innerHTML = 'It\'s a tie'
    }
})