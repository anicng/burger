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

        $.ajax("http://localhost:8080/api/burger", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log('hi');
            location.reload();

        });

    });
    $(".devour").on('click', function () {
        
    });

});