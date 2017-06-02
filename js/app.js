/*
 * Archivo principal de JS
 */

 (function modal(){
  var traerGaleria = Array.from(document.getElementsByClassName("caja"));
  var modal = document.getElementById("cajamodal");


  var bodyModal, close, img;
  

  traerGaleria.forEach(function(box){
    box.addEventListener("click", function(){
      modal.innerHTML = "";
      bodyModal = document.createElement("div");
      bodyModal.classList.add("modal-body");
      bodyModal.innerHTML = box.innerHTML;
      modal.appendChild(bodyModal);
      modal.classList.remove("hide");

      close = document.createElement("div");
      close.classList.add("close");

      img = document.createElement("img");
      img.setAttribute("src", "https://www.iconfinder.com/data/icons/mayssam/512/cross-128.png");

      close.appendChild(img);
      modal.appendChild(close);
      close.addEventListener("click", function(){
        modal.classList.add("hide");
      });
    });
  });
})();
