import * as Yup from 'yup'

export const userFormValidationSchema = Yup.object({
    name: Yup.string('Enter a name')
        .required('Name field is required'),
    email: Yup.string('Entrer a email').email('This is not a valid email')
        .required('Email field is required'),
    password: Yup.string('Enter a password')
        .min(8, 'Password must contain at least 8 chars'),
    confirmPassword: Yup.string('Confirm your password')
        .required('Password confirmation is required')
        .oneOf([Yup.ref('password')], 'Passwords does not match')
})

