import Request from '../../request/Request';

/*
 */
export default function uploadAvatar() {
    return Request.call(
        'user/upload_avatar',
        {},
        {auth: true}
    ).then(function(xhr) {
        var data = JSON.parse(xhr.responseText);

        return data.token;
    });
}
