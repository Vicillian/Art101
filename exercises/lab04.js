// declaring an array with name myCommutes
let myCommutes = ["metro bus", "Loop bus", "Legs", "Grace's Car", "Legs(Summer Mode)", "Legs(Rain mode)"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Bus",
    route: 19,
    print: "Street Jockey",
    hasMiddleDoor: true,
    drivers: ["Dude number 1", "Dude number 2", "Dude number 3","Lady number 1"],
    fullness: 50
};


let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[5] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best driver: " + myFavouriteCommute.drivers[0] + "</p>";

$("#output").html(megaSentence); //gonna be real honest idk what more i can change man like all my code is fine. i read the articles but like they dont really apply here
