import React, { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Spanish: { title: "Creación y mantenimiento de empresas dentro y fuera de España",
                   body: "Ofrecemos el poder constituir una empresa en cincuenta jurisdicciones en el mundo. Tenemos una asesoría que conoce la materia bien, tiene una buena relación con la Agencia Tributaria, y con personas muy cualificadas en cuerpos profesionales serios y reconocidos. Su estructura necesita tener en cuenta obligaciones como el IVA (en Europa), facilidad de emplear y abrir cuentas bancarias, aranceles, impuestos sobre sociedades, residencia fiscal según convenios de doble imposición. Podemos aconsejar sobre estos puntos."},
        English: { title: "",
                   body: "" }
    }
}

  render() {
    return (
      <div>
        <h2>{this.state[this.props.language].title}</h2>
        <p>{this.state[this.props.language].body}</p>
      </div>
    );
  }
}

export default About;