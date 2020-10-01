//MAKE GALLERY IMAGES LARGER VERSION 2
// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imatge");
var modalImg = document.getElementById("img01");
var captionText = document.getElementsByClassName("caption");
console.log(modalImg);
$(".imatge").click(function () {
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = document.getElementsByClassName("caption");
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

////////////////////  MAPA  ////////////////////

//MAKE GALLERY IMAGES LARGER VERSION 2
// Get the modal
var modalMerch = document.getElementById("MyModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgMerch = document.getElementsByClassName("image");
var modalImgMerch = document.getElementById("img02");
var captionTextMerch = document.getElementsByClassName("captionMerch");
console.log(modalImgMerch);
$(".image").click(function () {
  modalMerch.style.display = "block";
  modalImgMerch.src = this.src;
  captionText.innerHTML = document.getElementsByClassName("captionMerch");
});

// Get the <span> element that closes the modal
var spanMerch = document.getElementsByClassName("closeMerch")[0];

// When the user clicks on <span> (x), close the modal
spanMerch.onclick = function () {
  modalMerch.style.display = "none";
};

////////////////////  MAPA  ////////////////////