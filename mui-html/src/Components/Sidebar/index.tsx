import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { NavLink } from "react-router-dom";

import { Avatar } from "@mui/material";
import {
  calendarIC,
  dashboardIC,
  helpIC,
  mailsIC,
  ordersIC,
  pagesIC,
} from "../../assets/images";

function closeSidebar() {
  document.body.classList.remove("show-nav");
}

const Sidebar: React.FC = () => {
  return (
    <>
      <List className="sidebar">
        <ListItem>
          <NavLink to="/dashboard" title="Dashboard" onClick={closeSidebar}>
            <Avatar src={dashboardIC} alt="Dashboard" />
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/inner" title="Pages" onClick={closeSidebar}>
            <Avatar src={pagesIC} alt="Pages" />
            Pages
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/" title="Orders" onClick={closeSidebar}>
            <Avatar src={ordersIC} alt="Orders" />
            Orders
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/" title="Mails" onClick={closeSidebar}>
            <Avatar src={mailsIC} alt="Mails" />
            Mails
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/" title="Calendar" onClick={closeSidebar}>
            <Avatar src={calendarIC} alt="Calendar" />
            Calendar
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink to="/" title="Help" onClick={closeSidebar}>
            <Avatar src={helpIC} alt="Help" />
            Help
          </NavLink>
        </ListItem>
      </List>
    </>
  );
};
export default Sidebar;
