// MAKE GALLERY IMAGES LARGER VERSION 1
$(document).ready(function () {
  var small = { width: "50%" };
  var large = { width: "800px", height: "100%" };
  var count = 1;
  $(".galeriaImatge img")
    .css(small)
    .on("click", function () {
      $(this).animate(count == 1 ? large : small);
      count = 1 - count;
    });
});
