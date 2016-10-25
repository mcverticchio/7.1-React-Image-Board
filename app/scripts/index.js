var $ = require('jquery');
var React = require('react');
var ReactDOM = require('react-dom');
var AppComponent = require('./components/app.jsx').AppComponent;

$(function(){
  ReactDOM.render(
    React.createElement(AppComponent),
      // React.createElement(listing),
    document.getElementById('app')
  );
});
