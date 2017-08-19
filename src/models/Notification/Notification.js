import Model from '../model/Model';

// Date utils
import {parseDateTime, serializeDateTime} from 'minecraftshire-utils/src/dateutils/dateutils.js';


var TZ_TIMESTAMP_OFFSET = 60 * 60 * 1000;


function Notification() {
    Model.apply(this);

    this.id = null;
    this.username = null;
    this.createdAt = null;
    this.title = null;
    this.text = null;
    this.pictureUrl = null;
    this.detailsUrl = null;
    this.unread = null;
}

Notification.prototype = Object.create(Model.prototype);

Object.assign(Notification.prototype, {

    getCreatedAt: function() {
        if (this.has('reatedAt')) {
            return parseDateTime(this.get('createdAt'));
        }

        return new Date(1);
    },

    setCreatedAt: function(date) {
        this.set('createdAt', serializeDateTime(date));
    },

});

export default Notification;
