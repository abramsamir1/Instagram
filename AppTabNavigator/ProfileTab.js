import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  }
  render() {
    return (
      <Container style={{ flex:1, backgroundColor: 'white' }}>
      <Header style={{ backgroundColor: 'white' }}>

      <Left><Icon name="md-person-add" style={{ paddingLeft: 10 }}></Icon></Left>

      <Body style={{ alignItems: 'center' }}>
      <Text style={{ paddingLeft: 50 }}>Abram Samir</Text>
      </Body>

      <Right><EntypoIcon name="back-in-time" style={{ paddingRight: 10,
        fontSize: 32 }}></EntypoIcon></Right>
  </Header>

    <Content>
    <View style={{padding: 10 }}>
    <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1, alignItems:'center' }}>
            <Image source={require('../assets/pp.jpeg')}
            style={{ width: 75, height: 75, borderRadius: 37.5 }}
            />
            </View>

      <View style={{ flex:3 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <View style={{alignItems:'center'}}>
              <Text>201</Text>
              <Text style={{fontSize:10, color:'grey'}}>posts</Text>
            </View>

            <View style={{alignItems:'center'}}>
              <Text>360</Text>
              <Text style={{fontSize:10, color:'grey'}}>followers</Text>
            </View>


            <View style={{alignItems:'center'}}>
              <Text>285</Text>
              <Text style={{fontSize:10, color:'grey'}}>following</Text>
            </View>
        </View>

        <View style={{flexDirection:'row', paddingTop: 10}}>
        <Button bordered dark
        style={{ flex: 3, marginLeft: 10,justifyContent:'center',height:30}}>
        <Text>Edit Profile</Text>
        </Button>
        <Button boardered dark style={{ flex: 1,height:30,
           marginRight: 10, marginLeft:5,justifyContent: 'center'}}>
        <Icon name="settings"/>
        </Button>
        </View>
      </View>
    </View>

    <View style={{paddingVertical: 10, paddingHorizontal: 10}}>
    <Text style={{ fontWeight: 'bold'}}>Abram Samir</Text>
    <Text>React Native developer</Text>
    </View>


        </View>
        </Content>
        </Container>
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
