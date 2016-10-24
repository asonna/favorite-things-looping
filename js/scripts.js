// business logic
var arrayFavorite = new Array;
var secondArray = new Array;


// user interface logic
$(document).ready(function() {
  $(".questions").submit(function(){
    event.preventDefault();
    var answer1 = $("#question1").val();
    var answer2 = $("#question2").val();
    var answer3 = $("#question3").val();
    var answer4 = $("#question4").val();
    var answer5 = $("#question5").val();
    var answer6 = $("#question6").val();
    var answer7 = $("#question7").val();

    var arrayFavorite = [answer1, answer2, answer3, answer4, answer5, answer6, answer7];

    secondArray.push(arrayFavorite[1]);
    secondArray.push(arrayFavorite[2]);
    secondArray.push(arrayFavorite[0]);

   $("ul").append("<li>"+secondArray[0]+"</li>");
   $("ul").append("<li>"+secondArray[1]+"</li>");
   $("ul").append("<li>"+secondArray[2]+"</li>");

  });
});
