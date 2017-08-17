import Request from '../../request/Request';

/**
 * @param {number[]} ids
 * @return {Promise}
 */
export default function markRead(ids) {
    return Request.call(
        'notification/mark_read',
        {ids: ids},
        {auth: true}
    );
}
