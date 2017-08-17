

function ModelList() {
    this.byPk = {};
    this.models = [];
    this.length = 0;
}


Object.assign(ModelList.prototype, {

    /**
     * @param {function} callback
     * @param {*} thisArg
     * @return {ModelList}
     */
    forEach: function(callback, thisArg) {
        for (var i = 0; i < this.models.length; i++) {
            callback.call(thisArg, this.models[i], i, this.models);
        }

        return this;
    },

    /**
     * Returns true if callback returns true at least once
     * @param callback
     * @param thisArg
     * @param inverse
     * @return {boolean}
     */
    some: function(callback, thisArg, inverse) {
        inverse = (inverse === void 0) ? false : inverse;

        for (var i = 0; i < this.models.length; i++) {
            var value = callback.call(thisArg, this.models[i], i, this.models);

            if ((!inverse && value === true) || (inverse && value !== true)) {
                return !inverse;
            }
        }

        return inverse;
    },

    /**
     * Returns true if callback returns true for every model
     * @param callback
     * @param thisArg
     * @return {boolean}
     */
    every: function(callback, thisArg) {
        return this.some(callback, thisArg, true);
    },

    /**
     * Returns model if callback returns true
     * @param callback
     * @param thisArg
     */
    find: function(callback, thisArg) {
        for (var i = 0; i < this.models.length; i++) {
            var value = callback.call(thisArg, this.models[i], i, this.models);

            if (value === true) {
                return this.models[i];
            }
        }

        return void 0;
    },

    /**
     * Filter models by condition in callback and return new collection
     * @param callback
     * @param thisArg
     * @return {ModelList}
     */
    filter: function(callback, thisArg) {
        var models = new ModelList();

        for (var i = 0; i < this.models.length; i++) {
            if (callback.call(thisArg, this.models[i], i, this.models)) {
                models.add(this.models[i], true);
            }
        }

        return models;
    },

    /**
     * @param callback
     * @param thisArg
     * @return {Array}
     */
    map: function(callback, thisArg) {
        var list = [];

        for (var i = 0; i < this.length; i++) {
            list.push(callback.call(thisArg, this.models[i], i, this.models));
        }

        return list;
    },

    /**
     * Get model by primary key
     * @param pk
     * @return {*}
     */
    get: function(pk) {
        return this.byPk[pk];
    },

    /**
     * Get model by index
     * @param index
     * @return {*}
     */
    getByIndex: function(index) {
        return this.models[index];
    },

    /**
     * Clears model list
     * @return {ModelList}
     */
    clear: function() {
        this.byPk = {};
        this.models = [];
        this.length = 0;

        return this;
    },

    /**
     * Sets list data
     * @param {ModelList|Model[]} list
     * @param {{merge: boolean, append: string, type: object}} options = {merge: false, append: 'push', type: null}
     * @returns {ModelList}
     *
     * Options:
     *  - merge: true indicates that two lists should be merged, false will clear current model list.
     *  - append: 'push' adds to the end, 'unshift' to the beginning, 'sort' orders new list by the pk.
     *  - type: model class to mame instance of.
     */
    set: function(list, options) {
        options.append = options.append || 'push';

        if (!options.merge) {
            this.clear();
        }

        for (var i = 0; i < list.length; i++) {
            var model = list.getByIndex ? list.getByIndex(i) : list[i];

            if (typeof options.type === 'function') {
                var _model = new (0, options.type)();
                _model = _model.apply(model);
                model = _model;
            }

            this.add(model, options.append === 'push');
        }

        if (options.append === 'sort') {
            this.models.sort()
        }

        return this;
    },

    /**
     * Adds model to current model list.
     * @param {Model} model
     * @param {boolean} push = false
     * @returns {ModelList}
     */
    add: function(model, push) {
        var pk = model.getPk();
        var unique = this.byPk[pk] === (void 0);
        unique && this.length++;

        if (unique) {
            if (push) {
                this.models.push(model);
            } else {
                this.models.unshift(model);
            }
        } else {
            this.models[this.models.indexOf(this.byPk[pk])] = model;
        }

        this.byPk[pk] = model;
        return this;
    },

    /**
     * Sort current model list
     * @param comparator
     */
    sort: function(comparator) {
        this.models.sort(comparator);
        return this;
    },

    /**
     * Returns a sorted copy of current model list
     * @param comparator
     * @return {ModelList}
     */
    sorted: function(comparator) {
        return this.clone().sort(comparator);
    },

    /**
     * Copies current model list from start to end indexes
     * @param start
     * @param end
     * @return {ModelList}
     */
    slice: function(start, end) {
        var modelList = new ModelList();
        modelList.models = this.models.slice(start, end);

        for (var i = 0; i < modelList.models.length; i++) {
            modelList.models.byPk[modelList.models[i].getPk()] = modelList.models[i];
        }

        return modelList;
    },

    /**
     * Clones current model list
     * @return {ModelList}
     */
    clone: function() {
        return this.slice();
    },

    /**
     * Returns specific column
     * @param {string} field
     * @return {Array}
     */
    pluck: function(field) {
        var list = [];

        for (var i = 0; i < this.length; i++) {
            list.push(this.models[i].get(field));
        }

        return list;
    }

});


export default ModelList;
