import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    createStyles,
    makeStyles,
    Theme,
    Typography
} from "@material-ui/core";
import logo from "../logo.svg";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 345,
            margin: "1em",
            display: "inline-block"
        }
    })
);

function SearchResult() {
    const classes = useStyles();

    return (
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    image={logo}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Movie Name
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Movie description
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default SearchResult;