import React from "react";

class BlogComposer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      blog: "",
      upvoteCount: 0,
      id: this.props.blogsLength,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // adds blog into our blog list with the addBlog function
    const blog = this.state;
    this.props.addBlog(blog);

    // Resets the state of BlogComposer after
    this.setState({
      title: "",
      blog: "",
      upvoteCount: 0,
      id: this.props.blogsLength,
    });
  };

  handleChange = (e) => {
    // e is the event from the button click
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add new blog:</h4>
          <h5>Title</h5>
          <input
            name="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <br />
          <h5>Blog</h5>
          <input
            name="blog"
            type="text"
            value={this.state.blog}
            onChange={this.handleChange}
          />
          <br />
          <input name="submit" type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default BlogComposer;
