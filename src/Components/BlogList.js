import React from "react";

import Blog from "./Blog";
import BlogComposer from "./BlogComposer";

export default class BlogList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [
        {
          id: 0,
          upvoteCount: 1,
          title: "Declaring JavaScript Variables",
          blog: "What is the difference between let, const and var? 😶‍🌫️",
        },
        {
          id: 1,
          upvoteCount: 2,
          title: "Data Structures are easy to use",
          blog: "Using data structures over arrays gives you more functionality.",
        },
      ],
    };
  }

  addBlogPost = (blog) => {
    console.log(blog);
    let newArray = [...this.state.blogs, blog];
    this.setState({
      blogs: newArray,
    });
  };

  handleUpvote = (id) => {
    const index = this.state.blogs.findIndex((blog) => blog.id === id); // findIndex() finds the index where blog.id is equal to the id we passed in as an argument
    const blog = this.state.blogs.filter((blog) => blog.id === id)[0]; // filter() returns an array so we add a [0] to get that blog object out of its array
    blog.upvoteCount += 1; // increment the upvoteCount in selected blog

    const newArray = [...this.state.blogs]; // create newArray to splice that later
    newArray.splice(index, 1, blog);
    this.setState({
      blogs: newArray,
    });
  };

  handleDownvote = (id) => {
    const index = this.state.blogs.findIndex((blog) => blog.id === id); // findIndex() finds the index where blog.id is equal to the id we passed in as an argument
    const blog = this.state.blogs.filter((blog) => blog.id === id)[0]; // filter() returns an array so we add a [0] to get that blog object out of its array
    blog.upvoteCount -= 1; // increment the upvoteCount in selected blog

    const newArray = [...this.state.blogs]; // create newArray to splice that later
    newArray.splice(index, 1, blog);
    this.setState({
      blogs: newArray,
    });
  };

  render() {
    let sorted = this.state.blogs.sort((a, b) => b.upvoteCount - a.upvoteCount);

    return (
      <div>
        <BlogComposer
          addBlog={this.addBlogPost}
          blogsLength={this.state.blogs.length}
        />

        <h1>Blogs for Coders!</h1>
        {this.state.blogs && this.state.blogs.length > 0 ? (
          sorted.map((blog) => (
            <Blog
              key={blog.id}
              {...blog}
              upvote={this.handleUpvote}
              downvote={this.handleDownvote}
            />
          ))
        ) : (
          <p>No Blogs</p>
        )}
      </div>
    );
  }
}
