import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import genericOffice2 from '../../../../images/genericOffice2.jpg'

class AsesoriaComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "Asesoría Fiscal" },
            English: { title: "blablab" }
        }
    }

    render() {
        return (
            <div>
                <Link to="/Asesoria">
                    <Thumbnail alt={genericOffice2} src={genericOffice2}>
                        <h3>{this.state[this.props.language].title}</h3>
                    </Thumbnail>
                </Link>
            </div>
        );
    }
}

export default AsesoriaComponent;