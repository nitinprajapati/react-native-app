import React, { Component } from 'react';
import { Container, Content, Button, Item, Input, View, Label, Text } from 'native-base';
//import GoogleLogin from './googleSignIn';

export default class LoginForm extends Component {
  render() {
    return (
        <Container>
            <Content>
                <Item floatingLabel last>
                    <Label>Username</Label>
                    <Input style={styles.border}/>
                </Item>

                <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input  style={styles.border} />
                </Item>
                <Button rounded>
                    <Text>Sign In</Text>
                </Button>

                <View
                    style={{
                        borderBottomColor: '#ccc',
                        borderBottomWidth: 1,
                    }}
                />

                

            </Content>
        </Container>
    );
  }
}

const styles= () => {
    input: {
        border : '1px solid #ccc';
    }
}