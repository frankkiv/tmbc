import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// import { withRouter, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import Menu from '@material-ui/core/Menu';
// import Routes from './routes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

const Header = (props) => {
  const classes = useStyles();
  // const history = useHistory();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClick = (pageURL) => {
  //   history.push(pageURL);
  //   setAnchorEl(null);
  // };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton> */}
          {/* <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={() => setAnchorEl(null)}
          >
            {Routes.filter(({ hidden }) => hidden !== true).map(({ name, path }) => (
              <MenuItem key={name} onClick={() => handleMenuClick(path)}>
                {name}
              </MenuItem>
            ))}
          </Menu> */}
          <Typography variant="h6" color="inherit">
            test
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
