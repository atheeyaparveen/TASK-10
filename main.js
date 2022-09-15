// rock, paper, scissors


const getUserChoice= userInput =>{
userInput =userInput.toLowerCase();

if (userInput==="rock"|| userInput==="paper"||userInput==="scissors"){
return userInput;
}else{
    console.log(`error: please type rock,paper or scissors.`);
}
};
//console.log(getUserChoice("rock"));
//console.log(getUserChoice("hii"));

let getComputerChoice =()=>{
const randomNumber =Math.floor(Math.random()*3);
switch(randomNumber){
    case 0:
        return "rock";
        case 1:
            return "paper";
            case 3: 
            return "scissors";
}
};
//console.log(getComputerChoice());
//console.log(getComputerChoice());
//console.log(getComputerChoice());

// time to determin a winner
const determinWinner=(userChoice,computerChoice)=>{
if(userChoice===computerChoice){
    return "this game was tie!";
}
if(userChoice==="rock"){
    if(computerChoice==="paper"){
        return " Sorry ,computer won!";
    }else{
        return " congratulations, you win";
    }
}
if (userChoice==="paper"){
    if(computerChoice=="scissors"){
        return "Sorry ,computer won!"; 
    }else{
        return "congratulations, you win";
    }
}
if (userChoice==="scissors"){
    if(computerChoice=="rock"){
        return "Sorry ,computer won!"; 
    }else{
        return "congratulations, you win";
    }
}
};
//console.log(determinWinner("rock","paper"));
//console.log(determinWinner("scissors","paper"));
//console.log(determinWinner("rock","rock"));

//------start the game------
const playGame=()=>{
const userChoice=getUserChoice("paper");
const computerChoice=getComputerChoice(); 
console.log(`userChoice is: ${userChoice} And computerchoice is: ${computerChoice}`);
console.log(determinWinner(userChoice , computerChoice));
};
playGame();