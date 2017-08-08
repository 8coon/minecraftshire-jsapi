
class RequestParams {
    backendUrl = 'https://minecraftshire.ru/api/';
    authToken = '';
    auth = true;
}


export default class Request {

    static defaultParams = new RequestParams();

    /**
     * Make request to backend
     * @param {string} url
     * @param {object} payload
     * @param {RequestParams | {}} params
     * @return {Promise}
     */
    static call(url, payload, params = {}) {
        params = Object.assign({}, Request.defaultParams, params);
        params.authToken = payload.authToken || params.authToken;

        url = `${params.backendUrl}${url}`;

        if (params.auth) {
            payload.authToken = params.authToken;
        }

        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();

            xhr.open('POST', url, true);
            xhr.withCredentials = true;
            xhr.send();

            xhr.onreadystatechange = () => {
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
    }

}
