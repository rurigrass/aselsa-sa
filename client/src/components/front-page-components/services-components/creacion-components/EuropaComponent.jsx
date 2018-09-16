import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aselsaEurope from '../../../../images/aselsaEurope.jpg'

class EuropaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "Europa" },
            English: { title: "Europe" }
        }
    }

    render() {
        return (
            <div>
                <Link to="/Europa">
                    <Thumbnail alt={aselsaEurope} src={aselsaEurope} >
                        <h3>{this.state[this.props.language].title}</h3>
                    </Thumbnail>
                </Link>
            </div>
        );
    }
}

export default EuropaComponent;