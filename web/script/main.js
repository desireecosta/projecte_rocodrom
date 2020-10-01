//MODAL GALERIA

// Get the modal
var modalGaleria = document.getElementById("myModalGaleria");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imatgeGaleria");
var modalImgGaleria = document.getElementById("imgModalGaleria");
var captionText = document.getElementsByClassName("caption");
$(".imatgeGaleria").click(function () {
  modalGaleria.style.display = "block";
  modalImgGaleria.src = this.src;
  captionText.innerHTML = document.getElementsByClassName("caption");
});

// Get the <span> element that closes the modal
var spanGaleria = document.getElementsByClassName("closeGaleria")[0];

// When the user clicks on <span> (x), close the modal
// spanGaleria.onclick = function () {
//   modalGaleria.style.display = "none";
// };

$(".closeGaleria").click(function () {
  modalGaleria.style.display = "none";
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MODAL MERCH
// Get the modal
var modalMerch = document.getElementById("myModalMerch");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementsByClassName("imatgeMerch");
var modalImgMerch = document.getElementById("imgModalMerch");
var captionText = document.getElementsByClassName("caption");

$(".imatgeMerch").click(function () {
  modalMerch.style.display = "block";
  modalImgMerch.src = this.src;
  captionText.innerHTML = document.getElementsByClassName("caption");
});

// Get the <span> element that closes the modal
var spanMerch = document.getElementsByClassName("closeMerch")[0];

// When the user clicks on <span> (x), close the modal
// spanMerch.onclick = function () {
//   modalMerch.style.display = "none";
// };

$(".closeMerch").click(function () {
  modalMerch.style.display = "none";
});
