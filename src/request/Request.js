
export const RequestParams = {
    backendUrl: 'https://minecraftshire.ru/api/',
    authToken: '',
    auth: true,
};


export default {

    defaultParams: RequestParams,

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

        return new Promise(function(resolve, reject) {
            const xhr = new XMLHttpRequest();

            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            xhr.send();

            xhr.onreadystatechange = function() {
                if (xhr.readyState !== 4) {
                    return;
                }

                if (xhr.status < 300) {
                    resolve(xhr);
                    return;
                }

                reject(xhr);
            }
        });
    },

}
