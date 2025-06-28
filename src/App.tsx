import "./App.css";
import "@/components/Main";
import { theme } from "@/styles/theme";
import { ThemeProvider } from "@emotion/react";
import { Routes, Route } from "react-router-dom";
import Login from "@/components/Login";
import Main from "@/components/Main";
import NavigationBar from "@/components/NavigationBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
