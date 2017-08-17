import Model from '../model/Model';
import ModelList from '../model.list/ModelList';


function User() {
    Model.apply(this);

    this.username = '';
    this.email = null;
    this.totalBalance = 0;
    this.freeBalance = 0;
    this.notifications = new ModelList();
}


Object.assign(User.prototype, {
});


export default User;
