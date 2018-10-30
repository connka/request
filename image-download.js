var request = require("request");
var fs = require("fs");

request
  .get("https://sytantris.github.io/http-examples/future.jpg")
  .on("error", function(err) {
    if (err) {
      throw err;
    } else {
      console.log("Contacting the server...");
    }
  })
  .on("response", function(response) {
    console.log("Response Status Code: ", response.statusCode);
    console.log("Connected to server!");
    console.log("Response Message: ", response.statusMessage);
    console.log("Starting the download");
    console.log("Content-type: ", response.headers["content-type"]);
    response.on("end", function() {
      console.log("Download Completed");
    });
  })
  .pipe(fs.createWriteStream("./future.jpg"));
