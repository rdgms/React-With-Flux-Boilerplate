/**
 * @jsx React.DOM
 */

require('./styles/styles');
var React = require('react');
var FluxApp = require('./components/FluxApp.react');

React.renderComponent(
  <FluxApp />,
  document.getElementById('flux-app')
);