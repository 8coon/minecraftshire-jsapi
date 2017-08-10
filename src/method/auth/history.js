import Request from '../../request/Request';

/**
 * @return {Promise<object>}
 */
export default function history(email) {
    return Request.call('auth/history', {}, {auth: true});
}
