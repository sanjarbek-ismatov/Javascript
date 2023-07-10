image.onerror = function (e) {
  console.log("image load error: invalid url: " + image.src);
};
image.onload = function () {
  console.log("Image is loaded successfully");
};

window.onerror = function (message, url, line, col, errorObj) {
  console.log("message is: " + message);
  console.log("url is: " + url);
  console.log("line is: " + line);
  console.log("column is: " + col);
  console.log("Error object is: " + errorObj);
};
