import React from 'react'
import { Button, TextField, Tooltip } from '@material-ui/core'

export const Form = ({ values: { name, email, password, confirmPassword }, errors, touched, handleSubmit, handleChange, isValid, setFieldTouched }) => {

    const onChange = (name, e) => {
        e.persist()
        handleChange(e)
        setFieldTouched(name, true, false)

        
    }

    return (
        <form onSubmit={(e) => { alert('Submitted') }}>
            <TextField
                id="name"
                name="name"
                label="Nome"
                onChange={onChange.bind(null, 'name')}
                fullWidth
                error={touched.name && errors.name }
                helperText={touched.name ? errors.name : ''}
            />
            <TextField
                id="email"
                name="email"
                label="Email"
                onChange={onChange.bind(null, 'email')}
                error={touched.email && errors.email }
                helperText={touched.email ? errors.email : ''}
                fullWidth
            />
            <TextField id="password"
                name="password" label="Password"
                onChange={onChange.bind(null, 'password')}
                error={touched.password && errors.password }
                helperText={touched.password ? errors.password : ''}
                fullWidth
            />
            <TextField
                id="confirmPassword"
                name="confirmPassword"
                label="ConfirmPassword"
                onChange={onChange.bind(null, 'confirmPassword')}
                error={touched.confirmPassword && errors.confirmPassword }
                helperText={touched.confirmPassword ? errors.confirmPassword : ''}
                fullWidth
            />
             
                <Button
                    type="submit"
                    onSubmit={(e) => { e.preventDefault() }}
                    variant="outlined"
                    color="primary"
                    disabled={!isValid}
                >
                    Submit
                </Button> 
                
        </form>
    )
}