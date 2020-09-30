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

//MAKE GALLERY IMAGES LARGER VERSION 2
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imatge");
var modalImg = document.getElementById("imatge");
var captionText = document.getElementsByClassName("caption");
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = document.getElementsByClassName("imatge");
  captionText.innerHTML = document.getElementsByClassName("caption");
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
