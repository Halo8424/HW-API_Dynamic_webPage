$(document).ready(function () {
  // Functions
  function renderButtons() {
      $(".button_container").empty();
      $("#user-input").val(" ");
    for (let i = 0; i < starterBtn.length; i++) {
      let Btn = $("<button>")
        .addClass("professionBtn")
        .attr("data-Btn", starterBtn[i])
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
    //console.log("clicked");
    let userInput = $("#user-input").val();
    //console.log(userInput);
    starterBtn.push(userInput);
    renderButtons();
  });
});
