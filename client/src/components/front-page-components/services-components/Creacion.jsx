import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import EspanaComponent from './creacion-components/EspanaComponent';
import EuropaComponent from './creacion-components/EuropaComponent';
import OffshoreComponent from './creacion-components/OffshoreComponent';

class Creacion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title:"Creación de Sociedades",
                       body: "contabilidad profesional, asesoría fiscal, confección de nóminas, presentación de declaraciones fiscales en línea, impuestos locales, impuestos particulares."},
            English: {}
        }
    }
    
    render() {
        return (
            <div>
                <h2>{this.state[this.props.language].title}</h2>
                <hr />
                <p>{this.state[this.props.language].body}</p>
                <div>
                    <Grid>
                        <Row>
                            <Col xs={6} sm={4} md={4}>
                                <EspanaComponent language={this.props.language}/>
                            </Col>
                            <Col xs={6} sm={4} md={4}>
                                <EuropaComponent language={this.props.language}/>
                            </Col>
                            <Col xs={6} sm={4} md={4}>
                                <OffshoreComponent language={this.props.language}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Creacion;