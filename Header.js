import React, { Component } from 'react';
import { Header, Left, Body, Right, Button, Icon, Title  } from 'native-base';

class HeaderC extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        );
    }
}

export default HeaderC;

