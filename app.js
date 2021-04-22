$(document).ready(function () {
  // Functions

  // buttons Array
  const starterBtn = ["teacher", "chef", "lawyer", "dentist"];
  //console.log(starterBtn);
  // loop over create btns and display to page
  for (let i = 0; i < starterBtn.length; i++) {
    let Btn = $("<button>")
      .addClass("professionBtn")
      .attr("data-Btn", starterBtn[i])
      .text(starterBtn[i]);
      $(".button_container").append(Btn);
  }
});
