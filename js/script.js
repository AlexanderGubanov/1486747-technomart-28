var writeUs = document.querySelector(".write-to-us");
var modalWrite = document.querySelector(".modal-write");

var modalClose = modalWrite.querySelector(".modal-close");
var modalForm = modalWrite.querySelector(".modal-form");
var yourName = modalWrite.querySelector("[name=your-name]");
var yourMail = modalWrite.querySelector("[name=your-mail]");

var mapLink = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");
var modalClosemap = document.querySelector(".modal-closemap");

var linkDelivery = document.querySelector(".delivery");
var linkGuarantee = document.querySelector(".guarantee");
var linkCredit = document.querySelector(".credit");
var modalDelivery = document.querySelector(".modal-delivery");
var modalGuarantee = document.querySelector(".modal-guarantee");
var modalCredit = document.querySelector(".modal-credit");

var buttonChoosen = document.querySelector(".button-choosen");
var buttonDefault = document.querySelector(".button-default");

var buttonForward = document.querySelector(".button-forward");
var buttonBack = document.querySelector(".button-back");
var perforators = document.querySelector(".perforators");
var drills = document.querySelector(".drills");

var linkBuy = document.querySelectorAll(".buy");
var modalBasket = document.querySelector(".modal-add-basket");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

writeUs.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWrite.classList.add("modal-show");

  if (storage) {
    yourName.value = storage;
yourName.focus();
  } else {
yourName.focus();
}
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalWrite.classList.remove("modal-show");
});

modalForm.addEventListener("submit", function (evt) {
  if (!yourName.value || !yourMail.value) {
    evt.preventDefault();
} else {
    localStorage.setItem("name", yourName.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (mpdal.classList.contains("modal-show")) {
      evt.preventDefault();
      modalWrite.classList.remove("modal-show");
    }
  }
});

// slider 
buttonForward.addEventListener("click", function (evt) {     
  evt.preventDefault();
  perforators.classList.remove("modal-show");
  drills.classList.add("modal-show"); 
});
   
buttonBack.addEventListener("click", function (evt) {     
  evt.preventDefault();
  drills.classList.remove("modal-show"); 
  perforators.classList.add("modal-show"); 
});

// map
mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

modalClosemap.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

// services
linkDelivery.addEventListener("click", function (evt) {     
  evt.preventDefault();
  modalDelivery.classList.add("modal-show"); 
  linkDelivery.classList.add("button-choosen");

  modalCredit.classList.remove("modal-show");
  linkCredit.classList.remove("button-choosen");

  modalGuarantee.classList.remove("modal-show");
  linkGuarantee.classList.remove("button-choosen");
});
  
linkGuarantee.addEventListener("click", function (evt) {     
  evt.preventDefault();     
  modalGuarantee.classList.add("modal-show");
  linkGuarantee.classList.add("button-choosen");

  modalDelivery.classList.remove("modal-show");
  linkDelivery.classList.remove("button-choosen");
  
  modalCredit.classList.remove("modal-show");
  linkCredit.classList.remove("button-choosen");
});

linkCredit.addEventListener("click", function (evt) {     
  evt.preventDefault();     
  modalCredit.classList.add("modal-show");
  linkCredit.classList.add("button-choosen");

  modalGuarantee.classList.remove("modal-show");
  linkGuarantee.classList.remove("button-choosen");

  modalDelivery.classList.remove("modal-show");
  linkDelivery.classList.remove("button-choosen");
});

  // checkout
  linkBuy.addEventListener("click", function (evt) {     
    evt.preventDefault();     
    modalBasket.classList.add("modal-show");
  }); 



