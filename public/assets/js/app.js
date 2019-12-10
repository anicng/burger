$(function () {
    $(".burger-form").on('submit', function (e) {
        e.preventDefault();

        var newBurger = {
            newBurgerName: $("#burger-name-input").val().trim(),
            devoured: false
        };

        console.log(newBurger);

        // $.post("/api/burger", newBurger).then(function(data){
        //     console.log('hi');
        //     console.log("newBurger app:" + data)
        // });

        $.ajax("/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            $("#burger-name-input").val("");
            location.reload();

        });

    });
    $(".devour").on('click', function () {
        var id = $(this).data("id");
        var devourState = $(this).data("devoured");
    
        var burgerState = {
          devour: devourState
        };
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: burgerState
          }).then(
            function() {
              console.log("changed devour to", devourState);
              // Reload the page to get the updated list
              location.reload();
            }
          );
    });

});