import Model from '../model/Model';

// Date utils
import {parseDateTime, serializeDateTime} from 'minecraftshire-utils/src/dateutils/dateutils.js';



function Session() {
    Model.apply(this);

    this.ip = null;
    this.issuedAt = null;
    this.location = null;
}

Session.prototype = Object.create(Model.prototype);

Object.assign(Session.prototype, {

    getIssuedAt: function() {
        if (this.has('issuedAt')) {
            return parseDateTime(this.get('issuedAt'));
        }

        return new Date(1);
    },

    setIssuedAt: function(date) {
        this.set('issuedAt', serializeDateTime(date));
    },

});

export default Session;
