const buttonColors = ['red', 'blue', 'green', 'yellow'];
let gamePattern = [];    
let userClicks = [];
let level = 0;

function nextSequence() 
{ 
    userClicks = [];
    let randomNumber = Math.floor(Math.random() * buttonColors.length);

    let randomChosenColor = buttonColors[randomNumber];

     gamePattern.push(randomChosenColor);

/*
for(let i = 0; i < gamePattern.length; i++){
      if(gamePattern[i] === 'green'){
    var greenSound = new Audio('sounds/green.mp3');
    greenSound.play();


}else if(gamePattern[i] === 'blue'){
    var blueSound = new Audio('sounds/blue.mp3');
    blueSound.play();

}else if(gamePattern[i] === 'yellow'){
    var yellowSound = new Audio('sounds/yellow.mp3');
    yellowSound.play();

}else if(gamePattern[i] === 'red'){
    var redSound = new Audio('sounds/red.mp3');
    redSound.play();
}
}*/

    
    level++;
    if( level > 0){
        $('h1').text('Level number ' + level + ' !');
    }

anima(randomChosenColor);
gamePatternIterate(randomChosenColor);
    
  console.log('comp', gamePattern);
}

function gamePatternIterate(color){
    for(let i = 0; i < gamePattern.length; i++){
        if(gamePattern[i] ==='' + color + ''){
      var userSound = new Audio('sounds/' + color + '.mp3');
      userSound.play();
           $('#' + color).fadeOut(100).fadeIn(100);

        }
}
}

function anima(name){
   let color = [name];
   console.log(name);
$('#' + name).click(function(){
    var allSound = new Audio('sounds/' + name + '.mp3');
    allSound.play();
    $('#' + name).fadeOut(300).fadeIn(300);
    userClicks.push(name);
    if(gamePattern.forEach().length - 1 === userClicks.forEach()){
        nextSequence();
    }else{
        $('h1').text('you loose !');
    }
    console.log('user', userClicks);
});
/*
let green = ['green'];
$('#green').click(function(){
    var greenSound = new Audio('sounds/green.mp3');
    greenSound.play();
    $('#green').fadeOut(300).fadeIn(300);
    userClicks.push(green);
    console.log('user', userClicks);
    for(let i = 0; i < userClicks; i++){
        
    }
    if(userClicks === gamePattern){
         nextSequence();
    }

});

let red = 'red';
$('#red').click(function(){
    var redSound = new Audio('sounds/red.mp3');
    redSound.play();
    $('#red').fadeOut(300).fadeIn(300);
    userClicks.push(red);
    console.log('user', userClicks);

});

let yellow = 'yellow';
$('#yellow').click(function(event){
    var yellowSound = new Audio('sounds/yellow.mp3');
    yellowSound.play();
    $('#yellow').fadeOut(300).fadeIn(300);
    userClicks.push(yellow);
    console.log('user', userClicks);
    
});

let blue = 'blue'; 
$('#blue').click(function(){
    var blueSound = new Audio('sounds/blue.mp3');
    blueSound.play();
    $('#blue').fadeOut(300).fadeIn(300);
    userClicks.push(blue)
    console.log('user', userClicks);
  
});

*/
}

$('body').keydown(function()
{
    nextSequence();
});