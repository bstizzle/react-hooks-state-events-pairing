import React, {useState} from "react";
import { createPortal } from "react-dom";
import Comment from "./Comment";

function VideoDetails(props) {

    const [likes, incrementLikes] = useState(props.video.upvotes) 
    const [dislikes, incrementDislikes] = useState(props.video.downvotes)
    
    function addLike(event) {
        incrementLikes((likes) => likes + 1)
    }

    function addDislike(event) {
        incrementDislikes((dislikes) => dislikes + 1)
    }

    const [filteredComments, filterComments] = useState("")

    const filteredArray = props.video.comments.filter(comment => comment.user.includes(filteredComments))

    const commentMap = filteredArray.map((comment) => {
        return <Comment key={comment.id} user={comment.user} comment={comment.comment} />
    })

    const sortedMap = commentMap.sort(function(a, b) {
                        console.log(a.props.comment)
                        if(a.props.comment < b.props.comment){
                            return -1;
                        }
                        if(a.props.comment > b.props.comment){
                            return 1;
                        }
                        return 0;
                        })

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src={props.video.embedUrl}
                frameborder="0"
                allowfullscreen
                title={props.video.title}
            />

            <h3>{props.video.title}</h3>
            <h5>{props.video.views} | {props.video.createdAt}</h5>

            <button onClick={addLike} name="+">{likes} 👍</button>
            <button onClick={addDislike} name="-">{dislikes}👎</button>
            <br></br>
            <br></br>
            <textarea onChange={(event) => filterComments(event.target.value)}></textarea>
            <ol>
                {sortedMap}
            </ol>
        </div>
    );
}

export default VideoDetails;