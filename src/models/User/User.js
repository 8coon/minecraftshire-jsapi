import Model from '../model/Model';
import ModelList from '../model.list/ModelList';

// Request params
import {RequestParams} from '../../request/Request';


function User() {
    Model.apply(this);

    this.username = null;
    this.email = null;
    this.totalBalance = 0;
    this.freeBalance = 0;
    this.avatarUrl = null;
    this.notifications = new ModelList();
}

User.prototype = Object.create(Model.prototype);

Object.assign(User.prototype, {

    getPk: function() {
        return this.get('username');
    },

    getAvatarFullUrl: function() {
        var avatarUrl = this.get('avatarUrl');

        if (!avatarUrl) {
            return null;
        }

        return RequestParams.backendUrl + avatarUrl;
    }

});


export default User;
