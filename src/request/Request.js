import Emitter from 'minecraftshire-utils/src/emitter/Emitter';


export var RequestParams = {
    backendUrl: 'https://minecraftshire.ru/api/',
    authToken: null,
    auth: false,
};


export var RequestEvent = {
    SEND: 'send',
    ERROR: 'error',
    SUCCESS: 'success',
};


var Request = {

    defaultParams: RequestParams,
    listeners: {},

    getCachedAuthToken: function() {
        var localStorage = window.localStorage;
        if (!localStorage) return null;

        var username = localStorage.getItem('username');
        if (!username) return null;

        return localStorage.getItem(username + ':authToken');
    },

    /**
     * Make request to backend
     * @param {string} url
     * @param {object} payload
     * @param {*} params
     * @return {Promise}
     */
    call: function(url, payload, params) {
        params = Object.assign({}, this.defaultParams, params);
        params.authToken = payload.authToken || params.authToken || this.getCachedAuthToken();

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
            _this.$emit(RequestEvent.SEND, {xhr: xhr, request: _this, payload: payload});

            xhr.onreadystatechange = function() {
                if (xhr.readyState !== 4) {
                    return;
                }

                if (xhr.status < 300) {
                    _this.$emit(RequestEvent.SUCCESS, {xhr: xhr, request: _this, payload: payload});
                    resolve(xhr);
                    return;
                }

                _this.$emit(RequestEvent.ERROR, {xhr: xhr, request: _this, payload: payload});

                reject({
                    status: xhr.status,
                    body: xhr.responseText.length > 0 ? JSON.parse(xhr.responseText) : null,
                });
            }
        });
    },

};

Emitter.apply(Request);
Object.setPrototypeOf(Request, Emitter.prototype);

export default Request;
