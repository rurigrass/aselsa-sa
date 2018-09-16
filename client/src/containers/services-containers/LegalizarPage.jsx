import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import SociedadesComponent from "../../components/front-page-components/services-components/especialidades-components/SociedadesComponent";
import './ServicesContainers.css';

class LegalizarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: {
                service: "Especialidades",
                title: "Legalizar Papeles",
                body: "Con una oficina en el centro de Madrid; estamos en un sitio idóneo para legalización de papeles para uso en España o papeles españoles para uso en el extranjero",
                button: "Contactar"
            },
            English: {
                service: "Specialties",
                title: "Legalising Documents",
                body: "blablabla",
                button: "Contact"
            }
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="legalizarBanner">
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
                                <SociedadesComponent language={this.props.language} />
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default LegalizarPage;