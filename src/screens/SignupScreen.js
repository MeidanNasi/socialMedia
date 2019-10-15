import React, {useContext} from 'react';
import { View, StyleSheet, TouchableOpacity} from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import store from '../store/';
import { Provider } from 'react-redux';
import LogInSignUp from '../containers/LogInSignUp';
import { Context as AuthContext} from '../context/AuthContext';


const SignupScreen = ( {navigation} )=>{

    const {state, signup} = useContext(AuthContext);

return (
    <Provider store = {store}>

            <View style={styles.container}>

                <LogInSignUp title="Sign Up" func={signup} />

                {state.errorMassage ? <Text style={styles.errorMassage}>{state.errorMassage}</Text>: null}

                <Spacer>

                <TouchableOpacity 
                    style={{paddingLeft: 30}} 
                    onPress={ ()=> navigation.navigate('Login')}>
                    <Text h5 style={{color:'red'}}> Already have an account? click here to log in! </Text>
                </TouchableOpacity>

                </Spacer>
                
            </View>
    </Provider>
    );

}

SignupScreen.navigationOptions = ()=>{
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
    },
    errorMassage:{
       fontSize: 16,
       color: 'red', 
       paddingLeft: 40
    }

});
export default SignupScreen;