
// This is my initial array 
var boats = ["Yacht", "Dinghy", "Sail", "Power"];




 // This is my onClick function   
$(document).on("click", ".boat",function(event) {


//This is where I am grabbing and storing the data-name property
var boatsearch = $(this).attr("data-name");

console.log(boatsearch);
  //This is where I put in my API and API key!
  var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + boatsearch + "&limit=3&api_key=6rYpWtEtGmNhbjcdGWby5Lq1FZETiUE3";
    //This is my ajax call which does what it does
    $.ajax({
      url: queryURL,
      method: 'GET'
      //This is my "promise" not to do anything until all the asynchronis reslults come in from my API
    }).done(function(response) {
      //This clears out my old images
      $(".image").empty();

      for (var i = 0; i < response.data.length; i++){
        
                        var image = $("<img>");
                        image.attr("src", response.data[i].images.fixed_height_still.url);
                        image.attr("status", "still");
                        image.attr("animated", response.data[i].images.fixed_height.url);
                        image.attr("still", response.data[i].images.fixed_height_still.url);
                        $(".image").append(image);
        
                      }

      //**********Gonna make this mine (currently copied from classWork)*************** */
                      // $(".gif").on("click", function() {
                      //   // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
                      //   var state = $(this).attr("data-state");
                      //   // If the clicked image's state is still, update its src attribute to what its data-animate value is.
                      //   // Then, set the image's data-state to animate
                      //   // Else set src to the data-still value
                      //   if (state === "still") {
                      //     $(this).attr("src", $(this).attr("data-animate"));
                      //     $(this).attr("data-state", "animate");
                      //   } else {
                      //     $(this).attr("src", $(this).attr("data-still"));
                      //     $(this).attr("data-state", "still");
                      //   }
     

      

      console.log(response);
    //  $("#boats-view").text(JSON.stringify(response)); 
    });

  });


  
     // Looping through the array of boats
     for (var i = 0; i < boats.length; i++) {
      
                // Then dynamicaly generating buttons for each boat in the array.
                // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
                var a = $("<button>");
                // Adding a class
                a.addClass("boat");
                // Adding a data-attribute with a value of the boats at index i
                a.attr("data-name", boats[i]);
                // Providing the button's text with a value of the boats at index i
                a.text(boats[i]);
                // Adding the button to the HTML
                $("#boats-view").append(a);
              }
            

              