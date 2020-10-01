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
/* span.onclick = function () {
  modal.style.display = "none";
}; */

////////////////////  MAPA  ////////////////////





$(function(){

  ////////////////////  MENU HAMBURGUESA OBRIR I TANCAR  ///////////////////

  $("#hamburguesa").click(function(){
    $("#menu").css("display","flex");
    $("#mainQuiSom").hide();
    $("#imatgesQuiSom").hide();
    $("#hamburguesa").hide();
    $("#activitats").hide();
    $("#infoContacte").hide();
    $("#infoBombo").hide();
    $("#infoCova").hide();
    $("#infoPlaca").hide();
    $("#infoDesplom").hide();
    $("#mainEquipacio").hide();
    $("#infoGaleria").hide();
    $("#infoMerch").hide();
    $("#infoTarifes").hide();
    
  });
  $("#tancar").click(function(){
    $("#menu").hide();
    $("#mainQuiSom").show();
    $("#imatgesQuiSom").show();
    $("#hamburguesa").show();
    $("#activitats").show();
    $("#infoContacte").show();
    $("#infoBombo").show()
    $("#infoCova").show()
    $("#infoPlaca").show()
    $("#infoDesplom").show()
    $("#mainEquipacio").show();
    $("#infoGaleria").show();
    $("#infoMerch").show();
    $("#infoTarifes").show();
    
  });
  
  ///////////////// MAX HEIGHT CONTAINERS  /////////////////////

  /*$("#mainQuiSom").css("max-height", $("#menu").css("height"));
  $("#imatgesQuiSom").css("max-height", $("#menu").css("height"));
  
  $("#activitats").css("max-height", $("#menu").css("height"));
  $("#infoContacte").css("max-height", $("#menu").css("height"));
  $("#infoBombo").css("max-height", $("#menu").css("height"));
  $("#infoCova").css("max-height", $("#menu").css("height"));
  $("#infoPlaca").css("max-height", $("#menu").css("height"));
  $("#infoDesplom").css("max-height", $("#menu").css("height"));
  $("#mainEquipacio").css("max-height", $("#menu").css("height"));
  $("#infoGaleria").css("max-height", $("#menu").css("height"));
  $("#infoMerch").css("max-height", $("#menu").css("height"));
  $("#infoTarifes").css("max-height", $("#menu").css("height"));
  */
});