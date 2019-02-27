import React, {Component} from 'react';

export default class SideBar extends Component {
    render(){
        return (
            <aside className="main-sidebar">
                <section className="sidebar">
                    <div className="user-panel">
                        <div className="pull-left image">
                            <img src="img/user2-160x160.jpg" className="img-circle" alt="User Image" />
                        </div>
                        <div className="pull-left info">
                            <p>Admin user</p> 
                        </div>
                    </div>
                    <ul className="sidebar-menu" data-widget="tree">
                        <li className="header">MAIN NAVIGATION</li>
                        <li className="treeview">
                            <a href="#">
                                <i className="fa fa-home"></i>
                                <span>Home</span>
                                <span className="pull-right-container"> 
                                </span>
                            </a> 
                            <a href="#">
                                <i className="fa fa-files-o"></i>
                                <span>List</span>
                                <span className="pull-right-container"> 
                                </span>
                            </a> 
                        </li> 
                    </ul>
                </section>
            </aside> 
        )
    }
}