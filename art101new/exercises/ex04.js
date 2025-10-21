let count = 0;
$("#needy-button").click( function() {
   count = count + 3;
   $("#needy-button").html("You clicked me " + count + " times x3!");
   console.log("I've been pressed " + count + " times oh my goodness!");
});

let phrase = "hey";

console.log(phrase)

{ console.log(phrase); }

let colors= ["Orchid", "Coral", "HotPink", "Plum"];
    $("#needy-button").click( function(){
        //$("#needy-button").html( "Clicks " + count + " " + colors[count] );
        console.log( colors[count] );
});

