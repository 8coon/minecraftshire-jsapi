import Model from '../model/Model';

// Date utils
import {parseDateTime, serializeDateTime} from 'minecraftshire-utils/src/dateutils/dateutils.js';

// Request params
import {RequestParams} from '../../request/Request';


function Character() {
    Model.apply(this);

    this.id = null;
    this.firstName = null;
    this.lastName = null;
    this.owner = null;
    this.isOnline = null;
    this.isFavorite = null;
    this.createdAt = null;
    this.skinUrl = null;
}

Character.prototype = Object.create(Model.prototype);

Object.assign(Character.prototype, {

    getCreatedAt: function() {
        if (this.has('createdAt')) {
            return parseDateTime(this.get('createdAt'));
        }

        return new Date(1);
    },

    getSkinFullUrl: function() {
        var skinUrl = this.get('skinUrl');

        if (!skinUrl) {
            return null;
        }

        return RequestParams.backendUrl + skinUrl;
    }

});

export default Character;
