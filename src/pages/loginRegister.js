import React from 'react'
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'



class LoginRegisterPage extends React.Component {
  state = {
    input: {}
  }

  fields = [{
    name: 'email',
    icon: 'user',
    iconPosition: 'left',
    placeholder: 'E-mail address',
  },
  {
    name: 'password',
    icon: 'lock',
    iconPosition: 'left',
    placeholder: 'Password',
    type: 'password'
  }]

  _onFieldChange = (e, data) => {
    const { input } = this.state
    const newInput = { ...input }
    newInput[data.name] = data.value
    this.setState({ input: newInput })
  }

  render() {
    const { input } = this.state
    return (
      <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' color='teal' textAlign='center'>
            Log-in to your account
          </Header>
          <Form size='large'>
            <Segment stacked>
              {this.fields.map((field) => (
                <Form.Input fluid {...field} value={input[field.name]} onChange={this._onFieldChange} />
              ))}
              <Button color='teal' fluid size='large'>
                Login
              </Button>
            </Segment>
          </Form>
          <Message>
            New to us?
            <a href='#'>Sign Up</a>
          </Message>
        </Grid.Column>
      </Grid>
    )
  }
}


export default LoginRegisterPage