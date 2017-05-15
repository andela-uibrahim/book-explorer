import React, { Component } from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallary from './gallary';


/**
 * 
 * 
 * @class Global
 * @extends {Component}
 */
class Global extends Component {


  /**
   * Creates an instance of CreateDocument.
   * @param {any} props 
   * 
   * @memberof CreateDocument
   */
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(event){
      this.setState({ query: event.target.value })
    }
  /**
   * 
   * 
   * @return {void}
   * @memberof Global
   */
  search(){
    const BASE_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
      fetch(`${BASE_URL}${this.state.query}`, {method: 'GET'})
        .then(response => response.json())
        .then(json => {
          let { items } = json;
          this.setState({items});
        });
  }
  /**
   * 
   * 
   * @returns {void}
   * @memberof Global
   */
  render(){
    return (
      <div className="Global"> 
        <h2> Book explorer !</h2>
        <FormGroup>
          <InputGroup>
            <FormControl type="text" placeholder="Search for a book" onChange={this.handleChange}
            onKeyPress={event => {
              if(event.key === "Enter"){
                this.search();
              }
            }}
            />
            <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"/>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        <Gallary items={this.state.items}/>
      </div>
     )
  }
}

export default Global;