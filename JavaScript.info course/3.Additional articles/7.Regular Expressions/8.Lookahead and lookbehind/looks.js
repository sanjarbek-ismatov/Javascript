// let regexp = /(?<![-\d])\d+/g;
//
// let str = "0 12 -5 123 -18";
//
// console.log( str.match(regexp) ); // 0, 12, 123


let regexp = /(?<=<body\s.*?>).*?(?=<\/body>)/s;

let str = `
<html>
  <body style="height: 200px">
  ...
  </body>
</html>
`;
str = str.replace(regexp, `<h1>Hello</h1>`);
console.log(str)