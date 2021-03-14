import React from 'react';

import css from './Post.module.css';
import publicUrl from 'utils/publicUrl';
import Response from './Response';
import timespan from 'utils/timespan';

class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={css.post}>
                <div className={css.postHeader}>
                    <img className={css.profilePhoto} src={publicUrl(this.props.user.photo)} alt={this.props.user.id}/>
                    <span className={css.bold}>{this.props.user.id}</span>
                </div>
                <img className={css.postPhoto} src={publicUrl(this.props.post.photo)} alt={this.props.post.desc}/>
                <div className={css.activityBar}>
                    <div>
                        <img className={css.postItem} src={this.props.likes.self ? publicUrl('https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Funlike.svg?v=1615671404796') : publicUrl('https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Flike.svg?v=1615671300239')}/>
                        <img className={css.postItem} src={publicUrl('https://cdn.glitch.com/ddf8ade4-ca2f-4830-b921-bdb9ee6e327e%2Fcomment.svg?v=1615671280032')}/>
                    </div>
                    <span className={`${css.bold} ${css.postItem}`}>{this.props.likes.count} likes</span>
                </div>
                <div className={css.postItem}>
                    <Response username={this.props.user.id} text={this.props.post.desc}/>
                    {this.props.comments.map((c, i) => (
                        <Response key={i} username={c.userId} text={c.text}/>
                    ))}
                </div>
                <span className={`${css.postItem} ${css.postTimestamp}`}>{timespan(this.props.post.datetime)}</span>
            </section>
        );
    }
}

export default Post;