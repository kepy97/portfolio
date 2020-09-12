import React from 'react';
import Sidebar from './Sidebar';
import { Redirect, Link } from "react-router-dom";
import { Helmet } from 'react-helmet'
import ReactGA from 'react-ga';

export default class BlogBody extends React.Component {
    componentDidMount() {
        window.globalFunction();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }

    handleSideBars(e) {
        this.props.history.push("/blog/index");
    }

    render() {
        const posts = this.props.postsData;
        const { params } = this.props.match
        const postData = posts.filter(post => post.url === params.url)
        if (postData.length < 1) {
            return <Redirect to={process.env.PUBLIC_URL + "/blog/index"} />
        }

        ReactGA.event({
            category: "Blog Body",
            action: "User reading specific page: " + postData[0].title,
        });

        return (
            <div>
                {/* Setting all the SEO description here */}
                <Helmet>
                    <title>{postData[0].title}</title>
                    <meta name="description" content={postData[0].description} />
                    <meta property="og:title" content={postData[0].title}></meta>
                    <meta property="og:image" content={"/images/" + postData[0].image}></meta>
                    <meta property="og:description" content={postData[0].description} />
                </Helmet>
                <div className="hero-wrap js-fullheight">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                            <div className="col-lg-10 ftco-animate d-flex align-items-center">
                                <div className="text text-center">
                                    <h1 className="mb-3 bread">{postData[0].title}</h1>
                                    <p className="breadcrumbs"><span className="mr-2"><Link to={{ pathname: `/index.html`, hash: "#home-section" }}>Home <i className="ion-ios-arrow-forward"></i></Link></span> <span className="mr-2"><Link to={{ pathname: `/blog/index` }}>Blog <i className="ion-ios-arrow-forward"></i></Link></span> <span>Post <i className="ion-ios-arrow-forward"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ftco-animate" id="post-section">
                                <div dangerouslySetInnerHTML={{ __html: postData[0].body }}/>
                                <div className="mt-5 about-author d-flex p-4 bg-light">
                                    <div className="bio mr-5">
                                        <img src="/images/profile.jpg" alt="Profile" className="img-fluid mb-4" />                         
                                    </div>
                                    <div className="desc"> 
                                        <h3><a href="https://kepy.online" target="_blank" rel="noopener noreferrer">Keyul Patel</a></h3>
                                        <p>Keyul Patel is a 22-year-old computing student who enjoys eating out, relaxing and camping. He is helpful and loveable. He is currently at college. studying computing. He is obsessed with programming.</p>
                                    </div>
                                </div>
                            </div>
                            <Sidebar postData={posts} parentSearchFilter={(e) => this.handleSideBars(e)} parentTagsFilter={(e) => this.handleSideBars(e)} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
