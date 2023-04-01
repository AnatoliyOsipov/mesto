//Константы закрытия, открытия, сохранения попапа
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__change");

//Присваивание имени и описания на странице
const userNameElement = document.querySelector(".profile__title");
const userDescriptionElement = document.querySelector(".profile__subtitle");

//Присваивание констант инпуту
const userNameInput = popupElement.querySelector(".popup__input_field_name");
const userDescriptionInput = popupElement.querySelector(
  ".popup__input_field_description"
);

//Функции открытия и закрытия попапа
const openPopup = function () {
  userNameInput.value = userNameElement.textContent;
  userDescriptionInput.value = userDescriptionElement.textContent;
  popupElement.classList.add("popup_opened");
};
const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};
/*const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};*/

//Слушатели событий на клик
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
//popupElement.addEventListener("click", closePopupByClickOnOverlay);

//submit
const formElement = document.getElementById("edit-form");
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  userNameElement.textContent = userNameInput.value;
  userDescriptionElement.textContent = userDescriptionInput.value;
  closePopup();
});
