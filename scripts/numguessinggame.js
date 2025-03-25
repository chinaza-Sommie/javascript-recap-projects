minNumber = 1;
maxNumber = 3;
randNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
isGuessCorrect = false;

console.log(randNumber);  //TESTING PURPOSES

while(!isGuessCorrect){
    let userGuess = window.prompt("Guess the number");
    userGuess =Number(userGuess);
    
    if(userGuess < randNumber){
        console.log("Your guess is too low. Try again");
    }else if(userGuess > randNumber){
        console.log("Your guess is too high. Try again");
    }else {
        console.log("correct guess");
        isGuessCorrect = true;
    }
}
