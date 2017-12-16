

var boats = ["Yacht", "Dinghy", "Sail", "Power"];

var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + boats + "api_key=6rYpWtEtGmNhbjcdGWby5Lq1FZETiUE3"

    
$("#boats-view").on("click", function(event) {


    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
    });

  });


  
     // Looping through the array of movies
     for (var i = 0; i < boats.length; i++) {
      
                // Then dynamicaly generating buttons for each movie in the array.
                // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
                var a = $("<button>");
                // Adding a class
                a.addClass("boat");
                // Adding a data-attribute with a value of the movie at index i
                a.attr("data-name", boats[i]);
                // Providing the button's text with a value of the movie at index i
                a.text(boats[i]);
                // Adding the button to the HTML
                $("#boats-view").append(a);
              }
            