import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import genericOffice1 from '../../../../images/genericOffice1.jpg'

class LegalizarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "Legalizar Papeles" },
            English: { title: "" }
        }
    }

    render() {
        return (
            <div>
                <Link to="/Legalizar">
                    <Thumbnail alt={genericOffice1} src={genericOffice1} >
                        <h3>{this.state[this.props.language].title}</h3>
                    </Thumbnail>
                </Link>
            </div>
        );
    }
}

export default LegalizarComponent;