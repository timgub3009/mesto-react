function ImagePopup() {
    return (
        <section className="popup popup_type_closeup">
            <figure className="popup__figure">
                <button className="popup__close-button"></button>
                <img className="popup__image" src="#" alt="Название картинки" />
                <figcaption className="popup__figcaption"></figcaption>
            </figure>
        </section>
    )
}

export default ImagePopup;