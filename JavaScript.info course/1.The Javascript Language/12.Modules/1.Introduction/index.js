import "./nonmodule.js";

sayHi();
say();
console.log(window.user);
console.log(this);
console.log(import.meta.url);
import say, { sayHi } from "./module.js";
