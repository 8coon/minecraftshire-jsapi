import Symbol from 'es6-symbol';

const listeners = Symbol.for('listeners');

function Emitter() {
}

Emitter.prototype = Object.create({});

Object.assign(Emitter.prototype, {

    /**
     * Subscribe to a certain certain event.
     * @param {string} type
     * @param {function|object} listener
     * @param {string|null} handlerName = 'handleEvent'
     * @param {string|null} key listener identifier.
     */
    $on: function(type, listener, handlerName, key) {
        this[listeners] = this[listeners] || [];
        this[listeners][type] = this[listeners][type] || [];
        this[listeners][type].push({
            key: key || listener,
            handlerName: handlerName,
            listener: listener,
        });
    },

    /**
     * Unsubscribe provided listener
     * @param {string} type
     * @param {function|object|string} listener
     */
    $off: function(type, listener) {
        this[listeners] = this[listeners] || [];
        var listeners = this[listeners][type];
        if (!listeners) return;

        for (var i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
                delete listeners[i];
                break;
            }
        }

        if (listeners.length === 0) delete this[listeners][type];
    },

    /**
     * Emit event
     * @param {string} type
     * @param {object} details
     */
    $emit: function(type, details) {
        this[listeners] = this[listeners] || [];
        var listeners = this[listeners][type];
        if (!listeners) return;

        var event = {
            type: type,
            details: details,
        };

        for (var i = 0; i < listeners.length; i++) {
            var listenerObj = listeners[i],
                listener = listenerObj.listener,
                handler = listenerObj.handlerName,
                callback = typeof listener === 'function' ? listener : listener[handler || 'handleEvent'];

            if (!callback || typeof callback !== 'function') {
                continue;
            }

            callback(event);
        }
    }

});

export default Emitter;
