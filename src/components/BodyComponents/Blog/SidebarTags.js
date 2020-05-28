import React from 'react';

export default class SidebarTags extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTags: ["Show All"]
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.selectedTags !== nextState.selectedTags;
    }

    handleTagClick (tag) {
        var newTags = this.state.selectedTags;
        // Clicked tag is Show All
        if (tag === "Show All") {
            newTags = ["Show All"];
        }
        // Clicked tag is already in the array so removing it 
        else if (this.state.selectedTags.indexOf(tag) !== -1) {
            let index = this.state.selectedTags.indexOf(tag);
            if (index > -1) {
                newTags.splice(index, 1);
            }
            if (newTags.length === 0) {
                newTags = ["Show All"];
            }
        } 
        // Clicked tag is new so updating the array
        else {
            // Removing Show All if there is 
            let index = newTags.indexOf("Show All");
            if (index > -1) {
                newTags.splice(index, 1);
            }
            newTags = newTags.concat(tag);
        }
        this.setState({
            selectedTags: newTags
        }, () => {
            this.props.parentTagsFilter(this.state.selectedTags);
        });
    }

    render() {
        let posts = this.props.postData;
        const tagsCloud = ["Show All"];
        posts.map((post, i) => post.tags.map((tag, j) => tagsCloud.indexOf(tag) === -1 ? tagsCloud.push(tag) : null));

        return (
            <div className="sidebar-box ftco-animate">
                <h3 className="heading-sidebar">Tags</h3>
                <div className="tagcloud">
                    {
                        tagsCloud.map((tag, i) => {
                            return (
                                <span className={this.state.selectedTags.indexOf(tag) !== -1 ? "tag-cloud-link tag-active" : "tag-cloud-link"} key={i} onClick={(e) => this.handleTagClick(e.target.textContent)}>{tag}</span>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
