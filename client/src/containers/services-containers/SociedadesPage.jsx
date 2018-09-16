import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import LegalizarComponent from "../../components/front-page-components/services-components/especialidades-components/LegalizarComponent";
import './ServicesContainers.css';

class SociedadesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: {
                service: "Especialidades",
                title: "Sociedades Británicas",
                body: "Tenemos vínculos y competencias especiales y herramientas para presentar declaraciones fiscales y cuentas con la administración tributaria y la cámara de sociedades. Con 25 años de experiencias, y contables titulados: cuidamos unos 300 sociedades, sociedades colectivas (LLP y LP's), fideicomisos y personas físicas.",
                button: "Contactar"
            },
            English: {
                service: "Specialties",
                title: "British Companies",
                body: "blablabla",
                button: "Contact"
            }
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="sociedadesBanner">
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
                                <LegalizarComponent language={this.props.language} />
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default SociedadesPage;