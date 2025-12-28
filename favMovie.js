let favMovie = "3 Idiots";
let guess = prompt("Enter your guess");

while(guess!=favMovie && guess!="quit"){
    console.log("wrong guess..");
    guess =prompt("You are WRONG, Try again..");
}

if(guess ==favMovie){
    console.log("You WON,Congrats!!");
}else{
    console.log("You Quit..");
}