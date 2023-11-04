// Started
console.log("Hello, Java".match(new RegExp("\\bJava\\b", "g")));
console.log("-jsdhj-d".match(/^[-\w\-\w\]()^+-]+/));
console.log("𝒳".match(/[𝒳-𝒴]/u));

const timeRegex = /\b\d\d[-:]\d\d\b/g;
console.log(timeRegex.exec("Breakfast at 09:00. Dinner at 21-30"));

const colorRegex = /#[a-f\d]{6}/gi;
