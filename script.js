var diceRollButton = document.getElementById("dice-roll-button"),
    resultsArea = document.getElementById("results-area");

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        randy = Math.random();
        step1 = (max - min + 1);
        return Math.floor(randy * (max - min + 1)) + min; 
    }

    diceRollButton.addEventListener("click", function(){
        // displayArea.innerText += Math.random() + "\n";
        // displayArea.innerText += Math.random() + "\n";
        resultsArea.innerText += getRandomInt(1,6) + " "+ ", ";
    });