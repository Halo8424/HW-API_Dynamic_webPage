$(document).ready(function () {
  // buttons Array
  const starterArray = ["teacher", "chef", "lawyer", "dentist"];

  // Functions
  function clearButtonContainer() {
    $(".button_container").empty();
  }
  function clearUserInput() {
    $("#user-input").val(" ");
  }
  function clearApiDumpContainer(){
    $(".api_dump_container").empty();
  }
  function renderButtons() {
    clearButtonContainer();
    clearUserInput();
    for (let i = 0; i < starterArray.length; i++) {
      let Btn = $("<button>")
        .addClass("professionBtn")
        .attr("data-attr", starterArray[i])
        .text(starterArray[i]);
      $(".button_container").append(Btn);
    }
  }

  function populateResults(results) {
    clearApiDumpContainer();

    for (let i = 0; i < results.length; i++) {
      // Create html elements to hold api response data to display on document
      let $newDiv = $("<div>").addClass("card");
      let rating = results[i].rating;

      let animated = results[i].images.fixed_height.url;
      let still = results[i].images.fixed_height_still.url;

      let $img = $("<img>");
      $img.attr("src", still);
      $img.attr("data-still", still);
      $img.attr("data-animate", animated);
      $img.attr("data-state", still);
      $img.addClass("profession-image");

      let $p = $("<p>")
        .addClass("card-text")
        .text("Rating: " + rating);

      $newDiv.append($p);
      $newDiv.append($img);
      $(".api_dump_container").append($newDiv);
    }
  }

  renderButtons();

  // capture user input and display in btn area
  $("#select-profession").on("click", function () {
    event.preventDefault();
    let userInput = $("#user-input").val();
    starterArray.push(userInput);
    renderButtons();
  });

  // On click on buttons to preform ajax call
  $(document).on("click", ".professionBtn", function () {
    let searchTerm = $(this).attr("data-attr");
    //console.log(searchTerm);
    let queryURL = `https://api.giphy.com/v1/gifs/search?api_key=TazZ8BgEYTeO4Z3mimF4qz3yOKpTlQpH&q=${searchTerm}&limit=10&offset=0&rating=g&lang=en`;

    $.ajax({
      url: queryURL,
      method: "GET",
    }).then(function (res) {
      console.log(res);
      let results = res.data;
      populateResults(results);
    });
  });

  // On click event to animate gifs
  $(document).on("click", ".profession-image", function () {
    let state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
});
