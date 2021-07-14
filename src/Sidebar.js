import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css";

function Sidebar() {
    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    );


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img 
                src="https://i.ytimg.com/vi/ASskDwAp5GU/maxresdefault.jpg"
                alt="" 
                />
                <Avatar className="sidebar__avatar" />
                <h2>N.Chijioke</h2>
                <h1>Chijioke100@gmail.com</h1>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2,543</p>
                </div>
                <div className="sidebar__stat">
                    <p>Views on post</p>
                    <p className="sidebar__statNumber">2,448</p>
                </div>
            </div>

            <div className="sidebar__buttom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("promamming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    );
}

export default Sidebar;
