import {
    AppBar,
    Button,
    createStyles,
    IconButton,
    makeStyles,
    Theme,
    Toolbar,
    Typography
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import React from 'react';
import './App.css';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }),
);

function App() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    Movie Database
                </Typography>
                <Button color="inherit">Search</Button>
                <Button color="inherit">Detail</Button>
                <Button color="inherit">Favorites</Button>
            </Toolbar>
        </AppBar>
    );
}

export default App;
