import Request from '../../request/Request';

/**
 * @param {string} code
 */
export default function emailVerify(code) {
    return Request.call('user/email_verify',
        {code: code},
        {auth: false}
    );
}
