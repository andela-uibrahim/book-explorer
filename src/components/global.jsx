import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Gallary from './gallary.jsx';
import searchAction from '../actions/searchAction';
import CircularProgressBar from './progress.jsx';


/**
 * 
 * 
 * @class Global
 * @extends {Component}
 */
class Global extends React.Component {


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
    this.search = this.search.bind(this);
  }

   /**
    * 
    * 
    * @param {any} event 
    * @return {void}
    * @memberof Global
    */
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
    this.props.search(this.state.query);
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
            <FormControl type="text" 
              placeholder="Search for a book"
              onChange={this.handleChange}
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
        { this.props.items?
      
        <Gallary items={this.props.items}/>
        : '' 
        }

        {
          this.props.isLoading ?
          <div id="progress">
            <CircularProgressBar />
          </div>
          : ''
        }
      </div>
     )
  }
}

const mapStoreToProps = (state) => {
  return {
    items: state.searchReducer.items,
    isLoading: state.loadingReducer.isLoading,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    search: query => dispatch(searchAction(query))
  };
};

export default connect(mapStoreToProps, mapDispatchToProps)(Global);
