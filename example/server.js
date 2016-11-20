'use strict';

var React = require('react');
var ReactDOMServer = require('react-dom/server');

module.exports.data = function (context, callback) {
  var html = ReactDOMServer.renderToString(
    React.createElement('div', null, 'Hello world!')
  );

  callback(null, { html: html });
};
