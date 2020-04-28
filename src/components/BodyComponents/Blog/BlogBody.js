import React from 'react';
import Post from './Post';

export default class BlogBody extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <Post match={this.props.match}/>
            </div>
        );
    }
}
