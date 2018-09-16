import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import AsesoriaComponent from "../../components/front-page-components/services-components/servicios-components/AsesoriaComponent";
import IVAComponent from "../../components/front-page-components/services-components/servicios-components/IVAComponent";
import './ServicesContainers.css';

class ContabilidadPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: {
                service: "Servicios de Contabilidad e Impuestos",
                title: "Contabilidad Profesional",
                body: "Contabilidad",
                button: "Contactar"
            },
            English: {
                service: "",
                title: "Accountancy",
                body: "",
                button: "Contact"
            }
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="contabilidadBanner">
                    <h2>{this.state[this.props.language].service}</h2>
                    <h1>{this.state[this.props.language].title}</h1>
                </Jumbotron>
                <div>
                    <p>{this.state[this.props.language].body}</p>
                    <Button>{this.state[this.props.language].button}</Button>
                </div>
                <Jumbotron>
                    <h3>{this.state[this.props.language].service}</h3>
                    <Grid>
                        <Row>
                            <Col xs={6} sm={4} md={4}>
                                <AsesoriaComponent language={this.props.language} />
                            </Col>
                            <Col xs={6} sm={4} md={4}>
                                <IVAComponent language={this.props.language} />
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default ContabilidadPage;