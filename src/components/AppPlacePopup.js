import React from "react";
import PopupWithForm from "./PopupWithForm";
import useForm from "../hooks/useForm";

function AddPlacePopup(props) {
  const { values, handleChange, setValues } = useForm({});

  React.useEffect(() => {
    const values = {};
    setValues(values);
  }, [props.isOpen, setValues]);

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace(values);
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      name={"add"}
      formName={"card-form"}
      title={"Новое место"}
      submitText={props.isLoading ? "Создание..." : "Создать"}
    >
      <label htmlFor="title" className="popup__label">
        <input
          type="text"
          name="title"
          id="title"
          className="popup__input popup__input_type_place"
          placeholder="Название"
          minLength="2"
          maxLength="30"
          onChange={handleChange}
          value={values.title || ""}
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
          onChange={handleChange}
          value={values.link || ""}
          required
        />
        <span id="link-error" className="popup__error"></span>
      </label>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
