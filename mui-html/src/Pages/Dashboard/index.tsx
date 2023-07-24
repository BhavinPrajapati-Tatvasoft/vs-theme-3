import * as React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../Components/Sidebar";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";

import Header from "../../Components/Header";
import CountUp from "react-countup";
import {
  Avatar,
  Card,
  Checkbox,
  IconButton,
  List,
  ListItem,
  Menu,
  MenuItem,
  Tab,
  Tabs,
} from "@mui/material";
import {
  actionIC,
  checkboxDefaultIC,
  checkboxcheckedIC,
  totalClosedIC,
  totalLeadIC,
  totalPendingIC,
  totalProfitIC,
} from "../../assets/images";
import { CircularProgressbar } from "react-circular-progressbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import TableComponent from "../../Components/Table";

// Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
export const options = {
  responsive: true,
  maintainAspectRatio: true,
  radius: 0,
  plugins: {
    legend: {
      display: false,
    },
    animation: {
      duration: 2000,
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: "#686868",
        beginAtZero: true,
      },
      grid: {
        display: false,
        drawTicks: false,
      },
    },
    y: {
      ticks: {
        color: "#686868",
        stepSize: 200,
        beginAtZero: true,
      },
      grid: {
        display: false,
        drawTicks: false,
      },
      border: {},
    },
  },
};
const labels = ["January", "February", "March", "April", "May"];
export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [300, 190, 870, 590, 420],
      fill: true,
      borderColor: "#74E4BC",
      backgroundColor: "#74E4BC",
      tension: 0.3,
    },
    {
      label: "Dataset 2",
      data: [200, 800, 200, 600, 900],
      fill: true,
      borderColor: "#D0E2FF",
      backgroundColor: "#D0E2FF",
      tension: 0.3,
    },
  ],
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// Tab
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Dashboard: React.FC = () => {
  // Tab
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (
    event: React.SyntheticEvent,
    newTabValue: number
  ) => {
    setTabValue(newTabValue);
  };

  // Menu
  const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
  const open1 = Boolean(anchorEl1);
  const handleClick1 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };

  const [anchorEl3, setAnchorEl3] = React.useState<null | HTMLElement>(null);
  const open3 = Boolean(anchorEl3);
  const handleClick3 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };

  const [anchorEl4, setAnchorEl4] = React.useState<null | HTMLElement>(null);
  const open4 = Boolean(anchorEl4);
  const handleClick4 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl4(event.currentTarget);
  };
  const handleClose4 = () => {
    setAnchorEl4(null);
  };

  const [anchorEl5, setAnchorEl5] = React.useState<null | HTMLElement>(null);
  const open5 = Boolean(anchorEl5);
  const handleClick5 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl5(event.currentTarget);
  };
  const handleClose5 = () => {
    setAnchorEl5(null);
  };

  const [anchorEl6, setAnchorEl6] = React.useState<null | HTMLElement>(null);
  const open6 = Boolean(anchorEl6);
  const handleClick6 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl6(event.currentTarget);
  };
  const handleClose6 = () => {
    setAnchorEl6(null);
  };

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <section className="main-content dashboard">
          <Typography variant="h3" className="page-title" data-aos="fade-up">
            Dashboard
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, xl: 4 }}
            sx={{ pb: { xs: "16px", xl: "32px" } }}
          >
            <Grid
              item
              xs={12}
              sm={6}
              xl={3}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Link to="#" className="statistic-card red">
                <div className="left-content">
                  <div className="statisctic-heading">
                    <Avatar src={totalProfitIC} alt="Total Profit" />
                    <Typography variant="body1">Total Profit</Typography>
                  </div>
                  <CountUp end={50123} suffix="K" separator="," />
                </div>
                <CircularProgressbar value={50} text="50%" />
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              xl={3}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Link to="#" className="statistic-card green">
                <div className="left-content">
                  <div className="statisctic-heading">
                    <Avatar src={totalPendingIC} alt="Total Pending" />
                    <Typography variant="body1">Total Pending</Typography>
                  </div>
                  <CountUp end={30123} suffix="K" separator="," />
                </div>
                <CircularProgressbar value={40} text="40%" />
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              xl={3}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link to="#" className="statistic-card blue">
                <div className="left-content">
                  <div className="statisctic-heading">
                    <Avatar src={totalClosedIC} alt="Total Closed" />
                    <Typography variant="body1">Total Closed</Typography>
                  </div>
                  <CountUp end={90123} suffix="K" separator="," />
                </div>
                <CircularProgressbar value={90} text="90%" />
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              xl={3}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <Link to="#" className="statistic-card pink">
                <div className="left-content">
                  <div className="statisctic-heading">
                    <Avatar src={totalLeadIC} alt="Total Lead" />
                    <Typography variant="body1">Total Lead</Typography>
                  </div>
                  <CountUp end={50123} suffix="K" separator="," />
                </div>
                <CircularProgressbar value={50} text="50%" />
              </Link>
            </Grid>
          </Grid>
          <Grid
            container
            spacing={{ xs: 2, xl: 4 }}
            sx={{ pb: { xs: "16px", xl: "32px" } }}
          >
            <Grid item xs={12} xl={8} data-aos="fade-up" data-aos-delay="500">
              <Card className="sales-card">
                <div className="card-header">
                  <Typography variant="h5">Sales Analysis</Typography>
                  <ul className="legend-wrapper">
                    <li>
                      <span className="blue"></span>
                      Daily Sales
                    </li>
                    <li>
                      <span className="green"></span>
                      Monthly Sales
                    </li>
                  </ul>
                </div>
                <Line options={options} data={data} />
              </Card>
            </Grid>
            <Grid item xs={12} xl={4} data-aos="fade-up" data-aos-delay="600">
              <Card className="todo-list">
                <div className="card-header">
                  <Typography variant="h5">To Do List</Typography>
                  <IconButton
                    id="button1"
                    aria-controls={open1 ? "menu1" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open1 ? "true" : undefined}
                    onClick={handleClick1}
                    color="primary"
                  >
                    <Avatar src={actionIC} alt="Action" />
                  </IconButton>
                  <Menu
                    id="menu1"
                    aria-labelledby="button1"
                    anchorEl={anchorEl1}
                    open={open1}
                    onClose={handleClose1}
                    anchorOrigin={{
                      vertical: "bottom",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleClose1}>Item 1</MenuItem>
                    <MenuItem onClick={handleClose1}>Item 2</MenuItem>
                    <MenuItem onClick={handleClose1}>Item 3</MenuItem>
                  </Menu>
                </div>
                <Tabs
                  value={tabValue}
                  onChange={handleTabChange}
                  scrollButtons="auto"
                  // variant="scrollable"
                  aria-label="basic tabs example"
                  variant="fullWidth"
                >
                  <Tab label="Today" {...a11yProps(0)} />
                  <Tab label="This Week" {...a11yProps(1)} />
                  <Tab label="This Month" {...a11yProps(2)} />
                </Tabs>
                <CustomTabPanel value={tabValue} index={0}>
                  <List className="todo-list-outer">
                    <ListItem>
                      <Checkbox
                        defaultChecked
                        icon={<Avatar src={checkboxDefaultIC} alt="Checkbox" />}
                        checkedIcon={
                          <Avatar src={checkboxcheckedIC} alt="Checkbox" />
                        }
                      />
                      <div className="content-box">
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        id="button2"
                        aria-controls={open2 ? "menu2" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open2 ? "true" : undefined}
                        onClick={handleClick2}
                        color="primary"
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu2"
                        aria-labelledby="button2"
                        anchorEl={anchorEl2}
                        open={open2}
                        onClose={handleClose2}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose2}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose2}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose2}>Item 3</MenuItem>
                      </Menu>
                    </ListItem>
                    <ListItem>
                      <Checkbox
                        icon={<Avatar src={checkboxDefaultIC} alt="Checkbox" />}
                        checkedIcon={
                          <Avatar src={checkboxcheckedIC} alt="Checkbox" />
                        }
                      />
                      <div className="content-box">
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        color="primary"
                        id="button3"
                        aria-controls={open3 ? "menu3" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open3 ? "true" : undefined}
                        onClick={handleClick3}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu3"
                        aria-labelledby="button3"
                        anchorEl={anchorEl3}
                        open={open3}
                        onClose={handleClose3}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose3}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose3}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose3}>Item 3</MenuItem>
                      </Menu>
                    </ListItem>
                    <ListItem>
                      <Checkbox
                        icon={<Avatar src={checkboxDefaultIC} alt="Checkbox" />}
                        checkedIcon={
                          <Avatar src={checkboxcheckedIC} alt="Checkbox" />
                        }
                      />
                      <div className="content-box">
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        color="primary"
                        id="button4"
                        aria-controls={open4 ? "menu4" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open4 ? "true" : undefined}
                        onClick={handleClick4}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu4"
                        aria-labelledby="button4"
                        anchorEl={anchorEl4}
                        open={open4}
                        onClose={handleClose4}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose4}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose4}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose4}>Item 3</MenuItem>
                      </Menu>
                    </ListItem>
                    <ListItem>
                      <Checkbox
                        icon={<Avatar src={checkboxDefaultIC} alt="Checkbox" />}
                        checkedIcon={
                          <Avatar src={checkboxcheckedIC} alt="Checkbox" />
                        }
                      />
                      <div className="content-box">
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        id="button5"
                        color="primary"
                        aria-controls={open5 ? "menu5" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open5 ? "true" : undefined}
                        onClick={handleClick5}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu5"
                        aria-labelledby="button5"
                        anchorEl={anchorEl5}
                        open={open5}
                        onClose={handleClose5}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose5}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose5}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose5}>Item 3</MenuItem>
                      </Menu>
                    </ListItem>
                    <ListItem>
                      <Checkbox
                        icon={<Avatar src={checkboxDefaultIC} alt="Checkbox" />}
                        checkedIcon={
                          <Avatar src={checkboxcheckedIC} alt="Checkbox" />
                        }
                      />
                      <div className="content-box">
                        <Typography variant="body1">
                          Lorem ipsum dolor sit amet
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        color="primary"
                        id="button6"
                        aria-controls={open6 ? "menu6" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open6 ? "true" : undefined}
                        onClick={handleClick6}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu6"
                        aria-labelledby="button6"
                        anchorEl={anchorEl6}
                        open={open6}
                        onClose={handleClose6}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose6}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose6}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose6}>Item 3</MenuItem>
                      </Menu>
                    </ListItem>
                  </List>
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={1}>
                  Item Two
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={2}>
                  Item Three
                </CustomTabPanel>
              </Card>
            </Grid>
          </Grid>
          <div data-aos="fade-up" data-aos-delay="600">
            <TableComponent />
          </div>
          <section
            className="copyright"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p>Copyright 2021. All rights reserved</p>
          </section>
        </section>
      </div>
    </>
  );
};
export default Dashboard;
