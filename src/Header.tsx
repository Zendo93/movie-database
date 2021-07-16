import {AppBar, Button, createStyles, Link, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import TheaterIcon from "@material-ui/icons/Theaters";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        theaterIcon: {
            fontSize: "2rem",
            paddingRight: "5px"
        },
        title: {
            flexGrow: 1,
        },
    }),
);

function Header() {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
                <TheaterIcon className={classes.theaterIcon}/>
                <Typography variant="h6" className={classes.title}>
                    Movie Database
                </Typography>
                <Link href="search" color="inherit" underline="none">
                    <Button color="inherit">Search</Button>
                </Link>
                <Link href="detail" color="inherit" underline="none">
                    <Button color="inherit">Detail</Button>
                </Link>
                <Link href="favorites" color="inherit" underline="none">
                    <Button color="inherit">Favorites</Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default Header;