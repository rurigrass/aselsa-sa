import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import EuropaComponent from "../../components/front-page-components/services-components/creacion-components/EuropaComponent";
import OffshoreComponent from "../../components/front-page-components/services-components/creacion-components/OffshoreComponent";
import './ServicesContainers.css';

class EspanaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: {
                service: "Creación de sociedades",
                title: "España",
                body: "Realizamos todas las gestiones para dar de alta tu empresa. Contigo decidimos que tipo de sociedad necesitas, la capitalización, un plan de negocio, y podemos acompañarte al banco y al notario. Nos ocupamos con los trámites necesarios: elaboración de la escritura, registro del nombre, llevar al público datos de la constitución, registrar para los impuestos. Incluso podemos hacer todo, y no tienes que desplazar a nuestras oficinas.",
                button: "Contactar"
            },
            English: {
                service: "Societies",
                title: "Spain",
                body: "blablabla",
                button: "Contact"
            }
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="espanaBanner">
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
                                <EuropaComponent language={this.props.language} />
                            </Col>
                            <Col xs={6} sm={4} md={4}>
                                <OffshoreComponent language={this.props.language} />
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default EspanaPage;