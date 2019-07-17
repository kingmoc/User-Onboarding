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
        
            render = {({ values, handleSubmit, handleChange, ...props }) => (
                <Grid>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>

                        <Form onSubmit={handleSubmit}>
                            <Form.Input   
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={values.name}
                                onChange={handleChange}
                            />

                             <Form.Input   
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={values.email}
                                onChange={handleChange}
                            />

                            <Form.Input   
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={values.password}
                                onChange={handleChange}
                            />
                            <Form.Checkbox label='I agree to the Terms and Conditions' />
                            <Button type='submit'>Submit</Button>
                        </Form>

                    </Grid.Column>
                    <Grid.Column width={4}></Grid.Column>
                </Grid>
            )}        
        
        />
    )
}

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