// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-drank").on("click", function(event) {
      var id = $(this).data("id");
      var allGone = true;
  
      var newDrankState = {
        drankState: allGone
      };
  
      // Send the PUT request.
      $.ajax("/api/shakes/" + id, {
        type: "PUT",
        data: newDrankState
      }).then(
        function() {
          console.log("changed Drank to", allGone);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newShake = {
        name: $("#ca").val().trim(),
        drankState: 0,
      };
  
      // Send the POST request.
      $.ajax("/api/shakes", {
        type: "POST",
        data: newShake
      }).then(
        function() {
          console.log("created new cat");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".delete-cat").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request.
      $.ajax("/api/shakes/" + id, {
        type: "DELETE"
      }).then(
        function() {
          console.log("deleted cat", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  