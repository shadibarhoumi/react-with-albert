import React from 'react';

const Component = React.createClass({
  render() {
    return <div>
      <button onClick="" />
      {this.props.prop1} + {this.props.prop2} = {this.props.prop1 + this.props.prop2}
    </div>;
  },
});

export default Component;
