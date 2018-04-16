const https = require('https');

function getHTML(options, callback) {

  https.get(options, (res) => {
    let html = '';
    res.setEncoding('utf8');
    res.on('data', (data) => {
      html += data;
      res.on('end', () => {
        callback(html);
      });
    });
  });
}

function printHTML(html) {
  console.log(html);
}


let requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

//getHTML(requestOptions, printHTML);

module.exports = getHTML;