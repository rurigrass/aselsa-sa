import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import aselsaOffshore from '../../../../images/aselsaOffshore.jpg'

class OffshoreComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "Offshore" },
            English: { title: "Offshore" }
        }
    }

    render() {
        return (
            <div>
                <Link to="/Offshore">
                    <Thumbnail alt={aselsaOffshore} src={aselsaOffshore} >
                        <h3>{this.state[this.props.language].title}</h3>
                    </Thumbnail>
                </Link>
            </div>
        );
    }
}

export default OffshoreComponent;