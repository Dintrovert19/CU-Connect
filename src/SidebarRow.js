import {Avatar} from "@material-ui/core";
import React from 'react';
import "./SidebarRow.css";

function SidebarRow({src, Icon,title, link}) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src}/>}
            {Icon && <Icon/>}
            <a href = {link} target ="_blank"><h4>{title}</h4></a>
        </div>
    )
}

export default SidebarRow
