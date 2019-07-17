import React from 'react';
import './_index.scss';


class Post extends React.Component {


  handleClick = () => {
    const { post } = this.props;
    this.props.removeItem(post.id);
  }

  render() {
    const { post } = this.props;
    return (
      <article className="post">
        <h2 className="post-title">{post.title}</h2>
        <span>{(post.user && post.user.name) || 'Author name'}</span> -
            <span> {(post.user && post.user.company && post.user.company.name) || 'Company name'}</span> -
            <span> {(post.user && post.user.address && post.user.address.city) || 'City name'}</span>
        <p className="post-body">{post.body}</p>
        <button onClick={this.handleClick}>X</button>
      </article>
    );
  };
}

export default Post;