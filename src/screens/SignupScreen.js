import React, {useContext} from 'react';
import { View, StyleSheet} from 'react-native';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
import store from '../store/';
import { Provider } from 'react-redux';
import LogInSignUp from '../containers/LogInSignUp';
import { Context as AuthContext} from '../context/AuthContext';
import NavLink from '../components/NavLink';
import { NavigationEvents } from 'react-navigation';


const SignupScreen = ( {navigation} )=>{

    const {state, signup, clearErrorMessage } = useContext(AuthContext);

return (
    <Provider store = {store}>
            <View style={styles.container}>
                <NavigationEvents onWillBlur={clearErrorMessage} />
                <LogInSignUp title="Sign Up" func={signup} />
                {state.errorMassage ? <Text style={styles.errorMassage}>{state.errorMassage}</Text>: null}
                <Spacer>
                <NavLink text={"Already have an account? click here to log in" } routeName={'Login'}/>
                </Spacer> 
                {console.log(state)}
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
        paddingTop: 100
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