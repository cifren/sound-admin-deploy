import React, { Component} from "react";
import { Link } from "react-router";

export default class Navigation extends Component {
  activeIfPathname(pathname) {
    return this.props.location.pathname === pathname ? "active" : "";
  }

  render() {
      
    return (
        <ul class="nav" id="side-menu">
            <li>
                <Link to={"/"} class={this.activeIfPathname('/')}>
                    <i class="fa fa-dashboard fa-fw"></i> Dashboard
                </Link>
            </li>
            <li>
                <Link to={'/posts/list'} class={this.activeIfPathname('/posts/list')}>
                    <i class="fa fa-dashboard fa-fw"></i> Post
                </Link>
            </li>
            <li>
                <Link to={'/users/list'} class={this.activeIfPathname('/users/list')}>
                    <i class="fa fa-dashboard fa-fw"></i> User
                </Link>
            </li>
        </ul>
    );
  }
}