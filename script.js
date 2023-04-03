let userScore = 0;
let computerScore = 0;

function getComputerChoice () {
    const choice =  Math.ceil(Math.random()*3);
    return choice === 1 ? 'rock' : choice === 2 ? 'paper' : 'scissors';
}

function singleRound (playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            console.log('You choose ' + playerSelection + ' and computer picks ' + computerSelection + ', you draw.')
            console.log('SCORE\nUser ///// Computer\n' + userScore + '    ///// ' +computerScore)
        } 
        else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
            console.log('You choose ' + playerSelection + ' and computer picks ' + computerSelection + ', you won.')
            userScore++
            console.log('SCORE\nUser ///// Computer\n' + userScore + '    ///// ' +computerScore)
        }
        else {
            console.log('You choose ' + playerSelection + ' and computer picks ' + computerSelection + ', you lost.')
            computerScore++
            console.log('SCORE\nUser ///// Computer\n' + userScore + '    ///// ' +computerScore)
        }
} 

function game () {
    for (let round = 0; round < 5; round++) {
        let computerSelection = getComputerChoice()
        let playerSelection = prompt('Choose between rock, paper or scissors.')
        playerSelection = playerSelection.toLowerCase();
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {  
            singleRound(playerSelection,computerSelection)
        }
        else {
            alert('You must choice an option between rock, paper or scissors.')
            round--
        }
    }
    if (userScore > computerScore) {
        console.log('Nice, you won the best of five game!')
        resetScore()
    }
    else if (userScore < computerScore) { 
        console.log('Ooops, you lost the best of five game!')
        resetScore()
    }
    else {
        console.log('You tie the game!')
        resetScore()
    }
}

function resetScore() {
    userScore = 0
    computerScore = 0
    console.log('Global score reset succefully to 0. You can safely play again.')
}