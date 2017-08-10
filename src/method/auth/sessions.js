import Request from '../../request/Request';

/**
 * @return {Promise<object>}
 */
export default function sessions() {
    return Request.call('auth/sessions', {}, {auth: true})
        .then(function(xhr) {
            return JSON.parse(xhr.responseText);
        });
}
