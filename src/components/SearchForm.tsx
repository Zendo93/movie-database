import {Button, createStyles, makeStyles, TextField, Theme} from "@material-ui/core";
import React from "react";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import {selectSearchTerm, setSearchTerm} from "../reducers/searchFormReducer";
import {AppDispatch} from "../app/store";

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
    const searchTerm: string = useAppSelector(selectSearchTerm);
    const dispatch: AppDispatch = useAppDispatch();

    function handleSearchTermChange(searchTerm: string): void {
        console.log(searchTerm);
        dispatch(setSearchTerm(searchTerm));
    }

    return (
        <form className={classes.form} noValidate autoComplete="off">
            <TextField id="outlined-basic" className={classes.searchInput} label="Search" variant="outlined"
                       onChange={event => handleSearchTermChange(event.target.value)} value={searchTerm} />
            <Button className={classes.submitButton} variant="outlined">Submit</Button>
        </form>
    );
}

export default SearchForm;