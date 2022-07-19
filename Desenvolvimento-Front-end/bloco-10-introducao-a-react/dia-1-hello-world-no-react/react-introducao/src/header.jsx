import React from "react";

class Header extends React.Component {
    render() {
        const title = 'Conteúdos de Front-End';
        return <div>
            <header className="header">
                <h1>{title}</h1>
            </header>
        </div>
    }
}

export default Header;