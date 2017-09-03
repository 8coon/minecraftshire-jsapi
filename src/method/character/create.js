import Request from '../../request/Request';

/**
 * @param {string} firstName
 * @param {string} lastName
 */
export default function create(firstName, lastName) {
    return Request.call(
        'character/create',
        {firstName: firstName, lastName: lastName},
        {auth: true}
    );
}
