import Request from '../../request/Request';

/**
 * @param {number} id
 */
export default function uploadSkin(id) {
    return Request.call(
        'character/upload_skin',
        {id: id},
        {auth: true}
    ).then(function(xhr) {
        var data = JSON.parse(xhr.responseText);

        return data.token;
    });
}
