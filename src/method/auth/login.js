import Request from '../../request/request';

/**
 * @param {string} username
 * @param {string} password
 * @return {Promise<string|object>}
 */
export default function login(username, password) {
    return Request.call('auth/login', {username, password}, {auth: false})
        .then(xhr => JSON.parse(xhr.responseText).authToken)
        .catch(xhr => JSON.parse(xhr.responseText));
}
