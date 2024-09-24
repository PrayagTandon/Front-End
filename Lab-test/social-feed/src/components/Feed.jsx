import React from "react";
import Post from "./Post";

const Feed = () => {
    console.log("feed component is mounted");

    return (
        <div className="feed">
            <h1>Social Feed</h1>
            {/* Multiple Posts */}
            <div className="posts">
                <Post message="React is the best front end library" />
                <Post message="React is Fun!" />
            </div>
        </div>
    );
};

export default Feed;

