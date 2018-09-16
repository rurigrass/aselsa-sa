import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import genericOffice3 from '../../../../images/genericOffice3.jpg'

class ContabilidadComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "Contabilidad Profesional" },
            English: { title: "Professional Accountancy" }
        }
    }

    render() {
        return (
            <div>
                <Link to="/Contabilidad">
                    <Thumbnail alt={genericOffice3} src={genericOffice3} >
                        <h3>{this.state[this.props.language].title}</h3>
                    </Thumbnail>
                </Link>
            </div>
        );
    }
}

export default ContabilidadComponent;