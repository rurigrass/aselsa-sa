import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CustomNavBar from './components/front-page-components/CustomNavBar';
import FrontPage from './containers/FrontPage';
import ContactPage from './containers/ContactPage';
import AsesoriaPage from './containers/services-containers/AsesoriaPage';
import ContabilidadPage from './containers/services-containers/ContabilidadPage';
import EspanaPage from './containers/services-containers/EspañaPage';
import EuropaPage from './containers/services-containers/EuropaPage';
import IVAPage from './containers/services-containers/IVAPage';
import LegalizarPage from './containers/services-containers/LegalizarPage';
import OffshorePage from './containers/services-containers/OffshorePage';
import SociedadesPage from './containers/services-containers/SociedadesPage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { language: "Spanish" };
    this.selectLanguage = this.selectLanguage.bind(this)
  }

  selectLanguage(selectedLanguage) {
    this.setState({ language: selectedLanguage })
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <CustomNavBar onLanguageChange={this.selectLanguage} />
            <Route exact path="/" render={() => <FrontPage language={this.state.language} />} />
            <Route path="/Contact" render={() => <ContactPage language={this.state.language} />} />
            <Route path="/Asesoria" render={() => <AsesoriaPage language={this.state.language} />} />
            <Route path="/Contabilidad" render={() => <ContabilidadPage language={this.state.language} />} />
            <Route path="/Espana" render={() => <EspanaPage language={this.state.language} />} />
            <Route path="/Europa" render={() => <EuropaPage language={this.state.language} />} />
            <Route path="/IVA" render={() => <IVAPage language={this.state.language} />} />
            <Route path="/Legalizar" render={() => <LegalizarPage language={this.state.language} />} />
            <Route path="/Offshore" render={() => <OffshorePage language={this.state.language} />} />
            <Route path="/Sociedades" render={() => <SociedadesPage language={this.state.language} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
