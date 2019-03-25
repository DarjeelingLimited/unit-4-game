var wins = 0;
var losses = 0;
var random_result;
var previous = 0;

//setting attributes to crystal
$(".crystal").attr('class', 'red')


//function to reset the game
var resetAndStart = function () {

    var images = [
        'assets/images/BlueCrystal.PNG',
        'assets/images/GreenCrystal.PNG',
        'assets/images/RedCrystal.PNG',
        'assets/images/YellowCrystal.PNG']; //building an array to hold the image pics

    $('.crystals').empty(); // 'resets' the number

    random_result = Math.floor(Math.random() * (120 - 19 + 1)) + 19; //generates the computer #
    console.log(random_result);

    $("#result").html('Random Result: ' + random_result);
    for (var i = 0; i < 4; i++) { // this is going to run 4 times


        var random = Math.floor(Math.random() * 11) + 1; // because you don't want it to start at 0
        // console.log(random);
 


        var crystal = $("<div>"); // creating the div for the random number
        crystal.attr({ // attributing the class
            "class": "crystal",
            "data-random": random
        });
        crystal.css({
            "background-image":"url('" + images[i] + "')",
        })
        // crystal.html(random) // putting it to the DOM to test

        $(".crystals").append(crystal);

    } // end startGame function

    $("#previous").html("Your total is: "+ previous);
}


resetAndStart(); // invokes the function when the page loads


// if you click the class of crystal
$(document).on("click", ".crystal", function () {

    var num = parseInt($(this).attr('data-random')); // this refers to any of the crystals 
    // need to use parseInt to conver it to a number

    previous += num;

    $("#previous").html("Your total is: " + previous);

    console.log(previous)

    if (previous > random_result) {
        console.log("You lost");
        losses++;
        $("#lost").html("Lost: " + losses); // puts it to the DOM
        previous = 0;
        alert("You lost");
        resetAndStart()
    }

    else if (previous === random_result) {
        console.log("You win");
        wins++;
        previous = 0;
        $("#win").html("Win: " + wins); //puts it to the DOM
        alert("You win!");
        resetAndStart();

    }


});


//Game results
// Every crystal needs a random number between 1-12
// A new random number should generate every single time we win or lose
// When clicking a crystal, it should add to the previous result until 
// it equals to random result
// If it's greater than the Random Result, lose++
// If it's equal to the Random Result, win++

