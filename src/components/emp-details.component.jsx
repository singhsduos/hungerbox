import {
    Button, TextField, FormControl, Card, Typography, Box, CardContent, Container, CssBaseline, List, ListItem, ListItemText, Grid
} from '@material-ui/core';
import React from 'react';


const EmpDetails = () => {
    const styles = {
        button: {
            margin: "20px",
            color: "#6a30b9",
        },

        card: {
            display: 'flex',
            flexDirection: "column",
            maxWidth: "50%",
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
        },

        box: {
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            padding: "20px",
            minWidth: "-webkit-fill-available",
            width: "-moz-available",
        },

        typhography: {
            color: "#6a30b9",
        },

        cardContent: {
            width: "100%",
            padding: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
        },

        formControl: {
            width: "90%",
            padding: "20px"
        },

        container: {
            height: "100% !important",
            width: "100%",
            background: "aliceblue",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: 0,
        },

        lowerCards: {
            margin: "2rem 0rem",
            width: "100%",
            borderRadius: 0,
        }

    };

    const [nameValue, setNameValue] = React.useState("");
    const [mobileValue, setMobileValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
    const [users, setUsers] = React.useState([]);

    const nameInput = React.useRef(null);
    const mobileInput = React.useRef(null);
    const emailInput = React.useRef(null);

    const handleNameChange = (e) => {
        setNameValue(e.target.value);
    }

    const handleMobileChange = (e) => {
        setMobileValue(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    const userAdded = () => {
        const user = {
            name: nameValue,
            mobile: mobileValue,
            email: emailValue,
        };
        users.push(user);

        localStorage.setItem("users", JSON.stringify(users));

        nameInput.current.value = "";
        mobileInput.current.value = "";
        emailInput.current.value = "";

    }

    const userDelete = (value) => {
        console.log(value, "value");
        var ls_data = JSON.parse(localStorage.getItem("users"));
        ls_data.splice(value, 1);
        localStorage.setItem("users", JSON.stringify(ls_data));
        console.log(ls_data);
    }

    React.useEffect(() => {
        const localUsersData = JSON.parse(localStorage.getItem("users") || "[]");
        setUsers(localUsersData);
    }, []);

    return (
        <React.Fragment>
            <Card style={styles.card}>
                <CardContent className="cardConti" style={styles.cardContent}>
                    <Box style={styles.box} className="boxwala">
                        <Typography style={styles.typhography}>
                            Employee List
                        </Typography>
                    </Box>
                    <FormControl style={styles.formControl}>

                        <TextField
                            id="name-text"
                            required
                            label="Name"
                            defaultValue=""
                            placeholder="eg. Jon Doe"
                            onChange={handleNameChange}
                            inputRef={nameInput}
                        />
                        <br />
                        <TextField
                            id="mobile-text"
                            required
                            label="Mobile No."
                            defaultValue={mobileValue}
                            placeholder="eg. 1234567890"
                            type="number"
                            onChange={handleMobileChange}
                            inputRef={mobileInput}
                        />
                        <br />
                        <TextField
                            id="email-text"
                            required
                            label="Email ID"
                            placeholder="eg. jon.singh@gmail.com"
                            defaultValue={emailValue}
                            type="email"
                            onChange={handleEmailChange}
                            inputRef={emailInput}
                        />
                        <br />
                    </FormControl>
                    <Button variant="contained" style={styles.button} onClick={userAdded}>ADD</Button>
                </CardContent>
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
                                                <Grid item xs={6} md={9}>
                                                    <ListItem>
                                                        <ListItemText primary="Email ID" secondary={user.email} />
                                                    </ListItem>
                                                </Grid>
                                                <Grid item xs={6} md={2}>
                                                    <Button variant="contained" style={styles.button} onClick={() => userDelete(index)}>Delete</Button>
                                                </Grid>
                                            </Grid>

                                        </List>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }

                </Container>
            </Card>
        </React.Fragment>
    )
}

export default EmpDetails;

