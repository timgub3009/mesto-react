import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  const avatarRef = React.useRef("");

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [props.isOpen]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={"avatar-edit"}
      formName={"avatar-form"}
      title={"Обновить аватар"}
      submitText={props.isLoading ? "Сохранение..." : "Сохранить"}
    >
      <label htmlFor="avatar" className="popup__label">
        <input
          ref={avatarRef}
          type="url"
          name="avatar"
          id="avatar"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка на фото"
          required
        />
        <span id="avatar-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
