import Request from '../../request/Request';

/**
 * @return {Promise<object>}
 */
export default function sessions() {
    return Request.call('auth/sessions', {}, {auth: true})
        .then(function(xhr) {
            return JSON.parse(xhr.responseText);
        })
        .catch(function(xhr) {
            return {
                status: xhr.status,
                body: xhr.responseText.length > 0 ? JSON.parse(xhr.responseText) : null,
            }
        });
}
