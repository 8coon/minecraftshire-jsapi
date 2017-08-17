

function Model() {
}


Object.assign(Model.prototype, {

    /**
     * Get model attribute
     * @param {string} attr
     * @return {*}
     */
    get(attr) {
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

    /**
     * Determine whether model has attribute
     * @param attr
     * @return {boolean}
     */
    has(attr) {
        var value = this[attr];
        return value !== null && value !== (void 0);
    },

    /**
     * Get model primary key
     * @return {*}
     */
    getPk() {
        return this.has('id') ? this.get('id') : this.get('username');
    },

    /**
     * Apply fields to current model
     * @param fields
     * @return {Model}
     */
    apply(fields) {
        Object.keys(fields).forEach(function(key) {
            this.set(key, fields[key]);
        });
        return this;
    },

});


export default Model;
