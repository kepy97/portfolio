import React from 'react';
import moment from 'moment';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'

const MAX_POSTS = 10;
const ref = React.createRef();
export default class BlogIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            totalPage: Math.ceil(props.postsData.length / MAX_POSTS),
            totalPosts: props.postsData.length,
            startIndex: 0,
            endIndex: MAX_POSTS,
            allPostData: props.postsData
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
            let startIndex = (current - 1) * MAX_POSTS
            let endIndex = current * MAX_POSTS
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

    // Filter based on blog body or title based on search keyword from sidebar
    handleSearchFilter(keyword) {
        const filteredAllPostData = this.props.postsData.filter(post => post.body.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 || post.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1);
        this.setStateData(filteredAllPostData);
    }

    handleTagsFilter(tag) {
        let filteredAllPostData = this.props.postsData;
        if (tag.indexOf("Show All") === -1) {
            filteredAllPostData = filteredAllPostData.filter(function (post) {
                var flag = false;
                tag.forEach(element => {
                    if (post.tags.indexOf(element) > -1) {
                        flag = true;
                    }
                });
                return flag;
            });
        }
        this.setStateData(filteredAllPostData);
    }

    setStateData(_postData) {
        const filteredTotalPosts = _postData.length;
        this.setState({
            allPostData: _postData,
            currentPage: 1,
            totalPage: Math.ceil(filteredTotalPosts / MAX_POSTS),
            totalPosts: filteredTotalPosts,
            startIndex: 0,
            endIndex: MAX_POSTS,
        });
    }

    render() {
        const posts = this.state.allPostData;
        const postIndex = posts.slice(this.state.startIndex, this.state.endIndex);
        return (
            <div>
                {/* Setting all the SEO description here */}
                <Helmet>
                    <title>Keyul Patel's journal</title>
                    <meta name="description" content="Here you will find useful tips, my experiences, life hacks and the usual daily thoughts about everything that surrounds me." />
                    <meta property="og:image" content={"/images/profile.jpg"}></meta>
                    <meta property="og:description" content="Here you will find useful tips, my experiences, life hacks and the usual daily thoughts about everything that surrounds me." />
                </Helmet>
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
                                                <h5 className="mt-3">{post.description}</h5>
                                                <div className="mt-1">
                                                    <Link to={`/blog/${post.url}`}>
                                                        <button type="button" className="btn btn-outline-primary btn-lg">Read More</button>
                                                    </Link>
                                                </div>
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
                            <Sidebar postData={this.props.postsData} parentSearchFilter={(e) => this.handleSearchFilter(e)} parentTagsFilter={(e) => this.handleTagsFilter(e)} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
