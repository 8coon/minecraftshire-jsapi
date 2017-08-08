import Request from '../../request/request';

/**
 * @return {Promise}
 */
export default function logoutEverywhere() {
    return Request.call('auth/logout_everywhere', {}, {auth: true});
}
