import React, {useState} from "react";

function Comment(props) {

    const [likes, incrementLikes] = useState(0) 
    const [dislikes, incrementDislikes] = useState(0)
    
    function addLike(event) {
        incrementLikes((likes) => likes + 1)
    }

    function addDislike(event) {
        incrementDislikes((dislikes) => dislikes + 1)
    }

    function deleteComment(event) {
            event.target.parentElement.remove();
    }

    return(
        <li>
            <strong>{props.user}</strong>
            <p>{props.comment}</p>

            <button onClick={addLike} name="+">{likes} 👍</button>
            <button onClick={addDislike} name="-">{dislikes}👎</button>
            <button onClick={deleteComment} name="X">X</button>
        </li>
    );
}

export default Comment;