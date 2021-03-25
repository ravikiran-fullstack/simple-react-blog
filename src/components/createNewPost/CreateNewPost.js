import React from "react";

const CreateNewPost = ({
  savePostTitle,
  savePostDescriptionToState,
  savePost,
  getTitle,
  getDescription,
}) => {
  return (
    <>
      <form onSubmit={savePost}>
        <h1>Create New Post</h1>
        <input
          type="text"
          placeholder="title"
          size="39"
          required
          onChange={savePostTitle}
          ref={getTitle}
        ></input>
        <br />
        <br />
        <textarea
          placeholder="description"
          name="description"
          rows="8"
          cols="41"
          required
          onChange={savePostDescriptionToState}
          ref={getDescription}
        ></textarea>
        <br />
        <br />
        <button type="submit">Save Post</button>
      </form>
    </>
  );
};

export default CreateNewPost;
