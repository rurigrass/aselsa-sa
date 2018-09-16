import React, { Component } from 'react';
import Banner from '../components/front-page-components/Banner';
import About from '../components/front-page-components/About';
import Services from '../components/front-page-components/Services';
import './FrontPage.css';


class FrontPage extends Component {

  render() {
    return (
      <div>
        <Banner language={this.props.language} />
        <About language={this.props.language} />
        <Services language={this.props.language} />
      </div>
    );
  }
}

export default FrontPage;