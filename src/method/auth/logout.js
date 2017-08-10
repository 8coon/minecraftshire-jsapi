import Request from '../../request/Request';

/**
 * @return {Promise}
 */
export default function logout() {
    return Request.call('auth/logout', {}, {auth: true})
        .then(function(xhr) {
            Request.defaultParams.authToken = '';

            return xhr;
        });
}
