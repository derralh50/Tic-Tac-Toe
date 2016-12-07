//Written entirely by Derral Hunt CS-133J Spring Term - Joe Paris, instructor
//Thank you LBCC, W3Schools and MDN for information on javascript.
//Waring!  Copyright pending...
//Note,leave commented out console.logs for future troubleshooting!

//Future developement.
//Create  a game count variable.  On even games O plays firsts.
//Or, O plays first everytime X Wins, and if a draw then the other player plays first.
//Add two levels, medium and unbeatable...

document.getElementById("reload").addEventListener("click", reLoad);
//Reloads the window resets the game scores.
function reLoad(){
  window.location.reload();
}

//Start a new game.
document.getElementById("newgame").addEventListener("click", newGame);

//Initialize game variables.
//Board positions will be marked X or O when taken.
//N stands for empty sqares on gameboard, nada, zippola...
var sq1 = "N"; var sq2 = "N"; var sq3 = "N"; var sq4 = "N"; var sq5 ="N";
var sq6 = "N"; var sq7 = "N"; var sq8 = "N"; var sq9 = "N";
var plays = 0;
var Xwins = false;
var Owins = false;

//Initial score variables, display scores.
var xscore = 0; var oscore = 0; var dscore = 0;
document.getElementById("xgames").innerHTML = xscore;
document.getElementById("ogames").innerHTML = oscore;
document.getElementById("dgames").innerHTML = dscore;

//New game.
//Reset game variables.
function newGame(){
   sq1 = "N";  sq2 = "N";  sq3 = "N";  sq4 = "N";  sq5 ="N";
   sq6 = "N";  sq7 = "N";  sq8 = "N";  sq9 = "N";
   plays = 0;
   Xwins = false;
   Owins = false;
//Reset the game board.
  document.getElementById("1").innerHTML = "";
  document.getElementById("2").innerHTML = "";
  document.getElementById("3").innerHTML = "";
  document.getElementById("4").innerHTML = "";
  document.getElementById("5").innerHTML = "";
  document.getElementById("6").innerHTML = "";
  document.getElementById("7").innerHTML = "";
  document.getElementById("8").innerHTML = "";
  document.getElementById("9").innerHTML = "";
//Reset drag and drop X's.
  document.getElementById("Xs1").innerHTML = '<image id="X1" src="images/X.jpg" draggable="true" ondragstart="drag(event)" width="46" height="54"></image>';
  document.getElementById("Xs2").innerHTML = '<image id="X2" src="images/X.jpg" draggable="true" ondragstart="drag(event)" width="46" height="54"></image>';
  document.getElementById("Xs3").innerHTML = '<image id="X3" src="images/X.jpg" draggable="true" ondragstart="drag(event)" width="46" height="54"></image>';
  document.getElementById("Xs4").innerHTML = '<image id="X4" src="images/X.jpg" draggable="true" ondragstart="drag(event)" width="46" height="54"></image>';
  document.getElementById("Xs5").innerHTML = '<image id="X5" src="images/X.jpg" draggable="true" ondragstart="drag(event)" width="46" height="54"></image>';

  document.getElementById("output").innerHTML = "X plays first.";
} //End function newGame

//This if statement shuts down the drop event if either x or O has won
//preventing X from playing again after a win which created a second win score
//when an X was dropped after the game has been won.  Doesn't throw errors in the console
//as when I stopped the drag function.
function allowDrop(event) {
    if(Xwins == false && Owins == false){
    event.preventDefault();
  }
}
//Drag start function.
function dragStart(event) {
    event.dataTransfer.setData("text", event.target.id);
//    console.log("Drag started.");
}
//Added this for a test, doesn't seem to change anything.  I'll look into this later.
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
//    console.log("Drag event");
}
//Drop functions.
function drop(event, target) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
}

