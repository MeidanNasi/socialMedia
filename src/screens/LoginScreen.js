import React from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import store from '../store/';
import { Provider } from 'react-redux';
import LogInSignUp from '../containers/LogInSignUp';


const LoginScreen = ({ navigation })=>{
return (

    <Provider store = {store}>

            <View style={styles.container}>



                <LogInSignUp title="Log In"/>

                <Spacer>

                <TouchableOpacity 
                    style={{paddingLeft: 30}} 
                    onPress={ ()=> navigation.navigate('Signup')}>
                    <Text h5 style={{color:'red'}}> Don't have an account? click here to sign up! </Text>
                </TouchableOpacity>

                </Spacer>


            </View>

    </Provider>
    );

}

LoginScreen.navigationOptions = ()=>{
    return {
        header: null
    }
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        marginBottom: 100,
        justifyContent: 'center'
    },
    background:{
        flex:1
    }

});
export default LoginScreen;