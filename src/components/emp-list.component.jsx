import {
    Button,
    Card,
    CardContent,
    Container,
    CssBaseline,
    Grid,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import React from 'react';


const EmpList = (props) => {
    const { setLocalUserData, users } = props;

    const styles = {

        container: {
            alignItems: "center",
            background: "aliceblue",
            display: "flex",
            flexDirection: "column",
            height: "100% !important",
            justifyContent: "center",
            padding: 0,
            width: "100%",
        },

        deleteButton: {
            color: "#6a30b9",
            margin: "20px",
            marginRight: "0px",
            textTransform: "capitalize",
        },

        delteButtonGrid: {
            textAlign: "end",
        },

        lowerCards: {
            borderRadius: 0,
            marginTop: "24px",
            width: "100%",
        },

    };

    const userDelete = (value) => {
        const localStrgUserData = JSON.parse(localStorage.getItem("users"));
        localStrgUserData.splice(value, 1);
        localStorage.setItem("users", JSON.stringify(localStrgUserData));
        if (localStrgUserData.length === 0) {
            localStorage.setItem("open", false);
        }
        setLocalUserData();
    }

    React.useEffect(() => {
        setLocalUserData();
    });

    return (
        <React.Fragment>
            <CssBaseline />
            <Container style={styles.container}>
                {
                    users.map((user, index) => {
                        return (
                            <Card style={styles.lowerCards} sx={{ flexGrow: 1 }} key={index}>
                                <CardContent>
                                    <List>
                                        <Grid container spacing={2}>
                                            <Grid item xs={4}>
                                                <ListItem>
                                                    <ListItemText primary="Name" secondary={user.name} />
                                                </ListItem>
                                            </Grid>
                                            <Grid item xs={8}>
                                                <ListItem>
                                                    <ListItemText primary="Mobile No." secondary={user.mobile} />
                                                </ListItem>
                                            </Grid>
                                            <Grid item xs={12} md={9}>
                                                <ListItem>
                                                    <ListItemText primary="Email ID" secondary={user.email} />
                                                </ListItem>
                                            </Grid>
                                            <Grid item xs={12} md={3} style={styles.delteButtonGrid}>
                                                <Button variant="contained" style={styles.deleteButton} onClick={() => userDelete(index)}>Delete</Button>
                                            </Grid>
                                        </Grid>

                                    </List>
                                </CardContent>
                            </Card>
                        )
                    })
                }
            </Container>
        </React.Fragment>
    )
}

export default EmpList;
