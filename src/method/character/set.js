import Request from '../../request/Request';

/**
 * @param {number} id
 * @param {{isFavorite: boolean?, isOnline: boolean?}} fields
 */
export default function set(id, fields) {
    return Request.call(
        'character/set',
        Object.assign({id: id}, fields),
        {auth: true}
    );
}
