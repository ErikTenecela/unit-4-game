var totalscore;
var lost;
var win;

totalscore = Math.floor(Math.random() * 69) + 30;
$("#result").html("Random result: " + totalscore);

for (let i = 0; i < 4; i ++ ) {
    var random = Math.floor(Math.random() * 11) +1 ;
    console.log(random)
    var crystal = $("<div>");

    crystal.attr({
        "class" : 'crystal',
        "random-number": random 
    });

    $(".crystals").append(crystal);
}

$(".crystal").on("click", function() {
    console.log($(this))
})