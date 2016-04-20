import React from "react";

export default class DashboardPage extends React.Component {
  render() {
    return (
      <div>
          <h1>Sound admin</h1>
          <div>
            <h3>Some slow load can occure on the very first page loading, the server must recover from sleep sometimes</h3>
            <p>Find the repository <a href="https://github.com/cifren/sound-admin-deploy" target="_blank">for this website here</a></p>
            <p>Find the source of this demo <a href="https://github.com/cifren/sound-admin-deploy" target="_blank">Demo Sound-Admin</a></p>
            <p>Find the Repo of Sound-Admin <a href="https://github.com/cifren/sound-admin" target="_blank">Sound-Admin</a></p>
          </div>
      </div>
    );
  }
}
