
export var RequestParams = {
    backendUrl: 'https://minecraftshire.ru/api/',
    authToken: '',
    auth: true,
};


export var RequestEvent = {
    SEND: 'send',
    ERROR: 'error',
    SUCCESS: 'success',
};


export default {

    defaultParams: RequestParams,
    listeners: {},

    /**
     * Make request to backend
     * @param {string} url
     * @param {object} payload
     * @param {*} params
     * @return {Promise}
     */
    call: function(url, payload, params) {
        params = Object.assign({}, this.defaultParams, params);
        params.authToken = payload.authToken || params.authToken;

        url = params.backendUrl + url;

        if (params.auth) {
            payload.authToken = params.authToken;
        }

        var _this = this;
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.withCredentials = true;
            xhr.send(JSON.stringify(payload));
            _this.emit(RequestEvent.SEND, {xhr: xhr, request: _this, payload: payload});

            xhr.onreadystatechange = function() {
                if (xhr.readyState !== 4) {
                    return;
                }

                if (xhr.status < 300) {
                    _this.emit(RequestEvent.SUCCESS, {xhr: xhr, request: _this, payload: payload});
                    resolve(xhr);
                    return;
                }

                _this.emit(RequestEvent.ERROR, {xhr: xhr, request: _this, payload: payload});
                reject(xhr);
            }
        });
    },


    /**
     * Subscribe listener to certain Request event.
     * @param {string} type
     * @param {function|object} listener
     * @param {string|null} handlerName = 'handleEvent'
     * @param {string|null} key listener identifier.
     */
    on(type, listener, handlerName, key) {
        this.listeners[type] = this.listeners[type] || [];
        this.listeners[type].push({
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
    off(type, listener) {
        var listeners = this.listeners[type];
        if (!listeners) return;

        for (var i = 0; i < listeners.length; i++) {
            if (listener === listeners[i]) {
                delete listeners[i];
                break;
            }
        }

        if (listeners.length === 0) delete this.listeners[type];
    },


    /**
     * Emit event
     * @param {string} type
     * @param {object} details
     */
    emit(type, details) {
        var listeners = this.listeners[type];
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

}
