import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoodIcon from "@mui/icons-material/Mood";
import { Link } from "react-router-dom";
import './SideBar.css'

export default function SideBar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["chistes", "favoritos"].map((text, index) => (
          <Link to={`/${text}`} key={text} className="link">
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{displayIcons(text)}</ListItemIcon>
                <ListItemText primary={text.toUpperCase()} />
              </ListItemButton>
            </ListItem>
        </Link>
        ))}
      </List>
    </Box>
  );

  const displayIcons = (text) => {
    if (text === "chistes") {
      return <MoodIcon />;
    } else if (text === "favoritos") {
      return <FavoriteIcon />;
    } else {
      return <MailIcon />;
    }
  };

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon onClick={toggleDrawer(anchor, true)} />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
