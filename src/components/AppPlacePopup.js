import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup(props) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    setName("");
    setLink("");
  }, [props.isOpen]);

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleLink(evt) {
    setLink(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();

    props.onAddPlace({
      title: name,
      link: link,
    });
  }

  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
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
              onChange={handleName}
              value={name}
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
              onChange={handleLink}
              value={link}
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
