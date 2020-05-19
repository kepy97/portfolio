import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default class Sidebar extends React.Component {
    render() {
        const posts = this.props.postData
        return (
            <div className="col-lg-4 sidebar ftco-animate">
                <div className="sidebar-box ftco-animate">
                    <h3 className="heading-sidebar">Recent Posts</h3>

                    {
                        posts.map((post, i) => {
                            if (i < 5) {
                                return (
                                    <div className="block-21 mb-4 d-flex" key={i}>
                                        <a className="blog-img mr-4" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${post.image})` }} />
                                        <div className="text">
                                            <h3 className="heading"><Link to={`/blog/${post.url}`}>{post.title}</Link></h3>
                                            <div className="meta">
                                                <div><span className="icon-calendar" /> {" " + moment(post.created).format('LLLL')}</div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            </div>
        );
    }
}
