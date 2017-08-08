import Request from '../../request/request';

/**
 * @return {Promise}
 */
export default function logout() {
    return Request.call('auth/logout', {}, {auth: true});
}
