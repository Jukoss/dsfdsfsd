import React from 'react';

import Post from './../Post';

class List extends React.Component {

  render() {

    const { list, removeItem } = this.props;

    return (
      <div className="list">
        {list && list.map((item) => <Post key={item.id} post={item} removeItem={removeItem} />)}
      </div>
    );
  };
}

export default List;
