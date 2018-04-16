var getHTML = require('./https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


getHTML(requestOptions, print_uppercase);

function print_uppercase(html){
  console.log(html.toUpperCase());
}