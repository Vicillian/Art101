

var characters = ["Steven Even", "Jumpy June", "Ronald Reagan", "Donald", "Greg Edgar"];

var weather = {
    temperature: ["cold","hot"],
    precipitation: [ "clear", "Rain", "Rocks", "snow"],
    wind: "breezy",
    visibility: "clear"
};
console.log("Lorem Ipsum");
console.log(weather.temperature[0]);

sentence = weather.temperature[0];

$("#charname").html(characters[0]);


$("#temperdisp").html(sentence);

var audioPlayer = document.getElementById('characteraudio');

function playAudio() {
    audioPlayer.play();
    }


$("#howdybtn").click( function() {
   $("#howdybtn").html("Well Howdy!!!");
   playAudio();
   console.log("I've been pressed oh my goodness!");
   //No clue while it logs it twice but oh well magic i guess
});