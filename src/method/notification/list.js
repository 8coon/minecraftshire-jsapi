import Request from '../../request/Request';
import ModelList from '../../models/model.list/ModelList';

// Models
import Notification from '../../models/Notification/Notification';

/**
 * @return {Promise}
 */
export default function list() {
    return Request.call(
        'notification/list',
        {},
        {auth: true}
    ).then(function(xhr) {
        return (new ModelList()).set(JSON.parse(xhr.responseText), {type: Notification});
    });
}
