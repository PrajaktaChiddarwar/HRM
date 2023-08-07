import * as Yup from 'yup';

export const validate = Yup.object({
    fname : Yup.string().min(2).max(25).required("Please Enter Your Firstname"),
    lname : Yup.string().min(2).max(25).required("Please Enter Your Lastname"),
    email:Yup.string().email().required("Enter Your Email"),
    c_email:Yup.string().email().required("Confirm Your Email").oneOf([Yup.ref("email"),null],
    "Email Must Match"),
    password:Yup.string()
    .matches(
      /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"<>,.?/~`])[0-9A-Za-z!@#$%^&*()_\-+={}[\]|\\:;"<>,.?/~`]{6,}$/,
      'Password must contain at least 1 digit, 1 uppercase letter, and 1 special character'
    )
    .min(6, 'Password must be at least 6 characters long')
    .required('Please Enter your Password'),

     c_pass: Yup.string()
     .matches(
       /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*()_\-+={}[\]|\\:;"<>,.?/~`])[0-9A-Za-z!@#$%^&*()_\-+={}[\]|\\:;"<>,.?/~`]{6,}$/,
       'Password must contain at least 1 digit, 1 uppercase letter, and 1 special character'
     )
     .min(6, 'Password must be at least 6 characters long')
     .required('Please Enter your Password').oneOf([Yup.ref('password'),null] 
   ,'Passwords Do Not Match!')
})