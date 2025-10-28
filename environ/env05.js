console.log("1 Lorem Ipsum 1");


console.log(Math.random()); 


        function getRandom0to2() {
            // Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
            // Multiplying by 6 gives a range from 0 up to 5.999...
            // Math.floor() then rounds this down to the nearest integer (0, 1, 2, 3, 4, or 5).
            const randomNumber = Math.floor(Math.random() * 3);
            return randomNumber;
        }

        console.log(getRandom0to2());   

var currWeather = getRandom0to2();

console.log("Current weather code: " + currWeather);

console.log("2 Lorem Ipsum 2");

var outside;


if (currWeather === 0) {
    console.log("The weather is cold.");
    outside = "morning";
}   else if (currWeather === 1) {
    console.log("The weather is hot.");
    outside = "evening";
}   else if (currWeather === 2) {
    console.log("The weather is nice.");
    outside = "night";
}   else {
    console.log("Error: Invalid weather code.");
};
console.log("3 Lorem Ipsum 3");     


//$("#howdybtn").click( function() {
//   $("#howdybtn").html("Well Howdy!!!");
//   playAudio();
//   console.log("I've been pressed oh my goodness!");
   //No clue while it logs it twice but oh well magic i guess
//});



        var colorArray = [
            '#eff6ff', // Soft Blue
            '#f3e8ff', // Soft Violet
            '#fef3c7', // Soft Amber Yellowish
            '#fee2e2', // Soft Red
            '#e0f2f1', // Soft Teal
            '#fee2e2', // Soft Red
            '#ecfdf5'  // Soft Emerald
        ];

        function changeBackgroundColor() {
            const newColor = colorArray[currWeather];
            document.body.style.backgroundColor = newColor;
            colorIndex = currWeather;
        }

console.log("4 Lorem Ipsum 4"); 
console.log("Current color index: " + currWeather + " and " + colorArray[currWeather]);


$("#wetButt").click( function() {
    currWeather = getRandom0to2();  
    console.log("A click happened somewhere!");
   if (currWeather === 0) {
        console.log("The weather is cold.");
        outside = "morning";
        changeBackgroundColor()
    }   else if (currWeather === 1) {
        console.log("The weather is hot.");
        outside = "evening";
        changeBackgroundColor()
    }   else if (currWeather === 2) {
        console.log("The weather is nice.");
        outside = "night";
        changeBackgroundColor()
    }   else {
        console.log("Error: Invalid weather code.");
    };
    $("#timedisp").html("The current time is " + currWeather + " o'clock. It's " + outside + " time!");
});