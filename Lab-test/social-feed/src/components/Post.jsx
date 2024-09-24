import React, { useState } from "react";

const Post = ({ message }) => {
    const [likes, setLikes] = useState(0);
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState("");

    const handleClickedLikes = () => {
        setLikes(likes + 1);
    };

    const handleClickedDisLikes = () => {
        if (likes > 0) {
            setLikes(likes - 1);
        }
    };

    // FORM SUBMISSION HANDLER
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (comment.trim() !== "") {
            setComments([...comments, { text: comment, timestamp: new Date() }]);
            setComment("");
        }
    };

    return (
        <div className="post">
            <p>{message}</p>
            <p className="likes">{likes} Likes</p>
            <button
                className="like-button"
                onClick={handleClickedLikes}
            >👍<span>Like</span>
            </button>
            <button
                className="dislike-button"
                onClick={handleClickedDisLikes}
            >👎<span>Dislike</span>
            </button>

            <h4>Comments:</h4>
            {/* To Display the comments */}
            <ul>
                {comments.map((comment, index) => (
                    <li key={index}>
                        {comment.text} - <span>{comment.timestamp.toLocaleTimeString()}</span>
                    </li>
                ))}
            </ul>
            <form id="comment-form" onSubmit={handleFormSubmit}>
                <input
                    id="control-input"
                    type="text"
                    placeholder="Add a comment"
                    aria-label="Comment input"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    required
                />
                <button
                    type="submit"
                    className="submit-button"
                >Submit</button>
            </form>
        </div>
    );
};

export default Post;