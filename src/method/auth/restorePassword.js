import Request from '../../request/Request';

/**
 * @param {number} code
 * @param {string} password
 * @return {Promise<object>}
 */
export default function restorePassword(code, password) {
    return Request.call('auth/restore_password', {code: code, password: password}, {auth: false});
}
