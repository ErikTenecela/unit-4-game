var totalscore;
var lost = 0;
var win = 0;
var previous = 0;

var resetAndStart = function () {
    
    $(".crystals").empty();

    var images = ["https://previews.123rf.com/images/ryzhi/ryzhi1609/ryzhi160900075/64720834-realistic-red-ruby-isolated-on-white-background-shining-red-jewel-colorful-gemstone-can-be-used-as-p.jpg",
"https://images-na.ssl-images-amazon.com/images/I/712iSBHBTaL._SX425_.jpg",
"https://4.imimg.com/data4/JA/YY/MY-26523822/yellow-ruby-500x500.jpg",
"https://4.imimg.com/data4/IR/BV/MY-26523822/blue-ruby-500x500.jpg"]

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
    crystal.css({
        "background-image" : "url('" + images[i] + "')",
        "background-size" : "cover"
    })

  
    $(".crystals").append(crystal);
}
$("#previous").html("total score:" + previous);
}

resetAndStart();

$(document).on("click",".crystal", function() {
   
    var num = parseInt($(this).attr("random-number"));

    previous += num;

    $("#previous").html("total score:" + previous);

    console.log(previous);

    if (previous > totalscore) {
        
        lost++;
        $("#lost").html("You Lost:" + lost);

        previous = 0;

        resetAndStart();

    } else if (previous === totalscore) {
        
        win++;

        $("#win").html("You Win:"+win);

        previous = 0;
        
        resetAndStart();
    }

})
