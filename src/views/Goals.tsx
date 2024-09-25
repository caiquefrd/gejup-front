import React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "../styles/theme";
import SideBar from "../components/SideBar";
import GoalsCard from "../components/GoalsCard";
import '../index.css';


const Goals: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBar></SideBar>
    <GoalsCard />
    </ThemeProvider>
  );
};

export default Goals;
