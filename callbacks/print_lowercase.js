var getHTML = require('./https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step5.html'
};


getHTML(requestOptions, print_lowercase);

function print_lowercase(html){
  console.log(html.toLowerCase());
}