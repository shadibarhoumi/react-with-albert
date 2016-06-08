import React from 'react';

const UserProfile = React.createClass({
  render() {
    return <div>
      <UserPhoto />
      <UserName />
      <UserDescription />
    </div>;
  },
});

const UserPhoto = React.createClass({
  render() {
    return <div>
      <img src="http://i55.tinypic.com/1zc0nz5.jpg" />
    </div>;
  },
});

const UserName = React.createClass({
  render() {
    return <div>
      <h4>Type your name here</h4>
    </div>;
  },
});

const UserDescription = React.createClass({
  render() {
    return <div>
      <p>Type your description here</p>
    </div>;
  },
});

export default UserProfile;
