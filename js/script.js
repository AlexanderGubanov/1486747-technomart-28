var writeUs = document.querySelector(".write-to-us");
var modalWrite = document.querySelector(".modal-write");

var modalClose = modalWrite.querySelector(".modal-close");
var modalForm = modalWrite.querySelector(".modal-form");
var yourName = modalWrite.querySelector("[name=your-name]");
var yourMail = modalWrite.querySelector("[name=your-mail]");


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

