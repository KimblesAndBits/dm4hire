import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    CardMedia,
    Paper
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    myImage: {
        borderRadius: 500
    },
    myText: {
        fontSize: "1.25rem",
        padding: theme.spacing(3, 2),
        background: "#262626",
        color: "#dcdcdc"
    }
}));

export default function About() {
    const classes = useStyles();

    return (
        <Container xs="lg">
            <Grid container spacing={3}>
                <Grid item sm={4}>
                    <CardMedia
                        className={classes.myImage}
                        component="img"
                        alt="Danny Kimble"
                        height="auto"
                        image={require("../images/me.jpg")}
                        title="Danny Kimble" />
                </Grid>
                <Grid item sm={8}>
                    <Paper className={classes.myText}>
                        <p>My name is Danny and I could be your next Game Master! I love tabletop RPGs and have since I was a preteen. I have been the Dugeon Master for three different Dungeons & Dragons groups now. I excell at teaching the game to new players.</p>
                        <p>I am a very relaxed and friendly guy. I know people want to have fun playing these games and I'm here to make them feel like heroes. If you play my games, you won't have to worry about me trying to kill you, unless of course, that's what you want.</p>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}