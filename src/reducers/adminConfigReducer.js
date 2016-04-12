import PostConfig from "../adminConfig/PostConfig";
import UserConfig from "../adminConfig/UserConfig";

// post reducer
const INITIAL_POST_CONFIG = {
    adminConfig: new PostConfig()
};
export function postAdminConfig(state = INITIAL_POST_CONFIG, action) {
    switch (action.type) {
      default:
        return state;
    }
}

// user reducer
const INITIAL_USER_CONFIG = {
    adminConfig: new UserConfig()
};
export function userAdminConfig(state = INITIAL_USER_CONFIG, action) {
    switch (action.type) {
      default:
        return state;
    }
}