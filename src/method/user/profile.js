import Request from '../../request/Request';
import ModelList from '../../models/model.list/ModelList'

// Models
import User from '../../models/User/User';
import Session from '../../models/Session/Session';
import Token from '../../models/Token/Token';
import Character from '../../models/Character/Character';

/*
 */
export default function profile(username) {
    return Request.call(
        'user/profile/' + username,
        {},
        {auth: true}
    ).then(function(xhr) {
        var data = JSON.parse(xhr.responseText);

        return (new User())
            .apply(data)
            .set('sessions', new ModelList().set(data.sessions, {type: Session}))
            .set('tokens', new ModelList().set(data.tokens, {type: Token}))
            .set('characters', new ModelList().set(data.characters, {type: Character}));
    })
}
