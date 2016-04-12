import {AdminPage} from 'sound-admin';

var AdminPageInstance = new AdminPage();

AdminPageInstance.mapStateToProps = (state) => {
    return AdminPageInstance.defaultMapStateToProps(state, 'postAdminConfig');
};

//redux connect call
export default AdminPageInstance.connect();