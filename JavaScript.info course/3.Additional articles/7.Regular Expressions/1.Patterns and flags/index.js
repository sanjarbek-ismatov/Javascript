const name = "Sanjarbek Ismatov";
console.log(name.replace(/.+/gi, "$`Asqarali o'gli $& $$"));
const phone = "+998-(90)-747-09-12";
const phoneTrim = /\D*/g;
console.log(phone.replace(phoneTrim, ""));
console.log("A\nB".match(/A.B/s));
console.log("A\nB".match(/A[\s[^\s]B/));
console.log(name.match(/\w+ \w+/));
