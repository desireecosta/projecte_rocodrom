/////////////////////////////

//MODAL GALERIA

/////////////////////////////

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

/////////////////////////////

//MODAL MERCH

/////////////////////////////

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

/////////////////////////////

//MODAL BOMBO

/////////////////////////////

// Get the modal
var modalBombo = document.getElementById("myModalBombo");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imatgeBombo = document.getElementsByClassName("imatgeBombo");
var viaBombo = document.getElementsByClassName("viaBombo");
$(".imatgeBombo").click(function () {
  modalBombo.style.display = "block";
});
// Get the <span> element that closes the modal
var spanBombo = document.getElementsByClassName("closeBombo")[0];

// When the user clicks on <span> (x), close the modal
$(".closeBombo").click(function () {
  modalBombo.style.display = "none";
});

/////////////////////////////

//MODAL COVA

/////////////////////////////

// Get the modal
var modalCova = document.getElementById("myModalCova");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imatgeCova = document.getElementsByClassName("imatgeCova");
var viaCova = document.getElementsByClassName("viaCova");
$(".imatgeCova").click(function () {
  modalCova.style.display = "block";
});
// Get the <span> element that closes the modal
var spanCova = document.getElementsByClassName("closeCova")[0];

// When the user clicks on <span> (x), close the modal
$(".closeCova").click(function () {
  modalCova.style.display = "none";
});

/////////////////////////////

//MODAL DESPLOM

/////////////////////////////

// Get the modal
var modalDesplom = document.getElementById("myModalDesplom");
// Get the image and insert it inside the modal - use its "alt" text as a caption
var imatgeDesplom = document.getElementsByClassName("imatgeDesplom");
var viaDesplom = document.getElementsByClassName("viaDesplom");
console.log(modalDesplom);
console.log(viaDesplom);
$(".imatgeDesplom").click(function () {
  modalDesplom.style.display = "block";
});
// Get the <span> element that closes the modal
var spanDesplom = document.getElementsByClassName("closeDesplom")[0];

// When the user clicks on <span> (x), close the modal
$(".closeDesplom").click(function () {
  modalDesplom.style.display = "none";
});

////////////////////  MENU HAMBURGUESA OBRIR I TANCAR  ///////////////////
$(function () {
  $("#hamburguesa").click(function () {
    $("#menu").css("display", "flex");
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
  $("#tancar").click(function () {
    $("#menu").hide();
    $("#mainQuiSom").show();
    $("#imatgesQuiSom").show();
    $("#hamburguesa").show();
    $("#activitats").show();
    $("#infoContacte").show();
    $("#infoBombo").show();
    $("#infoCova").show();
    $("#infoPlaca").show();
    $("#infoDesplom").show();
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
