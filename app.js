$(document).ready(function(){
  $(".generateProperty").on("click", createProperty);
  $(".container").on("click", ".show", showDiv);
});

function createProperty(){
  var propertyID = randomNumber(100,9999);
  var sqrFoot = randomNumber(1000,10000);
  var costSqrFoot = randomNumber (1,100);
  appendDom(propertyID, sqrFoot, costSqrFoot);
}


function showDiv(){
  $(this).parent().slideUp();
}

function appendDom(propertyID, sqrFoot, costSqrFoot){
    $(".container").append("<div class='property'></div>");
    var $el = $(".container").children().last();

    $el.append("<p> Property ID:" + propertyID + "</p>");
    $el.append("<p>" +  sqrFoot + "Sq.Ft. </p>");
    $el.append("<p>$" + costSqrFoot + "/Sq.Ft</p>");
    $el.append("<button class='show'>Generate Pro</button>");
    $el.hide().slideDown();
    //$el.toggle().fadeToggle();
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
