import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createAppContainer,
  createSwitchNavigator
} from 'react-navigation';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import AddPostScreen from './src/screens/AddPostScreen';
import FollowScreen from './src/screens/FollowScreen';
import DashBoardScreen from './src/screens/DashBoardScreen';
import LandingScreen from './src/screens/LandingScreen';
import { Provider as AuthProvider } from './src/context/AuthContext';
 
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Landing: LandingScreen,
    Signup: SignupScreen,
    Login: LoginScreen
  }),
  mainFlow: createBottomTabNavigator({
    AddPost: AddPostScreen,
    Following: FollowScreen,
    DashBoard: DashBoardScreen
  })
});


const App = createAppContainer(switchNavigator); // With the provider I rapped all the switch navigator which controlls over all app's navigators screens
export default ()=>{
  return (
    <AuthProvider>
      <App/>
    </AuthProvider>
  );
};

