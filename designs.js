// Select color input
let colorSelected = $("#colorPicker").val();
// Select size input

// When size is submitted by the user, call makeGrid()
$("#sizePicker").on("submit",function(makeGrid) {
  let pixelCanvas= $("#pixelCanvas");
  let tbody =$("<tbody></tbody>");// this is a cache used to improve performance

  let td, tr;//defining the variables used for the grids rows and columns

  let height = $("#inputHeight").val();//accepting the height value from the form
  let width = $("#inputWidth").val();//accepting the width value from the form
  pixelCanvas.empty();//clears the old grid before creating the new grid

  /*Two loops (One For Loop And a While Loop as per Project Specs) to create the grid based on the inputted height and width*/
 for(let row =0; row < height; row++){
   tr = $("<tr></tr>");

   let col = 0; // when to start
while (col < width) { // when to stop
   td = $("<td></td>");
     tr.append(td);
  col++; // how to get to the next item
}

   tbody.last().append(tr);

 }
  //Add grid to DOM
  pixelCanvas.append(tbody);

  //Event Listener that enables user to Color square when clicked as well as when mouse ios dragged to color multiple cells
    pixelCanvas.on("mousedown mouseover", "td", function(e) {

    if (e.buttons === 1) {

    //change background color of target square
    $(this).css("background-color", $("#colorPicker").val());
    }
  });

makeGrid.preventDefault();
});
