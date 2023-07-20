import { createTheme } from "@mui/material/styles";

let myCustomTheme = createTheme({
  palette: {
    primary: {
      main: "#23C68B",
    },
    secondary: {
      main: "#4B4B4B",
    },
  },
  typography: {
    fontFamily: "Poppins,sans-serif",
  },
});

myCustomTheme = createTheme(myCustomTheme, {
  // Typography
  typography: {
    h2: {
      fontSize: "42px",
      lineHeight: "50px",
      fontWeight: 600,
      color: "#FFFFFF",
      // [myCustomTheme.breakpoints.down("lg")]: {
      //   fontSize: "40px",
      //   lineHeight: "46px",
      // },
      // [myCustomTheme.breakpoints.down("md")]: {
      //   fontSize: "32px",
      //   lineHeight: "38px",
      // },
      // [myCustomTheme.breakpoints.down("sm")]: {
      //   fontSize: "26px",
      //   lineHeight: "32px",
      // },
    },
    h3: {
      fontSize: "28px",
      lineHeight: "34px",
      color: "#666666",
      fontWeight: "500",
      // [myCustomTheme.breakpoints.down("md")]: {
      //   fontSize: "26px",
      //   lineHeight: "30px",
      // },
      // [myCustomTheme.breakpoints.down("sm")]: {
      //   fontSize: "20px",
      //   lineHeight: "26px",
      // },
    },
    h5: {
      fontSize: "20px",
      lineHeight: "26px",
      fontWeight: "500",
      color: "#333333",
      // [myCustomTheme.breakpoints.down("sm")]: {
      //   fontSize: "16px",
      //   lineHeight: "20px",
      // },
    },
    h6: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 500,
      color: "#444444",
      // [myCustomTheme.breakpoints.down("sm")]: {
      //   fontSize: "15px",
      //   lineHeight: "20px",
      // },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          lineHeight: "24px",
        },
        contained: { boxShadow: "none !important" },
        containedPrimary: {
          borderRadius: "4px",
          padding: "12px 16px",
          color: "#FFFFFF",
          fontWeight: "400",
          // [myCustomTheme.breakpoints.down("md")]: {
          //   padding: "8px 24px",
          // },
        },
        // outlinedPrimary: {
        //   color: "#3EAE86",
        //   textTransform: "uppercase",
        //   borderRadius: "10px",
        //   padding: "12px 28px",
        //   border: "2px solid #59B997",
        //   "&:hover": { border: "2px solid #59B997" },
        //   [myCustomTheme.breakpoints.down("md")]: {
        //     padding: "6px 24px",
        //   },
        // },
        text: {
          "&.btn-upload": {
            backgroundColor: "#F6F6F6",
            padding: "9px 25px",
            borderRadius: "5px",
            fontWeight: 400,
            fontSize: "15px",
            lineHeight: "17px",
            color: "#6D6D6D",
            textTransform: "lowercase",
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          "&.custom-btn": {
            border: "1px solid #EAEAEA",
            borderRadius: "10px",
            width: "53px",
            height: "47px",
            display: "flex",
            alignItems: "center",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          ".MuiButtonBase-root": { margin: 0 },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {},
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          "& .MuiAvatar-root": {
            height: "16px",
            width: "16px",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          "& .MuiAvatar-root": {
            height: "16px",
            width: "16px",
          },
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          height: "auto",
          width: "auto",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          // boxShadow: "none",
          // border: "1px solid #EAEAEA",
          // borderRadius: "10px",
          // height: "100%",
        },
      },
    },
    MuiTableContainer: {
      styleOverrides: {
        root: {
          // border: "none",
          // boxShadow: "none",
        },
      },
    },
    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableCell-head": {
            // padding: "8px 10px",
            // fontSize: "15px",
            // lineHeight: "20px",
            // color: "#9C9C9C",
            // fontWeight: 400,
            // border: "none",
          },
          "& .MuiTableCell-body": {
            // padding: "4px 10px",
            // fontSize: "15px",
            // lineHeight: "20px",
            // color: "#4B4B4B",
            // border: "none",
            // borderTop: "1px solid #EAEAEA",
            // whiteSpace: "nowrap",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          // borderBottom: "1px solid #E9E9E9",
          // minHeight: "0",
          "& .MuiTabs-scroller": {
            // paddingBottom: "8px",
            // [myCustomTheme.breakpoints.down("md")]: {
            //   paddingBottom: "0",
            // },
          },
          "& .MuiTabs-indicator": { height: "3px" },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          // fontSize: "18px",
          // lineHeight: "24px",
          // fontWeight: 300,
          // minWidth: "60px",
          // textTransform: "capitalize",
          // padding: "8px",
          // minHeight: "0",
          // "&.Mui-selected": { fontWeight: 500 },
          // "&.MuiButtonBase-root": { padding: "8px" },
          // "&.MuiButtonBase-root:not(:last-child)": { marginRight: "14px" },
        },
      },
    },
  },
});
export default myCustomTheme;
