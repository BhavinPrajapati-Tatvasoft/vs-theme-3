import { ThemeProvider } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Index";
import Dashboard from "./Pages/Dashboard";
import Innerpage from "./Pages/Innerpage";
import myCustomTheme from "./App.theme";

function App() {
  return (
    <>
      <ThemeProvider theme={myCustomTheme}>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/inner" element={<Innerpage />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
