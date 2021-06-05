import React from 'react'
import"./Sidebar.css";

import SidebarRow from './SidebarRow';
import NotesIcon from '@material-ui/icons/Notes';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import AssessmentIcon from '@material-ui/icons/Assessment';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import TableChartIcon from '@material-ui/icons/TableChart';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{user},dispatch]=useStateValue();
    return (
        <div className="sidebar sidebar--active">
            <SidebarRow src={user.photoURL} title={user.displayName}/>
                <SidebarRow Icon={NotesIcon} title="Notes" link="https://sites.google.com/view/cu-connect/"/> 
                <SidebarRow Icon={MenuBookIcon} title="Previous Year Papers" link="https://sites.google.com/view/cu-connect/questions"/>
                <SidebarRow Icon={AssessmentIcon} title="Attendance Calculator" link="https://sites.google.com/view/cu-connect/attendance-calculator"/>
                <SidebarRow Icon={LibraryBooksIcon} title="Digital Copy Of Books" link="https://sites.google.com/view/cu-connect/books"/>
                <SidebarRow Icon={TableChartIcon} title="Time Table" link="https://sites.google.com/view/cu-connect/timetable"/>

        </div>
    )
}

export default Sidebar
