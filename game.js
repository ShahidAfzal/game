var gamePattern = [];

var buttonColors= ["red","blue","green","yellow"]
var userClickedPattern= [];

var started = false;

var level = 0;




$(".start-btn").click(function(){
    if (!started){
        $("#level-title").text("level " + level);
        nextSequence();
        started = true;
    }
});

$(".btn").click(function(){
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    CheckAnswer(userClickedPattern.length-1)
    
   
})


function CheckAnswer(currentLevel){
    // if (gamePattern[currentLevel]===userClickedPattern[currentLevel]){
    //     if (userClickedPattern===gamePattern){
    //         setTimeout(function(){
    //             nextSequence();
    //         },1000);
    //     }

    // }else{
    //     console.log(false)
    // }
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);
        }
      } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Refresh the page to play again");
        $("#level-title").css("line-height","1rem");
  
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        startOver();
      }
}

function nextSequence(){
    userClickedPattern = [];
    level++;

    $("#level-title").text("level " + level);

    var randomNumber =Math.floor(Math.random()*4);
    var randomChosenColor =buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);

   
  
}

function playSound(name){

    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
    
}

function animatePress(currentColour){
    $( "#"+currentColour ).addClass( "pressed");
    setTimeout(function() {
        $( "#"+currentColour).removeClass( "pressed");
       
      },100);

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}
  



