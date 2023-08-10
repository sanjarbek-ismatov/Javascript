function defer(f, ms) {
    // return function() {
    //     setTimeout(() => f.apply(this, arguments), ms);
    // };
    return function(...args){
        const ctx = this
        setTimeout(function(){
            return f.apply(ctx, args)
        })
    }
}

function sayHi(who) {
    console.log('Hello, ' + who);
}

let sayHiDeferred = defer(sayHi, 2000);
sayHiDeferred("John");
