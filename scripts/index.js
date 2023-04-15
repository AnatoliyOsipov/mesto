//Константы закрытия, открытия, сохранения попапа

const popupCloseButtons = document.querySelectorAll(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__change");
const addButton = document.querySelector(".profile__add");

//Присваивание имени и описания на странице
const userNameElement = document.querySelector(".profile__title");
const userDescriptionElement = document.querySelector(".profile__subtitle");

//Присваивание констант инпуту
const userNameInput = document.querySelector(".popup__input_field_name");
const userDescriptionInput = document.querySelector(
  ".popup__input_field_description"
);

//Функции открытия и закрытия попапа
const openPopup = function (id) {
  const popupElement = document.getElementById(id);
  popupElement.classList.add("popup_opened");
};
const closePopup = function () {
  document.querySelector(".popup_opened").classList.remove("popup_opened");
};

const addProfile = function () {
  const placeInput = document.querySelector('#add-form input[name="place"]');
  const linkInput = document.querySelector('#add-form input[name="link"]');
  placeInput.value = "";
  linkInput.value = "";
  openPopup("add-popup");
};

function editProfile() {
  userNameInput.value = userNameElement.textContent;
  userDescriptionInput.value = userDescriptionElement.textContent;
  openPopup("edit-popup");
}
/*const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};*/

//Слушатели событий на клик
popupOpenButtonElement.addEventListener("click", editProfile);
popupCloseButtons.forEach((btn) => {
  btn.addEventListener("click", closePopup);
});
addButton.addEventListener("click", addProfile);
//popupElement.addEventListener("click", closePopupByClickOnOverlay);

//submit
const formElement = document.getElementById("edit-form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userDescriptionElement.textContent = userDescriptionInput.value;
  closePopup();
});

//Карточки
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardTemplate = document.getElementById("card-template").content;
const cardContainer = document.querySelector(".elements");

function addCart(name, link) {
  const card = cardTemplate.cloneNode(true);
  const photo = card.querySelector(".element__photo");
  photo.src = link;
  photo.alt = name;
  card.querySelector(".element__title-text").textContent = name;
  cardContainer.append(card);
}

initialCards.forEach((el) => {
  addCart(el.name, el.link);
});

const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const placeInput = document.querySelector('#add-form input[name="place"]');
  const linkInput = document.querySelector('#add-form input[name="link"]');
  addCart(placeInput.value, linkInput.value);
  closePopup();
});

const likeButtons = document.querySelectorAll(".element__heart");
likeButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.classList.toggle("element__heart_active");
  });
});

const trashButtons = document.querySelectorAll(".element__trash");
trashButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.target.parentElement.remove();
  });
});

const photoButtons = document.querySelectorAll(".element__photo");
photoButtons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const modal = document.querySelector(".gallery-popup");
    const src = event.target.src;
    const name = event.target.alt;
    const img = document.createElement("img");
    img.classList.add("gallery-popup__image");
    img.src = src;
    img.alt = name;
    modal.querySelector(".gallery-popup__container").prepend(img);
    modal.querySelector(".gallery-popup__title").innerHTML = name;
    modal.classList.add("gallery-popup_open");
  });
});

const galleryCloseButton = document.querySelector(".gallery-popup__close");
galleryCloseButton.addEventListener("click", (event) => {
  const galleryPopup = document.querySelector(".gallery-popup");
  galleryPopup.classList.remove("gallery-popup_open");
  galleryPopup.querySelector(".gallery-popup__image").remove();
  galleryPopup.querySelector(".gallery-popup__title").innerHTML = "";
});
