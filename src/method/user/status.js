import Request from '../../request/Request';
import ModelList from '../../models/model.list/ModelList'

// Models
import User from '../../models/User/User';
import Notification from '../../models/Notification/Notification'

/*
 */
export default function status() {
    return Request.call(
        'user/status',
        {},
        {auth: true}
    ).then(function(xhr) {
        var data = JSON.parse(xhr.responseText);

        return (new User())
            .apply(data)
            .set('notifications', new ModelList().set(data.notifications, {type: Notification}));
    })
}
