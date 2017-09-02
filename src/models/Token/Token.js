import Model from '../model/Model';

// Date utils
import {parseDateTime, serializeDateTime} from 'minecraftshire-utils/src/dateutils/dateutils.js';



function Token() {
    Model.apply(this);

    this.username = null;
    this.time = null;
    this.ip = null;
    this.location = null;
    this.appToken = null;
}

Token.prototype = Object.create(Model.prototype);

Object.assign(Token.prototype, {

    getTime: function() {
        if (this.has('time')) {
            return parseDateTime(this.get('time'));
        }

        return new Date(1);
    },

    setTime: function(date) {
        this.set('time', serializeDateTime(date));
    },

});

export default Token;
