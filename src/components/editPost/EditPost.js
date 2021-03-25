import React, {useState, useEffect} from 'react'

const EditPost = ({allPosts, id, updatePostChanges}) => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    useEffect(()=> {
        console.log('allPosts',allPosts);
        const postToEdit = allPosts.find(post => post.id === id);
        console.log('post to edit ', postToEdit);
        setTitle(postToEdit.title);
        setDescription(postToEdit.description);
    }, [id])

    const updateChanges = e => {
        e.preventDefault();
        updatePostChanges(title, description, id)
    }

    if(title){
        return (
            <>
                <form onSubmit={updateChanges}>
                    <h1>Edit Post</h1>
                    <input type="text" placeholder="title" size="30" required value={title} onChange={e => setTitle(e.target.value)}/>
                    <br/>
                    <br/>
                    <textarea name="description" cols="45" rows="10" required value={description} onChange={e => setDescription(e.target.value)}></textarea>
                    <br/>
                    <br/>
                    <button type="submit">Save Changes</button>
                </form>
            </>
        )
    }else {
        return (
            <>
                <h5>Nothing to edit yet</h5>
            </>
        )
    }
}

export default EditPost
