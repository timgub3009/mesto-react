import React from 'react';

function Card(props) {
    function handleClick() {
        props.onCardClick(props.card)
      };

    return (
            <li className="elements__card">
                <img className="elements__image" src={props.link} alt="Название картинки" onClick={handleClick} />
                <button className="elements__delete-button" onClick={props.onClose}></button>
                <div className="elements__info">
                    <h2 className="elements__card-heading">{props.name}</h2>
                    <div className="elements__like-container">
                        <button className="elements__like-button"></button>
                        <p className="elements__like-counter">{props.likes}</p>
                    </div>
                </div>
            </li>
    )
}

export default Card;