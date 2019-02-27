import React, {Component} from 'react';

export default class Header extends Component {
    render(){
        return (
            <header className="main-header">
                <a href="#" className="logo">
                    <span className="logo-mini"><b>A</b>LT</span>
                    <span className="logo-lg"><b>Dashboard</b> App</span>
                </a>
                <nav className="navbar navbar-static-top" style={{padding: '5px' ,border: '1px solid #cccc', background: '#380dc2'}}>
                     
                </nav>
            </header>
        )
    }
}