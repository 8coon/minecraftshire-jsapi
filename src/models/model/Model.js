
export default class Model {

    constructor() {
    }


    /**
     * Get model attribute
     * @param {string} attr
     * @return {*}
     */
    get(attr) {
        if (this[attr] === undefined) {
            return false;
        }

        return this[attr];
    }


    /**
     * Set model attribute
     * @param {string} attr
     * @param {*} value
     */
    set(attr, value) {
        this[attr] = value;
    }

}
