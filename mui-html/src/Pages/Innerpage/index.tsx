import * as React from "react";
import { Helmet } from "react-helmet";
import Header from "../../Components/Header";
import Sidebar from "../../Components/Sidebar";
import Card from "@mui/material/Card";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  IconButton,
  Avatar,
  Alert,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TableComponent from "../../Components/Table";
import {
  alertErrorCloseIC,
  alertErrorIC,
  alertInfoCloseIC,
  alertInfoIC,
  alertSuccessCloseIC,
  alertSuccessIC,
  alertWarningCloseIC,
  alertWarningIC,
  checkboxDefaultIC,
  checkboxcheckedIC,
  downArrowIC,
  fileUploadIC,
  radioCheckedIC,
  radioDefaultIC,
} from "../../assets/images";

// Tab
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="tab-content-container"
    >
      {value === index && <>{children}</>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Innerpage: React.FC = () => {
  // Select
  const [select1, setSelect1] = React.useState("");
  const handleSelect1Change = (event: SelectChangeEvent) => {
    setSelect1(event.target.value as string);
  };
  const [select2, setSelect2] = React.useState("");
  const handleSelect2Change = (event: SelectChangeEvent) => {
    setSelect2(event.target.value as string);
  };
  const [select3, setSelect3] = React.useState("");
  const handleSelect3Change = (event: SelectChangeEvent) => {
    setSelect3(event.target.value as string);
  };
  const [select4, setSelect4] = React.useState("");
  const handleSelect4Change = (event: SelectChangeEvent) => {
    setSelect4(event.target.value as string);
  };
  const [select5, setSelect5] = React.useState("");
  const handleSelect5Change = (event: SelectChangeEvent) => {
    setSelect5(event.target.value as string);
  };
  const [select6, setSelect6] = React.useState("");
  const handleSelect6Change = (event: SelectChangeEvent) => {
    setSelect6(event.target.value as string);
  };
  const [select7, setSelect7] = React.useState("");
  const handleSelect7Change = (event: SelectChangeEvent) => {
    setSelect7(event.target.value as string);
  };
  const [select8, setSelect8] = React.useState("");
  const handleSelect8Change = (event: SelectChangeEvent) => {
    setSelect8(event.target.value as string);
  };
  const [select9, setSelect9] = React.useState("");
  const handleSelect9Change = (event: SelectChangeEvent) => {
    setSelect9(event.target.value as string);
  };

  // Tab
  const [value, setValue] = React.useState(0);
  const tabHandleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Helmet>
        <title>Inner</title>
      </Helmet>
      <div className="wrapper">
        <Header />
        <Sidebar />
        <section className="main-content inner">
          <Typography variant="h3" className="page-title">
            Innerpage
          </Typography>
          <TableComponent />
          <Card className="inner-card">
            {/* -------- first column start ---------  */}
            <Typography variant="h5">Form Elements</Typography>
            <TextField
              label="Name"
              fullWidth
              variant="outlined"
              sx={{ pb: { xs: "16px", xl: "20px" } }}
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              variant="outlined"
              sx={{ pb: { xs: "16px", xl: "20px" } }}
            />
            <TextField
              label="Textarea"
              variant="outlined"
              multiline
              rows={1.5}
              fullWidth
              sx={{ pb: { xs: "16px", xl: "22px" } }}
            />
            {/* -------- first column end ---------  */}

            {/* -------- second column start ---------  */}
            <section className="secondary-section">
              <Typography variant="h5">Two Column</Typography>
              <Grid
                container
                columnSpacing={{ xs: 2, xl: 4 }}
                rowSpacing={{ xs: 2, xl: 2.5 }}
                sx={{ pb: { xs: "16px", xl: "22px" } }}
              >
                <Grid item sm={6} xs={12}>
                  <TextField label="Name" fullWidth variant="outlined" />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    defaultValue="xyz@gmail.com"
                  />
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="select-1">Dropdown</InputLabel>
                    <Select
                      labelId="select-1"
                      id="simple-select-1"
                      value={select1}
                      label="Dropdown"
                      onChange={handleSelect1Change}
                      IconComponent={() => (
                        <Avatar
                          src={downArrowIC}
                          className="select-down-arrow"
                          alt="Down Arrow"
                        />
                      )}
                    >
                      <MenuItem value={10}>Item 1</MenuItem>
                      <MenuItem value={20}>Item 2</MenuItem>
                      <MenuItem value={30}>Item 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id="select-9">Dropdown</InputLabel>
                    <Select
                      labelId="select-9"
                      id="simple-select-9"
                      value={select9}
                      label="Dropdown"
                      onChange={handleSelect9Change}
                      IconComponent={() => (
                        <Avatar
                          src={downArrowIC}
                          className="select-down-arrow"
                          alt="Down Arrow"
                        />
                      )}
                    >
                      <MenuItem value={10}>Item 1</MenuItem>
                      <MenuItem value={20}>Item 2</MenuItem>
                      <MenuItem value={30}>Item 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </section>
            {/* -------- second column end ---------  */}

            {/* -------- third column start ---------  */}
            <section className="secondary-section">
              <Typography variant="h5">Three Column</Typography>
              <Grid
                container
                columnSpacing={{ xs: 2, xl: 4 }}
                rowSpacing={{ xs: 2, xl: 2.5 }}
                sx={{ pb: { xs: "16px", xl: "22px" } }}
              >
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField label="Name" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    label="Name"
                    fullWidth
                    variant="outlined"
                    defaultValue="John Doe"
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    defaultValue="xyz@gmail.com"
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel id="select-2">Dropdown</InputLabel>
                    <Select
                      labelId="select-2"
                      id="simple-select-2"
                      value={select2}
                      label="Dropdown"
                      onChange={handleSelect2Change}
                      IconComponent={() => (
                        <Avatar
                          src={downArrowIC}
                          className="select-down-arrow"
                          alt="Down Arrow"
                        />
                      )}
                    >
                      <MenuItem value={10}>Item 1</MenuItem>
                      <MenuItem value={20}>Item 2</MenuItem>
                      <MenuItem value={30}>Item 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel id="select-3">Dropdown</InputLabel>
                    <Select
                      labelId="select-3"
                      id="simple-select-3"
                      value={select3}
                      label="Dropdown"
                      onChange={handleSelect3Change}
                      IconComponent={() => (
                        <Avatar
                          src={downArrowIC}
                          className="select-down-arrow"
                          alt="Down Arrow"
                        />
                      )}
                    >
                      <MenuItem value={10}>Item 1</MenuItem>
                      <MenuItem value={20}>Item 2</MenuItem>
                      <MenuItem value={30}>Item 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4}>
                  <FormControl fullWidth>
                    <InputLabel id="select-4">Dropdown</InputLabel>
                    <Select
                      labelId="select-4"
                      id="simple-select-4"
                      value={select4}
                      label="Dropdown"
                      onChange={handleSelect4Change}
                      IconComponent={() => (
                        <Avatar
                          src={downArrowIC}
                          className="select-down-arrow"
                          alt="Down Arrow"
                        />
                      )}
                    >
                      <MenuItem value={10}>Item 1</MenuItem>
                      <MenuItem value={20}>Item 2</MenuItem>
                      <MenuItem value={30}>Item 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </section>
            {/* -------- third column end ---------  */}

            {/* -------- four column start ---------  */}
            <section className="secondary-section">
              <Typography variant="h5">Four Column</Typography>
              <Grid
                container
                columnSpacing={{ xs: 2, xl: 4 }}
                rowSpacing={{ xs: 2, xl: 2.5 }}
                sx={{ pb: "22px" }}
              >
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <TextField label="Name" fullWidth variant="outlined" />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                    defaultValue="xyz@gmail.com"
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <TextField
                    label="Name"
                    fullWidth
                    variant="outlined"
                    defaultValue="John Doe"
                  />
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormControl fullWidth>
                    <InputLabel id="select-5">Dropdown</InputLabel>
                    <Select
                      labelId="select-5"
                      id="simple-select-5"
                      value={select5}
                      label="Dropdown"
                      onChange={handleSelect5Change}
                      IconComponent={() => (
                        <Avatar
                          src={downArrowIC}
                          className="select-down-arrow"
                          alt="Down Arrow"
                        />
                      )}
                    >
                      <MenuItem value={10}>Item 1</MenuItem>
                      <MenuItem value={20}>Item 2</MenuItem>
                      <MenuItem value={30}>Item 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormControl fullWidth>
                    <InputLabel id="select-6">Dropdown</InputLabel>
                    <Select
                      labelId="select-6"
                      id="simple-select-6"
                      value={select6}
                      label="Dropdown"
                      onChange={handleSelect6Change}
                      IconComponent={() => (
                        <Avatar
                          src={downArrowIC}
                          className="select-down-arrow"
                          alt="Down Arrow"
                        />
                      )}
                    >
                      <MenuItem value={10}>Item 1</MenuItem>
                      <MenuItem value={20}>Item 2</MenuItem>
                      <MenuItem value={30}>Item 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormControl fullWidth>
                    <InputLabel id="select-7">Dropdown</InputLabel>
                    <Select
                      labelId="select-7"
                      id="simple-select-7"
                      value={select7}
                      label="Dropdown"
                      onChange={handleSelect7Change}
                      IconComponent={() => (
                        <Avatar
                          src={downArrowIC}
                          className="select-down-arrow"
                          alt="Down Arrow"
                        />
                      )}
                    >
                      <MenuItem value={10}>Item 1</MenuItem>
                      <MenuItem value={20}>Item 2</MenuItem>
                      <MenuItem value={30}>Item 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <FormControl fullWidth>
                    <InputLabel id="select-8">Dropdown</InputLabel>
                    <Select
                      labelId="select-8"
                      id="simple-select-8"
                      value={select8}
                      label="Dropdown"
                      onChange={handleSelect8Change}
                      IconComponent={() => (
                        <Avatar
                          src={downArrowIC}
                          className="select-down-arrow"
                          alt="Down Arrow"
                        />
                      )}
                    >
                      <MenuItem value={10}>Item 1</MenuItem>
                      <MenuItem value={20}>Item 2</MenuItem>
                      <MenuItem value={30}>Item 3</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </section>
            {/* -------- four column end ---------  */}

            {/* -------- other element start ---------  */}
            <div className="secondary-section other-elements">
              <Typography variant="h5" className="other-heading">
                Other Form Elements
              </Typography>

              <Typography variant="h6" className="upload-heading">
                File Upload
              </Typography>
              <div className="file-upload">
                <Button
                  variant="contained"
                  component="label"
                  startIcon={
                    <Avatar variant="square" src={fileUploadIC} alt="Upload" />
                  }
                  className="btn-upload"
                  title="Upload Your File"
                >
                  Upload
                  <input hidden accept="image/*" multiple type="file" />
                </Button>
                <p>No file uploaded</p>
              </div>

              <Typography variant="h6" className="check-radio-title">
                Check Box
              </Typography>
              <div className="check-group">
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <Avatar
                          variant="square"
                          src={checkboxDefaultIC}
                          alt="Checkbox"
                        />
                      }
                      checkedIcon={
                        <Avatar
                          variant="square"
                          src={checkboxcheckedIC}
                          alt="Checkbox"
                        />
                      }
                      defaultChecked
                    />
                  }
                  label="Option 1"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <Avatar
                          variant="square"
                          src={checkboxDefaultIC}
                          alt="Checkbox"
                        />
                      }
                      checkedIcon={
                        <Avatar
                          variant="square"
                          src={checkboxcheckedIC}
                          alt="Checkbox"
                        />
                      }
                    />
                  }
                  label="Option 2"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      icon={
                        <Avatar
                          variant="square"
                          src={checkboxDefaultIC}
                          alt="Checkbox"
                        />
                      }
                      checkedIcon={
                        <Avatar
                          variant="square"
                          src={checkboxcheckedIC}
                          alt="Checkbox"
                        />
                      }
                    />
                  }
                  label="Option 3"
                />
              </div>

              <Typography variant="h6" className="check-radio-title">
                Radio Button
              </Typography>
              <div className="radio-group">
                <RadioGroup defaultValue="Option 1" name="radio-buttons-group">
                  <FormControlLabel
                    value="Option 1"
                    control={
                      <Radio
                        icon={
                          <Avatar
                            variant="rounded"
                            src={radioDefaultIC}
                            alt="Radio"
                          />
                        }
                        checkedIcon={
                          <Avatar
                            variant="rounded"
                            src={radioCheckedIC}
                            alt="Radio"
                          />
                        }
                      />
                    }
                    label="Option 1"
                  />
                  <FormControlLabel
                    value="Option 2"
                    control={
                      <Radio
                        icon={
                          <Avatar
                            variant="rounded"
                            src={radioDefaultIC}
                            alt="Radio"
                          />
                        }
                        checkedIcon={
                          <Avatar
                            variant="rounded"
                            src={radioCheckedIC}
                            alt="Radio"
                          />
                        }
                      />
                    }
                    label="Option 2"
                  />
                  <FormControlLabel
                    value="Option 3"
                    control={
                      <Radio
                        icon={
                          <Avatar
                            variant="rounded"
                            src={radioDefaultIC}
                            alt="Radio"
                          />
                        }
                        checkedIcon={
                          <Avatar
                            variant="rounded"
                            src={radioCheckedIC}
                            alt="Radio"
                          />
                        }
                      />
                    }
                    label="Option 3"
                  />
                </RadioGroup>
              </div>

              <Typography variant="h6" className="buttons-heading">
                Buttons
              </Typography>
              <div className="btn-group">
                <Button variant="contained" title="Primary">
                  Primary
                </Button>
                <Button variant="contained" title="Primary" disabled>
                  Primary
                </Button>
                <Button variant="contained" color="secondary" title="Secondary">
                  Secondary
                </Button>
                <Button variant="outlined" title="Secondary" color="secondary">
                  Secondary
                </Button>
              </div>

              <Typography variant="h6">Alerts</Typography>
              <div className="alert-group">
                <Alert
                  severity="success"
                  variant="outlined"
                  icon={<Avatar src={alertSuccessIC} alt="Success" />}
                  action={
                    <IconButton>
                      <Avatar src={alertSuccessCloseIC} alt="Close" />
                    </IconButton>
                  }
                >
                  This is a success message.
                </Alert>
                <Alert
                  severity="warning"
                  variant="outlined"
                  icon={<Avatar src={alertWarningIC} alt="Warning" />}
                  action={
                    <IconButton>
                      <Avatar src={alertWarningCloseIC} alt="Close" />
                    </IconButton>
                  }
                >
                  This is a warning message.
                </Alert>
                <Alert
                  severity="info"
                  variant="outlined"
                  icon={<Avatar src={alertInfoIC} alt="Info" />}
                  action={
                    <IconButton>
                      <Avatar src={alertInfoCloseIC} alt="Close" />
                    </IconButton>
                  }
                >
                  This is an info message.
                </Alert>
                <Alert
                  severity="error"
                  icon={<Avatar src={alertErrorIC} alt="Info" />}
                  action={
                    <IconButton>
                      <Avatar src={alertErrorCloseIC} alt="Close" />
                    </IconButton>
                  }
                >
                  This is an error message.
                </Alert>
              </div>
            </div>
            {/* -------- other element end ---------  */}

            {/* -------- Tab section start ---------  */}
            <div className="secondary-section tab-wrapper">
              <Typography variant="h5">Tabs</Typography>
              <Tabs
                value={value}
                scrollButtons="auto"
                variant="scrollable"
                onChange={tabHandleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Tab 1" {...a11yProps(0)} />
                <Tab label="Tab 2" {...a11yProps(1)} />
                <Tab label="Tab 3" {...a11yProps(2)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                arcu, euismod mattis velit. Id lacus faucibus morbi pulvinar
                integer natoque risus fermentum, nulla. Sit sapien arcu enim
                cursus quam nunc. Arcu ipsum amet imperdiet sed posuere Lorem
                ipsum dolor sit amet, consectetur adipiscing elit. Eu arcu,
                euismod mattis velit. Id lacus faucibus morbi pulvinar integer
                natoque risus fermentum, nulla. Sit sapien arcu enim cursus quam
                nunc. Arcu ipsum amet imperdiet sed posuere.
              </TabPanel>
              <TabPanel value={value} index={1}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas a varius nulla. Proin accumsan nunc lacinia ipsum
                venenatis varius. Proin rutrum, diam id facilisis hendrerit, dui
                est malesuada risus, sed sollicitudin felis eros vitae libero.
                Integer in magna lectus. Vestibulum facilisis ultrices libero
                sed tincidunt. Nullam vitae mollis diam, eu posuere diam.
                Suspendisse potenti.
              </TabPanel>
              <TabPanel value={value} index={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas a varius nulla. Proin accumsan nunc lacinia ipsum
                venenatis varius. Proin rutrum, diam id facilisis hendrerit, dui
                est malesuada risus, sed sollicitudin felis eros vitae libero.
                Integer in magna lectus. Vestibulum facilisis ultrices libero
                sed tincidunt. Nullam vitae mollis diam, eu posuere diam.
                Suspendisse potenti. Proin pellentesque egestas justo a tempor.
                Donec lorem sem, dictum at consequat et, maximus quis mauris.
              </TabPanel>
            </div>
            {/* -------- Tab section end ---------  */}
          </Card>
          <section className="copyright">
            <p>Copyright 2021. All rights reserved</p>
          </section>
        </section>
      </div>
    </>
  );
};
export default Innerpage;
