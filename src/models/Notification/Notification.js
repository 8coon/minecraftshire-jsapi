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

Object.assign(Notification.prototype, {

    getCreatedAt: function() {
        return Date.parse(this.get('createdAt'));
    },

    setCreatedAt: function(date) {
        this.set('createdAt', date.toISOString());
    },

});

export default Notification;
