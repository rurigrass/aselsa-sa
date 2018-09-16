import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aselsaSpain from '../../../../images/aselsaSpain.jpg'

class EspanaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "España" },
            English: { title: "Spain" }
        }
    }

    render() {
        return (
            <div>
                <Link to="/Espana">
                    <Thumbnail alt={aselsaSpain} src={aselsaSpain} >
                        <h3>{this.state[this.props.language].title}</h3>
                    </Thumbnail>
                </Link>
            </div>
        );
    }
}

export default EspanaComponent;