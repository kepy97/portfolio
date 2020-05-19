import React from 'react';
import { Route, Switch} from 'react-router-dom'

import blogData from "../data/blog_data.json";
import IndexBody from "./BodyComponents/Index/IndexBody";
import BlogBody from "./BodyComponents/Blog/BlogBody";
import BlogIndex from "./BodyComponents/Blog/BlogIndex";

const postsDataSorted = blogData.posts
						.slice()
						.sort((a, b) => 
							new Date(b.created) - new Date(a.created
						))

export default class Body extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + "/blog/index"} render={(props) => <BlogIndex {...props} postsData={postsDataSorted} />} />
                <Route path={process.env.PUBLIC_URL + "/blog/:url"} render={(props) => <BlogBody {...props} postsData={postsDataSorted} />} />
                <Route path={process.env.PUBLIC_URL + "/"} render={(props) => <IndexBody {...props} postsData={postsDataSorted} />} />
            </Switch>
        );
    }
}
