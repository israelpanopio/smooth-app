import React from 'react'
import { FormLabel, Container, FormWrap, Icon, FormContent, Form, FormH1, FormInput, FormButton, Text } from './SigninElements'

const Signin = () => {
    return (
        <>
          <Container>
              <FormWrap>
                  <Icon to="/">Modern Marino</Icon>
                  <FormContent>
                      <Form action="#">
                          <FormH1>Sign in to your account</FormH1>
                          <FormLabel htmlFor='for'>Email</FormLabel>
                          <FormInput type='email' reuired />
                          <FormLabel htmlFor='for'>Password</FormLabel>
                          <FormInput type='password' required />
                          <FormButton type='submit'>Continue</FormButton>
                          <Text>Forgot Password</Text>
                      </Form>
                  </FormContent>
              </FormWrap>
          </Container>  
        </>
    )
}

export default Signin;
