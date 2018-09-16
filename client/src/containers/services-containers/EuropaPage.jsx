import React, { Component } from 'react';
import { Jumbotron, Button, Grid, Row, Col } from 'react-bootstrap';
import EspanaComponent from "../../components/front-page-components/services-components/creacion-components/EspanaComponent";
import OffshoreComponent from "../../components/front-page-components/services-components/creacion-components/OffshoreComponent";
import './ServicesContainers.css';

class EuropaPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Spanish: {
                service: "Creación de sociedades",
                title: "Europa",
                body: ["Especializamos en sociedades en toda Europa. Si quiere hacer negocio en        Alemania, Irlanda, Francia, Chipre, Malta, Andorra, Portugal, Marruecos y los demás países: tenemos años de experiencia, y en muchos casos. Podemos acompañarte para abrir la cuenta bancaria, firmar la escritura y registrar el negocio.",
                    "Una competencia especial es la incorporación y gestión de sociedades en otras jurisdicciones. En todos casos, hemos desarrollado contactos con asesorías en la mayoría de países de interés. Se puede destacar Francia, Alemania, Reino Unido, Irlanda, Chipre, Malta, Suiza, Gibraltar, Andorra, 'Holanda', República Checa, Bulgaria y otros."],
                button: "Contactar"
            },
            English: {
                service: "Societies",
                title: "Europe",
                body: "blablabla",
                button: "Contact"
            }
        }
    }

    render() {
        return (
            <div>
                <Jumbotron className="europaBanner">
                    <h2>{this.state[this.props.language].service}</h2>
                    <h1>{this.state[this.props.language].title}</h1>
                </Jumbotron>
                <div>
                    <p>{this.state[this.props.language].body[0]}</p>
                    <br/>
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
                                <OffshoreComponent language={this.props.language} />
                            </Col>
                        </Row>
                    </Grid>
                </Jumbotron>
            </div>
        );
    }
}

export default EuropaPage;