//All game functions triggered by X plays.
    document.addEventListener("drop", function(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
    var num = event.target.id;
//    console.log("Dropped.");
//    console.log(num);

    if(num == 1){
      sq1 = "X";
      plays = plays + 1;
//      console.log(sq1);
    }

    if(num == 2){
      sq2 = "X";
      plays = plays + 1;
//      console.log(sq2);
    }

    if(num == 3){
      sq3 = "X";
      plays = plays + 1;
//      console.log(sq3);
    }

    if(num == 4){
      sq4 = "X";
      plays = plays + 1;
  //    console.log(sq4);
    }

    if(num == 5){
      sq5 = "X";
      plays = plays + 1;
//      console.log(sq5);
    }

    if(num == 6){
      sq6 = "X";
      plays = plays + 1;
//      console.log(sq6);
    }

    if(num == 7){
      sq7 = "X";
      plays = plays + 1;
//      console.log(sq7);
    }

    if(num == 8){
      sq8 = "X";
      plays = plays + 1;
//      console.log(sq8);
    }

    if(num == 9){
      sq9 = "X";
      plays = plays + 1;
//      console.log(sq9);
    }

//Check for X win each time an X has been played. (8 ways!)

    if(sq1 == "X" && sq2 == "X" && sq3 == "X"){   //One
      xscore = xscore + 1;
      Xwins = true;
      document.getElementById("xgames").innerHTML = xscore;
      document.getElementById("output").innerHTML = "X wins! Play again?";
    }

    if(sq4 == "X" && sq5 == "X" && sq6 == "X"){   //Two
      xscore = xscore + 1;
      Xwins = true;
      document.getElementById("xgames").innerHTML = xscore;
      document.getElementById("output").innerHTML = "X wins! Play again?";
    }

    if(sq7 == "X" && sq8 == "X" && sq9 == "X"){   //Three
      xscore = xscore + 1;
      Xwins = true;
      document.getElementById("xgames").innerHTML = xscore;
      document.getElementById("output").innerHTML = "X wins! Play again?";
    }

    if(sq1 == "X" && sq4 == "X" && sq7 == "X"){   //Four
      xscore = xscore + 1;
      Xwins = true;
      document.getElementById("xgames").innerHTML = xscore;
      document.getElementById("output").innerHTML = "X wins! Play again?";
    }

    if(sq2 == "X" && sq5 == "X" && sq8 == "X"){   //Five
      xscore = xscore + 1;
      Xwins = true;
      document.getElementById("xgames").innerHTML = xscore;
      document.getElementById("output").innerHTML = "X wins! Play again?";
    }

    if(sq3 == "X" && sq6 == "X" && sq9 == "X"){   //Six
      xscore = xscore + 1;
      Xwins = true;
      document.getElementById("xgames").innerHTML = xscore;
      document.getElementById("output").innerHTML = "X wins! Play again?";
    }

    if(sq1 == "X" && sq5 == "X" && sq9 == "X"){   //Seven
      xscore = xscore + 1;
      Xwins = true;
      document.getElementById("xgames").innerHTML = xscore;
      document.getElementById("output").innerHTML = "X wins! Play again?";
    }

    if(sq3 == "X" && sq5 == "X" && sq7 == "X"){   //Eight
      xscore = xscore + 1;
      Xwins = true;
      document.getElementById("xgames").innerHTML = xscore;
      document.getElementById("output").innerHTML = "X wins! Play again?";
    }

//O,s turn to play.

    OPlays();

  });   //End of event listener.


