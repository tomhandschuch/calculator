const display = document.querySelector("#display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "AAAAAAlarm";
    }
}

function changeTheme() {
    const sliderValue = document.querySelector('#theme-slider').value;

    if (sliderValue === "1") {
        document.body.style.backgroundColor = "#f0f0f0";
        document.querySelector("#calculator").style.backgroundColor = "#333";
        document.querySelector("#display").style.backgroundColor = "#444";
        document.querySelector("#display").style.color = "white";
        document.querySelectorAll("button").forEach(button => {
            button.style.backgroundColor = "#fff";
            button.style.color = "#000";
        });
        document.querySelector(".clear-btn").style.backgroundColor = "#ff6961";
        document.querySelector(".calculate-btn").style.backgroundColor = "#28a745";
    } else if (sliderValue === "2") {
        document.body.style.backgroundColor = "#e0f7fa";
        document.querySelector("#calculator").style.backgroundColor = "#0288d1";
        document.querySelector("#display").style.backgroundColor = "#b3e5fc";
        document.querySelector("#display").style.color = "#000";
        document.querySelectorAll("button").forEach(button => {
            button.style.backgroundColor = "#81d4fa";
            button.style.color = "#000";
        });
        document.querySelector(".clear-btn").style.backgroundColor = "#ff5252";
        document.querySelector(".calculate-btn").style.backgroundColor = "#4caf50";
    } else if (sliderValue === "3") {
        document.body.style.backgroundColor = "#1b1b1b";
        document.querySelector("#calculator").style.backgroundColor = "#333";
        document.querySelector("#display").style.backgroundColor = "#444";
        document.querySelector("#display").style.color = "#ffa726";
        document.querySelectorAll("button").forEach(button => {
            button.style.backgroundColor = "#616161";
            button.style.color = "#ffa726";
        });
        document.querySelector(".clear-btn").style.backgroundColor = "#ff7043";
        document.querySelector(".calculate-btn").style.backgroundColor = "#ffca28";
    }
}
