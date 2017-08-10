import Request from '../../request/Request';

/**
 * @param {string} username
 * @param {string} password
 * @return {Promise<string|object>}
 */
export default function login(username, password) {
    return Request.call(
        'auth/login',
        {username: username, password: password},
        {auth: false}
    ).then(function(xhr) {
        var body = JSON.parse(xhr.responseText);
        Request.defaultParams.authToken = body.authToken;

        return body;
    }).catch(function(xhr) {
        return {
            status: xhr.status,
            body: xhr.responseText.length > 0 ? JSON.parse(xhr.responseText) : null,
        }
    });
}
