import React from 'react'
import {Formik} from 'formik'
import {withStyles} from '@material-ui/core/styles'
import {Paper} from '@material-ui/core/'
import {Form} from './form'
import { userFormValidationSchema } from './schema'

const styles = theme => ({
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
          .spacing.unit * 5}px`
    },
    container: {
        maxWidth: "200px"
    }
})

function InputForm(props) {
    const classes = props
    const values = {name: '', email: '', confirmPassword: '', password: ''}

    return (<>
            <div className={classes}>
                <Paper elevation={1}>
                    <h3>FORMIK USER</h3>
                    <Formik 
                        render={ props => <Form {...props} />}
                        initialValues={values}
                        validationSchema={userFormValidationSchema}
                    />
                </Paper>
            </div>
        </>)
}

export default withStyles(styles)(InputForm)





