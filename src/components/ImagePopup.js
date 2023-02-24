function ImagePopup(props) {
    return (
        <section className={`popup popup_type_closeup ${props.card && 'popup_opened'}`}>
            <figure className="popup__figure">
                <button className="popup__close-button" onClick={props.onClose}></button>
                <img className="popup__image" src={props.card && props.card.link} alt="Название картинки" />
                <figcaption className="popup__figcaption">{props.card && props.card.name}</figcaption>
            </figure>
        </section>
    )
}

export default ImagePopup;