import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { signInWithGoogle, auth } from '../../firebase/firebase.util';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
        } catch (error) {
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="mt-5">
                <h4>I already have an account</h4>
                <p>Sign in with email and password</p>
                <form onSubmit={this.handleSubmit} className="" noValidate autoComplete="off">
                    <div>
                        <TextField
                            style={{ width: '50ch' }}
                            value={this.state.email}
                            name="email"
                            label="Email"
                            onChange={this.handleChange}
                            helperText="Incorrect entry."
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div>
                        <TextField
                            name="password"
                            style={{ width: '50ch', outlineColor: '#CE7AE0' }}
                            value={this.state.password}
                            onChange={this.handleChange}
                            label="Password"
                            helperText="Incorrect entry."
                            variant="outlined"
                            size="small"
                        />
                    </div>
                    <div className="mt-4 text-center">
                        <Button variant="contained" style={{ backgroundColor: '#CF7ADF' }} className="text-white" type="submit">Sign In</Button>
                        <Button variant="contained" style={{ backgroundColor: '#F16FAC' }} className="ml-4 text-white" type="button" onClick={signInWithGoogle}>Sign In with Google</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;