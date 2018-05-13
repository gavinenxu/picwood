import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class RegisterForm extends Component {
    render() {
        const { onChangeUsername, onChangePassword, onRegister } = this.props;
        return (
            <div className='signup-form'>
                    <style>{`
                        body > div,
                        body > div > div,
                        body > div > div > div.signup-form {
                            height: 100%;
                        }
                    `}</style>
                    <Grid
                        textAlign='center'
                        style={{ height: '100%' }}
                        verticalAlign='middle'
                    >
                        <Grid.Column style={{ maxWidth: 450 }}>
                            <Header as='h2' color='teal' textAlign='center'>
                                <Image src='/logo.jpg' />
                                {' '}Sign up a new account
                            </Header>
                            <Form size='large' onSubmit={ onRegister }>
                                <Segment stacked>
                                    <Form.Input
                                        fluid
                                        icon="user"
                                        iconPosition="left"
                                        placeholder='E-mail address'
                                        type='email'
                                        onChange={onChangeUsername}
                                    />
                                    <Form.Input
                                        fluid
                                        icon="lock"
                                        iconPosition="left"
                                        placeholder='Password'
                                        type='password'
                                        onChange={onChangePassword}
                                    />
                                    <Button
                                        color='teal'
                                        fluid
                                        size='large'
                                        type='submit'
                                    >
                                        Sign Up
                                    </Button>
                                </Segment>
                            </Form>
                            <Message>
                                By signing up, you agree to our Terms & Privacy Policy.
                            </Message>
                        </Grid.Column>
                    </Grid>
                </div>
        )
    }
}

export default RegisterForm;