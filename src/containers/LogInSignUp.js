import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';
import { useContext } from 'react';
import { Context as AuthContext} from '../context/AuthContext';
import { signup, login, logout } from '../context/AuthContext';

class LogInSignUp extends Component {
    
    state = {
        email:'',
        password:''
    }

    render() {

        const email = this.state.email;
        const password = this.state.password;

        return(
            <View>

                <Input
                    label="Email" 
                    onChangeText={ (email)=>this.setState({email})}
                    value={this.state.email}    
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <Spacer/>

                <Input 
                  label="Password" 
                  onChangeText={ (password)=>this.setState({password})}
                  value={this.state.password}
                  autoCapitalize="none"
                  autoCorrect={false}  
                  secureTextEntry  
                />

                <Spacer>

                <Button 
                    title= { this.props.title } 
                    onPress={ ()=>{ this.props.func( { email, password } ) } }
                />
                </Spacer>

                {/* just a checking  */}

                    <Text>{email}</Text>
                    <Text>{password}</Text>

            </View>

        )
    }
}
export default LogInSignUp;