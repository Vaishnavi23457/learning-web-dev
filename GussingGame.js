const max = prompt("Enter a MAX number");
const random = Math.floor(Math.random()*max) + 1;

let guess = prompt("Now GUESS the number in the range of MAX");

while(true){
    if(guess=="quit"){
        console.log("You Quit..");
        break;
    }
    if(guess==random){
        alert(`You are Right,Congrats!.. the random number was ${random}`);
        break;
    }
    else if(guess< random){
        guess=prompt("Your guess was TOO SMALL, Try again..");
    }
    else if(guess> random){
        guess=prompt("Your guess was TOO LARGE, Try again..");
    }
    else{
        guess =prompt("You are WRONG, Try again..");
    }
}