//This is the function were the random "O" plays.
//Also checks for wins.
    function OPlays(){

//O takes the center square if it is blank- beta testing for harder game.
  if(sq5 == "N"){
      document.getElementById("5").innerHTML = "<b>O</b>";
      sq5 = "O";
      plays = plays +1;
    }

    while(plays  % 2 != 0 && plays <= 8 && Xwins == false && Owins == false){

    var oplays = Math.floor(Math.random() * 9) + 1;
//    console.log(oplays);

    if(oplays == 1 && sq1 == "N"){
        document.getElementById("1").innerHTML = "<b>O</b>";
        sq1 = "O";
        plays = plays + 1;
  //      console.log(sq1);
    }

    if(oplays == 2 && sq2 == "N"){
        document.getElementById("2").innerHTML = "<b>O</b>";
        sq2 = "O";
        plays = plays + 1;
  //      console.log(sq2);
    }

    if(oplays == 3 && sq3 == "N"){
        document.getElementById("3").innerHTML = "<b>O</b>";
        sq3 = "O";
        plays = plays + 1;
  //      console.log(sq3);
    }

    if(oplays == 4 && sq4 == "N"){
        document.getElementById("4").innerHTML = "<b>O</b>";
        sq4 = "O";
        plays = plays + 1;
  //      console.log(sq4);
    }

    if(oplays ==5 && sq5 == "N"){
        document.getElementById("5").innerHTML = "<b>O</b>";
        sq5 = "O";
        plays = plays + 1;
  //      console.log(sq5);
    }

    if(oplays == 6 && sq6 == "N"){
        document.getElementById("6").innerHTML = "<b>O</b>";
        sq6 = "O";
        plays = plays + 1;
  //      console.log(sq6);
    }

    if(oplays == 7 && sq7 == "N"){
        document.getElementById("7").innerHTML = "<b>O</b>";
        sq7 = "O";
        plays = plays + 1;
  //      console.log(sq7);
    }

    if(oplays == 8 && sq8 == "N"){
        document.getElementById("8").innerHTML = "<b>O</b>";
        sq8 = "O";
        plays = plays + 1;
  //      console.log(sq8);
    }

    if(oplays == 9 && sq9 == "N"){
        document.getElementById("9").innerHTML = "<b>O</b>";
        sq9 = "O";
        plays = plays + 1;
  //      console.log(sq9);
    }

  }   //End of while loop.

//Check for draw game.
    if(Xwins == false && Owins == false && plays == 9){
      dscore = dscore + 1;
      document.getElementById("dgames").innerHTML = dscore;
      document.getElementById("output").innerHTML = "Draw! Play again?";
    }

    //Check for O win each time an X has been played. (8 ways!)

        if(sq1 == "O" && sq2 == "0" && sq3 == "0"){   //One
          oscore = oscore + 1;
          Owins = true;
          document.getElementById("ogames").innerHTML = oscore;
          document.getElementById("output").innerHTML = "O wins! Play again?";
        }

        if(sq4 == "O" && sq5 == "O" && sq6 == "O"){   //Two
          oscore = oscore + 1;
          Owins = true;
          document.getElementById("ogames").innerHTML = oscore;
          document.getElementById("output").innerHTML = "O wins! Play again?";
        }

        if(sq7 == "O" && sq8 == "O" && sq9 == "O"){   //Three
          oscore = oscore + 1;
          Owins = true;
          document.getElementById("ogames").innerHTML = oscore;
          document.getElementById("output").innerHTML = "O wins! Play again?";
        }

        if(sq1 == "O" && sq4 == "O" && sq7 == "O"){   //Four
          oscore = oscore + 1;
          Owins = true;
          document.getElementById("ogames").innerHTML = oscore;
          document.getElementById("output").innerHTML = "O wins! Play again?";
        }

        if(sq2 == "O" && sq5 == "O" && sq8 == "O"){   //Five
          oscore = oscore + 1;
          Owins = true;
          document.getElementById("ogames").innerHTML = oscore;
          document.getElementById("output").innerHTML = "O wins! Play again?";
        }

        if(sq3 == "O" && sq6 == "O" && sq9 == "O"){   //Six
          oscore = oscore + 1;
          Owins = true;
          document.getElementById("ogames").innerHTML = oscore;
          document.getElementById("output").innerHTML = "O wins! Play again?";
        }

        if(sq1 == "O" && sq5 == "O" && sq9 == "O"){   //Seven
          oscore = oscore + 1;
          Owins = true;
          document.getElementById("ogames").innerHTML = oscore;
          document.getElementById("output").innerHTML = "O wins! Play again?";
        }

        if(sq3 == "O" && sq5 == "O" && sq7 == "O"){   //Eight
          oscore = oscore + 1;
          Owins = true;
          document.getElementById("ogames").innerHTML = oscore;
          document.getElementById("output").innerHTML = "O wins! Play again?";
        }

  }   //End of Oplays
