import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            console.error(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="mt-5">
                <h4>I do not have an account</h4>
                <p>Sign up with email and password</p>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <div>
                        <TextField
                            type='text'
                            name='displayName'
                            style={{ width: '50ch' }}
                            value={displayName}
                            label="Display Name"
                            onChange={this.handleChange}
                            // helperText="Incorrect entry."
                            variant="outlined"
                            size="small"
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <TextField
                            type='email'
                            name='email'
                            style={{ width: '50ch', outlineColor: '#CE7AE0' }}
                            value={email}
                            onChange={this.handleChange}
                            label="Email"
                            // helperText="Incorrect entry."
                            variant="outlined"
                            size="small"
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <TextField
                            type='text'
                            name='password'
                            style={{ width: '50ch', outlineColor: '#CE7AE0' }}
                            value={password}
                            onChange={this.handleChange}
                            label="Password"
                            // helperText="Incorrect entry."
                            variant="outlined"
                            size="small"
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <TextField
                            type='text'
                            name='confirmPassword'
                            style={{ width: '50ch', outlineColor: '#CE7AE0' }}
                            value={confirmPassword}
                            onChange={this.handleChange}
                            label="Confirm Password"
                            // helperText="Incorrect entry."
                            variant="outlined"
                            size="small"
                            required
                        />
                    </div>
                    <div className="mt-4 text-left">
                        <Button variant="contained" style={{ backgroundColor: '#CF7ADF', width: '55ch' }} className="text-white" type="submit">Sign Up</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;