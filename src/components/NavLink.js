import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacer from './Spacer';
import { withNavigation} from 'react-navigation';

const NavLink = ({ navigation, text, routeName })=>{

    return(

        <TouchableOpacity 
        style={{paddingLeft: 30}} 
        onPress={ ()=> navigation.navigate(routeName)}>
        <Text h5 style={{color:'blue'}}>
            {text}
        </Text>
        </TouchableOpacity>

    );

};

const styles = StyleSheet.create({});
export default withNavigation(NavLink);