//Getting and storing the local storage into the score variable
let score = JSON.parse( localStorage.getItem('score')) || {
    wins : 0,
    losses : 0,
    ties : 0,
}; // useing default operator to make score as 0

/*
// Checking score is null 
if (!score) {
    score = {
        wins : 0,
        losses : 0,
        ties : 0,
    }
}
*/
updateScore();


function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You Lost';
        } else if (computerMove === 'Scissors') {
            result = 'You Won';
        }
        
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You Won';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else if (computerMove === 'Scissors') {
            result = 'You Lost';
        }

    } else if (playerMove === 'Scissors') {
        if (computerMove === 'Rock') {
            result = 'You Lost';
        } else if (computerMove === 'Paper') {
            result = 'You Won';
        } else if (computerMove === 'Scissors') {
            result = 'Tie';
        }
    }

    document.querySelector('.js-result')
        .innerHTML = `${result}`;

    document.querySelector('.js-moves')
        .innerHTML = 'You' +
    '<img class="css-img" src="./Images/' + playerMove + '-emoji.png" alt="">' +
    '<img class="css-img" src="./Images/' + computerMove + '-emoji.png" alt="">' +
    'Computer';


    if(result === 'You Won')  {
        score.wins += 1;
    }else if(result === 'You Lost') {
        score.losses += 1;
    }else if(result === 'Tie') {
        score.ties += 1;
    }

    //Creating a local storage
    localStorage.setItem('score', JSON.stringify(score));

    updateScore();
    
    /*
    alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}.
    Wins: ${score.wins}, losses : ${score.losses}, Ties: ${score.ties}`);
    */
}


function pickComputerMove() {
        const randomNumber =  Math.random();
        
        let computerMove = '';
        if(randomNumber >= 0 && randomNumber < 1 /3) {
            computerMove = 'Rock';
        } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
            computerMove = 'Paper';
        } else if (randomNumber >= 2/3 && randomNumber <1) {
            computerMove = 'Scissors';
        }

        return computerMove;
}


function updateScore() {
    document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, losses : ${score.losses}, Ties: ${score.ties} `;
}
