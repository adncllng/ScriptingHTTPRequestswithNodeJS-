
var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, res => {
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

getAndPrintHTMLChunks();