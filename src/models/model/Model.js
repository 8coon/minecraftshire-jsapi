

function Model() {
}


Object.assign(Model.prototype, {

    /**
     * Get model attribute
     * @param {string} attr
     * @return {*}
     */
    get(attr) {
        if (this[attr] === void 0) {
            return false;
        }

        return this[attr];
    },


    /**
     * Set model attribute
     * @param {string} attr
     * @param {*} value
     */
    set(attr, value) {
        this[attr] = value;
    },

});


export default Model;
