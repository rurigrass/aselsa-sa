import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import AsesoriaComponent from "../../components/front-page-components/services-components/servicios-components/AsesoriaComponent";
import ContabilidadComponent from "../../components/front-page-components/services-components/servicios-components/ContabilidadComponent";
import './ServicesContainers.css';

class IVAPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: {
                service: "Servicios de Contabilidad e Impuestos",
                title: "IVA Internacional",
                body: "En general, una sociedad tiene que obtener un número de IVA en los países de Europa donde tiene almacenaje de bienes, venta al público o donde tiene clientes para la prestación de servicios. Podemos ayudar con consejos y con el registro y manteamiento de su sociedad en varios países.",
                button: "Contactar"
            },
            English: {
                service: "blabla",
                title: "International VAT",
                body: "",
                button: "Contact"
            }
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="ivaBanner">
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
                                <ContabilidadComponent language={this.props.language} />
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default IVAPage;