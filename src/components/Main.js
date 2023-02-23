import api from '../utils/api';
import React from 'react';

function Main(props) {

    const [userData, setUserData] = React.useState({})


    return (
        <main>
            <section className="profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" style={{ backgroundImage: `url(${userData.avatar})` }}  alt="Аватар профиля" />
                    <button className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
                </div>
                <div className="profile__info">
                    <h1 className="profile__title">Жак-Ив Кусто</h1>
                    <button className="profile__edit-button" onClick={props.onEditProfile}></button>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button className="profile__add-button" onClick={props.onAddPlace}></button>
            </section>
            <section className="elements">
                <ul className="elements__table">
                </ul>
            </section>
        </main>
    )
}

export default Main;
