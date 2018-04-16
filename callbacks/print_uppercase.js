var getHTML = require('./https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/touppercase.html'
};


getHTML(requestOptions, print_uppercase);

function print_uppercase(html){
  console.log(html.toUpperCase());
}