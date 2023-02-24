import api from '../utils/api';
import Card from './Card';
import React, { useEffect } from 'react';

function Main(props) {

    const [userData, setUserData] = React.useState({});
    const [cards, setCards] = React.useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, card]) => {
                setUserData(userData);
                setCards(card);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={userData.avatar} alt="Аватар профиля" />
                    <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">{userData.name}</h1>
                    <button className="profile__edit-button" onClick={props.onEditProfile}></button>
                    <p className="profile__subtitle">{userData.about}</p>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__table">
                    {cards.map((card) => (
                        <Card key={card._id} card={card} link={card.link} name={card.name} likes={card.likes.length} onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    )
}       

export default Main;
