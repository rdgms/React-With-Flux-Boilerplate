/**
 * @jsx React.DOM
 */

var React = require('react');
var FluxApp = React.createClass({

  getInitialState: function() {
    return null; // Has to return an object or null.
  },

  componentDidMount: function() {
    
  },

  componentWillUnmount: function() {
    
  },

  /**
   * @return {object}
   */
  render: function() {
    return (
      <div className="container">
        <h1>Oh, Hello</h1>
        <div className="some-class">
          Welcome to React with Flux.
        </div>
      </div>
    );
  },

  /**
   * Event handler for 'change' events coming from the store.
   */
  _onChange: function() {
    
  }

});

module.exports = FluxApp;