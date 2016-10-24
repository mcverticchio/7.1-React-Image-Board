// console.log("Hello World!");
var $ = require('jquery');
var Backbone = require('backbone');
var React = require('react');
var ReactDOM = require('react-dom');
var models = require('./models/image.js');
var form = require('./components/form.jsx').ImageAddForm;
// var listing = require('./scripts/components/listing.jsx');

$(function(){
  Backbone.history.start();


    ReactDOM.render(
      React.createElement(form),
      document.getElementById('app')
    );

});
