document.addEventListener("DOMContentLoaded", function () {
    const apiUrl = 'https://api.quotable.io/random';
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const quoteElement = document.getElementById("quote-placeholder");
            quoteElement.textContent = `"${data.content}" - ${data.author}`;
        })
        .catch(error => {
            console.error("Error fetching quote:", error);
        });
});

let timer;
let timerValue = 0;

function adjustTimer(adjustment) {
    timerValue += adjustment;

    document.getElementById("timer").value = timerValue;
}

function startTimer() {
    const minutes = parseInt(document.getElementById("timer").value);

    if (!isNaN(minutes) && minutes > 0) {
        clearInterval(timer);

        const milliseconds = minutes * 60 * 1000;

        timer = setInterval(() => {
            timerValue -= 1;

            document.getElementById("timer-display").textContent = `Time remaining: ${timerValue} minutes`;

            if (timerValue <= 0) {
                clearInterval(timer);
                document.getElementById("timer-display").textContent = "Time's up!";
            }
        }, 60000);

        document.querySelector('.timer').style.display = 'block';
        document.getElementById("timer-display").textContent = `Time remaining: ${timerValue} minutes`;
    }
}

