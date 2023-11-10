/*
let regexp = /<!--.*?-->/gs;

let str = `... <!-- My -- comment
 test --> ..  <!----> .. <!-- -->
`;

console.log( str.match(regexp) );
 */

let regexp = /<[^<>]+>/g;

let str = '<> <a href="/"> <input type="radio" checked> <b>';

console.log( str.match(regexp) );