import React from 'react';

export default class SidebarSearch extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        return (
            <div className="sidebar-box">
                <div action="#" className="search-form">
                    <div className="form-group">
                        <span className="icon icon-search" />
                        <input type="text" className="form-control" placeholder="Search..." onChange={(e) => this.props.parentSearchFilter(e.target.value)} />
                    </div>
                </div>
            </div>
        );
    }
}
