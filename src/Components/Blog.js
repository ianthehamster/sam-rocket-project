import React from "react";

class Blog extends React.Component {
  render() {
    return (
      <div>
        <h1>Title: {this.props.title}</h1>
        <h2>Blog: {this.props.blog}</h2>
        <h2>Upvote Count: {this.props.upvoteCount}</h2>
        <button onClick={() => this.props.upvote(this.props.id)}>👍</button>
        <button onClick={() => this.props.downvote(this.props.id)}>👎</button>
      </div>
    );
  }
}

export default Blog;
