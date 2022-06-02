import { Box, TextField } from '@material-ui/core';
import * as React from 'react';

export default function ValidationTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-error"
                    label="Error"
                    defaultValue="Hello World"
                />
                <TextField
                    id="outlined-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                />
            </div>
            <div>
                <TextField
                    id="filled-error"
                    label="Error"
                    defaultValue="Hello World"
                    variant="filled"
                />
                <TextField
                    id="filled-error-helper-text"
                    label="Error"
                    defaultValue="Hello World"
                    helperText="Incorrect entry."
                    variant="filled"
                />
            </div>
        </Box>
    );
}
