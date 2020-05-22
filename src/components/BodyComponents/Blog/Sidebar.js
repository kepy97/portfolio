import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const MAX_POSTS = 5;
export default class Sidebar extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        let posts = this.props.postData;
        let recentPosts = posts.slice(0, MAX_POSTS);

        return (
            <div className="col-lg-4 sidebar ftco-animate">
                <div className="sidebar-box">
                    <div action="#" className="search-form">
                        <div className="form-group">
                            <span className="icon icon-search" />
                            <input type="text" className="form-control" placeholder="Search..." onChange={(e) => this.props.parentFilterSearch(e.target.value)} />
                        </div>
                    </div>
                </div>
                {/* <div className="sidebar-box ftco-animate">
                    <h3 className="heading-sidebar">Tags</h3>
                    <div className="tagcloud">
                        <span className="tag-cloud-link">house</span>
                        <span className="tag-cloud-link">house</span>
                        <span className="tag-cloud-link">house</span>
                        <span className="tag-cloud-link">house</span>
                    </div>
                </div> */}
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
            </div>
        );
    }
}
