import * as React from "react";
import { Helmet } from "react-helmet";
import Sidebar from "../../Components/Sidebar";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import { TableAction } from "../../Components/TableAction";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Header from "../../Components/Header";
import CountUp from "react-countup";
import { Avatar } from "@mui/material";

const Dashboard: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <section className="main-content dashboard">
          <Typography variant="h3" className="page-title target">
            Dashboard
          </Typography>
        </section>
      </div>
    </>
  );
};
export default Dashboard;
