import {
  Avatar,
  Badge,
  Button,
  FormControl,
  Hidden,
  InputAdornment,
  Typography,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import {
  downArrowIC,
  logo,
  logoutIC,
  menuIC,
  notificationsIC,
  profileIC,
  searchBlackIC,
  searchIC,
  settingsIC,
  userImg,
} from "../../assets/images";

const Header: React.FC = () => {
  const [anchorProfileEl, setAnchorProfileEl] =
    React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorProfileEl);
  const handleProfileClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorProfileEl(event.currentTarget);
  };
  const handleProfileClose = () => {
    setAnchorProfileEl(null);
  };

  const [anchorNotificationEl, setAnchorNotificationEl] =
    React.useState<null | HTMLElement>(null);
  const openNotification = Boolean(anchorNotificationEl);
  const handleNotificationClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorNotificationEl(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setAnchorNotificationEl(null);
  };

  return (
    <>
      <div
        className="overlay"
        onClick={(e) =>
          document.body.classList.remove("show-nav", "show-searchbar")
        }
      ></div>
      <header className="header">
        <Link to="/" title="Logo" className="logo">
          <Avatar src={logo} alt="Logo" />
          <Typography variant="caption">MY THEME</Typography>
        </Link>
        <IconButton
          onClick={(e) => document.body.classList.toggle("show-nav")}
          className="nav-toggler"
          color="primary"
        >
          <Avatar src={menuIC} alt="Menu" />
        </IconButton>
        <FormControl variant="outlined">
          <OutlinedInput
            id="search"
            placeholder="Search Here..."
            type="text"
            startAdornment={
              <InputAdornment position="start">
                <IconButton edge="start" color="primary">
                  <Avatar src={searchIC} alt="Search" />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Hidden smUp>
          <IconButton
            color="primary"
            className="search-btn"
            onClick={(e) => document.body.classList.toggle("show-searchbar")}
          >
            <Avatar src={searchBlackIC} alt="Searcg" />
          </IconButton>
        </Hidden>
        <IconButton
          id="notification-button"
          aria-controls={openNotification ? "notification-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openNotification ? "true" : undefined}
          onClick={handleNotificationClick}
          className="notification-btn"
          color="primary"
        >
          <Badge badgeContent={2} color="primary">
            <Avatar src={notificationsIC} alt="Notification" />
          </Badge>
        </IconButton>
        <Menu
          id="notification-menu"
          anchorEl={anchorNotificationEl}
          open={openNotification}
          onClose={handleNotificationClose}
          MenuListProps={{
            "aria-labelledby": "notification-button",
          }}
          className="notification-menu"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={handleNotificationClose}>
            <Typography variant="body1">Notification</Typography>
          </MenuItem>
          <MenuItem onClick={handleNotificationClose}>
            <Typography variant="body1">Lorem ipsum amet</Typography>
            <Typography variant="body2">18 Dec 2021</Typography>
          </MenuItem>
          <MenuItem onClick={handleNotificationClose}>
            <Typography variant="body1">Lorem ipsum amet</Typography>
            <Typography variant="body2">18 Dec 2021</Typography>
          </MenuItem>
          <MenuItem onClick={handleNotificationClose}>
            <Typography variant="body1">Lorem ipsum amet</Typography>
            <Typography variant="body2">18 Dec 2021</Typography>
          </MenuItem>
          <MenuItem onClick={handleNotificationClose}>
            <Typography variant="body1">Lorem ipsum amet</Typography>
            <Typography variant="body2">18 Dec 2021</Typography>
          </MenuItem>
          <MenuItem onClick={handleNotificationClose}>
            <Typography variant="body1">Lorem ipsum amet</Typography>
            <Typography variant="body2">18 Dec 2021</Typography>
          </MenuItem>
        </Menu>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleProfileClick}
          variant="text"
          color="primary"
          className="profile-btn"
        >
          <Avatar src={userImg} alt="User Profile" />
          <Typography variant="body1">Jane Cooper</Typography>
          <Avatar src={downArrowIC} alt="Down Arrow" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorProfileEl}
          open={open}
          onClose={handleProfileClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          className="profile-menu"
        >
          <MenuItem onClick={handleProfileClose}>
            <Avatar src={profileIC} alt="Profile" />
            <Typography variant="body1">Profile</Typography>
          </MenuItem>
          <MenuItem onClick={handleProfileClose}>
            <Avatar src={settingsIC} alt="Setting" />
            <Typography variant="body1">Setting</Typography>
          </MenuItem>
          <MenuItem onClick={handleProfileClose} component={Link} to="/login">
            <Avatar src={logoutIC} alt="Logout" />
            <Typography variant="body1">Logout</Typography>
          </MenuItem>
        </Menu>
      </header>
    </>
  );
};
export default Header;
