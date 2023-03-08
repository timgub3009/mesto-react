import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {

  // function handleSubmit(e) {
  //   e.preventDefault();
  
  //   onUpdateAvatar({
  //     avatar: avatar
  //   });
  // } 

    return (
        <PopupWithForm
        isOpen={props.isEditAvatarPopupOpen}
        onClose={props.closeAllPopups}
        name={"avatar-edit"}
        formName={"avatar-form"}
        title={"Обновить аватар"}
        submitText={"Сохранить"}
        children={
          <label htmlFor="avatar" className="popup__label">
            <input
              type="url"
              name="avatar"
              id="avatar"
              className="popup__input popup__input_type_avatar"
              placeholder="Ссылка на фото"
              required
            />
            <span id="avatar-error" className="popup__error"></span>
          </label>
        }
      />
    )
}

export default EditAvatarPopup;