//Timer Section Start
var count = 10;
var countEl = document.querySelector("#count");

function setCounterText() {
  countEl.textContent = count;
}

var countdown = function() {
    console.log(count);
    count--;
        setCounterText()
        if (count === 0){
            clearInterval(startCountdown);
};
};
var startCountdown = setInterval(countdown, 1000);
//Timer Section End


var change = document.change;
var response = document.getElementById('response');


// The array of questions for our quiz game.
var questions = [
    { q: 'The sky is blue.', a: 't' },
    { q: 'There are 365 days in a year.', a: 't' },
    { q: 'There are 42 ounces in a pound.', a: 'f' },
    { q: 'The Declaration of Independence was created in 1745.', a: 'f' },
    { q: 'Bananas are vegetables.', a: 'f' }
  ];

  // We start the game with a score of 0.
  var score = 0;

  // Loop over every question object
  for (var i = 0; i < questions.length; i++) {
    // Display current question to user and ask OK/Cancel
    var answer = confirm(questions[i].q);

    // Compare answers
    if (
      (answer === true && questions[i].a === 't') ||
      (answer === false && questions[i].a === 'f')
    ) {
        document.getElementById(response).innerHTML = "Correct";
      // Increase score
      score++;
    // alert('Correct!');
      console.log(score);
      

    } else {
    //  alert('Wrong!');
      console.log(score);
      
    }
  }

  // Show total at end
  alert('You got ' + score + '/' + questions.length);
  console.log(score);



    //HTML Manipulate Start


//HTML Manipulate End

