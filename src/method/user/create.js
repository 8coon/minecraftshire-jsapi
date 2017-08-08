import Request from '../../request/Request';

/**
 * @param {string} username
 * @param {string} password
 * @param {string} email
 */
export default function create(username, password, email) {
    return Request.call(
        'user/create',
        {username: username, email: email, password: password},
        {auth: false}
    );
}
