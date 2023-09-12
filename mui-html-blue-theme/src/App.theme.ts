import { createTheme } from "@mui/material/styles";

let myCustomTheme = createTheme({
  palette: {
    primary: {
      main: "#1A6BAF",
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
  typography: {
    h2: {
      fontSize: "42px",
      lineHeight: "50px",
      fontWeight: 600,
      color: "#FFFFFF",
      [myCustomTheme.breakpoints.down("md")]: {
        fontSize: "32px",
        lineHeight: "40px",
      },
    },
    h3: {
      fontSize: "28px",
      lineHeight: "34px",
      color: "#666666",
      fontWeight: "500",
      [myCustomTheme.breakpoints.down("sm")]: {
        fontSize: "24px",
        lineHeight: "30px",
      },
    },
    h5: {
      fontSize: "20px",
      lineHeight: "26px",
      fontWeight: "500",
      color: "#333333",
      whiteSpace: "nowrap",
    },
    h6: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 500,
      color: "#444444",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "16px",
          lineHeight: "24px",
        },
        contained: {
          boxShadow: "none !important",
          minWidth: "136px",
          fontWeight: "400",
          "&.MuiButtonBase-root": {
            textTransform: "capitalize",
          },
        },
        outlined: {
          minWidth: "136px",
          fontWeight: "400",
          "&.MuiButtonBase-root": {
            textTransform: "capitalize",
          },
        },
        containedPrimary: {
          borderRadius: "4px",
          padding: "12px 16px",
          color: "#FFFFFF",
          "&.Mui-disabled": {
            backgroundColor: "#1A6BAF",
            color: "#ffffff",
            opacity: "0.6",
            cursor: "not-allowed",
          },
        },
        containedSecondary: {
          padding: "12px 16px",
          color: "#565656",
          backgroundColor: "#E2E2E2",
          "&:hover": {
            backgroundColor: "#c9c9c9",
          },
        },
        outlinedSecondary: {
          padding: "11px 16px",
          borderColor: "#C4C4C4",
          color: "#565656",
          backgroundColor: "transparent",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#A5A5A5",
          lineHeight: "24px",
          "&.MuiInputLabel-root": {
            transform: "translate(19px, 12px) scale(1)",
            "&.Mui-focused,&.MuiFormLabel-filled": {
              transform: "translate(19px, -9px) scale(0.75)",
            },
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          color: "#333333",
          lineHeight: "24px",
          fieldset: {
            borderColor: "#C4C4C4",
            transition: "all 0.3s ease-out",
            legend: {
              marginLeft: "5px",
            },
          },
          "&:hover": {
            "fieldset.MuiOutlinedInput-notchedOutline": {
              borderColor: "#808080",
            },
          },
          "&.Mui-focused": {
            "fieldset.MuiOutlinedInput-notchedOutline": {
              borderWidth: "2px",
              borderColor: "#1A6BAF",
            },
          },
          ".MuiInputBase-input": {
            height: "24px",
            padding: "12px 19px",
            "&::placeholder": {
              color: "#B1B1B1",
              opacity: 1,
            },
          },
          ".MuiSelect-select": {
            position: "relative",
            zIndex: 1,
          },
          ".select-down-arrow": {
            right: "10px",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
          },
        },
      },
    },
    MuiInputAdornment: {
      styleOverrides: {
        root: {
          "&.MuiInputAdornment-outlined": {
            margin: 0,
          },
          "&.MuiInputAdornment-positionStart": {
            ".MuiButtonBase-root": { marginLeft: "-11px" },
          },
          "&.MuiInputAdornment-positionEnd": {
            ".MuiButtonBase-root": { marginRight: "-6px" },
          },
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          marginLeft: "-8px",
          ".MuiFormControlLabel-label": {
            color: "#333333",
            lineHeight: "20px",
          },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          padding: "8px",
          "& .MuiAvatar-root": {
            height: "20px",
            width: "20px",
          },
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {},
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          height: "auto",
          width: "auto",
          borderRadius: 0,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          "&.MuiMenu-list": {
            minWidth: "170px",
            padding: "10px 0",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          "&.MuiMenu-paper": {
            borderRadius: "8px",
            boxShadow: "0 4px 16px 0 rgba(169, 169, 169, 0.5)",
          },
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          padding: "10px 16px",
          "&:hover": {
            backgroundColor: "#F9F9F9",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 0 16px 0 rgba(0, 0, 0, 0.1)",
          borderRadius: "12px",
          height: "100%",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "0",
          "& .MuiTabs-scroller": {
            ".MuiTabs-flexContainer": {
              paddingBottom: "1px",
              borderBottom: "1px solid #DDDDDD",
            },
          },
          "& .MuiTabs-indicator": {
            height: "3px",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "15px",
          lineHeight: "20px",
          fontWeight: 500,
          minWidth: "60px",
          textTransform: "capitalize",
          padding: "8px",
          minHeight: "0",
          "&.MuiButtonBase-root": { padding: "6px" },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          ".MuiDataGrid-columnSeparator": {
            display: "none",
          },
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          ".MuiToolbar-root": {
            paddingLeft: "0",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          padding: "3px 12px",
          alignItems: "center",
          ".MuiAlert-message": {
            fontSize: "16px",
            lineHeight: "20px",
          },
          ".MuiAlert-icon": {
            marginRight: "10px",
            display: "block",
            padding: 0,
          },
          ".MuiAlert-action": {
            padding: 0,
          },
          "&.MuiAlert-outlinedSuccess": {
            backgroundColor: "#ECFFDC",
            borderColor: "#84D344",
            color: "#6CC922",
          },
          "&.MuiAlert-outlinedWarning": {
            backgroundColor: "#FFFBED",
            borderColor: "#E1C533",
            color: "#D9BA18",
          },
          "&.MuiAlert-outlinedInfo": {
            backgroundColor: "#F3F8FF",
            borderColor: "#5096FF",
            color: "#5096FF",
          },
          "&.MuiAlert-outlinedError": {
            backgroundColor: "#FEEEEE",
            borderColor: "#F16D5A",
            color: "#F16D5A",
          },
        },
      },
    },
  },
});
export default myCustomTheme;
