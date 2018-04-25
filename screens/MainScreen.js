import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation';
import { Icon } from 'native-base';
import ProfileTab from '../AppTabNavigator/ProfileTab';
import HomeTab from '../AppTabNavigator/HomeTab';
import SearchTab from '../AppTabNavigator/SearchTab';
import AddMediaTab from '../AppTabNavigator/AddMediaTab';
import LikesTab from '../AppTabNavigator/LikesTab';




 class MainScreen extends React.Component {
   static navigationOptions = {
     header: null
   }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <AppTabNavigator />
      </View>
    );
  }
}

const AppTabNavigator = TabNavigator({

  HomeTab: { screen: HomeTab },
  SearchTab: { screen: SearchTab },
  AddMediaTab: { screen: AddMediaTab },
  LikesTab: { screen: LikesTab },
  ProfileTab: { screen: ProfileTab }


}, {
      tabBarComponent: TabBarBottom,
      tabBarPosition: 'bottom',
      animationEnabled: true,
      swipeEnabled: true,
      tabBarOptions: {
        style:{
          ...Platform.select({
            android: {
              backgroundColor: 'white'
            }
          })
        },
        activeTintColor:'#000',
        inactiveTintColor:'#d1cece',
        showLabel: false,
        showIcon: true
      }
  });


export default MainScreen;
