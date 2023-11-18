let regexp = /\[(?<same>\w+\]).*?\[\/(\k<same>)/gi;

let str = "..[url][b]http://google.com[/b][/url]..";
console.log( str.match(regexp) ); // [url][b]http://google.com[/b][/url]
