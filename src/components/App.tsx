import React from 'react';
import Header from "./Header";
import {
    createStyles,
    makeStyles,
    Theme
} from "@material-ui/core";
import SearchResult from "./SearchResult";
import SearchForm from "./SearchForm";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
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
            <SearchForm />
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
