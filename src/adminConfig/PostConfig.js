import {AdminConfig} from "sound-admin"

export default class PostConfig extends AdminConfig {
  static properties = {
    "id": {
      "type": "integer",
      "description": "Index",
      "default": null
    },
    "title": {
      "type": "string",
      // default description for all pages
      "description": "Your title",
      // default label for all pages
      "title": "Title",
      "default": null
    },
    "body": {
      "type": "string",
      // default description for all pages
      "description": "Your body text",
      // default label for all pages
      "title": "Body",
      "default": null
    },
    "userId": {
      "type": "number",
      // default description for all pages
      "description": "your user",
      // default label for all pages
      "title": "User Id",
      "default": null
    }
  };
  
  constructor(){
    super();
    this.adminName = 'posts';
    this.restUrl = "https://cifren-jsonserver.herokuapp.com";
    this.title = 'Post';
  }

  // form page, include create page and edit page
  configureFormFields(formMapper) {
    formMapper
      .add('title', 'text', {"required": true})
      .add('body', 'text', {"required": true})
      .add('userId', 'text', {"required": true});
  }

  // list page
  configureListFields(listMapper) {
    listMapper
      .addIdentifier('id')  // addIdentifier identify it as a link to edit page
      .add('title', {'label': "Title"})
      .add('body', {'label': "Body"})
      .add('userId', {'label': "User Id"});
  }
}