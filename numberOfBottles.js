
function numberOfBottles() {
    var numberOfBottles = 99;
    while (numberOfBottles >= 0) {
        var bottleWord = "bottles";
        if (numberOfBottles === 1) {
            bottleWord = "bottle";
        } 
        if (numberOfBottles === 0) {
            numberOfBottles = "No more";
            bottleWord = "bottles";
        }
        var message1 = numberOfBottles + " " + bottleWord + " of beer on the wall, " 
        + numberOfBottles + " "  + bottleWord + " of beer."; 
        numberOfBottles--;

        if (numberOfBottles === 0) {
            numberOfBottles = "No more";
            bottleWord = "bottles";
        }
        var message2 = "Take one down and pass it arround, "  + numberOfBottles + " "  + bottleWord + " of beer on the wall.";
        numberOfBottles--;
        console.log(message1 + message2);
        } 

    }

numberOfBottles();