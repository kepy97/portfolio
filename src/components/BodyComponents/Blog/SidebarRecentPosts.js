import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const MAX_POSTS = 5;
export default class SidebarRecentPosts extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        let posts = this.props.postData;
        let recentPosts = posts.slice(0, MAX_POSTS);

        return (
            <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Recent Posts</h3>
                {
                    recentPosts.map((post, i) => {
                        return (
                            <div className="block-21 mb-4 d-flex" key={i}>
                                <div className="blog-img mr-4 cursor-pointer" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${post.image})` }} ></div>
                                <div className="text">
                                    <h3 className="heading"><Link to={`/blog/${post.url}`}>{post.title}</Link></h3>
                                    <div className="meta">
                                        <div><span className="icon-calendar" /> {" " + moment(post.created).format('LLLL')}</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
