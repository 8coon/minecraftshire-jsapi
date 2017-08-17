import Model from '../model/Model';


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
        var timestamp = Date.parse(this.get('createdAt'));

        if (isNaN(timestamp)) {
            timestamp = 1;
        }

        return new Date(timestamp);
    },

    setCreatedAt: function(date) {
        this.set('createdAt', date.toISOString());
    },

});

export default Notification;
