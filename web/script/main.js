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




////////////////////  MENU HAMBURGUESA OBRIR I TANCAR  ///////////////////

$("#hamburguesa").click(function(){
  $("#menu").css("display","flex");
  $("#mainQuiSom").hide();
  $("#imatgesQuiSom").hide();
  $("#hamburguesa").hide();
});
$("#tancar").click(function(){
  $("#menu").hide();
  $("#mainQuiSom").show();
  $("#imatgesQuiSom").show();
  $("#hamburguesa").show();
});
