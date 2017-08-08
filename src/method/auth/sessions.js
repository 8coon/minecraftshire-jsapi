import Request from '../../request/request';

/**
 * @return {Promise<object>}
 */
export default function sessions() {
    return Request.call('auth/sessions', {}, {auth: true})
        .then(xhr => JSON.parse(xhr.responseText));
}
