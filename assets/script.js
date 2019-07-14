
// MB0lUDI2nmmf95mOhXhoTuuoW4Sda21C

// // create an array of strings, each one releated to a topic that intrests me and save it to a variable called topics.
var topics = ['mario', 'link', 'sonic', 'mega man', 'master chief', 'metal gear', 'kratos', 'monster hunter world', 'cloud strife', 'street fighter'];
 

renderButtons();

function renderButtons() {
    // create a for loop that appends a button for each string in the array
for (var i = 0; i < topics.length; i++) {
    var buttons = $('<button>'+ topics[i] + "</button>");
    buttons.addClass("topic");
    buttons.appendTo('#topics');
    // works
}
}

$('#createButton').on('click',function(){
    
    var newText = $('#newButtonText').val();
    console.log(newText);
    topics.push(newText);
    $("#topics").empty();
    renderButtons();

})
// // when the user clicks on a button the page should grab 10 static, non-animated gif images from Giphy API and place then on page
$(document).on('click', '.topic',function() {

    // this clears the videos already on screen
    $("#displayBox").empty();
    
    // stores the text on button to a variable
    var x = $(this).text();
    console.log(x);
    
//     // stores the api plus variable x plus api key limit 10
    var queryURL = "https://api.giphy.com/v1/gifs/search?&q="+x+"&api_key=MB0lUDI2nmmf95mOhXhoTuuoW4Sda21C&limit=5";
//     // console.log works
    console.log(queryURL);


    $.ajax({
        url: queryURL,
        method:"GET"})
    .done(function(response) {
        console.log(response);
        for (let j = 0; j < response.data.length; j++) {
            $("#displayBox").append("<p>Rating: " + response.data[j].rating + "</p>");
            $("#displayBox").append("<img src='" + response.data[j].images.downsized.url + "'>");              
        }
        
    })
})

