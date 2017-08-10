import Request from '../../request/Request';

/**
 * @param {string} email
 * @return {Promise<object>}
 */
export default function restoreAccess(email) {
    return Request.call('auth/restore_access', {email: email}, {auth: false});
}
