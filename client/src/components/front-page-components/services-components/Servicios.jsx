import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import AsesoriaComponent from './servicios-components/AsesoriaComponent';
import ContabilidadComponent from './servicios-components/ContabilidadComponent';
import IVAComponent from './servicios-components/IVAComponent';

class Servicios extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Spanish: { title: "Servicios de Contabilidad e Impuestos"},
        English: {}
    }
}

  render() {
    return (
      <div>
        <h2>{this.state[this.props.language].title}</h2>
        <hr />
        <p></p>
        <Grid>
          <Row>
            <Col xs={6} sm={4} md={4}>
              < AsesoriaComponent language={this.props.language}/>
            </Col>
            <Col xs={6} sm={4} md={4}>
              < ContabilidadComponent language={this.props.language}/>
            </Col>
            <Col xs={6} sm={4} md={4}>
              < IVAComponent language={this.props.language}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Servicios;