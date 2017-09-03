import Request from '../../request/Request';

/**
 * @param {number} id
 */
export default function deleteChar(id) {
    return Request.call(
        'character/delete',
        {id: id},
        {auth: true}
    );
}
