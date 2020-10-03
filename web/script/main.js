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

$(function () {
  ////////////////////  MENU HAMBURGUESA OBRIR I TANCAR  ///////////////////

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

  //////TARIFES BBDD //////////
  $.get("http://localhost:3000/prices?TranslationID=1", function (data, status) {
    var i = 0;
    for (i = 0; i < data.length; i++){
        $("#tarifesNormals").append(
                "<div id='preus" + [i] + "'>" +
                "<h3>" + data[i].PriceName+ "</h3>" +
                "<p>"+data[i].Price+"<p>"+
                "<p>" + data[i].PriceDescription + "<p>" + "</div>"
        ); 
    };              
});
});
