import React, {useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import store from '../store/';
import { Provider } from 'react-redux';
import LogInSignUp from '../containers/LogInSignUp';
import { Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink';


const LoginScreen = ( { navigation } )=>{

    const {state, login} = useContext(AuthContext);

return (

    <Provider store = {store}>
            <View style={styles.container}>
                <LogInSignUp title="Log In" func={login}/>
                {state.errorMassage ? <Text style={styles.errorMassage}>{state.errorMassage}</Text>: null}
                <Spacer>
                <NavLink text={"Don't have an account? click here to sign up" } routeName={'Signup'}/>
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
        paddingTop: 100,
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
export default LoginScreen;