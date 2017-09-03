import Request from '../../request/Request';

// Models
import Character from '../../models/Character/Character';

/**
 * @param {string} firstName
 * @param {string} lastName
 */
export default function get(firstName, lastName) {
    return Request.call(
        'character/get/',
        {firstName: firstName, lastName: lastName},
        {auth: true}
    ).then(function(xhr) {
        var data = JSON.parse(xhr.responseText);

        return (new Character())
            .apply(data);
    })
}
