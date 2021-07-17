import React from 'react';
import Header from "./Header";
import {
    Button,
    createStyles,
    makeStyles,
    TextField,
    Theme
} from "@material-ui/core";
import SearchResult from "./SearchResult";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            margin: "auto",
            width: "fit-content",
            marginTop: "2em"
        },
        searchInput: {
            width: 500
        },
        submitButton: {
            height: 56
        },
        div: {
            paddingLeft: 15,
            paddingRight: 15,
            marginTop: "2%",
            overflowX: "auto",
            overflowY: "hidden",
            whiteSpace: "nowrap"
        }
    })
);


function App() {

    const classes = useStyles();

    return (
        <>
            <Header />
            <form className={classes.form} noValidate autoComplete="off">
                <TextField id="outlined-basic" className={classes.searchInput} label="Search" variant="outlined" />
                <Button className={classes.submitButton} variant="outlined">Submit</Button>
            </form>
            <div className={classes.div}>
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
                <SearchResult />
            </div>
        </>
    );
}

export default App;
