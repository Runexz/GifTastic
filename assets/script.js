


// create an array of strings, each one releated to a topic that intrests me and save it to a variable called topics.
var topics = ['mario', 'link', 'sonic', 'mega man', 'master chief', 'metal gear', 'kratos', 'monter hunter world', 'cloud strife', 'street fighter'];
 
// create a for loop that appends a button for each string in the array
for (var i = 0; i < topics.length; i++) {
    var buttons = $('<button>'+ topics[i] + "</button>");
    buttons.appendTo('#topics');
    
}
