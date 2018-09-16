import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import LegalizarComponent from './especialidades-components/LegalizarComponent';
import SociedadesComponent from './especialidades-components/SociedadesComponent';


class Especialidades extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: { title: "Especialidades" },
            English: {}
        }
    }
    
  render() {
    return (
      <div>
          <h2>{this.state[this.props.language].title}</h2>
          <hr/>
          <p></p>
          <div>
                    <Grid>
                        <Row>
                            <Col xs={6} sm={4} md={4}>
                                <LegalizarComponent language={this.props.language}/>
                            </Col>
                            <Col xs={6} sm={4} md={4}>
                                <SociedadesComponent language={this.props.language}/>
                            </Col>
                        </Row>
                    </Grid>
                </div>
      </div>
    );
  }
}

export default Especialidades;