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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
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

  //   Pagination
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <div>
                  No.
                  <IconButton color="primary">
                    <Avatar src={sortDefaultIC} alt="Sort" />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  Name
                  <IconButton color="primary">
                    <Avatar src={sortAescIC} alt="Sort" />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  Email
                  <IconButton color="primary">
                    <Avatar src={sortDescIC} alt="Sort" />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  Phone No.
                  <IconButton color="primary">
                    <Avatar src={sortDefaultIC} alt="Sort" />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell>
                <div className="text-center">
                  Status No.
                  <IconButton color="primary">
                    <Avatar src={sortDefaultIC} alt="Sort" />
                  </IconButton>
                </div>
              </TableCell>
              <TableCell align="center">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Bessie Cooper</TableCell>
              <TableCell>jackson.graham@example.com</TableCell>
              <TableCell>(808) 555-0111</TableCell>
              <TableCell align="center">
                <span className="status green">Done</span>
              </TableCell>
              <TableCell>
                <div className="button-wrapper">
                  <IconButton color="primary">
                    <Avatar src={editIC} alt="Edit" />
                  </IconButton>
                  <IconButton color="primary">
                    <Avatar src={deleteIC} alt="Delete" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Eleanor Pena</TableCell>
              <TableCell>sara.cruz@example.com</TableCell>
              <TableCell>(480) 555-0103</TableCell>
              <TableCell align="center">
                <span className="status orange">Pending</span>
              </TableCell>
              <TableCell>
                <div className="button-wrapper">
                  <IconButton color="primary">
                    <Avatar src={editIC} alt="Edit" />
                  </IconButton>
                  <IconButton color="primary">
                    <Avatar src={deleteIC} alt="Delete" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>3</TableCell>
              <TableCell>Darrell Steward</TableCell>
              <TableCell>willie.jennings@example.com</TableCell>
              <TableCell>(684) 555-0102</TableCell>
              <TableCell align="center">
                <span className="status red">Cancelled</span>
              </TableCell>
              <TableCell>
                <div className="button-wrapper">
                  <IconButton color="primary">
                    <Avatar src={editIC} alt="Edit" />
                  </IconButton>
                  <IconButton color="primary">
                    <Avatar src={deleteIC} alt="Delete" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>4</TableCell>
              <TableCell>Kristin Watson</TableCell>
              <TableCell>tanya.hill@example.com</TableCell>
              <TableCell>(307) 555-0133</TableCell>
              <TableCell align="center">
                <span className="status orange">Pending</span>
              </TableCell>
              <TableCell>
                <div className="button-wrapper">
                  <IconButton color="primary">
                    <Avatar src={editIC} alt="Edit" />
                  </IconButton>
                  <IconButton color="primary">
                    <Avatar src={deleteIC} alt="Delete" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>5</TableCell>
              <TableCell>Annette Black</TableCell>
              <TableCell>nathan.roberts@example.com</TableCell>
              <TableCell>(316) 555-0116</TableCell>
              <TableCell align="center">
                <span className="status orange">Pending</span>
              </TableCell>
              <TableCell>
                <div className="button-wrapper">
                  <IconButton color="primary">
                    <Avatar src={editIC} alt="Edit" />
                  </IconButton>
                  <IconButton color="primary">
                    <Avatar src={deleteIC} alt="Delete" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>6</TableCell>
              <TableCell>Albert Flores</TableCell>
              <TableCell>Albert Flores</TableCell>
              <TableCell>(303) 555-0105</TableCell>
              <TableCell align="center">
                <span className="status red">Cancelled</span>
              </TableCell>
              <TableCell>
                <div className="button-wrapper">
                  <IconButton color="primary">
                    <Avatar src={editIC} alt="Edit" />
                  </IconButton>
                  <IconButton color="primary">
                    <Avatar src={deleteIC} alt="Delete" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>7</TableCell>
              <TableCell>Cody Fisher</TableCell>
              <TableCell>debbie.baker@example.com</TableCell>
              <TableCell>(406) 555-0120</TableCell>
              <TableCell align="center">
                <span className="status green">Done</span>
              </TableCell>
              <TableCell>
                <div className="button-wrapper">
                  <IconButton color="primary">
                    <Avatar src={editIC} alt="Edit" />
                  </IconButton>
                  <IconButton color="primary">
                    <Avatar src={deleteIC} alt="Delete" />
                  </IconButton>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={20}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
};

export default TableComponent;
