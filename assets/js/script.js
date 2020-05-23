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
            console.log("blastoff");
            clearInterval(startCountdown);
};
};

var startCountdown = setInterval(countdown, 1000);
