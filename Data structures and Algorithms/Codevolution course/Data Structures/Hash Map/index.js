/**
 * @class Hash Map class
 */
class HashMap {
  /**
   * @constructor
   * @param {number} size
   */
  constructor(size) {
    /**
     * @private
     */
    this.size = size;
    /**
     * @private
     */
    this.table = new Array(size);
  }
  /**
   * @private
   * @param {string} key
   * @returns {number}
   */
  hash(key) {
    let hashed = 0;
    for (let i = 0; i < key.length; i++) {
      hashed += key.charCodeAt(i);
    }
    return hashed % this.size;
  }
  /**
   * Set method
   * @param {string} key
   * @param {any} value
   */
  set(key, value) {
    const index = this.hash(key);
    this.table[index] = value;
  }
  /**
   * Get method
   * @param {string} key
   * @returns {string}
   */
  get(key) {
    const index = this.hash(key);
    return this.table[index];
  }
  /**
   * Remove method
   * @param {string} key
   */
  remove(key) {
    const index = this.hash(key);
    this.table[index] = undefined;
  }
  /**
   * Prints data of table
   * @returns {void}
   */
  display() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i] && console.log(i, this.table[i]);
    }
  }
}

const map = new HashMap(10);
map.set("name", "Sanjarbek");
map.set("age", 17);
map.display();
console.log(map.get("name"));
// map.remove("age");
map.set("eag", 18);
map.display();
