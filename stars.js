(function(){

  function Stars(numberOfStars, divID){
    var chosenDiv = document.getElementById(divID)  
    chosenDiv.style.display = "none";
    chosenDiv.innerHTML = "";
    function randomFrom(array) {
      return array[Math.floor(Math.random() * array.length)];
    }
    var text = "";
    var i; 
    for (i = 0; i < numberOfStars; i++) {
        bigRange = Array.apply(null, Array(100)).map(function (_, i) {return i;});
        smallRange = Array.apply(null, Array(3)).map(function (_, i) {return i;});
        tenRange = Array.apply(null, Array(5)).map(function (_, i) {return i;});
        starTwinkleStage = randomFrom("9","13");
        var top = randomFrom(bigRange); 
        var right = randomFrom(bigRange); 
        var width = randomFrom(smallRange);
        text += "<style></style>";
        text += "<div class='stars' style='top:" + top + "%; right: "+ right +"%; width:" + width + "px; height:" + width + "px;";
        text += "animation: twinkling " + starTwinkleStage + "s infinite";
        text += ";box-shadow: 0px 0px 1vw rgba(255, 255, 255, 0.2);'></div>";
        chosenDiv.innerHTML = text;
        chosenDiv.style.display = "block";
    }
}
  
// Function(How many stars, id that you want populating)
Stars(40, "demo");

})();
