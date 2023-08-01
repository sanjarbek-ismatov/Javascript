{
    var name = "Sarvinoz"
}
console.log(name)

for(var i = 0; i < 10; i++){
    var one = i
}
console.log(i, one)
console.log(fuckedVariable) // undefined
fuckedVariable = "Sanjarbek"
console.log(fuckedVariable) // Sanjarbek
if(false){
    var fuckedVariable;
}
console.log(fuckedVariable); // Sanjarbek

// IIFE
(function(){
    var player = "Sanjarbek gamer"
    console.log(player)
})();

(function(console){
    console.log(one)
})(console);

((function(){
    console.log(one)
})());

!function(){
    console.log(one)
}();

+function(){
    console.log(one)
}();