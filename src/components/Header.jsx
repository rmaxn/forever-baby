import React from 'react';
import '../styles/header.css';
import logoForeverLiss from "../images/logoForeverLiss.png"
import profileIcon from "../images/profileIcon.png";
import cartIcon from "../images/cartIcon.png";

export default class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <img src={ logoForeverLiss } alt="logo" id="logo" />
                <form>
                    <input
                        type="text"
                        placeholder="Qual o mimo de hoje para o seu anjinho?"
                        >
                    </input>
                    <button type="submit" id="searchButton">
                        BUSCAR
                    </button>
                </form>
                <img
                    src= { profileIcon }
                    alt="profile button"
                    id="profileIcon"
                />
                <img
                    src= { cartIcon }
                    alt="cart button"
                    id="cartIcon"
                />
            </div>
        )
    }
}
