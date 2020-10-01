//MODAL GALERIA

// Get the modal
var modalGaleria = document.getElementById("myModalGaleria");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgGaleria = document.getElementsByClassName("imatgeGaleria");
var modalGaleriaImg = document.getElementById("imgModalGaleria");
var captionTextGaleria = document.getElementsByClassName("captionGaleria");
$(".imatgeGaleria").click(function () {
  modalGaleria.style.display = "block";
  modalGaleriaImg.src = this.src;
  captionText.innerHTML = document.getElementsByClassName("caption");
});

// Get the <span> element that closes the modal
var spanGaleria = document.getElementsByClassName("closeGaleria")[0];

// When the user clicks on <span> (x), close the modal
$(".closeGaleria").click(function () {
  modalGaleria.style.display = "none";
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//MODAL MERCH

// Get the modal
var modalMerch = document.getElementById("myModalMerch");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgMerch = document.getElementsByClassName("imatgeMerch");
var modalMerchImg = document.getElementById("imgModalMerch");
var captionTextMerch = document.getElementsByClassName("captionMerch");
$(".imatgeMerch").click(function () {
  modalMerch.style.display = "block";
  modalMerchImg.src = this.src;
  captionTextMerch.innerHTML = document.getElementsByClassName("captionMerch");
});

// Get the <span> element that closes the modal
var spanMerch = document.getElementsByClassName("closeMerch")[0];

// When the user clicks on <span> (x), close the modal
$(".closeMerch").click(function () {
  modalMerch.style.display = "none";
});
