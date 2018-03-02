$(document).ready(function () {

  var crystals = [{
      name: "space",
      value: 0
    },
    {
      name: "mind",
      value: 0
    },
    {
      name: "power",
      value: 0
    },
    {
      name: "time",
      value: 0
    }
  ];

  var game = {
    "wins": $('#wins'),
    "losses": $('#losses'),
    "goalTot": $('#goalTot'),
    "currentTot": $('#currentTot')
  };

  function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }


  function resetCrystals() {
    $(game.currentTot).text(0);
    $(game.goalTot).text(randomNum(19, 120));
    for (var i = 0; i < crystals.length; i++) {
      crystals[i].value = randomNum(1, 12);
    }
  }

  resetCrystals();

  $('button').click(function () {

    var crystalPick = $(this).attr("id");

    for (var i = 0; i < crystals.length; i++) {

      if (crystalPick == crystals[i].name) {
        var crysValue = crystals[i].value;
        var goalInt = parseInt($(game.goalTot).text());

        var currentInt = parseInt($(game.currentTot).text()) + crysValue;

        $(game.currentTot).text(currentInt);

        if (currentInt > goalInt) {
          var lossesInt = parseInt($(game.losses).text()) + 1;
          $(game.losses).text(lossesInt);
          resetCrystals();
        } else if (currentInt == goalInt) {
          var winsInt = parseInt($(game.wins).text()) + 1;
          $(game.wins).text(winsInt);
          resetCrystals();
        }
        break;
      } 
    } 

  }); 
});