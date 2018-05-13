import React, {Component} from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'

class LoginForm extends Component {
    render() {
        const { onChangeUsername, onChangePassword, onLogin } = this.props;

        return (
            <div className='login-form'>
                    <style>{`
                        body > div,
                        body > div > div,
                        body > div > div > div.login-form {
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
                                {' '}Log-in to your account
                            </Header>
                            <Form size='large' onSubmit={ onLogin }>
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
                                        Login
                                    </Button>
                                </Segment>
                            </Form>
                            <Message>
                                New to us? <a href='/signup'>Sign Up</a>
                            </Message>
                        </Grid.Column>
                    </Grid>
                </div>
        )
    }
}

export default LoginForm;