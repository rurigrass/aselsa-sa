import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aselsaUK from '../../../../images/aselsaUK.jpg'

class SociedadesComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "Sociedades Britanicas" },
            English: { title: "" }
        }
    }

    render() {
        return (
            <div>
                <Link to="/Sociedades">
                    <Thumbnail alt={aselsaUK} src={aselsaUK} >
                        <h3>{this.state[this.props.language].title}</h3>
                    </Thumbnail>
                </Link>
            </div>
        );
    }
}

export default SociedadesComponent;