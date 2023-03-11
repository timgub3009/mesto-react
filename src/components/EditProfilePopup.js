import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import useForm from "../hooks/useForm";

function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, setValues } = useForm({});

  React.useEffect(() => {
    if (currentUser) {
      setValues(currentUser);
    }
  }, [props.isOpen, currentUser, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onUpdateUser(values);
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name={"edit"}
      formName={"profile-form"}
      title={"Редактировать профиль"}
      submitText={props.isLoading ? "Сохранение..." : "Сохранить"}
      onSubmit={handleSubmit}
    >
      <label htmlFor="name" className="popup__label">
        <input
          type="text"
          id="name"
          name="name"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          minLength="2"
          maxLength="40"
          value={values.name || ""}
          onChange={handleChange}
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
          value={values.about || ""}
          onChange={handleChange}
          required
        />
        <span id="about-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default EditProfilePopup;
