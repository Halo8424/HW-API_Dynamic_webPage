$(document).ready(function () {
  // Functions
  function renderButtons() {
    $(".button_container").empty();
    $("#user-input").val(" ");
    for (let i = 0; i < starterBtn.length; i++) {
      let Btn = $("<button>")
        .addClass("professionBtn")
        .attr("data-attr", starterBtn[i])
        .text(starterBtn[i]);
      $(".button_container").append(Btn);
    }
  }

  function populateResults(results){
    for(let i = 0; i < results.length; i++){
    // Create html elements to hold api response data to display on document
    let $newDiv = $("<div>").addClass("card");
    let rating = results[i].rating;


    let $img= $("<img>").addClass("card-img-top").attr("src","");
    let $h5 = $("<h5>").addClass("card-title").text("");
    let $p = $("<p>").addClass("card-text").text("Rating: " + rating);

    $newDiv.append($p);
    $(".api_dump_container").append($newDiv);
    }
  };
  // buttons Array
  const starterBtn = ["teacher", "chef", "lawyer", "dentist"];
  //console.log(starterBtn);
  // loop over create btns and display to page
  renderButtons();

  // capture user input and display in btn area
  $("#select-profession").on("click", function () {
    event.preventDefault();
    let userInput = $("#user-input").val();
    starterBtn.push(userInput);
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
});

