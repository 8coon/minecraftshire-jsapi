import Request from '../../request/Request';

/**
 * @param {string} oldPassword
 * @param {string} newPassword
 */
export default function passwordChange(oldPassword, newPassword) {
    return Request.call(
        'user/change_password',
        {oldPassword: oldPassword, newPassword: newPassword},
        {auth: true}
    );
}
