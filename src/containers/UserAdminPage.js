import {AdminPage} from 'sound-admin';

var AdminPageInstance = new AdminPage();

AdminPageInstance.mapStateToProps = (state) => {
    return AdminPageInstance.defaultMapStateToProps(state, 'userAdminConfig');
};

//redux connect call
export default AdminPageInstance.connect();