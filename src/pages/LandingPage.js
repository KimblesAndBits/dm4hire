import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    nameButton: {
        background: "transparent",
        border: "none",
        color: "black"
    },
    whiteText: {
        color: "black"
    }
});

function LandingPage(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ height: "100vh" }}
        >
            <Grid item xl={12} size="large">
                <Typography
                    variant="h1"
                    component="button"
                    className={classes.nameButton}
                    onClick={() => props.handlePageChange("HomeMenu")}>
                    Danny the DM
                </Typography>
            </Grid>
            <Grid item xl={12} className={classes.whiteText}>
                <p>Game Master for Hire</p>
            </Grid>
            <Grid item xl={12} className={classes.whiteText}>
                <p>Clicketh Upon Mine Moniker!</p>
            </Grid>
        </Grid >
    )
}

export default LandingPage;