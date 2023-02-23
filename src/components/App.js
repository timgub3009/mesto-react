import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (

    <div className="page">

      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        />
      <Footer />

      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        name={"edit"}
        formName={"profile-form"}
        title={"Редактировать профиль"}
        submitText={"Сохранить"}
        children={(
          <>
            <label htmlFor="name" className="popup__label">
              <input type="text" id="name" name="name" className="popup__input popup__input_type_name" placeholder="Имя"
                minLength="2" maxLength="40" required />
              <span className="popup__error" id="name-error"></span>
            </label>
            <label htmlFor="about" className="popup__label">
              <input type="text" id="about" name="about" className="popup__input popup__input_type_job"
                placeholder="О себе" minLength="2" maxLength="200" required />
              <span id="about-error" className="popup__error"></span>
            </label>
          </>
        )}
      />

      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        name={"add"}
        formName={"card-form"}
        title={"Новое место"}
        submitText={"Создать"}
        children={(
          <>
            <label htmlFor="title" className="popup__label">
              <input type="text" name="title" id="title" className="popup__input popup__input_type_place" placeholder="Название"
                minLength="2" maxLength="30" required />
              <span id="title-error" className="popup__error"></span>
            </label>
            <label htmlFor="link" className="popup__label">
              <input type="url" name="link" id="link" className="popup__input popup__input_type_link"
                placeholder="Ссылка на картинку" required />
              <span id="link-error" className="popup__error"></span>
            </label>
          </>
        )}
      />

      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        name={"avatar-edit"}
        formName={"avatar-form"}
        title={"Обновить аватар"}
        submitText={"Сохранить"}
        children={(
          <label htmlFor="avatar" className="popup__label">
            <input type="url" name="avatar" id="avatar" className="popup__input popup__input_type_avatar"
              placeholder="Ссылка на фото" required />
            <span id="avatar-error" className="popup__error"></span>
          </label>
        )}
      />

      <ImagePopup />

      <template className="elements-template">
        <li className="elements__card">
          <img className="elements__image" src="#" alt="Название картинки" />
          <button className="elements__delete-button"></button>
          <div className="elements__info">
            <h2 className="elements__card-heading"></h2>
            <div className="elements__like-container">
              <button className="elements__like-button"></button>
              <p className="elements__like-counter">0</p>
            </div>
          </div>
        </li>
      </template>

    </div>

  );
}

export default App;
