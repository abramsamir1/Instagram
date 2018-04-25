import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Icon, Container, Content, Header, Left, Body, Right, Button } from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import { CardComponent } from '../components/CardComponent';

var images = [
  require('../assets/person4.jpg'),
  require('../assets/person1.jpg'),
  require('../assets/person2.jpg'),
  require('../assets/person3.jpg'),
  require('../assets/person4.jpg'),
  require('../assets/person2.jpg'),
  require('../assets/person1.jpg'),
  require('../assets/person4.jpg'),
  require('../assets/person3.jpg')
];

var{width,height} = Dimensions.get('window');

export default class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  }

  constructor(props) {
    super(props);
    this.state = {
        activeIndex: 0
    };
  }

  segmentClicked = (index) => {
    this.setState({
      activeIndex: index
    });
  }

  renderSectionOne = () =>{
    return images.map((image, index) => {
      return (
        <View key={index} style={[{ width:(width)/3 }, { height:(width)/3 }, { marginBottom: 2 },
          index % 3 !== 0 ? { paddingLeft: 2 } : { paddingLeft: 0 }
        ]}>
            <Image style={{flex: 1, width:null, height:null }}
                source={image}
            />
        </View>
      )
    })
}


  renderSection = () => {
    if(this.state.activeIndex == 0) {
      return(
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderSectionOne()}
        </View>
      )
    }
    else if(this.state.activeIndex == 1) {
      return (
          <View>
            <CardComponent imageSource="1" likes="50" />
            <CardComponent imageSource="2" likes="85" />
            <CardComponent imageSource="3" likes="120" />
          </View>
      )
    }
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

  <View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#eae5e5' }}>
      <Button
      transparent
      onPress={() => this.segmentClicked(0)}
      active={this.state.activeIndex == 0}
      >
        <Icon name="ios-apps-outline"
          style={[this.state.activeIndex == 0 ? {} : { color: 'gray' }]}
        />
      </Button>

      <Button
      transparent
      onPress={() => this.segmentClicked(1)}
      active={this.state.activeIndex == 1}
      >
        <Icon name="ios-list-outline"
          style={[this.state.activeIndex == 1 ? {} : { color: 'gray' }]}
          />
      </Button>

      <Button
      transparent
      onPress={() => this.segmentClicked(2)}
      active={this.state.activeIndex == 2}
      >
        <Icon name="ios-people-outline"
          style={[this.state.activeIndex == 2 ? {} : { color: 'gray' }]}
        />
      </Button>

      <Button
      transparent
      onPress={() => this.segmentClicked(3)}
      active={this.state.activeIndex == 3}
      >
        <Icon name="ios-bookmark-outline"
          style={[this.state.activeIndex == 3 ? {} : { color: 'gray' }]}
        />
      </Button>


    </View>
    {this.renderSection()}
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
