import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const currentUser = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleDescription(evt) {
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={"edit"}
      formName={"profile-form"}
      title={"Редактировать профиль"}
      submitText={"Сохранить"}
      onSubmit={handleSubmit}
      children={
        <>
          <label htmlFor="name" className="popup__label">
            <input
              type="text"
              id="name"
              name="name"
              className="popup__input popup__input_type_name"
              placeholder="Имя"
              minLength="2"
              maxLength="40"
              value={name || ""}
              onChange={handleName}
              required
            />
            <span className="popup__error" id="name-error"></span>
          </label>
          <label htmlFor="about" className="popup__label">
            <input
              type="text"
              id="about"
              name="about"
              className="popup__input popup__input_type_job"
              placeholder="О себе"
              minLength="2"
              maxLength="200"
              value={description || ""}
              onChange={handleDescription}
              required
            />
            <span id="about-error" className="popup__error"></span>
          </label>
        </>
      }
    />
  );
}

export default EditProfilePopup;
