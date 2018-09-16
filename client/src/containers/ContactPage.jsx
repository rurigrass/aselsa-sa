import React, { Component } from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Jumbotron, Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import axios from 'axios';
import './ContactPage.css';


class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      Spanish: {
        service: "Contactar",
        title: "Alguna pregunta?",
        name: "Nombre",
        message: ["Mensaje", "introduzca su mensaje"]
      },
      English: {
        service: "Contact",
        title: "Any questions?",
        name: "Name",
        message: ["Message", "enter your message here"]
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  async handleSubmit(e) {
    e.preventDefault()
    const { name, email, message} = this.state

  await axios.post('api/form', {
      name, 
      email, 
      message
    })
  }

  render() {
    return (
      <div>
        <Jumbotron className="contactBanner">
          <h2>{this.state[this.props.language].service}</h2>
          <h1>{this.state[this.props.language].title}</h1>
        </Jumbotron>
        <div>
        </div>
        <Jumbotron>
          <Form onSubmit={this.handleSubmit} style={{ width: "50%" }}>

            <FormGroup controlId="formInlineName">
              <ControlLabel>{this.state[this.props.language].name}</ControlLabel>{' '}
              <FormControl
                type="text"
                name="name"
                placeholder="Jane Doe"
                onChange={this.handleChange} />
            </FormGroup>

            <FormGroup controlId="formInlineEmail">
              <ControlLabel>Email</ControlLabel>{' '}
              <FormControl
                type="email"
                name="email"
                placeholder="jane.doe@example.com"
                onChange={this.handleChange} />
            </FormGroup>

            <FormGroup controlId="formInlineEmail">
              <ControlLabel>{this.state[this.props.language].message[0]}</ControlLabel>{' '}
              <FormControl
                componentClass="textarea"
                name="message"
                placeholder={this.state[this.props.language].message[1]}
                onChange={this.handleChange} />
            </FormGroup>

            <Button type="submit">Submit</Button>
          </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default ContactPage;