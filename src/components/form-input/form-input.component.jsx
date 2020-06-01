import React from 'react';
import TextField from '@material-ui/core/TextField';

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div>
        <TextField
            style={{ width: '35ch' }}
            value={this.state.email}
            id="mui-theme-provider-outlined-input"
            label="Email"
            onChange={handleChange}
            {...otherProps}
            helperText="Incorrect entry."
            variant="outlined"
            size="small"
        />
    </div>
)

export default FormInput;