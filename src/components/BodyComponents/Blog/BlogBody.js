import React from 'react';
import Sidebar from './Sidebar';
import { Redirect, Link } from "react-router-dom";

export default class BlogBody extends React.Component {
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
        const { params } = this.props.match
        const postData = posts.filter(post => post.url === params.url)
        if (postData.length < 1) {
            return <Redirect to={process.env.PUBLIC_URL + "/blog/index"} />
        }
        return (
            <div>
                <div className="hero-wrap js-fullheight">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                            <div className="col-lg-10 ftco-animate d-flex align-items-center">
                                <div className="text text-center">
                                    <h1 className="mb-3 bread">{postData[0].title}</h1>
                                    <p className="breadcrumbs"><span class="mr-2"><Link to={{pathname: `/index.html`, hash: "#home-section"}}>Home <i className="ion-ios-arrow-forward"></i></Link></span> <span className="mr-2"><Link to={{pathname: `/blog/index`}}>Blog <i className="ion-ios-arrow-forward"></i></Link></span> <span>Post <i className="ion-ios-arrow-forward"></i></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 ftco-animate" id="post-section">
                                <div dangerouslySetInnerHTML={{ __html: postData[0].body }} />
                            </div>
                            <Sidebar postData={posts} />
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
