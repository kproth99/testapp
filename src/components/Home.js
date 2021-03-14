import React from 'react';

import css from './Home.module.css';
import Post from './Post';
import publicUrl from 'utils/publicUrl';

function Home() {
    const post = {
        user:{
            id: "judy",
            photo: "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Fuser1.png?v=1615671411625",
        },
        post:{
            id: "post-1",
            userId: "judy",
            photo: "https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Fpost1.png?v=1615671331073",
            desc: "#zootopia #excited",
            datetime: "2020-02-09T22:45:28Z"
        },
        likes: {
            self: true,
            count: 1
        },
        comments:[
            {
                userId: "nick",
                text: "Welcome to Zootopia!"
            },
            {
                userId: "judy",
                text: "Thanks!😁Looking forward to meeting you!"
            }
        ]
    };

    return (
        <div>
            <Post
                user={post.user}
                likes={post.likes}
                post={post.post}
                comments={post.comments}
            />
        </div>
    );
}

export default Home;