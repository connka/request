var request = require('request');
var fs = require('fs');

console.log(`Downloading image...`)
request('https://sytantris.github.io/http-examples/future.jpg', function(err, response, body) {
  if (err) throw err;
})

.on('response', function (response) {
                            
    console.log(`Response Status Code: ${response.statusCode} 
    Response Status Message: ${response.statusMessage} 
    Content Type: ${response.headers['content-type']}`)
    console.log(`Download complete!`)
  })

  .pipe(fs.createWriteStream('./future.jpg')); 

