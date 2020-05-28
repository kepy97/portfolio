import React from 'react';
import SidebarRecentPosts from "./SidebarRecentPosts";
import SidebarSearch from "./SidebarSearch";
import SidebarTags from "./SidebarTags";

export default class Sidebar extends React.Component {
    render() {
        return (
            <div className="col-lg-4 sidebar ftco-animate">
                <SidebarSearch {...this.props} />
                <SidebarTags {...this.props} />
                <SidebarRecentPosts {...this.props} />
            </div>
        );
    }
}
