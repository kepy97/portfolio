import React from 'react';
import moment from 'moment';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const MAX_POSTS = 5;
const ref = React.createRef();
export default class BlogIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPage: Math.ceil(props.postsData.length / MAX_POSTS),
            totalPosts: props.postsData.length,
            startIndex: props.postsData.length,
            endIndex: props.postsData.length - MAX_POSTS
        };
    }

    componentDidMount() {
        window.globalFunction();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    // Changing Pagination Values to handle requested posts
    handlePaginationClick(current) {
        if (current !== this.state.currentPage) {
            let startIndex = this.state.totalPosts - ((current - 1) * MAX_POSTS)
            let endIndex = (startIndex - MAX_POSTS) < 0 ? 0 : (startIndex - MAX_POSTS);
            this.setState({
                currentPage: current,
                startIndex: startIndex,
                endIndex: endIndex
            });
        }
        this.handleScrolling();
    }

    handleScrolling() {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }

    render() {
        const posts = this.props.postsData;
        const postIndex = posts.filter(post => post.id > this.state.endIndex && post.id <= this.state.startIndex)

        return (
            <div>
                <div className="hero-wrap js-fullheight">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                            <div className="col-lg-10 ftco-animate d-flex align-items-center">
                                <div className="text text-center">
                                    <h1 className="mb-3 bread">Welcome to my journal</h1>
                                    <p className="breadcrumbs"><span className="mr-2"><Link to={{ pathname: `/index.html`, hash: "#home-section" }}>Home <i className="ion-ios-arrow-forward"></i></Link></span> <span className="mr-2">Blog <i className="ion-ios-arrow-forward"></i></span> <span>Page {this.state.currentPage} <i className="ion-ios-arrow-forward"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section" ref={ref}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ftco-animate" id="post-section">
                                {
                                    postIndex.map((post, i) => {
                                        return (
                                            <div className="blogIndexBorder" key={i}>
                                                <h2 className="mb-3"><Link to={`/blog/${post.url}`}>{post.title}</Link></h2>
                                                <p>Published on {moment(post.created).format('LLLL')}</p>
                                                <div>
                                                    <Link to={`/blog/${post.url}`}>
                                                        <div className="blogIndexImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${post.image})` }}></div>
                                                    </Link>
                                                </div>
                                                <h5>{post.description}</h5>
                                            </div>
                                        );
                                    })
                                }
                                {/* Pagination */}
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        {
                                            Array(this.state.totalPage).fill(1).map((page, index) =>
                                                <li key={index + 1} className={index + 1 === this.state.currentPage ? 'page-item active' : 'page-item'}>
                                                    <span className="page-link cursor-pointer" onClick={() => this.handlePaginationClick(index + 1)}>{index + 1}</span>
                                                </li>)
                                        }
                                        <li className="page-item disabled">
                                            <span className="page-link" >>></span>
                                        </li>
                                    </ul>
                                </nav>
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