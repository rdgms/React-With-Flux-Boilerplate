/**
 * @jsx React.DOM
 */

require('./styles/container');
var React = require('react'),
    FluxApp = require('./components/FluxApp.react');

React.renderComponent(
  <FluxApp />,
  document.getElementById('flux-app')
);