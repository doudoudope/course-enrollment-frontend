import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {TextField} from "@mui/material";
import {AuthService} from "../service/AuthService";
import cookie from "react-cookies";
import {TOKEN_COOKIE_NAME} from "../constant";

export default function LoginDialog(props) {
    let username;
    let password;
    const [error, setError] = React.useState("");

    const login = () =>{
        //login logic
        AuthService.getJWTToken(username,password)
            .then(response => {
                // successful
                const token = response.data.id_token;
                cookie.save(TOKEN_COOKIE_NAME, token);
                window.location.reload();//refresh whole page to active JWT token
            })
            .catch(error => {
                // error logic
                console.error(error);
                setError(String(error));
            });
    }

    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Please enter Username & Password"}
                </DialogTitle>
                <DialogContent>
                    <TextField id="standard-basic" label="Username" variant="standard" fullWidth autoFocus onChange={(event => username = event.target.value)}/>
                    <TextField id="standard-basic" label="Password" variant="standard" fullWidth type={"password"} onChange={(event => password = event.target.value)}/>
                    <DialogContentText id="alert-dialog-description" style={{"color": "red"}}>
                        {error}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose}>Cancel</Button>
                    <Button onClick={login}>Login</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
