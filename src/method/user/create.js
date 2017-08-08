import Request from '../../request/request';

/**
 * @param {string} username
 * @param {string} password
 * @param {string} email
 */
export default function create(username, password, email) {
    return Request.call('user/create', {username, email, password}, {auth: false});
}
