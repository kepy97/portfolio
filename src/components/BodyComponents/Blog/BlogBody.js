import React from 'react';
import blogData from "../../../data/blog_data.json";

const posts = blogData.posts;
export default class Body extends React.Component {
    render() {
        const { params } = this.props.match
        const postData = posts.filter(post => post.url === params.url)
        return (
            <div>
                <div className="hero-wrap js-fullheight">
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
                            <div className="col-lg-10 ftco-animate d-flex align-items-center">
                                <div className="text text-center">
                                    <h1 className="mb-3 bread">{postData[0].title}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="ftco-section">
                    <div className="container">
                    <div className="row">
                    <div className="col-lg-8 ftco-animate">
                        <div dangerouslySetInnerHTML={{ __html: postData[0].body }} />
                    </div>
                    </div>
                    </div>
                </section>
            </div>
        );
    }
}
