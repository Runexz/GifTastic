
// MB0lUDI2nmmf95mOhXhoTuuoW4Sda21C

// // create an array of strings, each one releated to a topic that intrests me and save it to a variable called topics.
// var topics = ['mario', 'link', 'sonic', 'mega man', 'master chief', 'metal gear', 'kratos', 'monter hunter world', 'cloud strife', 'street fighter'];
 
// // create a for loop that appends a button for each string in the array
// for (var i = 0; i < topics.length; i++) {
//     var buttons = $('<button>'+ topics[i] + "</button>");
//     buttons.appendTo('#topics');
//     // works
// }

// // when the user clicks on a button the page should grab 10 static, non-animated gif images from Giphy API and place then on page
$('button').on('click',function() {
    
    // stores the text on button to a variable
    var x = $(this).data("search");
    
//     // stores the api plus variable x plus api key limit 10
    var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=MB0lUDI2nmmf95mOhXhoTuuoW4Sda21C&q=&limit=10";
    // https://api.giphy.com/v1/gifs/search?&api_key=MB0lUDI2nmmf95mOhXhoTuuoW4Sda21C&q=mario&limit=10
//     // console.log works
    console.log(queryURL);


    $.ajax({
        url: queryURL,
        method:"GET"})
    .done(function(response) {
        console.log(response);
    })
})

