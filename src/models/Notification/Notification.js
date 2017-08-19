import Model from '../model/Model';


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
        var dateStr = this.get('createdAt');

        if (!dateStr || typeof dateStr !== 'string') {
            return new Date(1);
        }

        // For Safari
        dateStr = dateStr.replace(' ', 'T');

        // Get timestamp without timezone and timezone offset
        var i = dateStr.lastIndexOf('-');
        var dateNoTz = dateStr.substring(0, i);
        var tz = dateStr.substring(i);

        var timestamp = Date.parse(dateNoTz);

        if (isNaN(timestamp)) {
            timestamp = 1;
        }

        var date = new Date(timestamp);
        date.setTime(date.getTime() - parseInt(tz, 10) * TZ_TIMESTAMP_OFFSET);

        return date;
    },

    setCreatedAt: function(date) {
        this.set('createdAt', date.toISOString());
    },

});

export default Notification;
