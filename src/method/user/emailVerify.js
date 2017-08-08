import Request from '../../request/request';

/**
 * @param {string} code
 */
export default function emailVerify(code) {
    return Request.call('user/email_verify', {code}, {auth: false});
}
