import Request from '../../request/Request';

/**
 * Uploads files to a remote server
 * @param token
 * @param file
 */
export default function upload(token, file) {
    return Request.call(
        'upload/upload/' + token,
        {file: file},
        {form: true}
    );
}
