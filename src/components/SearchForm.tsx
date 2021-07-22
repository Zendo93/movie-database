import {Button, createStyles, makeStyles, TextField, Theme} from "@material-ui/core";
import React, {useState} from "react";

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
        }
    })
);

function SearchForm() {

    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");

    return (
        <form className={classes.form} noValidate autoComplete="off">
            <TextField id="outlined-basic" className={classes.searchInput} label="Search" variant="outlined"
                       onChange={event => setSearchTerm(event.target.value)} value={searchTerm} />
            <Button className={classes.submitButton} variant="outlined">Submit</Button>
        </form>
    );
}

export default SearchForm;