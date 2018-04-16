
var https = require('https');


function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, res => {
    res.on('data', data =>{
      console.log(data.toString());
    })
  })

}

getAndPrintHTMLChunks();