import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import WorkIcon from "@mui/icons-material/Work";
import HistoryIcon from "@mui/icons-material/History";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import CodeIcon from "@mui/icons-material/Code";

const navItems = [
  { icon: <WorkIcon />, id: "expertise" },
  { icon: <HistoryIcon />, id: "history" },
  { icon: <CodeIcon />, id: "projects" },
  { icon: <ContactMailIcon />, id: "contact" },
];

function Navigation({ parentToChild, modeChange }:any) {
  const { mode } = parentToChild;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (section:string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${section}" not found`);
    }
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar className="navigation-bar">
          {mode === "dark" ? (
            <LightModeIcon onClick={modeChange} />
          ) : (
            <DarkModeIcon onClick={modeChange} />
          )}
        </Toolbar>
      </AppBar>
      <Box className="sidebar-icons">
        {navItems.map((item, index) => (
          <IconButton key={index} onClick={() => scrollToSection(item.id)}>
            {item.icon}
          </IconButton>
        ))}
      </Box>
    </Box>
  );
}

export default Navigation;
