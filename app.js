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
    });

    // Create html elements to hold api response data to display on document
    let $newDiv = $("<div>").addClass("card");
    let $div = $("<div").addClass("card-body");
    let $img= $("<img>").addClass("card-img-top").attr("src","");
    let $h5 = $("<h5>").addClass("card-title").text("");
    let $p = $("<p>").addClass("card-text").text("");


  });
});

{/* <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */}