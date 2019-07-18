import React from 'react';
import { Formik } from 'formik';
import { Button, Form, Grid, Icon, Header, Message, } from 'semantic-ui-react'
import * as Yup from "yup";
import axios from 'axios'


const FormUser = () => {

    return (

        <Formik 
        
            initialValues = {{
                name: "",
                email: "",
                password: "",
                tos: false
            }}
            onSubmit={(values, actions) => {
                actions.resetForm()
                const url = "https://reqres.in/api/users";

                actions.setSubmitting(true)

                axios.post(url, values)
                    .then(res => {
                        console.log(res.data)

                        window.alert(
                            `Thanks for Submitting Your Form \n 
                            Name: ${res.data.name.toUpperCase()} \n 
                            Email: ${res.data.email.toUpperCase()} \n 
                            Password: ${res.data.password.toUpperCase()}
                            
                            Have A Wonderful Day!` 
                          )

                        actions.setSubmitting(false)
                    })
                    .catch(err => console.log(err.response))
            }}

            validationSchema={UserSignUpSchema}
        
            render = {({ values, handleSubmit, handleChange, errors, touched, isSubmitting, ...props }) => (
                <Grid style={{ height: '100vh' }} verticalAlign='middle' textAlign='center'>
                    
                    <Grid.Column width={4}>

                        <Header as='h1' color='yellow' textAlign='center'>
                            <Icon name='user secret' color='blue' /> User Onboarding
                        </Header>
                        <Form onSubmit={handleSubmit} size='large'>
                            <Form.Input   
                                type="text"
                                name="name"
                                placeholder="Name"
                                icon='user circle' 
                                iconPosition='left'
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && errors.name}
                            />

                             <Form.Input   
                                type="text"
                                name="email"
                                placeholder="Email"
                                icon='mail' 
                                iconPosition='left'
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && errors.email}
                            />

                            <Form.Input
                                type="password"
                                name="password"
                                placeholder="Password"
                                icon='lock' 
                                iconPosition='left'
                                value={values.password}
                                onChange={handleChange}
                                error={touched.password && errors.password}
                            />

                            <Header sub color='red'> {touched.tos && errors.tos} </Header>

                            <Form.Field 
                                type="checkbox"
                                control="input"
                                name="tos"
                                label="Terms and Conditions"
                                checked={values.tos}
                                onChange={handleChange}
                            />

                            <Button 
                                positive 
                                animated
                                type='submit' 
                                fluid
                                loading={isSubmitting}
                            >
                                <Button.Content visible>Submit</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>                                
                            </Button>

                        </Form>

                        <Message floating>
                        <Icon name='help' />
                            Already signed up?&nbsp;<a href='#'>Login here</a>&nbsp;instead.
                        </Message>

                    </Grid.Column>
                </Grid>
            )}        
        
        />
    )
}

const UserSignUpSchema = Yup.object().shape({

    name: Yup.string()
        .min(3, 'Not Long Enough - Ya')
        .max(15, 'Slow Down Partner')
        .required('You must participate if you want the goods'),
    email: Yup.string()
        .email("Can't find that type of Email!")
        .notOneOf(['waffle@syrup.com'], "That email is already taken.")
        .required('You must participate if you want the goods'),
    password: Yup.string()
        .min(3, 'Not Long Enough')
        .max(15, 'Slow Down Partner')
        .required('You must participate if you want the goods'),
    tos: Yup.boolean()
        .oneOf([true], 'Please Check Before Submit')
})

export default FormUser;    