import Request from '../../request/Request';

/**
 * @return {Promise}
 */
export default function logoutEverywhere() {
    return Request.call('auth/logout_everywhere', {}, {auth: true})
        .then(function(xhr) {
            Request.defaultParams.authToken = '';

            return xhr;
        })
        .catch(function(xhr) {
            return {
                status: xhr.status,
                body: xhr.responseText.length > 0 ? JSON.parse(xhr.responseText) : null,
            }
        });
}
