import Request from '../../request/Request';

/**
 * @param {number} id
 */
export default function restore(id) {
    return Request.call(
        'character/restore',
        {id: id},
        {auth: true}
    );
}
