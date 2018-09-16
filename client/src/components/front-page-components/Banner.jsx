import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Jumbotron, Button } from 'react-bootstrap';
import './Banner.css';


class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "Apoyo profesional, alcance mundial", button: "Contactar" },
            English: { title: "Professional support, global reach", button: "Contact" }
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="topBanner">
                    <h2>ASELSA</h2>
                    <h4>{this.state[this.props.language].title}</h4>

                    <Link to="/Contact">
                        <Button bsStyle="info">{this.state[this.props.language].button}</Button>
                    </Link>
                </Jumbotron>
            </div>
        );
    }
}

export default Banner;