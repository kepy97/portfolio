import React from 'react';
import moment from 'moment';
import { HashLink as Link } from 'react-router-hash-link';

const MAX_POSTS = 3;
export default class BlogBanner extends React.Component {
  render() {
    let posts = this.props.postsData;
    posts = posts.slice(0, MAX_POSTS);
    return (
      <section className="ftco-section" id="blog-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <div className="col-md-7 heading-section text-center ftco-animate">
              <h2 className="mb-4">Recent Posts</h2>
              <p>Anyone can write code that a computer can understand. Good programmers write code that anyone can understand.</p>
            </div>
          </div>
          <div className="row d-flex">
            {
              posts.map((post, i) => {
                return (
                  <div className="col-md-4 d-flex ftco-animate" key={i}>
                    <div className="blog-entry justify-content-end blogBannerPost">
                      <Link to={{ pathname: `/blog/${post.url}`, hash: "#post-section" }}>
                        <div className="block-20" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/${post.image})` }}></div>
                      </Link>
                      <div className="text mt-3 float-right d-block">
                        <h3 className="heading"><Link to={{ pathname: `/blog/${post.url}`, hash: "#post-section" }}>{post.title}</Link></h3>
                        <div className="d-flex align-items-center mb-3 meta">
                          <p className="mb-0">
                            <span className="mr-2">{moment(post.created).format('LLLL')}</span>
                          </p>
                        </div>
                        <p>{post.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            }
            <div className="blogBannerButton">

              <Link to={{ pathname: `/blog/index` }}>
                <div className="btn btn-primary py-3 px-3">
                  View More
                  </div>
              </Link>

            </div>
          </div>
        </div>
      </section>
    );
  }
}
