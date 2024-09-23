import React, { useState } from "react";

function Post() {
    const [likes, setLikes] = useState(0);
    return (
        <div>
            <p>React is the best front end Library</p>
            <p>{likes} Likes</p>
            <div class="post">
                <p class="post-message">Post Message</p>
                <button
                    class="like-button"
                    onClick={() => setLikes(likes + 1)}
                >Like</button>
                <h4>Comments:</h4>
                <form id="comment-form">
                    <input
                        id="control-input"
                        type="text"
                        placeholder="Add a comment"
                        aria-label="Comment input"
                        required
                    />
                    <button type="submit" class="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Post;