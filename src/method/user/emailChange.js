import Request from '../../request/Request';

/**
 * @param {string} username
 * @param {string} newEmail
 */
export default function emailChange(username, newEmail) {
    return Request.call(
        'user/change_email',
        {username: username, newEmail: newEmail},
        {auth: true}
    );
}
