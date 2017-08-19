import Emitter from 'minecraftshire-utils/src/emitter/Emitter';


function Model() {
    Emitter.apply(this);
}

Model.prototype = Object.create(Emitter.prototype, {});

Object.assign(Model.prototype, {

    /**
     * Get model attribute
     * @param {string} attr
     * @return {*}
     */
    get: function(attr) {
        return this[attr];
    },

    /**
     * Set model attribute
     * @param {string} attr
     * @param {*} value
     * @return {Model}
     */
    set: function(attr, value) {
        this[attr] = value;
        return this;
    },

    /**
     * Determine whether model has attribute
     * @param attr
     * @return {boolean}
     */
    has: function(attr) {
        var value = this[attr];
        return value !== null && value !== (void 0);
    },

    /**
     * Determine whether attribute is truthy
     * @param attr
     * @return {boolean}
     */
    is: function(attr) {
        return this.get(attr) == true;
    },

    /**
     * Get model primary key
     * @return {*}
     */
    getPk: function() {
        return this.get('id');
    },

    /**
     * Apply fields to current model
     * @param fields
     * @return {Model}
     */
    apply: function(fields) {
        var _this = this;

        Object.keys(fields).forEach(function(key) {
            _this.set(key, fields[key]);
        });

        return this;
    },

});

export default Model;
