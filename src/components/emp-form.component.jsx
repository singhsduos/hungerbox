import {
    Button,
    TextField,
    FormControl,
    Card,
    Typography,
    Box,
    CardContent,
} from '@material-ui/core';
import React from 'react';
import EmpList from './emp-list.component';


const EmpForm = () => {
    const styles = {
        addButton: {
            color: "#6a30b9",
            margin: "20px",
        },

        box: {
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
            minWidth: "-webkit-fill-available",
            padding: "20px",
            width: "-moz-available",
        },

        card: {
            alignItems: "center",
            display: 'flex',
            flexDirection: "column",
            justifyContent: "center",
            margin: "auto",
            maxWidth: "50%",
        },

        cardContent: {
            alignItems: "flex-end",
            display: "flex",
            flexDirection: "column",
            marginBottom: "24px",
            padding: 0,
            width: "100%",
        },

        formControl: {
            marginLeft: "0px",
            marginRight: "auto",
            padding: "20px",
            width: "100%",
        },

        typhography: {
            color: "#6a30b9",
        },

    };

    const [nameValue, setNameValue] = React.useState("");
    const [mobileValue, setMobileValue] = React.useState("");
    const [emailValue, setEmailValue] = React.useState("");
    const [open, setOpen] = React.useState(false);
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

    const setLocalUserData = () => {
        const localUsersData = JSON.parse(localStorage.getItem("users") || "[]");
        setUsers(localUsersData);
    }

    const seLocalOpenFormData = () => {
        const localStrgUserData = JSON.parse(localStorage.getItem("open") || false);
        setOpen(localStrgUserData);
    }

    const userAdded = () => {
        if (nameValue !== "" && mobileValue !== "" && emailValue !== "") {
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

            setNameValue("");
            setMobileValue("");
            setEmailValue("");

            localStorage.setItem("open", true);
            setLocalUserData();
        } else {

            alert("Please fill all the fields");
        }
    }

    const openForm = () => {
        setOpen(true);
    }

    React.useEffect(() => {
        setLocalUserData();
        seLocalOpenFormData();
    }, []);

    return open ? (
        <React.Fragment>
            <Card style={styles.card}>
                <CardContent style={styles.cardContent}>
                    <Box style={styles.box} >
                        <Typography style={styles.typhography}>
                            Employee List
                        </Typography>
                    </Box>
                    <FormControl style={styles.formControl}>

                        <TextField
                            defaultValue=""
                            id="name-text"
                            inputRef={nameInput}
                            label="Name"
                            onChange={handleNameChange}
                            placeholder="eg. Jon Doe"
                            required
                        />
                        <br />
                        <TextField
                            defaultValue={mobileValue}
                            id="mobile-text"
                            inputRef={mobileInput}
                            label="Mobile No."
                            onChange={handleMobileChange}
                            placeholder="eg. 9628491678"
                            required
                            type="number"
                        />
                        <br />
                        <TextField
                            defaultValue={emailValue}
                            id="email-text"
                            inputRef={emailInput}
                            label="Email ID"
                            onChange={handleEmailChange}
                            placeholder="eg. jon.don@gmail.com"
                            required
                            type="email"
                        />
                        <br />
                    </FormControl>
                    <Button variant="contained" style={styles.addButton} onClick={userAdded}>ADD</Button>
                </CardContent>
                <EmpList setLocalUserData={setLocalUserData} users={users} />
            </Card>
        </React.Fragment>
    ) : (
        <>
            <Card style={styles.card}>
                <CardContent>
                    <Button variant="contained" style={styles.addButton} onClick={openForm}>ADD</Button>
                </CardContent>
            </Card>
        </>
    )
}

export default EmpForm;
