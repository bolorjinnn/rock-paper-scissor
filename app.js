// function-> dahij ashiglah bolomjtoi bagts kod
// name=huvisagchiin ner
/*function hello(name,age){
    console.log("hello "+ name);
    console.log("your age "+16)
}
hello("Bolorjin",16);
hello("oyu",23);
function test(){
    alert("Button clicked");
}

function sum(t1,t2){
    console.log(t1+t2);
}
sum(3,5);
function colorchange(){
    document.getElementsByTagName('body')[0].style.backgroundColor="red";
}*/
var computer = document.querySelector('.computer')
var player = document.querySelector('.player')
var winner = document.querySelector('.winner')
var counter = document.querySelector('counter')
var cCount=0,pCount=0;
function play(playerChoice){
    random=Math.floor(Math.random()*3)
    console.log(random)
    var computerChoice;
    if(random==0){
        computerChoice="rock";
        computer.innerText="Computer's choice: rock";
    } else if(random==1){
        computerChoice="paper";
        computer.innerText="Computer's choice: paper";
    } else if(random==2){
        computerChoice="scissor";
        computer.innerText="Computer's choice: scissor";
    }
    console.log(computerChoice)
    player.innerText="Player's choice: " +  playerChoice;
    // paper->rock,rock->scissor,scissor->paper;
    if(playerChoice==computerChoice){
        winner.innerText=('Tie!');
    }else if(
        (playerChoice=="paper" && computerChoice=="rock")||
        (playerChoice=="rock" && computerChoice=="scissor")||
        (playerChoice=="scissor" && computerChoice=="paper")
        ){
            winner.innerText="You won!";
            pCount++;
            document.querySelector('.pCount').innerText="Player: "+pCount;
        }else{
            winner.innerText="Computer won!";
            cCount++;
            document.querySelector('.cCount').innerText="Computer: "+cCount;
        }
} 
function restart (){
    pCount=0;
    cCount=0;
}
