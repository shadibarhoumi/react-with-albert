import React from 'react';
import ReactDOM from 'react-dom';

import UserProfile from '../UserProfile';

const ExampleApp = React.createClass({
  getInitialState() {
    return {
      userImage: undefined,
      userName: undefined,
      userDescription: undefined,
    };
  },

  render() {
    return <div>
      <h1>Welcome to IdeaFlow</h1>
      <UserProfile />
    </div>;
  },
});

ReactDOM.render(
  <ExampleApp/>,
  document.querySelector('#root')
);
