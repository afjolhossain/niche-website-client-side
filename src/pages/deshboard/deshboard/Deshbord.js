import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Topic } from "@mui/icons-material";
import ManageAkkOrder from "../manageallOrder/ManageAkkOrder";
import AddaProduct from "../addaproduct/AddaProduct";
import MakeAdmin from "../makeadmin/MakeAdmin";
import ManageProduct from "../manageproduct/ManageProduct";

const drawerWidth = 200;

function Deshboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Link to={`${url}/mamageallorder`}>
        <Button sx={{ textDecoration: "none" }}>Manage All Order</Button>
      </Link>
      <Link to={`${url}/addproduct`}>
        <Button sx={{ textDecoration: "none" }}>Add a product</Button>
      </Link>
      <Link to={`${url}/makeadmin`}>
        <Button sx={{ textDecoration: "none" }}>make a Admin</Button>
      </Link>

      <Link to={`${url}/manageproduct`}>
        <Button sx={{ textDecoration: "none" }}>Manage Product</Button>
      </Link>

      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Deshboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Switch>
          <Route path={`${path}/mamageallorder`}>
            <ManageAkkOrder></ManageAkkOrder>
          </Route>
          <Route path={`${path}/addproduct`}>
            <AddaProduct></AddaProduct>
          </Route>
          <Route path={`${path}/makeadmin`}>
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path={`${path}/manageproduct`}>
            <ManageProduct></ManageProduct>
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}

Deshboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Deshboard;
