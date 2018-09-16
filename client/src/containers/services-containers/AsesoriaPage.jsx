import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import ContabilidadComponent from "../../components/front-page-components/services-components/servicios-components/ContabilidadComponent";
import IVAComponent from "../../components/front-page-components/services-components/servicios-components/IVAComponent";
import './ServicesContainers.css';

class AsesoriaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: {
                service: "Servicios de Contabilidad e Impuestos",
                title: "Asesoria Fiscal",
                body: "Expertos para España y el Reino Unido e impuestos internacionales como el IVA. Atención de cliente en las lenguas principales. Citas posibles en nuestro despacho en el centro de Madrid.",
                button: "Contactar"
            },
            English: {
                service: "Services",
                title: "Asesoria",
                body: "",
                button: "Contactar"
            }
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="asesoriaBanner">
                    <h2>{this.state[this.props.language].service}</h2>
                    <h1>{this.state[this.props.language].title}</h1>
                </Jumbotron>
                <div>
                    <p>{this.state[this.props.language].body}</p>
                    <Link to="/Contact">
                        <Button>{this.state[this.props.language].button}</Button>
                    </Link>
                </div>
                <Jumbotron>
                    <h3>{this.state[this.props.language].service}</h3>
                    <Grid>
                        <Row>
                            <Col xs={6} sm={4} md={4}>
                                <ContabilidadComponent language={this.props.language} />
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

export default AsesoriaPage;