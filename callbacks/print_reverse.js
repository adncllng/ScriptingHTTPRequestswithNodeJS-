var getHTML = require('./https-functions.js');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};


getHTML(requestOptions, print_reverse);

function print_reverse(html){
  console.log(html.split("").reverse().join(""));
}