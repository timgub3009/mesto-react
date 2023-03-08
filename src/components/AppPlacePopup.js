import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {

    const [name, setName] = React.useState('');
    const [link, setLink] = React.useState('');

  return (
    <PopupWithForm
      isOpen={props.isAddPlacePopupOpen}
      onClose={props.closeAllPopups}
      name={"add"}
      formName={"card-form"}
      title={"Новое место"}
      submitText={"Создать"}
      children={
        <>
          <label htmlFor="title" className="popup__label">
            <input
              type="text"
              name="title"
              id="title"
              className="popup__input popup__input_type_place"
              placeholder="Название"
              minLength="2"
              maxLength="30"
              required
            />
            <span id="title-error" className="popup__error"></span>
          </label>
          <label htmlFor="link" className="popup__label">
            <input
              type="url"
              name="link"
              id="link"
              className="popup__input popup__input_type_link"
              placeholder="Ссылка на картинку"
              required
            />
            <span id="link-error" className="popup__error"></span>
          </label>
        </>
      }
    />
  );
}

export default AddPlacePopup;