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
        Request.defaultParams.authToken = JSON.parse(xhr.responseText).authToken;

        return Request.defaultParams.authToken
    }).catch(function(xhr) {
        return JSON.parse(xhr.responseText);
    });
}
