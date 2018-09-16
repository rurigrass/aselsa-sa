import React, { Component } from 'react';
import Creacion from './services-components/Creacion';
import Servicios from './services-components/Servicios';
import Especialidades from './services-components/Especialidades';

class Services extends Component {
  render() {
    return (
      <div>
      <Creacion language={this.props.language}/>
      <Servicios language={this.props.language}/>
      <Especialidades language={this.props.language}/>
      </div>
    );
  }
}

export default Services;