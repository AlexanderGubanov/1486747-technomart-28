var writeUs = document.querySelector(".write-to-us");
var modalWrite = document.querySelector(".modal-write");

var modalClose = modalWrite.querySelector(".modal-close");
var modalForm = modalWrite.querySelector(".modal-form");
var yourName = modalWrite.querySelector("[name=your-name]");
var yourMail = modalWrite.querySelector("[name=your-mail]");

var mapLink = document.querySelector(".map");
var modalMap = document.querySelector(".modal-map");

var linkDelivery = document.querySelector(".delivery");
var linkGuarantee = document.querySelector(".guarantee");
var linkCredit = document.querySelector(".credit");
var modalDelivery = document.querySelector(".modal-delivery");
var modalGuarantee = document.querySelector(".modal-guarantee");
var modalCredit = document.querySelector(".modal-credit");

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

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

// services
linkDelivery.addEventListener("click", function (evt) {     
  evt.preventDefault();
  modalDelivery.classList.add("modal-show");
  modalCredit.classList.remove("modal-show");
  modalGuarantee.classList.remove("modal-show");
});
  
linkGuarantee.addEventListener("click", function (evt) {     
  evt.preventDefault();     
  modalGuarantee.classList.add("modal-show");
  modalDelivery.classList.remove("modal-show");
  modalCredit.classList.remove("modal-show");
});

linkCredit.addEventListener("click", function (evt) {     
  evt.preventDefault();     
  modalCredit.classList.add("modal-show");
  modalGuarantee.classList.remove("modal-show");
  modalDelivery.classList.remove("modal-show");
});

  