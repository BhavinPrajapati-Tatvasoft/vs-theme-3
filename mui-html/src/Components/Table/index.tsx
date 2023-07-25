import {
  Avatar,
  Button,
  Card,
  FormControl,
  IconButton,
  InputAdornment,
  Menu,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  deleteIC,
  downArrowIC,
  editIC,
  searchIC,
  sortAescIC,
  sortDefaultIC,
  sortDescIC,
} from "../../assets/images";
import * as React from "react";

const TableComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function sortAsecIcon() {
    return <Avatar src={sortAescIC} />;
  }
  function sortDescIcon() {
    return <Avatar src={sortDescIC} />;
  }
  function sortDefaultIcon() {
    return <Avatar src={sortDefaultIC} />;
  }
  // Data Table
  const columns: GridColDef[] = [
    {
      field: "no",
      headerName: "No.",
      minWidth: 70,
      align: "left",
      headerAlign: "left",
    },
    { field: "name", headerName: "Name", flex: 0.8, minWidth: 170 },
    { field: "email", headerName: "Email", flex: 1.2, minWidth: 300 },
    {
      field: "phone",
      headerName: "Phone",
      type: "number",
      align: "left",
      headerAlign: "left",
      flex: 1,
      minWidth: 170,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      minWidth: 150,
      renderCell: (data: any) => {
        let statusClassName = "";
        switch (data.row.status) {
          case "Pending":
            statusClassName = "orange";
            break;
          case "Done":
            statusClassName = "green";
            break;
          case "Cancelled":
            statusClassName = "red";
            break;
          default:
            break;
        }
        return (
          <span className={`status ${statusClassName}`}>{data.row.status}</span>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: () => (
        <>
          <IconButton color="primary">
            <Avatar src={editIC} alt="Edit" />
          </IconButton>
          <IconButton color="primary">
            <Avatar src={deleteIC} alt="Delete" />
          </IconButton>
        </>
      ),
    },
  ];

  const rows = [
    {
      id: 1,
      no: 1,
      name: "Bessie Cooper",
      email: "jackson.graham@example.com",
      phone: "(808) 555-0111",
      status: "Done",
    },
    {
      id: 2,
      no: 2,
      name: "Eleanor Pena",
      email: "sara.cruz@example.com",
      phone: "(480) 555-0103",
      status: "Pending",
    },
    {
      id: 3,
      no: 3,
      name: "Darrell Steward",
      email: "willie.jennings@example.com",
      phone: "(684) 555-0102",
      status: "Cancelled",
    },
    {
      id: 4,
      no: 4,
      name: "Kristin Watson",
      email: "tanya.hill@example.com",
      phone: "(307) 555-0133",
      status: "Pending",
    },
    {
      id: 5,
      no: 5,
      name: "Annette Black",
      email: "nathan.roberts@example.com",
      phone: "(316) 555-0116",
      status: "Pending",
    },
    {
      id: 6,
      no: 6,
      name: "Albert Flores",
      email: "debra.holt@example.com",
      phone: "(303) 555-0105",
      status: "Cancelled",
    },
    {
      id: 7,
      no: 7,
      name: "Cody Fisher",
      email: "debbie.baker@example.com",
      phone: "(406) 555-0120",
      status: "Done",
    },
    {
      id: 8,
      no: 8,
      name: "Annette Black",
      email: "nathan.roberts@example.com",
      phone: "(316) 555-0116",
      status: "Pending",
    },
    {
      id: 9,
      no: 9,
      name: "Albert Flores",
      email: "debra.holt@example.com",
      phone: "(303) 555-0105",
      status: "Cancelled",
    },
    {
      id: 10,
      no: 10,
      name: "Cody Fisher",
      email: "debbie.baker@example.com",
      phone: "(406) 555-0120",
      status: "Done",
    },
  ];
  return (
    <Card className="table-card">
      <div className="card-header">
        <Typography variant="h5">Table Data</Typography>
        <div className="right-content">
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
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            variant="outlined"
          >
            Filter
            <Avatar src={downArrowIC} alt="Arrow" />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            className="table-header-menu"
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Item 1</MenuItem>
            <MenuItem onClick={handleClose}>Item 2</MenuItem>
            <MenuItem onClick={handleClose}>Item 3</MenuItem>
          </Menu>
        </div>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        columnHeaderHeight={50}
        rowHeight={54}
        autoHeight={true}
        pageSizeOptions={[5, 10]}
        disableColumnMenu
        autoPageSize={true}
        density="standard"
        disableRowSelectionOnClick
        slots={{
          columnSortedAscendingIcon: sortAsecIcon,
          columnSortedDescendingIcon: sortDescIcon,
          columnUnsortedIcon: sortDefaultIcon,
        }}
      />
    </Card>
  );
};

export default TableComponent;
