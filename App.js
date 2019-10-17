import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddPostScreen from './src/screens/AddPostScreen';
import FollowScreen from './src/screens/FollowScreen';
import DashBoardScreen from './src/screens/DashBoardScreen';
import LandingScreen from './src/screens/LandingScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { setNavigator } from './src/navigationRef';
import AccountScreen from './src/screens/AccoutScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

 


const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Landing: LandingScreen,
    Signup: SignupScreen,
    Login: LoginScreen
  }),
  mainFlow: createBottomTabNavigator({

    AddPost:{
      screen: AddPostScreen,
      navigationOptions: () => ({
        tabBarLabel:'ADD AN IMAGE',
        tabBarIcon: () => (
            <Icon
                name='plus-circle'
                color='black'
                size={24}
            />
        )
      })
    },

    Following:{
      screen: FollowScreen,
      navigationOptions: () => ({
        tabBarLabel:'FOLLOW',
        tabBarIcon: () => (
            <Icon
                name='users'
                color='black'
                size={24}
            />
        )
      }),
    },
    
    DashBoard: {
      screen: DashBoardScreen,
      navigationOptions: () => ({
        tabBarLabel:'DASHBOARD',
        tabBarIcon: () => (
            <Icon
                name='dashboard'
                color='black'
                size={24}
            />
        )
      }),
    },
    Account:{
      screen: AccountScreen,
      navigationOptions: () => ({
        tabBarLabel:'ACCOUNT',
        tabBarIcon: () => (
            <Icon
                name='angellist'
                color='black'
                size={24}
            />
        )
      }),
    },
  })
});


const App = createAppContainer(switchNavigator); // With the provider I rapped all the switch navigator which controlls over all app's navigators screens
export default ()=>{
  return (
    <AuthProvider>
      <App ref={(navigator)=>{ setNavigator(navigator) }} />
    </AuthProvider>
  );
};

