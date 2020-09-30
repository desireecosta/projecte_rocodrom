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
<style type="text/css">
*{margin: 0; padding: 0;}
.caja{
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  background: #333944;
}
.box{
  width: 450px;
  height: 300px;
  background: #CCC;
  overflow: hidden;
}

.box img{
  width: 100%;
  height: auto;
}
@supports(object-fit: cover){
    .box img{
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
}
</style>
