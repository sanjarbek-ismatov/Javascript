/* Rest parameters */

function some(){
    // console.log(rest)
    const fn = () => {
        console.log(arguments) // logs arguments of some
    }
    function fn2(){
        console.log(arguments) // {}
    }
    fn()
    fn2()
    console.log(arguments)
}
some(1, 2, 3)