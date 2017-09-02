import Request from '../../request/Request';

/*
 */
export default function status(token) {
    return Request.call(
        'upload/status',
        {uploadToken: token},
        {auth: true}
    ).then(function(xhr) {
        return JSON.parse(xhr.responseText);
    });
}
