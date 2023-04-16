let player = '';
let cpu = '';

let gameOptions = ['rock', 'paper', 'scissors'];

function playerhoice() {
    // Define player choice
    player = prompt('Choose between: rock, paper and scissors').toLowerCase()

    if(player == 'rock' || player == 'paper' || player == 'scissors'){
        
    console.log('Player choice is: ' + player)

    // Define CPU choice
    cpu = gameOptions[Math.floor(Math.random()*3)]
    console.log('CPU choice is: ' + cpu)

        // Winning conditions
        if(player == 'rock' && cpu == 'rock'){
            return 'Tie game';
        } else if(player == 'rock' && cpu == 'paper'){
            return 'CPU wins';
        } else if(player == 'rock' && cpu == 'scissors'){
            return 'player wins';
        } else if(player == 'paper' && cpu == 'rock'){
            return 'player wins';
        } else if(player == 'paper' && cpu == 'paper'){
            return 'Tie game';
        } else if (player == 'scissors' && cpu == 'rock'){
            return 'CPU wins';
        } else if(player == 'scissors' && cpu == 'paper'){
            return 'player wins';
        } else {
            return 'Tie game';
        }
    } else {
        alert('Bad argument')
        return
    }
}
