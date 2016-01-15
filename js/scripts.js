$(document).ready(function() {
    $("form.questions").submit(function(event) {
      var forceSide = $('input[name=forceSide]:checked').val();
      var eras = $('input[name=era]:checked').val();
      var personality = $('input[name=personality]:checked').val();

      if (forceSide === "option1") {
        if (eras === "option1") {
          if (personality === "option1") {
            var name = "Darth Vader"
            $("#celebrityName").empty().append(name);
            $("#result").show();
          } else {
            var name = "Emperor Palpatine"
            $("#celebrityName").empty().append(name);
            $("#result").show();
            }
          }
          } else {
          if (eras === "option3") {
            if ( personality === "option1") {
            var name = "Kylo Ren"
            $("#celebrityName").empty().append(name);
            $("#result").show();
          } else {
            var name = "General Hux"
            $("#celebrityName").empty().append(name);
            $("#result").show();
            }
          }
        }
        if (forceSide === "option2") {
          if (eras === "option1") {
            if (personality === "option1") {
              var name = "Luke Skywalker"
              $("#celebrityName").empty().append(name);
              $("#result").show();
            } else {
              var name = "Hans Solo"
              $("#celebrityName").empty().append(name);
              $("#result").show();
            }
            } else {
            if (eras === "option3") {
              if ( personality === "option1") {
              var name = "Rey"
              $("#celebrityName").empty().append(name);
              $("#result").show();
            } else {
              var name = "Finn"
              $("#celebrityName").empty().append(name);
              $("#result").show();
            }
          }
        }
      }


      event.preventDefault();
    })
});
