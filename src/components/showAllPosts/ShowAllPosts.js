import React, { useState, useRef } from "react";
import CreateNewPost from "../createNewPost/CreateNewPost";
import EditPost from "../editPost/EditPost";
import Post from '../post/Post';

const ShowAllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [idOfPostForEditing, setIdOfPostForEditing] = useState('');

  const savePostTitle = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };

  const savePostDescriptionToState = (e) => {
    setDescription(e.target.value);
    console.log(description);
  };

  const savePost = (e) => {
    e.preventDefault();
    const id = Date.now();
    setAllPosts([...allPosts, { title, description, id }]);
    getTitle.current.value = "";
    getDescription.current.value = "";
    setIsCreateNewPost(false)
    console.log(allPosts);
  };

  const getTitle = useRef();
  const getDescription = useRef();

  const editPost = id => {
      console.log('edit post ', id);
      setIdOfPostForEditing(id);
      setIsModifyPost(true)
  }

  const updatePostChanges = (title, description, id) => {
    console.log('title, description, id', title, description, id);
    setAllPosts(allPosts.map(post => {
        if(post.id === id){
            return {title, description, id}
        } else return post
    }))

    console.log(allPosts);
    setIsModifyPost(false);
  }

  if (isCreateNewPost) {
    return (
      <>
        <CreateNewPost
          savePostTitle={savePostTitle}
          savePostDescriptionToState={savePostDescriptionToState}
          savePost={savePost}
          getTitle={getTitle}
          getDescription={getDescription}
        />
      </>
    );
  } else if(isModifyPost){
    return(
        <EditPost allPosts={allPosts} id={idOfPostForEditing} updatePostChanges={updatePostChanges}/>
    )
  }else {
    return (
        <>
          <h2>All Posts</h2>
            {
                !allPosts.length ? (
                    <div>
                        <h3>No Posts Yet</h3>
                    </div>
                ):
                (
                    allPosts.map(post => {
                        return (
                            <Post key={post.id} post={post} editPost={editPost}/>
                        )
                    })
                )
            }
          <br />
          <br />
          <button onClick={() => setIsCreateNewPost(!isCreateNewPost)}>
            Create New Post
          </button>
        </>
      );
  }
  
};

export default ShowAllPosts;
