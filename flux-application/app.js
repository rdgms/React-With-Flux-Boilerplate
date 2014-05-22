/**
 * @jsx React.DOM
 */

var React = require('react');
var FluxApp = require('./components/FluxApp.react');
var absurd = require('./styles/styles');

React.renderComponent(
  <FluxApp />,
  document.getElementById('flux-app')
);