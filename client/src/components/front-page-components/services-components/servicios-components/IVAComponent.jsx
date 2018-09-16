import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import genericOffice4 from '../../../../images/genericOffice4.jpg'

class IVAComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "IVA Internacional" },
            English: { title: "International VAT" }
        }
    }

    render() {
        return (
            <div>
                <Link to="/IVA">
                    <Thumbnail alt={genericOffice4} src={genericOffice4} >
                        <h3>{this.state[this.props.language].title}</h3>
                    </Thumbnail>
                </Link>
            </div>
        );
    }
}

export default IVAComponent;