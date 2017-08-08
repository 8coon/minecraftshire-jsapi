import Model from '../model/Model';


function User() {
    Model.apply(this);

    this.username = '';
    this.email = '';
}


Object.assign(User.prototype, {
});


export default User;
