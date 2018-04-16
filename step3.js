
var https = require('https');

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };


function getAndPrintHTML(options) {

  https.get(options, res => {
    var dataString = '';
    res.setEncoding('utf8')
    res.on('data', data => {
      dataString += data;
    })
      res.on('end', end => {
    console.log(dataString)
  } )

  });

}

getAndPrintHTML(requestOptions);