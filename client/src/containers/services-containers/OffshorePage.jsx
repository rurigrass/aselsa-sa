import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import EspanaComponent from "../../components/front-page-components/services-components/creacion-components/EspanaComponent";
import EuropaComponent from "../../components/front-page-components/services-components/creacion-components/EuropaComponent";
import './ServicesContainers.css';

class OffshorePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: {
                service: "Creación de sociedades",
                title: "Offshore",
                body: ["Si quiere mantener una sociedad con confidencialidad, para proteger su patrimonio, o hacer un negocio libre de unas ataduras en tu país; tenemos unos 20 años de experiencia con socios en Belice, Gibraltar, Chipre, los EE.UU., las Islas Vírgenes, Hong Kong, Andorra y muchas jurisdicciones más. Podemos orientarte a las ventajas e inconvenientes de cada lugar y ayudate en la apertura de la cuenta bancaria.",
                    "Podemos cuidar su patrimonio u organizar una estructura para evitar doble imposición o guardar sus activos en una variedad de territorios. Aconsejamos sobre sociedades, cuentas bancarias y plataformas de pago."],
                button: "Contactar"
            },
            English: {
                service: "Societies",
                title: "Offshore",
                body: "blablabla",
                button: "Contact"
            }
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="offshoreBanner">
                    <h2>{this.state[this.props.language].service}</h2>
                    <h1>{this.state[this.props.language].title}</h1>
                </Jumbotron>
                <div>
                    <p>{this.state[this.props.language].body[0]}</p>
                    <br />
                    <p>{this.state[this.props.language].body[1]}</p>
                    <Button>{this.state[this.props.language].button}</Button>
                </div>
                <Jumbotron>
                    <h3>{this.state[this.props.language].service}</h3>
                    <Grid>
                        <Row>
                            <Col xs={6} sm={4} md={4}>
                                <EspanaComponent language={this.props.language} />
                            </Col>
                            <Col xs={6} sm={4} md={4}>
                                <EuropaComponent language={this.props.language} />
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default OffshorePage;