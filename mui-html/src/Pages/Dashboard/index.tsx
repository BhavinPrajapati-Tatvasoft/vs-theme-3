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
      pointBackgroundColor: "#23C68B",
      pointBorderWidth: 2,
      pointBorderColor: "#23C68B",
    },
    {
      label: "Dataset 2",
      data: [200, 800, 200, 600, 900],
      fill: true,
      borderColor: "#D0E2FF",
      backgroundColor: "#D0E2FF",
      tension: 0.3,
      pointBackgroundColor: "#5096FF",
      pointBorderWidth: 2,
      pointBorderColor: "#5096FF",
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

  const [anchorEl7, setAnchorEl7] = React.useState<null | HTMLElement>(null);
  const open7 = Boolean(anchorEl7);
  const handleClick7 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl7(event.currentTarget);
  };
  const handleClose7 = () => {
    setAnchorEl7(null);
  };

  const [anchorEl8, setAnchorEl8] = React.useState<null | HTMLElement>(null);
  const open8 = Boolean(anchorEl8);
  const handleClick8 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl8(event.currentTarget);
  };
  const handleClose8 = () => {
    setAnchorEl8(null);
  };

  const [anchorEl9, setAnchorEl9] = React.useState<null | HTMLElement>(null);
  const open9 = Boolean(anchorEl9);
  const handleClick9 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl9(event.currentTarget);
  };
  const handleClose9 = () => {
    setAnchorEl9(null);
  };

  const [anchorEl10, setAnchorEl10] = React.useState<null | HTMLElement>(null);
  const open10 = Boolean(anchorEl10);
  const handleClick10 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl10(event.currentTarget);
  };
  const handleClose10 = () => {
    setAnchorEl10(null);
  };

  const [anchorEl11, setAnchorEl11] = React.useState<null | HTMLElement>(null);
  const open11 = Boolean(anchorEl11);
  const handleClick11 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl11(event.currentTarget);
  };
  const handleClose11 = () => {
    setAnchorEl11(null);
  };

  const [anchorEl12, setAnchorEl12] = React.useState<null | HTMLElement>(null);
  const open12 = Boolean(anchorEl12);
  const handleClick12 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl12(event.currentTarget);
  };
  const handleClose12 = () => {
    setAnchorEl12(null);
  };

  const [anchorEl13, setAnchorEl13] = React.useState<null | HTMLElement>(null);
  const open13 = Boolean(anchorEl13);
  const handleClick13 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl13(event.currentTarget);
  };
  const handleClose13 = () => {
    setAnchorEl13(null);
  };

  const [anchorEl14, setAnchorEl14] = React.useState<null | HTMLElement>(null);
  const open14 = Boolean(anchorEl14);
  const handleClick14 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl14(event.currentTarget);
  };
  const handleClose14 = () => {
    setAnchorEl14(null);
  };

  const [anchorEl15, setAnchorEl15] = React.useState<null | HTMLElement>(null);
  const open15 = Boolean(anchorEl15);
  const handleClick15 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl15(event.currentTarget);
  };
  const handleClose15 = () => {
    setAnchorEl15(null);
  };

  const [anchorEl16, setAnchorEl16] = React.useState<null | HTMLElement>(null);
  const open16 = Boolean(anchorEl16);
  const handleClick16 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl16(event.currentTarget);
  };
  const handleClose16 = () => {
    setAnchorEl16(null);
  };

  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        duration: 500,
        easing: "ease-out",
        once: true,
      });
    }, 1000);
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
          <Typography
            variant="h3"
            className="page-title"
            data-aos="fade-in"
            data-aos-delay="200"
          >
            Dashboard
          </Typography>

          {/* Statisctics Start */}
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
                  <div className="number">
                    <CountUp end={50123} separator="," />
                    <span>K</span>
                  </div>
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
                  <div className="number">
                    <CountUp end={30123} separator="," />
                    <span>K</span>
                  </div>
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
                  <div className="number">
                    <CountUp end={90123} separator="," />
                    <span>K</span>
                  </div>
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
                  <div className="number">
                    <CountUp end={50123} separator="," />
                    <span>K</span>
                  </div>
                </div>
                <CircularProgressbar value={50} text="50%" />
              </Link>
            </Grid>
          </Grid>
          {/* Statisctics End */}

          <Grid
            container
            spacing={{ xs: 2, xl: 4 }}
            sx={{ pb: { xs: "16px", xl: "32px" } }}
          >
            {/* Sales Analysis Chart Start */}
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
            {/* Sales Analysis Chart End */}

            {/* Todo List Start */}
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
                  <List className="todo-list-outer">
                    <ListItem>
                      <Checkbox
                        icon={<Avatar src={checkboxDefaultIC} alt="Checkbox" />}
                        checkedIcon={
                          <Avatar src={checkboxcheckedIC} alt="Checkbox" />
                        }
                      />
                      <div className="content-box">
                        <Typography variant="body1">
                          Lorem ipsum dolor sit
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        id="button7"
                        aria-controls={open7 ? "menu7" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open7 ? "true" : undefined}
                        onClick={handleClick7}
                        color="primary"
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu7"
                        aria-labelledby="button7"
                        anchorEl={anchorEl7}
                        open={open7}
                        onClose={handleClose7}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose7}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose7}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose7}>Item 3</MenuItem>
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
                          Lorem dolor sit amet
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        color="primary"
                        id="button8"
                        aria-controls={open8 ? "menu8" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open8 ? "true" : undefined}
                        onClick={handleClick8}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu8"
                        aria-labelledby="button8"
                        anchorEl={anchorEl8}
                        open={open8}
                        onClose={handleClose8}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose8}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose8}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose8}>Item 3</MenuItem>
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
                        id="button9"
                        aria-controls={open9 ? "menu9" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open9 ? "true" : undefined}
                        onClick={handleClick9}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu9"
                        aria-labelledby="button9"
                        anchorEl={anchorEl9}
                        open={open9}
                        onClose={handleClose9}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose9}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose9}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose9}>Item 3</MenuItem>
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
                          Lorem ipsum dolor amet
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        id="button10"
                        color="primary"
                        aria-controls={open10 ? "menu10" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open10 ? "true" : undefined}
                        onClick={handleClick10}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu10"
                        aria-labelledby="button10"
                        anchorEl={anchorEl10}
                        open={open10}
                        onClose={handleClose10}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose10}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose10}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose10}>Item 3</MenuItem>
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
                        id="button11"
                        aria-controls={open11 ? "menu11" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open11 ? "true" : undefined}
                        onClick={handleClick11}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu11"
                        aria-labelledby="button11"
                        anchorEl={anchorEl11}
                        open={open11}
                        onClose={handleClose11}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose11}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose11}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose11}>Item 3</MenuItem>
                      </Menu>
                    </ListItem>
                  </List>
                </CustomTabPanel>
                <CustomTabPanel value={tabValue} index={2}>
                  <List className="todo-list-outer">
                    <ListItem>
                      <Checkbox
                        icon={<Avatar src={checkboxDefaultIC} alt="Checkbox" />}
                        checkedIcon={
                          <Avatar src={checkboxcheckedIC} alt="Checkbox" />
                        }
                      />
                      <div className="content-box">
                        <Typography variant="body1">Lorem ipsum</Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        id="button12"
                        aria-controls={open12 ? "menu12" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open12 ? "true" : undefined}
                        onClick={handleClick12}
                        color="primary"
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu12"
                        aria-labelledby="button12"
                        anchorEl={anchorEl12}
                        open={open12}
                        onClose={handleClose12}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose12}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose12}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose12}>Item 3</MenuItem>
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
                          Lorem ipsum dolor
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        color="primary"
                        id="button13"
                        aria-controls={open13 ? "menu13" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open13 ? "true" : undefined}
                        onClick={handleClick13}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu13"
                        aria-labelledby="button13"
                        anchorEl={anchorEl13}
                        open={open13}
                        onClose={handleClose13}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose13}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose13}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose13}>Item 3</MenuItem>
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
                        id="button14"
                        aria-controls={open14 ? "menu14" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open14 ? "true" : undefined}
                        onClick={handleClick14}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu14"
                        aria-labelledby="button14"
                        anchorEl={anchorEl14}
                        open={open14}
                        onClose={handleClose14}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose14}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose14}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose14}>Item 3</MenuItem>
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
                          Lorem ipsum sit amet
                        </Typography>
                        <Typography variant="body2">26 Jan 2021</Typography>
                      </div>
                      <IconButton
                        id="button15"
                        color="primary"
                        aria-controls={open15 ? "menu15" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open15 ? "true" : undefined}
                        onClick={handleClick15}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu15"
                        aria-labelledby="button15"
                        anchorEl={anchorEl15}
                        open={open15}
                        onClose={handleClose15}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose15}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose15}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose15}>Item 3</MenuItem>
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
                        id="button16"
                        aria-controls={open16 ? "menu16" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open16 ? "true" : undefined}
                        onClick={handleClick16}
                      >
                        <Avatar src={actionIC} alt="Action" />
                      </IconButton>
                      <Menu
                        id="menu16"
                        aria-labelledby="button16"
                        anchorEl={anchorEl16}
                        open={open16}
                        onClose={handleClose16}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "right",
                        }}
                      >
                        <MenuItem onClick={handleClose16}>Item 1</MenuItem>
                        <MenuItem onClick={handleClose16}>Item 2</MenuItem>
                        <MenuItem onClick={handleClose16}>Item 3</MenuItem>
                      </Menu>
                    </ListItem>
                  </List>
                </CustomTabPanel>
              </Card>
            </Grid>
            {/* Todo List End */}
          </Grid>

          {/* Table Start */}
          <div data-aos="fade-up" data-aos-delay="600">
            <TableComponent />
          </div>
          {/* Table End */}
          <section className="copyright">
            <p>Copyright 2021. All rights reserved</p>
          </section>
        </section>
      </div>
    </>
  );
};
export default Dashboard;
