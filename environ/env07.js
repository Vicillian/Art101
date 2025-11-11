
//function playMusic() {
//    var audio = document.getElementById("campfiretestaudio");
//    audio.play();
//}


$(".parvenufireLit").hide();

var campfireLit = false;

$("#campfire").fadeOut("slow");

$(".campfireButton").click(function () {

    //campfireLit = !campfireLit;
    campfireLit = true;
    $(this).parent().addClass("campfireLit");
    $(".theBody").parent().addClass("campfireLit");
    console.log("clicked");
    $("body").removeClass("theBody");
    console.log("removed debody");
    


    $(".parvenufireLit").show();
    $(".fireUnLit").hide();
    $("theBody").hide();    


    $("#campfire").fadeIn("slow");


});