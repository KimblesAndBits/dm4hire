import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
    Container,
    Grid,
    CardMedia,
    Paper,
    Card,
    CardContent,
    Typography
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
                        alt="Sons of Ivaldi"
                        height="auto"
                        image={require("../images/me.jpg")}
                        title="Sons of Ivaldi" />
                </Grid>
                <Grid item sm={8}>
                    <Grid item>
                        <Paper className={classes.myText}>
                            <p>We are Sons of Ivaldi. We're a small indie development company. We are currently working on
                            two games and always thinking of new ideas!</p>
                        </Paper>
                    </Grid>
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="center"
                        spacing={3}>
                        <Grid item sm={6}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.myImage}
                                    component="img"
                                    image={require("../images/me.jpg")}
                                    title="Danny"
                                    margin={0}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        My name is Danny. I'm the lead developer and founder of Sons of Ivaldi. I have loved
                                        video games my whole life, and while I have been attending school to get a degree in
                                        computer science, this pandemic has proved that nothing is certain and now is the time
                                        to try out your crazy ideas. This is mine and I'm so excited.
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item sm={6}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.myImage}
                                    component="img"
                                    image={require("../images/me.jpg")}
                                    title="Michael"
                                    margin={0}
                                />
                                <CardContent>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Michael is the lead artist and art director. He'll write something here.
                                </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container >
    )
}