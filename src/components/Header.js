import React from 'react';
import './css/header.css'

class Header extends React.Component {
    TITLE = 'https://fontmeme.com/permalink/210623/d28472afb9a391904f9eab67724b5431.png'

    render() {
        return (
            <header className="title">
                    <img src={this.TITLE} alt="Pokedex-Title"/>
            </header>
        );
    }
}

export default Header;
