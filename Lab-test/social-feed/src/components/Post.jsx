import React from "react";

function Post() {
    return (
        <div>
            <p>React is the best front end Library</p>
            <p>10 Likes</p>
            <div class="post">
                <p class="post-message">Post Message</p>
                <button class="like-button">Like</button>
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