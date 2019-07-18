import React from 'react';
import { Formik } from 'formik';
import { Button, Form, Grid, } from 'semantic-ui-react'
import Header from './Header'
import * as Yup from "yup";



const FormUser = () => {

    return (

        <Formik 
        
            initialValues = {{
                name: "",
                email: "",
                password: "",
                tos: false
            }}
            onSubmit={(values) => {
                console.log(values)
            }}

            validationSchema={UserSignUpSchema}
        
            render = {({ values, handleSubmit, handleChange, errors, touched, ...props }) => (
                <Grid>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>

                        <Form onSubmit={handleSubmit}>
                            <Form.Input   
                                label='Name'
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && errors.name}
                            />

                             <Form.Input   
                                label='Email'
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && errors.email}
                            />


                            <Form.Input
                                label='Password'   
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                                error={touched.password && errors.password}
                            />


                            <Form.Field 
                                type="checkbox"
                                control="input"
                                name="tos"
                                label="Terms and Conditions"
                                value={values.tos}
                                onChange={handleChange}
                                required
                            />

                            
                            <Button type='submit'>Submit</Button>
                        </Form>

                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid>
            )}        
        
        />
    )
}

const UserSignUpSchema = Yup.object().shape({

    name: Yup.string()
        .min(3, 'Not Long Enough')
        .max(15, 'Slow Down Partner')
        .required('You must participate if you want the goods'),
    email: Yup.string()
        .email("Can't find that type of Email!")
        .required('You must participate if you want the goods'),
    password: Yup.string()
        .min(3, 'Not Long Enough')
        .max(15, 'Slow Down Partner')
        .required('You must participate if you want the goods'),
    tos: Yup.boolean()
        .oneOf([true], 'Please Check Before Submit')
})

// const FormUser = () => {
//     return (
//         <Form>

//             <Field type="text" name="name" placeholder="Name" />
//             <Field type="email" name="email" placeholder="Email" />
//             <Field type="password" name="password" placeholder="Password" />
//             <Field type="checkbox" name="tos" label="Terms of Service" />
//             <button>Submit!</button>

//         </Form>
//     );
// };

// const FormikFormUser = withFormik({

//     mapPropsToValues: () => {
//         return {
//             name: "",
//             email: "",
//             password: "",
//             tos: false
//         }
//     },

//     handleSubmit: (values) => {
//         console.log(values)
//     }

// })(FormUser)

// export default FormikFormUser;    

export default FormUser;    