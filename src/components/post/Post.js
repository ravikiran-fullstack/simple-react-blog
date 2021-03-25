import React from "react";

const Post = ({ post, editPost }) => {
  return (
    <>
      <section className="container mt-5 border p-4">
        <div className="row">
          <div className="col-12">
          <h3>Title: {post.title}</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <p>Description: {post.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <button className="mr-2" onClick={()=> editPost(post.id)}>Edit</button>
          <button>Delete</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Post;
