// this function will only run when the DOM is ready for javascript
$(document).ready(function () {

    // // create an array of strings, each one releated to a topic that intrests me and save it to a variable called topics.
    var topics = ['mario', 'link', 'sonic', 'mega man', 'master chief', 'metal gear', 'kratos', 'monster hunter world', 'cloud strife', 'street fighter'];
    console.log(topics);

    renderButtons();

    function renderButtons() {
        // create a for loop that appends a button for each string in the array
        for (var i = 0; i < topics.length; i++) {
            var buttons = $("<button>");
            buttons.addClass("topic");
            buttons.attr("data-name", topics[i]);
            buttons.text(topics[i]);
            buttons.appendTo('#topics');
            // works
        }
    }
        // does not work
    $("#createButton").on('click', function () {

        var newText = $('#newButtonText').val().trim();
        console.log(newText);
        topics.push(newText);
        $("#topics").empty();
        renderButtons();

    });
    // // when the user clicks on a button the page should grab 10 static, non-animated gif images from Giphy API and place then on page
    $(document).on('click', '.topic', function () {

        // this clears the videos already on screen
        $("#displayBox").empty();

        // stores the text on button to a variable
        var x = $(this).text();
        console.log(x);

        //     // stores the api plus variable x plus api key limit 10
        var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" + x + "&api_key=MB0lUDI2nmmf95mOhXhoTuuoW4Sda21C&limit=10";
        //     // console.log works
        console.log(queryURL);


        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .done(function (response) {
                console.log(response);
                for (let j = 0; j < response.data.length; j++) {

                    // creating new div to hold ratings and gif with class newGif
                    var newDiv = $("<div>");
                    newDiv.addClass("newGif");

                    // creating variable that will pull rating data and link to new div
                    var gifRating = $("<p>").text("Rating: " + response.data[j].rating);
                    newDiv.append(gifRating);

                    // creating variable to create img then pull data both still and animated
                    var gifImage = $("<img>");
                    gifImage.attr("src", response.data[j].images.downsized_still.url);
                    gifImage.attr("data-still", response.data[j].images.downsized_still.url);
                    gifImage.attr("data-animate", response.data[j].images.downsized.url);
                    gifImage.attr("data-state", "still");
                    gifImage.addClass("image");
                    // link img to new div and link to html class displayBox
                    newDiv.append(gifImage);
                    $("#displayBox").append(newDiv);

                    // works but not still just animated
                    // $("#displayBox").append("<p>Rating: " + response.data[j].rating + "</p>");
                    // $("#displayBox").append("<img src='" + response.data[j].images.downsized.url + "'>");
                }

            });
    });

    // when the user clicks the image with class image this function starts
    $(document).on("click", ".image", function () {

        // sets the image clicked set to a variable
        var state = $(this).attr('data-state');

        // if var state is still then it replaces the still data with animate
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        }
        // if var state is animae then it replaces the animate with still
        else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }
    });
})