var x = document.getElementById("myAudio");
function playAudio() {
   x.play();
}
function pauseAudio() {
    x.pause();
 }
//create on click function for when game starts
$(document).on("click", "#start", function () {
    $(".questions").show()
    $("#start").hide()
    trivia.myTimer()
    playAudio();
});
//hides question before the start button is pressed
$(".questions").hide()

// create a variable for game timer and also an object/function for Trivia to control the timer
var gameTimer
var trivia = {
    correctAnswers: 0,
    wrongAnswers: 0,
    time: 60,
    myTimer: function () {
        gameTimer = setInterval(function () {
            trivia.time--
            document.getElementById("startTimer").innerHTML = "<h2> TIME REMAINING: " + trivia.time + "</h2>";
            //console.log(trivia.time);
            if (trivia.time === 0) {
                clearInterval(gameTimer)
                setTimeout(function () {
                    pauseAudio();
                    alert("TIME IS UP!!")
                    checkAnswers()
                    if (trivia.correctAnswers > trivia.wrongAnswers) {
                        swal("TOUCHDOWN!!! YOU ARE READY FOR SOME FOOTBALL!!")
                    } else {
                        swal("FLAG ON THE PLAY!! BETTER LUCK NEXT SEASON!!")
                    }
                })
            }
        }, 1000)
    }

}
//function to compare the questions and values
function checkAnswers() {
    var q1 = $('input[name="q1"]:checked').val();
    var q2 = $('input[name="q2"]:checked').val();
    var q3 = $('input[name="q3"]:checked').val();
    var q4 = $('input[name="q4"]:checked').val();
    var q5 = $('input[name="q5"]:checked').val();
    var q6 = $('input[name="q6"]:checked').val();
    var q7 = $('input[name="q7"]:checked').val();
    var q8 = $('input[name="q8"]:checked').val();
    var q9 = $('input[name="q9"]:checked').val();
    var q10 = $('input[name="q10"]:checked').val();
    if (q1 === "true") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }

    if (q2 === "false") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }

    if (q3 === "false") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }

    if (q4 === "true") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }

    if (q5 === "true") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }

    if (q6 === "false") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }

    if (q7 === "false") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }

    if (q8 === "true") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }

    if (q9 === "false") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }

    if (q10 === "false") {
        trivia.correctAnswers++
    } else {
        trivia.wrongAnswers++
    }
    $(".questions").html("Right " + trivia.correctAnswers + "<br> Wrong " + trivia.wrongAnswers)

}
//on click function to submit answers
$("#submit").on("click", function () {
    clearInterval(gameTimer)
    pauseAudio();
    checkAnswers()
    if (trivia.correctAnswers > trivia.wrongAnswers) {
        swal("<strong> TOUCHDOWN!!! YOU ARE READY FOR SOME FOOTBALL!!")
    } else {
        swal("FLAG ON THE PLAY!! BETTER LUCK NEXT SEASON!!")
    }
});

