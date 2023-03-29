//Константы закрытия, открытия, сохранения попапа
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".button__close");
const popupOpenButtonElement = document.querySelector(".button__change");
const popupSaveButtonElement = popupElement.querySelector(".button__save");

//Константы имени и описания
const userName = "Жак-Ив Кусто";
const userDescription = "Исследователь океана";

//Присваивание имени и описания на странице
const userNameElement = document.querySelector(".profile__info-title");
const userDescriptionElement = document.querySelector(
  ".profile__info-subtitle"
);
userNameElement.textContent = userName;
userDescriptionElement.textContent = userDescription;

//Присваивание констант инпуту
const userNameInput = popupElement.querySelector(".popup__name");
const userDescriptionInput = popupElement.querySelector(".popup__description");
userNameInput.value = userName;
userDescriptionInput.value = userDescription;

//Корректировка полей инпут с помощью инпут
userNameInput.addEventListener("input", function (event) {
  const value = event.target.value;
  userNameElement.textContent = value;
});

//Функции открытия и закрытия попапа
const openPopup = function () {
  popupElement.classList.add("popup_opened");
};
const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};
//const closePopupByClickOnSave = (нужно ли брать, или можно ограничиться closePopup)
const closePopupByClickOnOverlay = function (event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
};

//Слушатели событий на клик
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupSaveButtonElement.addEventListener("click", closePopup); //нужно додумать, не уверен что это должно работать именно так
popupElement.addEventListener("click", closePopupByClickOnOverlay);

//Код из задания
// Находим форму в DOM
//let formElement =  const popupElement из моего кода
// Находим поля формы в DOM
//let nameInput =  const userNameInput из моего кода
//let jobInput =  const userDescriptionInput из моего кода

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  // Получите значение полей jobInput и nameInput из свойства value (не уверен правильно ли написал)
  userNameInput.value = userName;
  userDescriptionInput.value = userDescription;
  // Выберите элементы, куда должны быть вставлены значения полей

  // Вставьте новые значения с помощью textContent
  userNameElement.textContent = userName;
  userDescriptionElement.textContent = userDescription;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
