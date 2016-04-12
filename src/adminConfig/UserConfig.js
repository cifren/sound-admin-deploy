import {AdminConfig} from "sound-admin"

export default class UserConfig extends AdminConfig {
  static properties = {
    "id": {
      "type": "integer",
      "description": "Index",
      "default": null
    },
    "name": {
      "type": "string",
      // default description for all pages
      "description": "What name do you want ?",
      // default label for all pages
      "title": "Name",
      "default": null
    },
    "username": {
      "type": "string",
      // default description for all pages
      "description": "What username do you want ?",
      // default label for all pages
      "title": "Username",
      "default": null
    },
    "email": {
      "type": "string",
      // default description for all pages
      "description": "What email do you want ?",
      // default label for all pages
      "title": "Email",
      "default": null
    },
    "phone": {
      "type": "string",
      // default description for all pages
      "description": "What phone do you want ?",
      // default label for all pages
      "title": "Phone",
      "default": null
    },
    "website": {
      "type": "string",
      // default description for all pages
      "description": "What website do you want ?",
      // default label for all pages
      "title": "Website",
      "default": null
    }
  };
  
  constructor(){
    super();
    this.adminName = 'users';
    this.restUrl = "https://cifren-jsonserver.herokuapp.com";
    this.title = 'User';
  }

  // form page, include create page and edit page
  configureFormFields(formMapper) {
    formMapper
      .add('name', 'text', {"required": true})
      .add('username', 'text', {"required": true})
      .add('email', 'text', {"required": true})
      .add('phone', 'text', {"required": true})
      .add('website', 'text', {"required": true});
  }

  // list page
  configureListFields(listMapper) {
    listMapper
      .addIdentifier('id')  // addIdentifier identify it as a link to edit page
      .add('name', {'label': "Name"})
      .add('username', {'label': "Username"})
      .add('email', {'label': "Email"})
      .add('phone', {'label': "Phone"})
      .add('website', {'label': "Website"});
  }
}