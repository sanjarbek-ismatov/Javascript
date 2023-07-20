/**
 * BinaryNum Constructor
 * @class BinaryNum
 */
class BinaryNum extends Number{
    /**
     * @constructor
     * @param {string | number} num
     */
    constructor(num) {
        console.log(new.target)
        super(num)
        /**
         * @type {number}
         * @private
         */
        this._curr = num
    }

    /**
     * Converts decimal to binary
     * @param {number} num
     */
    static from(num){

    }
}

const bin = new BinaryNum(99)