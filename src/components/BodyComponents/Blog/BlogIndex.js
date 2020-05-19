import React from 'react';
import moment from 'moment';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

export default class BlogIndex extends React.Component {
    componentDidMount() {
        window.globalFunction();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    render() {
        const posts = this.props.postsData;
        return (
            <div>
                <div className="hero-wrap js-fullheight">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                            <div className="col-lg-10 ftco-animate d-flex align-items-center">
                                <div className="text text-center">
                                    <h1 className="mb-3 bread">Welcome to my journal</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ftco-animate" id="post-section">
                                {
                                    posts.map((post, i) => {
                                        return (
                                            <div className="blogIndexBorder" key={i}>
                                                <h2 className="mb-3"><Link to={`/blog/${post.url}`}>{post.title}</Link></h2>
                                                <p>Published on {moment(post.created).format('LLLL')}</p>
                                                <p>
                                                    <Link to={`/blog/${post.url}`}>
                                                        <img src={process.env.PUBLIC_URL + "/images/" + post.image} alt="" className="img-fluid" />
                                                    </Link>
                                                </p>
                                                <h5>{post.description}</h5>
                                            </div>
                                        );
                                    })
                                }
                                {/* Pagination */}
                                {/* <nav aria-label="Page navigation example">
                                    <ul class="pagination justify-content-center">
                                        <li class="page-item active"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">4</a></li>
                                        <li class="page-item"><a class="page-link" href="#">5</a></li>
                                        <li class="page-item disabled">
                                            <a class="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav> */}
                                {/* Pagination */}
                            </div>
                            <Sidebar postData={posts} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
