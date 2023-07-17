describe("Sample test", () => {
    function makeTest(){
        for(let i = 1; i <= 10; i++){
            it(`${i}th power of 2 should be: ${2 ** i}`, () => {
                assert.equal(pow(2, i), 2 ** i)
            })

        }
    }
    makeTest()
})