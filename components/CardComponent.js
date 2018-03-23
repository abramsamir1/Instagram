import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
  } from 'native-base';

class CardComponent extends Component {

  render() {
    const images = {
      "1": require('../assets/1.jpeg'),
      "2": require('../assets/2.jpeg'),
      "3": require('../assets/3.jpeg'),
      "4": require('../assets/4.jpeg')
    }
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source ={require('../assets/pp.jpeg')}/>
            <Body>
              <Text>Abram Samir </Text>
              <Text note>march 13,2018 </Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
        <Image source={images[this.props.imageSource]}
        style={{ height: 200, width: null, flex: 1 }}
        />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon
              name="ios-heart-outline"
              style={{ color: 'black' }}
              />
            </Button>

            <Button transparent>
              <Icon
              name="ios-chatbubbles-outline"
              style={{ color: 'black' }}
              />
            </Button>

            <Button transparent>
              <Icon
              name="ios-send-outline"
              style={{ color: 'black' }}
              />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ height: 20 }}>
          <Text>{this.props.likes} likes</Text>
        </CardItem>

        <CardItem>
        <Body>
        <Text>
        <Text style={{ fontWeight: '900' }} >Abram Samir </Text>
        This is the description of the image,
         This is the description of the image,This is the description of the image. </Text>
        </Body>
        </CardItem>

      </Card>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { CardComponent };
