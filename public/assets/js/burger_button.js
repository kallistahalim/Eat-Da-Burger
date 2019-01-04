// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".burger_button").on("click", function(event) {
      var id = $(this).data("id");
      var devouredIt = $(this).data("devoured-it");
      var isDevoured = {
        Devoured: devouredIt
      };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: isDevoured
    }).then(
      function() {
        console.log("what?", devouredIt);
        // Reload the page to get the updated list
        location.reload();
      }
    );
    });
  
    $(".submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
        console.log("i did it!")

      var newBurger = {
        Burger_Name: $(".burger-input").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        url: "http://localhost:3000",
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  