var player1 = {
    name: "Sam",
    play: undefined }
var player2 = {
    name: "Nik",
    play: undefined}
let winner;
var counter = 0;
var weapons = ['rock' , 'paper', 'scissors'];

function weaponOfChoice(){
    return weapons[parseInt(Math.random()*weapons.length) %3];
    }


function playRound(){
 player1.play = weaponOfChoice();
 player2.play = weaponOfChoice();
 console.log(player1.play + " Vs "+player2.play);

 if (player1.play === player2.play){
     console.log(player1.play + player2 + "Tie");
     return winner = 'tie';
 } else if (player1.play === 'rock' && player2.play === 'paper'){
     console.log(player1.play +" "+ player2.play + " " + player2.name + " is the winner");
     return winner = player2.name;
 } else if (player1.play === 'rock' && player2.play === 'scissors'){
    console.log(player1.play +" "+ player2.play + " " + player1.name + " is the winner");
    return winner = player2.name;
 } else if (player1.play === 'paper' && player2.play === 'rock'){
    console.log(player1.play +" "+ player2.play + " " + player1.name + " is the winner");
    return winner = player1.name;
 } else if (player1.play === 'paper' && player2.play === 'scissors'){
    console.log(player1.play +" "+ player2.play + " " + player2.name + " is the winner");
    return winner = player2.name;
 } else if (player1.play === 'scissors' && player2.play === 'paper'){
    console.log(player1.play +" "+ player2.play + " " + player1.name + " is the winner");
    return winner = player1.name;
 } else if (player1.play === 'scissors' && player2.play === 'rock'){
    console.log(player1.play +" "+ player2.play + " " + player2.name + " is the winner");
    return winner = player2.name;
 }    

}
console.log(playRound(player1, player2));

function playGame(_playuntil){
    counter1 = 0;
    counter2 = 0;

    while (counter1 <= _playuntil && counter2 <= _playuntil){
        if(playRound(player1, player2) === 'Sam'){
            console.log("Sam Wins" + " " + counter1++ + " " + "" + "times");
        } else if (playRound(player1, player2) === 'Nik'){
            console.log("Nik Wins" + " " + counter2++ + " " + "" + "times");
        }
    }

        if (counter1 > _playuntil){
            return "Sam is the winner";
        } else if (counter2 > _playuntil){
            return "Nik is the winner";
        }
}

console.log(playGame(4));
