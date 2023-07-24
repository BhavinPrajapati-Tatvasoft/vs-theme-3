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
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function closeSidebar() {
  document.body.classList.remove("show-nav");
}

const Sidebar: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <>
      <List className="sidebar">
        <ListItem data-aos="fade-right" data-aos-delay="200">
          <NavLink to="/dashboard" title="Dashboard" onClick={closeSidebar}>
            <Avatar src={dashboardIC} alt="Dashboard" />
            Dashboard
          </NavLink>
        </ListItem>
        <ListItem data-aos="fade-right" data-aos-delay="300">
          <NavLink to="/inner" title="Pages" onClick={closeSidebar}>
            <Avatar src={pagesIC} alt="Pages" />
            Pages
          </NavLink>
        </ListItem>
        <ListItem data-aos="fade-right" data-aos-delay="400">
          <NavLink to="/" title="Orders" onClick={closeSidebar}>
            <Avatar src={ordersIC} alt="Orders" />
            Orders
          </NavLink>
        </ListItem>
        <ListItem data-aos="fade-right" data-aos-delay="500">
          <NavLink to="/" title="Mails" onClick={closeSidebar}>
            <Avatar src={mailsIC} alt="Mails" />
            Mails
          </NavLink>
        </ListItem>
        <ListItem data-aos="fade-right" data-aos-delay="600">
          <NavLink to="/" title="Calendar" onClick={closeSidebar}>
            <Avatar src={calendarIC} alt="Calendar" />
            Calendar
          </NavLink>
        </ListItem>
        <ListItem data-aos="fade-right" data-aos-delay="700">
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
